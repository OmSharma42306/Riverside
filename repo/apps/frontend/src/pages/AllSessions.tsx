import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Mic,
  Copy,
  ArrowRight,
  Plus,
  Radio,
  ArrowLeft,
  CheckCircle2,
  FolderOpen,
  Loader2,
} from 'lucide-react';
import Header from '@repo/ui/Header';
import Footer from '@repo/ui/Footer';
import { fetchAllSessions } from '../api/api';

interface SessionsType {
  id: number;
  userId: number;
  sessionCode: string;
  sessionName: string;
}

export default function AllSessions() {
  const [sessions, setSessions] = useState<SessionsType[]>([]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function getSessions() {
      setIsLoading(true);
      try {
        const response = await fetchAllSessions();
        if (response.data && response.data.sessions) {
          setSessions(response.data.sessions);
        }
      } catch (err) {
        console.error('Failed to fetch sessions:', err);
      } finally {
        setIsLoading(false);
      }
    }
    getSessions();
  }, []);

  const copySessionCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#07080b] text-slate-100 flex flex-col justify-between font-sans relative overflow-hidden">
      <Header />

      {/* Atmospheric ambient glows */}
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10 space-y-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate('/dashboard')}
                className="inline-flex items-center text-xs font-medium text-zinc-400 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mr-2 group-hover:border-white/20 transition-colors">
                  <ArrowLeft className="w-3.5 h-3.5" />
                </div>
                <span>Dashboard</span>
              </button>
              <span className="text-zinc-600">•</span>
              <span className="text-xs font-mono text-zinc-400">All Archive</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Studio Session Directory
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400">
              Browse your complete history of remote recording sessions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/createSession"
              className="btn-luxury btn-luxury-primary text-xs py-2 px-4 flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>New Session</span>
            </Link>
          </div>
        </div>

        {/* Sessions Grid */}
        <div>
          {isLoading ? (
            <div className="py-24 text-center space-y-3">
              <Loader2 className="w-8 h-8 text-indigo-400 animate-spin mx-auto" />
              <p className="text-xs text-zinc-400">Loading your production sessions...</p>
            </div>
          ) : sessions && sessions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  className="obsidian-card p-6 border-white/[0.08] obsidian-card-hover flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">
                        <Mic className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                        ID #{session.id}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-base font-bold text-white tracking-tight">
                        {session.sessionName}
                      </h2>
                      <div className="flex items-center space-x-2 text-xs text-zinc-400 mt-2 font-mono">
                        <span className="bg-black/40 px-2 py-1 rounded border border-white/5 truncate max-w-[150px]">
                          {session.sessionCode}
                        </span>
                        <button
                          onClick={() => copySessionCode(session.sessionCode)}
                          className="text-indigo-400 hover:text-indigo-300 transition-colors p-1"
                          title="Copy session code"
                        >
                          {copiedCode === session.sessionCode ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <button
                      onClick={() =>
                        navigate('/nsender', {
                          state: { sessionCode: session.sessionCode, sessionid: session.id },
                        })
                      }
                      className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                    >
                      <Radio className="w-3.5 h-3.5" />
                      <span>Host Studio</span>
                    </button>

                    <button
                      onClick={() =>
                        navigate('/recentSession', {
                          state: { sessionId: session.id },
                        })
                      }
                      className="text-xs font-medium text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Tracks</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="obsidian-card p-16 text-center space-y-4 border-white/[0.08]">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mx-auto shadow-inner">
                <FolderOpen className="w-7 h-7" />
              </div>
              <div className="space-y-1 max-w-sm mx-auto">
                <h3 className="text-base font-bold text-white">No Sessions Found</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  You haven’t created any recording sessions yet.
                </p>
              </div>
              <div>
                <Link
                  to="/createSession"
                  className="btn-luxury btn-luxury-primary text-xs py-2.5 px-5 inline-flex items-center gap-2 mt-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create New Session</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}