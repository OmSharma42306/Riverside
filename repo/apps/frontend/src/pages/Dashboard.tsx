import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mic,
  Plus,
  Video,
  Search,
  Radio,
  Copy,
  CheckCircle2,
  Layers,
  HardDrive,
  FolderOpen,
} from 'lucide-react';
import Header from '@repo/ui/Header';
import Footer from '@repo/ui/Footer';
import { fetchAllSessions } from '../api/api';
import type { SessionType } from '../types';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState<SessionType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function runFetchAllSessions() {
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
    runFetchAllSessions();
  }, []);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const filteredSessions = sessions.filter(
    (s) =>
      s.sessionName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.sessionCode?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#07080b] text-slate-100 flex flex-col justify-between font-sans relative overflow-hidden">
      <Header />

      {/* Atmospheric ambient glows */}
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10 space-y-10">
        {/* Page Top Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Broadcast Control Center</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Studio Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Manage live recording rooms, track archives, and production sessions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigate('/joinSession')}
              className="btn-luxury btn-luxury-secondary text-xs py-2.5 px-4 flex items-center gap-2"
            >
              <Radio className="w-3.5 h-3.5 text-indigo-400" />
              <span>Join via Code</span>
            </button>

            <button
              onClick={() => navigate('/createSession')}
              className="btn-luxury btn-luxury-primary text-xs py-2.5 px-5 flex items-center gap-2 shadow-lg shadow-indigo-600/20"
            >
              <Plus className="w-4 h-4" />
              <span>New Studio Session</span>
            </button>
          </div>
        </div>

        {/* Live Studio Metric Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="obsidian-card p-6 border-white/[0.08]">
            <div className="flex items-center justify-between mb-3 text-zinc-400">
              <span className="text-xs font-semibold uppercase tracking-wider">Total Sessions</span>
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Mic className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-extrabold text-white tracking-tight">
              {sessions.length}
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">Multi-track rooms created</p>
          </div>

          <div className="obsidian-card p-6 border-white/[0.08]">
            <div className="flex items-center justify-between mb-3 text-zinc-400">
              <span className="text-xs font-semibold uppercase tracking-wider">Master Resolution</span>
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Video className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-extrabold text-white tracking-tight">
              4K 60FPS
            </div>
            <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Lossless Local Capture
            </p>
          </div>

          <div className="obsidian-card p-6 border-white/[0.08]">
            <div className="flex items-center justify-between mb-3 text-zinc-400">
              <span className="text-xs font-semibold uppercase tracking-wider">Storage Pipeline</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <HardDrive className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-extrabold text-white tracking-tight">
              AWS S3
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">Direct S3 bucket sync</p>
          </div>

          <div className="obsidian-card p-6 border-white/[0.08]">
            <div className="flex items-center justify-between mb-3 text-zinc-400">
              <span className="text-xs font-semibold uppercase tracking-wider">Merge Worker</span>
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Layers className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-extrabold text-white tracking-tight">
              BullMQ
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">Background chunk pipeline</p>
          </div>
        </div>

        {/* Sessions Workspace */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">Your Studio Sessions</h2>
              <p className="text-xs text-zinc-400">Select a session to enter the recording booth or inspect merged master tracks.</p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-zinc-500" />
              </div>
              <input
                type="text"
                placeholder="Search sessions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>
          </div>

          {/* Sessions List */}
          <div className="obsidian-card border-white/[0.08] overflow-hidden">
            {isLoading ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-xs text-zinc-400">Loading your production sessions...</p>
              </div>
            ) : filteredSessions && filteredSessions.length > 0 ? (
              <div className="divide-y divide-white/[0.06]">
                {filteredSessions.map((session) => (
                  <div
                    key={session.id.toString()}
                    className="p-5 sm:p-6 hover:bg-white/[0.02] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                  >
                    {/* Session Info */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">
                          <Mic className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                            {session.sessionName}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 mt-0.5 text-xs text-zinc-400">
                            <span className="font-mono text-[11px] text-zinc-500">
                              ID: #{session.id}
                            </span>
                            <span className="text-zinc-600">•</span>
                            <span className="font-mono text-[11px] bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06] text-zinc-300">
                              {session.sessionCode}
                            </span>
                            <button
                              onClick={() => handleCopy(session.sessionCode)}
                              className="inline-flex items-center gap-1 text-[11px] font-medium text-indigo-400 hover:text-indigo-300 transition-colors ml-1 cursor-pointer"
                              title="Copy session code to clipboard"
                            >
                              {copiedCode === session.sessionCode ? (
                                <>
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                  <span className="text-emerald-400">Copied</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  <span>Copy Code</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-2.5 pt-2 md:pt-0">
                      {/* Host Broadcast */}
                      <button
                        onClick={() =>
                          navigate('/nsender', {
                            state: { sessionCode: session.sessionCode, sessionid: session.id },
                          })
                        }
                        className="btn-luxury btn-luxury-primary text-xs py-2 px-3.5 flex items-center gap-1.5"
                        title="Enter live broadcast as Host"
                      >
                        <Radio className="w-3.5 h-3.5 animate-pulse" />
                        <span>Host Studio</span>
                      </button>

                      {/* Guest Room */}
                      <button
                        onClick={() =>
                          navigate('/nreceiver', {
                            state: { sessionCode: session.sessionCode, sessionId: session.id },
                          })
                        }
                        className="btn-luxury btn-luxury-secondary text-xs py-2 px-3 flex items-center gap-1.5"
                        title="Enter live broadcast as Guest"
                      >
                        <Video className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Guest Room</span>
                      </button>

                      {/* View S3 Recordings */}
                      <button
                        onClick={() =>
                          navigate('/recentSession', {
                            state: { sessionId: session.id },
                          })
                        }
                        className="btn-luxury btn-luxury-secondary text-xs py-2 px-3 flex items-center gap-1.5"
                        title="Inspect and download uploaded master tracks"
                      >
                        <FolderOpen className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Recordings</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* High-End Empty State */
              <div className="py-20 px-4 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mx-auto shadow-inner">
                  <FolderOpen className="w-8 h-8" />
                </div>
                <div className="space-y-1 max-w-sm mx-auto">
                  <h3 className="text-base font-bold text-white">No Studio Sessions Found</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {searchTerm
                      ? `No sessions matching "${searchTerm}". Try a different search.`
                      : 'Launch your first multi-track recording session to get started.'}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => navigate('/createSession')}
                    className="btn-luxury btn-luxury-primary text-xs py-2.5 px-5 inline-flex items-center gap-2 mt-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create Your First Session</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;