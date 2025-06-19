import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Video, 
  Square, 
  Circle, 
  Download,
  ArrowLeft,
  Loader,
  Users,
  Play
} from "lucide-react";
import { sendChunksToBackend,sendFinalCallToEndOfRecordingApi } from "../api/api";

export default function NReceiver() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [, setSocket] = useState<WebSocket>();
  const [, setRoomId] = useState<string>("");
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);
  const [startRecordings, setStartRecordings] = useState<Boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loaderStopRecording, setLoaderStopRecording] = useState<Boolean>(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState("Connecting...");
  const [recordingDuration, setRecordingDuration] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const roomName = location?.state?.sessionCode;
  const sessionId = location?.state?.sessionId;

  useEffect(() => {
    if (!roomName || !sessionId) {
      navigate('/');
      return;
    }

    setRoomId(roomName);
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      if (roomName) {
        ws.send(JSON.stringify({ type: "receiver", roomId: roomName }));
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
  }, [stream]);

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

  const downloadVideo = () => {
    if (videoUrl) {
      const link = document.createElement('a');
      link.href = videoUrl;
      link.download = `recording-${roomName}-guest-${new Date().toISOString().split('T')[0]}.webm`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  function startRecording() {
    setStartRecordings(true);
    if (stream) {
      const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });
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

        // const response = await axios.post('http://localhost:3001/api/v1/recordings/chunks', formData, {
        //   headers: {
        //     Authorization: `Bearer ${token}`
        //   }
        // });
        const response = await sendChunksToBackend(formData);
        console.log(response)
      }

      mediaRecorder.onstop = () => {
        sendFinalCallToEndOfRecording();
      };

      async function sendFinalCallToEndOfRecording() {
        const response = await sendFinalCallToEndOfRecordingApi(roomName,'receiver');
        const data = response.data;
        setVideoUrl(data.url);
        setLoaderStopRecording(false);
        setIsRecording(false);
      }
    }
  }

  const handleStartRecording = () => {
    if (recorder) {
      recorder.start(3000);
      setIsRecording(true);
      setRecordingDuration(0);
    }
  };

  const handleStopRecording = () => {
    if (recorder) {
      recorder.stop();
      setLoaderStopRecording(true);
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

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Video Preview */}
          <div className="lg:col-span-2">
            <div className="bg-black rounded-2xl overflow-hidden relative">
              <video
                ref={videoRef}
                autoPlay
                muted
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

              {/* Stream Status */}
              {!stream && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
                  <div className="text-center text-gray-300">
                    <Video className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Waiting for host to start stream...</p>
                  </div>
                </div>
              )}

              {/* Controls Overlay */}
              {stream && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center space-x-4 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3">
                    {!startRecordings ? (
                      <button
                        onClick={startRecording}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                      >
                        Setup Recording
                      </button>
                    ) : (
                      <>
                        {!isRecording ? (
                          <button
                            onClick={handleStartRecording}
                            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors"
                          >
                            <Circle className="w-5 h-5" />
                          </button>
                        ) : (
                          <button
                            onClick={handleStopRecording}
                            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors"
                          >
                            <Square className="w-5 h-5" />
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )}
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
                  <div className="bg-white/10 rounded-lg px-3 py-2 font-mono text-white">
                    {roomName}
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-gray-300">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">You are a guest</span>
                </div>
              </div>
            </div>

            {/* Recording Status */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Recording Status</h3>
              
              <div className="space-y-3">
                {!stream && (
                  <div className="text-center text-gray-300">
                    <Loader className="w-6 h-6 mx-auto mb-2 animate-spin opacity-50" />
                    <p className="text-sm">Waiting for host stream...</p>
                  </div>
                )}

                {stream && !startRecordings && (
                  <div className="text-center text-gray-300">
                    <Video className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Ready to setup recording</p>
                  </div>
                )}

                {startRecordings && !isRecording && !videoUrl && (
                  <div className="text-center text-gray-300">
                    <Play className="w-8 h-8 mx-auto mb-2 opacity-50" />
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

            {/* Recorded Video */}
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}