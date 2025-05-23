import axios from 'axios';
import { Video, Volume2, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const token = localStorage.getItem("JWT");

interface SessionType{
  id : number;
  userId : number;
  sessionId : number;
  trackName : string;
  s3Url : string;
}

export default function Session() {
  
  const {sessionCode} = useParams();
  const [tracks,setTracks] = useState<SessionType[]>([]);

  useEffect(()=>{
    async function getSession(){
        const response = await axios.get(`http://localhost:3001/api/v1/sessions/get-session/${sessionCode}`,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        console.log(response.data.session.tracks);
        setTracks(response.data.session.tracks);
    }
    if(sessionCode){
      getSession();
    }
    
  },[])

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Session Recordings</h1>
          <p className="text-gray-400">View and manage your session recordings</p>
        </div>

        {tracks && tracks.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tracks.map((track) => (
              <div key={track.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
                <div className="aspect-video relative">
                  <video
                    src={track.s3Url}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    muted
                  />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center">
                    <Video size={16} className="text-indigo-400 mr-2" />
                    <span className="text-sm font-medium text-white">Track {track.id}</span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-white truncate" title={track.trackName}>
                      {track.trackName}
                    </h2>
                    <div className="flex items-center space-x-2">
                      <button 
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                        title="Adjust volume"
                      >
                        <Volume2 size={18} />
                      </button>
                      <button 
                        onClick={() => handleDownload(track.s3Url, track.trackName)}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                        title="Download recording"
                      >
                        <Download size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-400">User ID: {track.userId}</span>
                    <span className="text-gray-400">Session ID: {track.sessionId}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-800 rounded-xl">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video size={24} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-300 mb-2">No recordings found</h3>
            <p className="text-gray-400">This session doesn't have any recordings yet</p>
          </div>
        )}
      </div>
    </div>
  );
}