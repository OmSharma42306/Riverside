import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Video, Users, ArrowRight, Mic, Settings } from 'lucide-react';

export default function Home() {
  const [sessionCode, setSessionCode] = useState('');
  const [isHost, setIsHost] = useState(true);
  const navigate = useNavigate();

  const generateSessionCode = () => {
    const code = Math.random().toString(36).substring(2, 10).toUpperCase();
    setSessionCode(code);
    return code;
  };

  const handleStartSession = () => {
    const code = sessionCode || generateSessionCode();
    const sessionId = Date.now().toString();
    
    if (isHost) {
      navigate('/nsender', { 
        state: { 
          sessionCode: code, 
          sessionid: sessionId 
        } 
      });
    } else {
      navigate('/nreceiver', { 
        state: { 
          sessionCode: code, 
          sessionId: sessionId 
        } 
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Video className="w-12 h-12 text-purple-400 mr-3" />
            <h1 className="text-4xl font-bold text-white">RecordStudio</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional remote recording studio. Record high-quality video calls with crystal clear audio and video.
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-white mb-2">Start Recording</h2>
              <p className="text-gray-300">Choose your role to begin</p>
            </div>

            {/* Role Selection */}
            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => setIsHost(true)}
                className={`flex-1 p-4 rounded-xl border-2 transition-all duration-200 ${
                  isHost
                    ? 'border-purple-400 bg-purple-400/20 text-white'
                    : 'border-gray-600 text-gray-400 hover:border-purple-400/50'
                }`}
              >
                <Users className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Host</div>
              </button>
              <button
                onClick={() => setIsHost(false)}
                className={`flex-1 p-4 rounded-xl border-2 transition-all duration-200 ${
                  !isHost
                    ? 'border-purple-400 bg-purple-400/20 text-white'
                    : 'border-gray-600 text-gray-400 hover:border-purple-400/50'
                }`}
              >
                <Mic className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Guest</div>
              </button>
            </div>

            {/* Session Code Input */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Session Code {!isHost && <span className="text-red-400">*</span>}
              </label>
              <input
                type="text"
                value={sessionCode}
                onChange={(e) => setSessionCode(e.target.value.toUpperCase())}
                placeholder={isHost ? "Auto-generated if empty" : "Enter session code"}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
            </div>

            {/* Start Button */}
            <button
              onClick={handleStartSession}
              disabled={!isHost && !sessionCode}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:cursor-not-allowed"
            >
              <span>{isHost ? 'Start Session' : 'Join Session'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div className="text-gray-300">
              <Video className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <div className="text-sm">HD Recording</div>
            </div>
            <div className="text-gray-300">
              <Users className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <div className="text-sm">Real-time Sync</div>
            </div>
            <div className="text-gray-300">
              <Settings className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <div className="text-sm">Auto Processing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}