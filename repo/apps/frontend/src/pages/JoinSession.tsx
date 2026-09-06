import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { joinSession } from "../api/api";
import {
  Mic,
  Radio,
  ArrowLeft,
  Home,
  Key,
  Clipboard,
  AlertCircle,
  Loader2,
  Sparkles,
  Shield,
  Video,
  CheckCircle2,
} from "lucide-react";

export default function JoinSession() {
  const [sessionInput, setSessionInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pasted, setPasted] = useState(false);
  const navigate = useNavigate();

  // Helper to extract clean UUID/code from pasted URL or input
  const extractCode = (input: string): string => {
    let cleaned = input.trim();
    if (cleaned.includes("/session/")) {
      cleaned = cleaned.split("/session/")[1].split("?")[0].split("/")[0];
    } else if (cleaned.includes("code=")) {
      const match = cleaned.match(/code=([^&]+)/);
      if (match && match[1]) {
        cleaned = match[1];
      }
    }
    return cleaned.trim();
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setSessionInput(text.trim());
        setError(null);
        setPasted(true);
        setTimeout(() => setPasted(false), 2000);
      }
    } catch {
      // Fallback: clipboard permission denied
    }
  };

  async function handleJoinSession(e?: React.FormEvent) {
    if (e) e.preventDefault();

    const cleanedCode = extractCode(sessionInput);

    if (!cleanedCode) {
      setError("Please enter a session code or invite link");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const response = await joinSession(cleanedCode);
      console.log("JOIN SESSIONS MESSAGE: ", response.data.msg);

      if (response.status === 200) {
        const sessionId = response.data.sessionId;
        console.log("SESSION ID ", sessionId);
        navigate("/nreceiver", {
          state: { sessionCode: cleanedCode, sessionId: sessionId },
        });
      }
    } catch (err: any) {
      console.error("Join Session Error:", err);
      if (err.response) {
        const status = err.response.status;
        const message =
          err.response.data?.msg ||
          err.response.data?.error ||
          err.response.msg;

        console.log("Status : ", status);
        console.log("Message : ", message);

        if (status === 400) {
          setError(
            typeof message === "string"
              ? message
              : "Invalid session code or session not found."
          );
        } else if (status === 401 || status === 403) {
          setError("Your session has expired. Please log in again.");
        } else {
          setError("Failed to join session. Please verify the code and try again.");
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

      {/* Top Navigation Bar */}
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
              <Home className="w-4 h-4 mr-1.5 text-gray-400 hover:text-indigo-400" />
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
              to="/createSession"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20 transition-all hidden sm:flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Host a Session
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Card Container */}
      <main className="relative z-10 flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-lg">
          {/* Studio Badge */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-700/40 text-indigo-300 text-xs font-medium shadow-inner backdrop-blur-md">
              <Radio className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>Studio Guest Portal</span>
            </div>
          </div>

          {/* Premium Glass Card */}
          <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800/90 rounded-2xl shadow-2xl p-6 sm:p-10 transition-all duration-300 hover:border-gray-700/80">
            {/* Card Header */}
            <div className="text-center mb-8">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border border-indigo-500/30 flex items-center justify-center shadow-lg shadow-indigo-500/10">
                <Video className="w-7 h-7 text-indigo-400" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                Join Live Recording
              </h1>
              <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
                Enter your session code or paste the invite link to join the studio session with HD local multi-track recording.
              </p>
            </div>

            {/* Error Notification */}
            {error && (
              <div className="mb-6 bg-red-950/50 border border-red-800/80 text-red-300 px-4 py-3.5 rounded-xl flex items-start gap-3 shadow-lg animate-in fade-in slide-in-from-top-1 duration-200">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div className="flex-1 text-sm font-medium leading-snug">
                  {error}
                </div>
              </div>
            )}

            {/* Join Form */}
            <form onSubmit={handleJoinSession} className="space-y-5">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label
                    htmlFor="sessionCode"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Session Code or Link
                  </label>
                  <button
                    type="button"
                    onClick={handlePaste}
                    className="text-xs font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                  >
                    {pasted ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Pasted!</span>
                      </>
                    ) : (
                      <>
                        <Clipboard className="w-3.5 h-3.5" />
                        <span>Paste from clipboard</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Key className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    id="sessionCode"
                    type="text"
                    autoFocus
                    value={sessionInput}
                    onChange={(e) => {
                      setSessionInput(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="e.g. 550e8400-e29b-41d4-a716-446655440000"
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-950/60 border border-gray-700/80 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-100 placeholder-gray-500 text-sm font-mono transition-all duration-200 outline-none shadow-inner"
                  />
                </div>
                <p className="mt-1.5 text-xs text-gray-500">
                  Tip: You can paste the raw UUID code or the entire invite URL.
                </p>
              </div>

              {/* Submit Button */}
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
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Connecting to Studio...</span>
                  </>
                ) : (
                  <>
                    <Radio className="w-4 h-4" />
                    <span>Join Session</span>
                  </>
                )}
              </button>
            </form>

            {/* Studio Features Preview */}
            <div className="mt-8 pt-6 border-t border-gray-800/80 grid grid-cols-3 gap-3 text-center">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-lg bg-gray-800/80 border border-gray-700/50 flex items-center justify-center mb-1.5">
                  <Mic className="w-4 h-4 text-indigo-400" />
                </div>
                <span className="text-[11px] font-medium text-gray-400 leading-tight">
                  Studio Audio
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-lg bg-gray-800/80 border border-gray-700/50 flex items-center justify-center mb-1.5">
                  <Video className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-[11px] font-medium text-gray-400 leading-tight">
                  HD Local Sync
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-lg bg-gray-800/80 border border-gray-700/50 flex items-center justify-center mb-1.5">
                  <Shield className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-[11px] font-medium text-gray-400 leading-tight">
                  WebRTC Secure
                </span>
              </div>
            </div>
          </div>

          {/* Footer Helper Links */}
          <div className="mt-6 text-center text-xs text-gray-500">
            <span>Looking to host your own session instead? </span>
            <Link
              to="/createSession"
              className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors underline underline-offset-4"
            >
              Create New Session
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}