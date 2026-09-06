import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Video, 
  Square, 
  Circle, 
  Download,
  Copy,
  CheckCircle2,
  Users,
  ArrowLeft,
  Loader2,
  Radio,
  Mic,
  RefreshCw,
  Film,
  Sparkles
} from "lucide-react";
import { getAllVideosApi, sendChunksToBackend, sendFinalCallToEndOfRecordingApi } from "../api/api";

export default function NSender() {
  const [socket, setSocket] = useState<WebSocket>();
  const [, setRoomId] = useState<string | null>(null);
  const [, setStream] = useState<MediaStream | any>();
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>("");
  const [loaderStopRecording, setLoaderStopRecording] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState("Connecting to studio network...");
  const [copiedCode, setCopiedCode] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);

  const [allVideoUrls, setAllVideoUrls] = useState<any[]>([]);
  const [isMerged, setIsMerged] = useState<boolean>(false);
  const [isRefreshingTakes, setIsRefreshingTakes] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const [disableCallButton, setDisableCallButton] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const roomName = location?.state?.sessionCode;
  const sessionId = location?.state?.sessionid;

  useEffect(() => {
    if (!roomName || !sessionId) {
      navigate('/dashboard');
      return;
    }
    
    setRoomId(roomName);
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      if (roomName) {
        ws.send(JSON.stringify({ type: "sender", roomId: roomName }));
        setSocket(ws);
        setIsConnected(true);
        setConnectionStatus("Signal Connected");
      }
    };

    ws.onclose = () => {
      setIsConnected(false);
      setConnectionStatus("Disconnected");
    };

    ws.onerror = () => {
      setIsConnected(false);
      setConnectionStatus("Signal Error");
    };

    return () => {
      ws.close();
    };
  }, [roomName, sessionId, navigate]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatDuration = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const copySessionCode = async () => {
    if (!roomName) return;
    try {
      await navigator.clipboard.writeText(roomName);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (err) {
      console.error('Failed to copy session code:', err);
    }
  };

  const downloadVideo = (targetUrl?: string) => {
    const downloadUri = targetUrl || videoUrl;
    if (downloadUri) {
      const link = document.createElement('a');
      link.href = downloadUri;
      link.download = `riverside-take-${roomName}-${new Date().toISOString().split('T')[0]}.webm`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const getAllVideos = async () => {
    try {
      setIsRefreshingTakes(true);
      const response: any = await getAllVideosApi(sessionId);
      const data = response.data;
      const recordings = data.recordings || [];
      setAllVideoUrls(recordings);
    } catch (error) {
      console.error("Failed to fetch recordings:", error);
    } finally {
      setIsRefreshingTakes(false);
    }
  };

  useEffect(() => {
    if (isMerged === true) {
      getAllVideos();
    }
  }, [isMerged]);

  async function handleRtc() {
    if (!socket) return;
    setDisableCallButton(true);

    socket.onmessage = async (event: any) => {
      const msg = JSON.parse(event.data);

      if (msg.type === "receiver-remote-description") {
        pc?.setRemoteDescription(msg.sdp);
        socket.send(JSON.stringify({ hi: "hh" }));
      } else if (msg.type === "receiver-iceCandidate") {
        pc?.addIceCandidate(msg.candidate);
      }
    };

    const pc = new RTCPeerConnection();
    
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    setStream(stream);

    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      stream.getTracks().forEach(track => {
        pc.addTrack(track, stream);
      });
      videoRef.current.play();
    }
    
    if (localVideoRef.current) {
      localVideoRef.current.srcObject = stream;
      localVideoRef.current.play();
    }
    
    pc.onnegotiationneeded = async () => {
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      socket?.send(JSON.stringify({ type: "create-offer", sdp: offer }));
    };
    
    pc.onicecandidate = async (event) => {
      if (event.candidate) {
        socket?.send(JSON.stringify({ 
          type: "sender-iceCandidate", 
          candidate: event.candidate 
        }));
      }
    };

    const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
    setRecorder(mediaRecorder);

    let chunkIndex: number = 0;
    mediaRecorder.ondataavailable = async (e: any) => {
      if (e.data.size > 0) {
        const blob = e.data;
        await sendChunks(blob, chunkIndex);
        chunkIndex++;
      }
    };
    
    async function sendChunks(blob: Blob, chunkIndex: number) {
      const formData = new FormData();
      formData.append('chunk', blob);
      formData.append('chunkIndex', chunkIndex.toString());
      formData.append('sessionName', roomName);
      formData.append('sessionCode', sessionId);
      formData.append('userType', 'sender');

      try {
        await sendChunksToBackend(formData);
      } catch (err) {
        console.error("Error sending chunk:", err);
      }
    }

    mediaRecorder.onstop = () => {
      sendFinalCallToEndOfRecording();
    };

    async function sendFinalCallToEndOfRecording() {
      try {
        const response = await sendFinalCallToEndOfRecordingApi(roomName, 'sender', sessionId);
        const data = response.data;
        setVideoUrl(data.url);
        setLoaderStopRecording(false);
        setIsRecording(false);
        setIsMerged(true);
      } catch (err) {
        console.error("Error finalizing recording:", err);
        setLoaderStopRecording(false);
        setIsRecording(false);
      }
    }
  }

  const startRecording = () => {
    if (recorder) {
      socket?.send(JSON.stringify({ type: 'record-video', roomId: roomName }));
      recorder.start(3000);
      setIsRecording(true);
      setRecordingDuration(0);
    }
  };

  const stopRecording = () => {
    if (recorder) {
      recorder.stop();
      socket?.send(JSON.stringify({ type: "stop-recording", roomId: roomName }));
      setLoaderStopRecording(true);
      setIsRecording(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-slate-100 flex flex-col antialiased selection:bg-indigo-500/30 selection:text-white">
      {/* Dynamic Studio Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[700px] h-[500px] bg-indigo-600/[0.05] rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-cyan-600/[0.04] rounded-full blur-[150px]" />
      </div>

      {/* Top Studio Control Bar */}
      <header className="relative z-20 border-b border-white/[0.07] bg-[#0B0D13]/85 backdrop-blur-xl px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/[0.06] hover:border-white/15 bg-white/[0.02] hover:bg-white/[0.06] transition-all"
            title="Return to Studio Dashboard"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Dashboard</span>
          </button>

          <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

          {/* Session Pill */}
          <div className="flex items-center gap-2.5">
            <span className="text-[10px] font-bold tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full uppercase">
              Host Studio
            </span>
            <div className="flex items-center gap-2 bg-[#121620] border border-white/[0.08] px-3 py-1 rounded-lg">
              <span className="text-xs text-slate-400 hidden md:inline">Code:</span>
              <span className="font-mono text-xs font-bold text-slate-200 tracking-wider">
                {roomName || "NO-SESSION"}
              </span>
              <button
                onClick={copySessionCode}
                className="text-slate-400 hover:text-white transition-colors ml-1"
                title="Copy Session Code"
              >
                {copiedCode ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Status */}
        <div className="flex items-center gap-3">
          {isRecording && (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 animate-pulse">
              <Circle className="w-2.5 h-2.5 fill-rose-500 text-rose-500" />
              <span className="font-mono text-xs font-semibold tracking-wider">
                REC {formatDuration(recordingDuration)}
              </span>
            </div>
          )}

          <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${
            isConnected 
              ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400' 
              : 'bg-rose-500/10 border-rose-500/25 text-rose-400'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${
              isConnected ? 'bg-emerald-400 animate-ping' : 'bg-rose-400'
            }`} />
            <span>{connectionStatus}</span>
          </div>
        </div>
      </header>

      {/* Main Studio Viewport & Side Console */}
      <main className="relative z-10 flex-1 p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Cinema Video Viewport (Col 1 to 8) */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/90 border border-white/[0.08] shadow-2xl flex items-center justify-center group">
            
            {/* Main Stage Video Feed */}
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                disableCallButton ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            />

            {/* Standby State Display (Before Camera is initialized) */}
            {!disableCallButton && (
              <div className="flex flex-col items-center justify-center p-8 text-center space-y-5">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-indigo-500/30 flex items-center justify-center shadow-inner">
                    <Radio className="w-9 h-9 text-indigo-400 animate-pulse" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                </div>

                <div className="max-w-md space-y-2">
                  <h2 className="text-xl font-bold text-white tracking-tight">Studio Broadcast Ready</h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    High-definition isolated multi-track recording engine initialized. Click <span className="text-indigo-400 font-semibold">Start Studio Call</span> below to open camera & microphone pipelines.
                  </p>
                </div>

                <button
                  onClick={handleRtc}
                  className="px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/25 flex items-center gap-2 group-hover:scale-105"
                >
                  <Video className="w-4 h-4" />
                  <span>Start Studio Call</span>
                </button>
              </div>
            )}

            {/* In-Video Picture-in-Picture for Local Feed */}
            <div className={`absolute bottom-4 right-4 z-20 transition-all duration-300 ${
              disableCallButton ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}>
              <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-black/90 w-36 sm:w-48 aspect-video">
                <video
                  ref={localVideoRef}
                  muted
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1.5 left-2 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md text-[9px] font-mono font-semibold tracking-wider text-slate-300">
                  HOST CAM
                </div>
              </div>
            </div>

            {/* Recording Active HUD Badge */}
            {isRecording && (
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2.5 bg-black/70 backdrop-blur-md border border-rose-500/30 px-3.5 py-1.5 rounded-full">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                <span className="text-xs font-mono font-bold tracking-wider text-white">
                  LIVE REC {formatDuration(recordingDuration)}
                </span>
              </div>
            )}

            {/* Quality Specs Pill */}
            {disableCallButton && (
              <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[11px] font-mono text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>1080P PRO-RES CHUNKS</span>
              </div>
            )}
          </div>

          {/* Studio Control Dock */}
          <div className="bg-[#0F1218]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-4 shadow-xl flex flex-wrap items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-400 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                <Mic className="w-4 h-4 text-emerald-400" />
                <span>Lossless Audio</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-400 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                <Video className="w-4 h-4 text-emerald-400" />
                <span>Direct Feed</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex items-center gap-3">
              {!disableCallButton ? (
                <button
                  onClick={handleRtc}
                  className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2 active:scale-95"
                >
                  <Video className="w-4 h-4" />
                  <span>Start Call</span>
                </button>
              ) : (
                <>
                  {!isRecording ? (
                    <button
                      onClick={startRecording}
                      disabled={!recorder}
                      className="px-5 py-2.5 rounded-lg bg-rose-600 hover:bg-rose-500 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all shadow-lg shadow-rose-600/30 flex items-center gap-2 active:scale-95"
                    >
                      <Circle className="w-3.5 h-3.5 fill-current" />
                      <span>Start Master Recording</span>
                    </button>
                  ) : (
                    <button
                      onClick={stopRecording}
                      className="px-5 py-2.5 rounded-lg bg-rose-700 hover:bg-rose-600 text-white font-semibold text-sm transition-all shadow-lg shadow-rose-900/40 flex items-center gap-2 active:scale-95 animate-pulse"
                    >
                      <Square className="w-3.5 h-3.5 fill-current" />
                      <span>Stop Recording Take</span>
                    </button>
                  )}
                </>
              )}
            </div>

            <div className="text-right">
              <span className="text-[11px] font-mono text-slate-500 uppercase">
                {isRecording ? "Capturing Local Stream" : "Studio Idle"}
              </span>
            </div>
          </div>
        </div>

        {/* Side Studio Console (Col 9 to 12) */}
        <div className="lg:col-span-4 flex flex-col space-y-5">
          
          {/* Studio Session Card */}
          <div className="bg-[#0F1218]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Session Access</span>
              </h3>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 border border-white/[0.06]">
                HOST PASS
              </span>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-slate-400 font-medium">Session Code for Guests</label>
              <div className="flex items-center gap-2 bg-[#0A0C10] border border-white/[0.08] rounded-xl p-2.5">
                <span className="font-mono text-sm font-semibold text-slate-100 flex-1 tracking-wider px-1">
                  {roomName}
                </span>
                <button
                  onClick={copySessionCode}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm"
                >
                  {copiedCode ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-[11px] text-slate-500">
                Share this code with your podcast guests or co-hosts to connect remotely.
              </p>
            </div>

            <div className="pt-2 border-t border-white/[0.05] flex items-center gap-2 text-xs text-slate-400">
              <Users className="w-4 h-4 text-slate-500" />
              <span>You are broadcasting as Host</span>
            </div>
          </div>

          {/* Recording Pipeline Telemetry */}
          <div className="bg-[#0F1218]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Film className="w-4 h-4 text-indigo-400" />
                <span>Recording Engine</span>
              </h3>
              <span className={`w-2 h-2 rounded-full ${isRecording ? 'bg-rose-500 animate-ping' : 'bg-slate-600'}`} />
            </div>

            <div className="bg-[#0A0C10] rounded-xl p-4 border border-white/[0.06] text-center space-y-2">
              {!socket && (
                <div className="py-2">
                  <Loader2 className="w-5 h-5 mx-auto text-indigo-400 animate-spin mb-2" />
                  <p className="text-xs text-slate-400">Connecting to WebSocket signaling...</p>
                </div>
              )}

              {socket && !isRecording && !loaderStopRecording && (
                <div className="py-2 space-y-1">
                  <p className="text-xs font-medium text-slate-300">Engine Ready</p>
                  <p className="text-[11px] text-slate-500">
                    Local multi-track media recorder waiting for take start.
                  </p>
                </div>
              )}

              {isRecording && (
                <div className="py-2 space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                    <span>Recording in Progress</span>
                  </div>
                  <p className="text-3xl font-mono font-bold text-white tracking-widest">
                    {formatDuration(recordingDuration)}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Chunked local recording streaming safely to cloud storage.
                  </p>
                </div>
              )}

              {loaderStopRecording && (
                <div className="py-3 space-y-2">
                  <Loader2 className="w-7 h-7 mx-auto text-indigo-400 animate-spin" />
                  <p className="text-xs font-semibold text-slate-200">Processing & Merging Master Take...</p>
                  <p className="text-[11px] text-slate-400">
                    Finalizing video chunks and generating cloud-ready master track.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Master Takes / Recordings Archive */}
          <div className="bg-[#0F1218]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-xl space-y-4 flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Session Takes</span>
              </h3>
              <button
                onClick={getAllVideos}
                disabled={isRefreshingTakes}
                className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 disabled:text-slate-600 transition-colors"
                title="Refresh studio takes"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRefreshingTakes ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>

            {/* List of generated recordings */}
            <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1">
              {allVideoUrls.length === 0 && !videoUrl ? (
                <div className="text-center py-8 px-4 bg-[#0A0C10] rounded-xl border border-white/[0.04] space-y-2">
                  <Film className="w-8 h-8 mx-auto text-slate-600 opacity-60" />
                  <p className="text-xs text-slate-400 font-medium">No recorded takes yet</p>
                  <p className="text-[11px] text-slate-500">
                    Once you stop a recording, the finalized master video will show up here.
                  </p>
                </div>
              ) : null}

              {/* Single immediate finished video if present */}
              {videoUrl && allVideoUrls.length === 0 && (
                <div className="bg-[#0A0C10] rounded-xl p-3.5 border border-white/[0.08] space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="font-semibold text-emerald-400">Latest Master Take</span>
                    <span className="font-mono text-[10px] text-slate-500">WEBM</span>
                  </div>
                  <video
                    src={videoUrl}
                    controls
                    className="w-full rounded-lg aspect-video object-cover bg-black"
                  />
                  <button
                    onClick={() => downloadVideo(videoUrl)}
                    className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Master Track</span>
                  </button>
                </div>
              )}

              {/* List of S3 recordings */}
              {allVideoUrls.map((vid: any, idx: number) => {
                const url = vid?.s3Url || vid?.url || vid;
                return (
                  <div key={idx} className="bg-[#0A0C10] rounded-xl p-3.5 border border-white/[0.08] space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span className="font-semibold text-indigo-300">Take #{idx + 1}</span>
                      <span className="font-mono text-[10px] text-slate-500">S3 CLOUD</span>
                    </div>
                    {typeof url === 'string' && (
                      <video
                        src={url}
                        controls
                        className="w-full rounded-lg aspect-video object-cover bg-black"
                      />
                    )}
                    <button
                      onClick={() => downloadVideo(typeof url === 'string' ? url : undefined)}
                      className="w-full py-2 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Take #{idx + 1}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}