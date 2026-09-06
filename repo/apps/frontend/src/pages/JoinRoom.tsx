import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mic, ArrowLeft, Home, Radio, Key } from "lucide-react";

export default function JoinRoom() {
  const [roomName, setRoomName] = useState<string>("");
  const navigate = useNavigate();

  async function handleJoinRoom(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (!roomName.trim()) return;
    navigate("/receiver", { state: { roomId: roomName.trim() } });
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col relative overflow-hidden">
      {/* Dynamic Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Top Header */}
      <header className="relative z-10 w-full border-b border-gray-800/80 bg-gray-950/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors duration-150 group"
              title="Go back"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center mr-2 group-hover:border-gray-700 transition-colors">
                <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <span>Back</span>
            </button>

            <Link
              to="/dashboard"
              className="flex items-center text-sm font-medium text-gray-400 hover:text-indigo-400 transition-colors duration-150"
            >
              <Home className="w-4 h-4 mr-1.5" />
              <span>Dashboard</span>
            </Link>
          </div>

          <Link to={localStorage.getItem("JWT") ? "/dashboard" : "/"} className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/20">
              <Mic className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              RiverSide
            </span>
          </Link>
          <div className="w-20" />
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md">
          <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800/90 rounded-2xl shadow-2xl p-6 sm:p-8">
            <div className="text-center mb-8">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border border-indigo-500/30 flex items-center justify-center shadow-lg shadow-indigo-500/10">
                <Radio className="w-7 h-7 text-indigo-400" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Join WebRTC Room</h1>
              <p className="text-gray-400 text-sm">Enter the Room ID given by the sender</p>
            </div>

            <form onSubmit={handleJoinRoom} className="space-y-5">
              <div>
                <label htmlFor="roomId" className="block text-sm font-medium text-gray-300 mb-2">
                  Room ID
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Key className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    id="roomId"
                    type="text"
                    autoFocus
                    placeholder="Enter Room ID"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-gray-950/60 border border-gray-700/80 rounded-xl focus:ring-2 focus:ring-indigo-500 text-gray-100 placeholder-gray-500 text-sm outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/25 transition-all duration-200"
              >
                Join Room
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}