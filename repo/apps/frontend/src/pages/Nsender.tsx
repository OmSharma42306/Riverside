import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Video, 
  Square, 
  Circle, 
  Download,
  Copy,
  CheckCircle,
  Users,
  ArrowLeft,
  Loader
} from "lucide-react";
import { getAllVideosApi, sendChunksToBackend,sendFinalCallToEndOfRecordingApi } from "../api/api";



export default function NSender() {
  const [socket, setSocket] = useState<WebSocket>();
  const [, setRoomId] = useState<string | null>(null);
  const [, setStream] = useState<MediaStream | any>();
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>("");
  const [loaderStopRecording, setLoaderStopRecording] = useState<Boolean>(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState("Connecting...");
  const [copiedCode, setCopiedCode] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);

  const [allVideoUrls,setAllVideoUrls] = useState([]);
  const [isMerged,setIsMerged] = useState<Boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const [disableCallButton,setDisableCallButton] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const roomName = location?.state?.sessionCode;
  const sessionId = location?.state?.sessionid;

  useEffect(() => {
    if (!roomName || !sessionId) {
      navigate('/');
      return;
    }
    
    setRoomId(roomName);
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      if (roomName) {
        ws.send(JSON.stringify({ type: "sender", roomId: roomName }));
        setSocket(ws);
        setIsConnected(true);
        setConnectionStatus("Connected");
      }
    };

    ws.onclose = () => {
      setIsConnected(false);
      setConnectionStatus("Disconnected");
    };

    ws.onerror = () => {
      setIsConnected(false);
      setConnectionStatus("Connection Error");
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
      link.download = `recording-${roomName}-${new Date().toISOString().split('T')[0]}.webm`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const getAllVideos = async () =>{
    try{
      const response:any = getAllVideosApi(sessionId);
      const data = response.data;
      console.log("Data:  ",data);
      const recordings = data.recordings;
      console.log("Recordings:  ",recordings);      
      setAllVideoUrls(recordings);
    }catch(error){
      console.error(error);
    }
  }

  useEffect(()=>{
    if(isMerged === true){
      getAllVideos();
      console.log("Function called");
    }
  },[isMerged])

  async function handleRtc() {

    if (!socket) return;
    setDisableCallButton(true)

    socket.onmessage = async (event: any) => {
      const msg = JSON.parse(event.data);

      if (msg.type === "receiver-remote-description") {
        pc?.setRemoteDescription(msg.sdp);
        console.log("setpcc remote")
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
    
    if(localVideoRef.current){
      localVideoRef.current.srcObject = stream;
      localVideoRef.current.play()
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
      formData.append('userType','sender')

      const response = await sendChunksToBackend(formData);
      console.log(response)
    }

    mediaRecorder.onstop = () => {
      sendFinalCallToEndOfRecording();
    };

    async function sendFinalCallToEndOfRecording() {
      const response = await sendFinalCallToEndOfRecordingApi(roomName,'sender')
      const data = response.data;
      console.log("URL ",data.url);
      setVideoUrl(data.url);
      setLoaderStopRecording(false);
      setIsRecording(false);
      setIsMerged(true);
    }
  }

  const startRecording = () => {
    if (recorder) {
      socket?.send(JSON.stringify({type:'record-video',roomId:roomName}))
      recorder.start(3000);
      setIsRecording(true);
      setRecordingDuration(0);
    }
  };

  const stopRecording = () => {
    if (recorder) {
      recorder.stop();
      socket?.send(JSON.stringify({type:"stop-recording",roomId:roomName}))
      setLoaderStopRecording(true);
      setIsRecording(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
            
          <div className="flex items-center space-x-4">
            <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${
              isConnected 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-red-500/20 text-red-400'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                isConnected ? 'bg-green-400' : 'bg-red-400'
              }`} />
              <span>{connectionStatus}</span>
            </div>
          </div>
        </div>
        <div className="w-2">
          <video
  ref={localVideoRef}
  muted
  autoPlay
  playsInline
  className="w-32 h-20 sm:w-40 sm:h-24 rounded-lg border-2 border-white absolute bottom-6 right-6 shadow-lg"
/>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Video Preview */}
          <div className="lg:col-span-2">
            <div className="bg-black rounded-2xl overflow-hidden relative">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full aspect-video object-cover"
              />
              
              {/* Recording Indicator */}
              {isRecording && (
                <div className="absolute top-4 left-4 flex items-center space-x-2 bg-red-500 text-white px-3 py-1 rounded-full">
                  <Circle className="w-3 h-3 fill-current animate-pulse" />
                  <span className="text-sm font-medium">REC {formatDuration(recordingDuration)}</span>
                </div>
              )}

              {/* Controls Overlay */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center space-x-3 bg-black/50 backdrop-blur-sm rounded-full px-4 py-3">
                  <button
                      onClick={handleRtc}
                      disabled={disableCallButton}
                      className="bg-purple-600 hover:bg-purple-700 text-black text-2xl  font-weight:900 p-6  rounded-full transition-colors"
                    >Start Call
                      <Video className="w-33 h-5" />
                    </button>
                  {!socket ? (
                    ""
                  ) : (
                    <>
                      {!isRecording ? (
                        <button
                          onClick={startRecording}
                          disabled={!recorder}
                          className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white p-3 rounded-full transition-colors"
                        >
                          Record Video
                          <Circle className="w-22 h-6" />
                          
                        </button>
                      ) : (
                        <button
                          onClick={stopRecording}
                          className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors"
                        >
                          <p>Stop Recording</p>
                          <Square className="w-27 h-5" />
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Session Info */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Session Details</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Session Code</label>
                  <div className="flex items-center space-x-2">
                    <div className="bg-white/10 rounded-lg px-3 py-2 flex-1 font-mono text-white">
                      {roomName}
                    </div>
                    <button
                      onClick={copySessionCode}
                      className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors"
                    >
                      {copiedCode ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Share this code with guests</p>
                </div>

                <div className="flex items-center space-x-2 text-gray-300">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">You are the host</span>
                </div>
              </div>
            </div>

            {/* Recording Status */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Recording Status</h3>
              
              <div className="space-y-3">
                {!socket && (
                  <div className="text-center">
                    <button
                      onClick={handleRtc}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                    >
                      Initialize Recording
                    </button>
                  </div>
                )}

                {socket && !isRecording && !videoUrl && (
                  <div className="text-center text-gray-300">
                    <Video className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Ready to record</p>
                  </div>
                )}

                {isRecording && (
                  <div className="text-center">
                    <div className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg mb-2">
                      <Circle className="w-4 h-4 inline mr-2 fill-current animate-pulse" />
                      Recording in progress
                    </div>
                    <p className="text-2xl font-mono text-white">{formatDuration(recordingDuration)}</p>
                  </div>
                )}

                {loaderStopRecording && (
                  <div className="text-center">
                    <Loader className="w-6 h-6 mx-auto mb-2 text-purple-400 animate-spin" />
                    <p className="text-sm text-gray-300">Processing recording...</p>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Get All Recordings</h3>
              <div className="text-center text-gray-300">
              <Video className="w-8 h-8 mx-auto mb-2 opacity-50" />                     
                <button
                  onClick={getAllVideos}
                  className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors">
                  Get All Recordings
                </button>                    
                  </div>
              </div>
                        
 {
  allVideoUrls.map((vid:any)=>{
    return (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Your Recording</h3>
                
                <div className="space-y-4">
                  <video
                    src={vid.s3Url}
                    controls
                    className="w-full rounded-lg"
                  />
                  
                  <button
                    onClick={downloadVideo}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Recording</span>
                  </button>
                </div>
              </div>
            )
  })
 }
 
            {/* Recorded Video
            {videoUrl && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Your Recording</h3>
                
                <div className="space-y-4">
                  <video
                    src={videoUrl}
                    controls
                    className="w-full rounded-lg"
                  />
                  
                  <button
                    onClick={downloadVideo}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Recording</span>
                  </button>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}