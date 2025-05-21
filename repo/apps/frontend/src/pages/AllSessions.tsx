import { Link } from 'react-router-dom';
import { Mic, Copy, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface SessionsType{
  id:number;
  userId: number;
  sessionCode: string;
  sessionName: string;
}

const token = localStorage.getItem('JWT')

export default function AllSessions() {

  const [sessions,setSessions] = useState<SessionsType[]>([]);
  
  useEffect(()=>{
    async function getAllSessions(){
      const response = await axios.get("http://localhost:3001/api/v1/sessions/get-all-sessions",{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      console.log(response.data);
      setSessions(response.data.sessions)
    }
    getAllSessions();
    
  },[])
  
  const copySessionCode = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Your Sessions</h1>
          <Link 
            to="/create-session" 
            className="btn btn-primary flex items-center"
          >
            <Mic size={18} className="mr-2" />
            New Session
          </Link>
        </div>

        {sessions && sessions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session) => (
              <div 
                key={session.id}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors border border-gray-700"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-white mb-2">
                      {session.sessionName}
                    </h2>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <span>Session Code:</span>
                      <code className="bg-gray-900 px-2 py-1 rounded">
                        {session.sessionCode.slice(0, 8)}...
                      </code>
                      <button 
                        onClick={() => copySessionCode(session.sessionCode)}
                        className="text-indigo-400 hover:text-indigo-300 transition-colors"
                        title="Copy session code"
                      >
                        <Copy size={14} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <Link
                    to={`/session/${session.sessionCode}`}
                    className="flex items-center justify-center text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Join Session
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mic size={24} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-300 mb-2">No sessions yet</h3>
            <p className="text-gray-400 mb-6">Create your first recording session to get started</p>
            <Link to="/create-session" className="btn btn-primary">
              Create New Session
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}