import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mic, AlertCircle, ArrowLeft, Home, Sparkles, Video, Radio } from "lucide-react";
import { createSession } from "../api/api";

export default function CreateSession() {
  const [sessionName, setSessionName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleCreateSession(e?: React.FormEvent) {
    if (e) e.preventDefault();

    if (!sessionName.trim()) {
      setError("Please enter a session name");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const response: any = await createSession(sessionName.trim());
      const data = response.data;
      if (response.status === 200) {
        console.log(data);
        const sessionCode = data.sessionCode;
        const sessionid = data.sessionid;
        navigate("/nsender", {
          state: { sessionCode: sessionCode, sessionid: sessionid },
        });
      }
    } catch (err: any) {
      if (err.response) {
        const status = err.response.status;
        const message = err.response.data?.msg || err.response.data?.error || err.response.msg;
        console.log("Status : ", status);
        console.log("Message : ", message);
        if (status === 400) {
          if (typeof message === "string") {
            setError(message);
          } else if (message?.code === "P2002") {
            setError(`A session named "${sessionName}" already exists. Please choose a different name.`);
          } else {
            setError("Invalid session details. Please choose a different name.");
          }
        } else if (status === 401 || status === 403) {
          setError("Your session has expired. Please log in again.");
        } else {
          setError("Something went wrong. Please try again.");
        }
      } else {
        setError("Network error. Please check your backend connection.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col relative overflow-hidden">
      {/* Dynamic Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none" />

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

          <div className="flex items-center space-x-3">
            <Link
              to="/joinSession"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20 transition-all hidden sm:flex items-center gap-1.5"
            >
              <Radio className="w-3.5 h-3.5" />
              Join via Code
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-lg">
          {/* Studio Badge */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-700/40 text-indigo-300 text-xs font-medium shadow-inner backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Studio Host Portal</span>
            </div>
          </div>

          <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800/90 rounded-2xl shadow-2xl p-6 sm:p-10 transition-all duration-300 hover:border-gray-700/80">
            <div className="text-center mb-8">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border border-indigo-500/30 flex items-center justify-center shadow-lg shadow-indigo-500/10">
                <Mic className="w-7 h-7 text-indigo-400" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                Create New Session
              </h1>
              <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
                Launch a live multi-track studio recording session. You'll receive a unique code to invite guests.
              </p>
            </div>

            {error && (
              <div className="mb-6 bg-red-950/50 border border-red-800/80 text-red-300 px-4 py-3.5 rounded-xl flex items-start gap-3 shadow-lg">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium leading-snug">{error}</span>
              </div>
            )}

            <form onSubmit={handleCreateSession} className="space-y-6">
              <div>
                <label
                  htmlFor="sessionName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Session Name
                </label>
                <input
                  id="sessionName"
                  type="text"
                  autoFocus
                  placeholder="e.g. Weekly Tech Podcast #12"
                  value={sessionName}
                  onChange={(e) => {
                    setSessionName(e.target.value);
                    if (error) setError(null);
                  }}
                  className="w-full px-4 py-3.5 bg-gray-950/60 border border-gray-700/80 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-100 placeholder-gray-500 text-sm transition-all outline-none shadow-inner"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white shadow-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                  isLoading
                    ? "bg-indigo-800/60 cursor-not-allowed opacity-80"
                    : "bg-gradient-to-r from-indigo-600 via-indigo-600 to-purple-600 hover:from-indigo-500 hover:via-indigo-500 hover:to-purple-500 shadow-indigo-600/25 active:scale-[0.99]"
                }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Creating Session...</span>
                  </>
                ) : (
                  <>
                    <Video className="w-4 h-4" />
                    <span>Launch Studio Session</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500">
            <span>Joining someone else's recording? </span>
            <Link
              to="/joinSession"
              className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors underline underline-offset-4"
            >
              Join with code
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
