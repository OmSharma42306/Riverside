import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Video, 
  Circle, 
  Download,
  ArrowLeft,
  Loader2,
  Users,
  Copy,
  CheckCircle2,
  Mic,
  Radio,
  Sparkles,
  Film
} from "lucide-react";
import { sendChunksToBackend, sendFinalCallToEndOfRecordingApi } from "../api/api";

export default function NReceiver() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const [, setSocket] = useState<WebSocket>();
  const [, setRoomId] = useState<string>("");
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);
  const [, setStartRecordings] = useState<Boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loaderStopRecording, setLoaderStopRecording] = useState<Boolean>(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState("Connecting to studio network...");
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [readyForRecording, setReadyForRecording] = useState(false);
  const [stopRecording, setStopRecording] = useState(false);
  const roomName = location?.state?.sessionCode;
  const sessionId = location?.state?.sessionId;

  useEffect(() => {
    if (!roomName || !sessionId) {
      navigate('/dashboard');
      return;
    }

    setRoomId(roomName);
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      if (roomName) {
        ws.send(JSON.stringify({ type: "receiver", roomId: roomName }));
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

    const pc = new RTCPeerConnection();
    
    ws.onmessage = async (event: any) => {
      const msg = JSON.parse(event.data);
      
      if (msg.type === "sender-remote-description") {
        await pc.setRemoteDescription(msg.sdp);
        const answer = await pc?.createAnswer();
        await pc.setLocalDescription(answer);
        ws?.send(JSON.stringify({ type: 'create-answer', sdp: answer }));
      } else if (msg.type === "sender-iceCandidate") {
        pc.addIceCandidate(msg.candidate);
      } else if (msg.type === "start-record") {
        const roomId = msg.roomId;        
        if (roomId === roomName) {
          setReadyForRecording(true);
        }
      } else if (msg.type === "stop-recording") {
        const roomId = msg.roomId;
        if (roomId === roomName) {
          setStopRecording(true);
        }
      }
    };

    pc.ontrack = (event) => {
      setStream(event.streams[0]);
    };

    pc.onicecandidate = (event) => {
      ws?.send(JSON.stringify({ 
        type: 'receiver-iceCandidate', 
        candidate: event.candidate 
      }));
    };

    return () => {
      ws.close();
    };
  }, [roomName, sessionId, navigate]);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }
   
    if (localVideoRef.current && stream) {
      localVideoRef.current.srcObject = stream;
      localVideoRef.current.play();
    }

    if (stream && readyForRecording) {
      startRecording();
    }
  }, [stream, readyForRecording]);

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

  const downloadVideo = () => {
    if (videoUrl) {
      const link = document.createElement('a');
      link.href = videoUrl;
      link.download = `riverside-guest-take-${roomName}-${new Date().toISOString().split('T')[0]}.webm`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  async function startRecording() {
    setStartRecordings(true);
    if (!stream) return;
      
    const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });
    setRecorder(mediaRecorder);       

    mediaRecorder.start(3000);
    setIsRecording(true);
    setRecordingDuration(0);
    
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
      formData.append('userType', 'receiver');

      try {
        await sendChunksToBackend(formData);
      } catch (err) {
        console.error("Error sending guest chunk:", err);
      }
    }

    mediaRecorder.onstop = () => {
      sendFinalCallToEndOfRecording();
    };

    async function sendFinalCallToEndOfRecording() {
      try {
        const response = await sendFinalCallToEndOfRecordingApi(roomName, 'receiver', sessionId);
        const data = response.data;
        setVideoUrl(data.url);
        setLoaderStopRecording(false);
        setIsRecording(false);
      } catch (err) {
        console.error("Error finalizing guest recording:", err);
        setLoaderStopRecording(false);
        setIsRecording(false);
      }
    }
  }

  useEffect(() => {
    if (recorder && stopRecording) {
      recorder.stop();
      setLoaderStopRecording(true);
      setIsRecording(false);
    }
  }, [recorder, stopRecording]);

  return (
    <div className="min-h-screen bg-[#08090C] text-slate-100 flex flex-col antialiased selection:bg-indigo-500/30 selection:text-white">
      {/* Dynamic Studio Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[700px] h-[500px] bg-purple-600/[0.05] rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -left-40 w-[600px] h-[600px] bg-indigo-600/[0.04] rounded-full blur-[150px]" />
      </div>

      {/* Top Studio Control Bar */}
      <header className="relative z-20 border-b border-white/[0.07] bg-[#0B0D13]/85 backdrop-blur-xl px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/[0.06] hover:border-white/15 bg-white/[0.02] hover:bg-white/[0.06] transition-all"
            title="Return to Dashboard"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Dashboard</span>
          </button>

          <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

          {/* Session Pill */}
          <div className="flex items-center gap-2.5">
            <span className="text-[10px] font-bold tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-full uppercase">
              Guest Co-Host
            </span>
            <div className="flex items-center gap-2 bg-[#121620] border border-white/[0.08] px-3 py-1 rounded-lg">
              <span className="text-xs text-slate-400 hidden md:inline">Session:</span>
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
            
            {/* Host Primary Video Feed */}
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                stream ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            />

            {/* Waiting State for Host Feed */}
            {!stream && (
              <div className="flex flex-col items-center justify-center p-8 text-center space-y-5">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/10 border border-purple-500/30 flex items-center justify-center shadow-inner">
                    <Radio className="w-9 h-9 text-purple-400 animate-pulse" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  </div>
                </div>

                <div className="max-w-md space-y-2">
                  <h2 className="text-xl font-bold text-white tracking-tight">Waiting for Host Stream</h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    You have successfully joined the session. As soon as the host initiates their broadcast signal, the live studio viewport will open automatically.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-purple-400" />
                  <span>Listening on WebRTC pipeline...</span>
                </div>
              </div>
            )}

            {/* In-Video Picture-in-Picture for Local Camera Preview */}
            <div className={`absolute bottom-4 right-4 z-20 transition-all duration-300 ${
              stream ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
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
                  GUEST FEED
                </div>
              </div>
            </div>

            {/* Recording HUD Overlay */}
            {isRecording && (
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2.5 bg-black/70 backdrop-blur-md border border-rose-500/30 px-3.5 py-1.5 rounded-full">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                <span className="text-xs font-mono font-bold tracking-wider text-white">
                  RECORDING • {formatDuration(recordingDuration)}
                </span>
              </div>
            )}

            {/* Live Feed Status Pill */}
            {stream && (
              <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[11px] font-mono text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>HOST FEED LIVE</span>
              </div>
            )}
          </div>

          {/* Studio Telemetry Dock */}
          <div className="bg-[#0F1218]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-4 shadow-xl flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-400 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                <Mic className="w-4 h-4 text-emerald-400" />
                <span>Local Track Active</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-400 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                <Video className="w-4 h-4 text-emerald-400" />
                <span>Studio Audio Synced</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span>Host Controls Master Recording</span>
            </div>
          </div>
        </div>

        {/* Side Studio Console (Col 9 to 12) */}
        <div className="lg:col-span-4 flex flex-col space-y-5">
          
          {/* Studio Session Card */}
          <div className="bg-[#0F1218]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Session Details</span>
              </h3>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 border border-white/[0.06]">
                GUEST PASS
              </span>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-slate-400 font-medium">Session Code</label>
              <div className="flex items-center gap-2 bg-[#0A0C10] border border-white/[0.08] rounded-xl p-2.5">
                <span className="font-mono text-sm font-semibold text-slate-100 flex-1 tracking-wider px-1">
                  {roomName}
                </span>
                <button
                  onClick={copySessionCode}
                  className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm"
                >
                  {copiedCode ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-white/[0.05] flex items-center gap-2 text-xs text-slate-400">
              <Users className="w-4 h-4 text-slate-500" />
              <span>You are connected as Remote Co-Host</span>
            </div>
          </div>

          {/* Guest Recording Status */}
          <div className="bg-[#0F1218]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Film className="w-4 h-4 text-purple-400" />
                <span>Isolated Track Status</span>
              </h3>
              <span className={`w-2 h-2 rounded-full ${isRecording ? 'bg-rose-500 animate-ping' : 'bg-slate-600'}`} />
            </div>

            <div className="bg-[#0A0C10] rounded-xl p-4 border border-white/[0.06] text-center space-y-2">
              {!stream && (
                <div className="py-2 space-y-1">
                  <Loader2 className="w-5 h-5 mx-auto text-purple-400 animate-spin mb-2" />
                  <p className="text-xs text-slate-400">Waiting for host to start video feed...</p>
                </div>
              )}

              {stream && !isRecording && !loaderStopRecording && (
                <div className="py-2 space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-semibold mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Signal Synchronized</span>
                  </div>
                  <p className="text-xs text-slate-300">Ready for Master Take</p>
                  <p className="text-[11px] text-slate-500">
                    Recording will trigger automatically when the host hits record.
                  </p>
                </div>
              )}

              {isRecording && (
                <div className="py-2 space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                    <span>Recording Guest Track</span>
                  </div>
                  <p className="text-3xl font-mono font-bold text-white tracking-widest">
                    {formatDuration(recordingDuration)}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Your local high-res audio and video chunks are uploading continuously.
                  </p>
                </div>
              )}

              {loaderStopRecording && (
                <div className="py-3 space-y-2">
                  <Loader2 className="w-7 h-7 mx-auto text-purple-400 animate-spin" />
                  <p className="text-xs font-semibold text-slate-200">Processing Master Track...</p>
                  <p className="text-[11px] text-slate-400">
                    Uploading final chunks and generating your isolated stream URL.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Finished Video Download Card */}
          {videoUrl && (
            <div className="bg-[#0F1218]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-xl space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Your Master Track</span>
              </h3>

              <div className="bg-[#0A0C10] rounded-xl p-3.5 border border-white/[0.08] space-y-3">
                <video
                  src={videoUrl}
                  controls
                  className="w-full rounded-lg aspect-video object-cover bg-black"
                />
                
                <button
                  onClick={downloadVideo}
                  className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Guest Master (.webm)</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}