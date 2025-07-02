import { useLocation } from "react-router-dom";
import { getAllVideosApi } from "../api/api";
import { useState } from "react";
import { Download } from "lucide-react";

export default function RecentSession() {
  const location = useLocation();
  const sessionId = location?.state?.sessionId;
  const [recordings, setRecordings] = useState([]);
  const [loading,setLoading] = useState(true);

  async function getVideos() {
    const response = await getAllVideosApi(sessionId);
    const recordings = response.data.recordings;
    setRecordings(recordings);
    setLoading(false)
  }

  const downloadVideo = (videoUrl: string) => {
    const link = document.createElement("a");
    link.href = videoUrl;
    link.download = `recording-${sessionId}-${new Date()
      .toISOString()
      .split("T")[0]}.webm`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={getVideos}
          className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors"
        >
          Get All Videos
        </button>
        <div className="py-4">

        </div>
        
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recordings && recordings.length>0 ? recordings.map((vid: any, index: number) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-md"
            >
              <h3 className="text-lg font-semibold text-white mb-4 text-center">
                Your Recording
              </h3>

              <div className="space-y-4 flex flex-col items-center">
                <video
                  src={vid.s3Url}
                  controls
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />

                <button
                  onClick={() => downloadVideo(vid.s3Url)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Recording</span>
                </button>
              </div>
            </div>
          )):"Loading"}
        </div>
      </div>
    </div>
  );
}
