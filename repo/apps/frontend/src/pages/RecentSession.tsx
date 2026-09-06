import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllVideosApi } from '../api/api';
import {
  Download,
  ArrowLeft,
  Home,
  Video,
  FolderOpen,
  Loader2,
  RefreshCw,
} from 'lucide-react';
import Header from '@repo/ui/Header';
import Footer from '@repo/ui/Footer';

export default function RecentSession() {
  const location = useLocation();
  const navigate = useNavigate();
  const sessionId = location?.state?.sessionId;
  const [recordings, setRecordings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getVideos = async () => {
    if (!sessionId) return;
    setLoading(true);
    try {
      const response = await getAllVideosApi(sessionId);
      if (response.data && response.data.recordings) {
        setRecordings(response.data.recordings);
      }
    } catch (err) {
      console.error('Failed to fetch session recordings:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (sessionId) {
      getVideos();
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  const downloadVideo = (videoUrl: string, index: number) => {
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = `riverside-track-${sessionId}-${index + 1}-${new Date()
      .toISOString()
      .split('T')[0]}.webm`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#07080b] text-slate-100 flex flex-col justify-between font-sans relative overflow-hidden">
      <Header />

      {/* Atmospheric ambient glows */}
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10 space-y-8">
        {/* Navigation & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate('/dashboard')}
                className="inline-flex items-center text-xs font-medium text-zinc-400 hover:text-white transition-colors group"
                title="Return to dashboard"
              >
                <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mr-2 group-hover:border-white/20 transition-colors">
                  <ArrowLeft className="w-3.5 h-3.5" />
                </div>
                <span>Dashboard</span>
              </button>
              <span className="text-zinc-600">•</span>
              <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                Session #{sessionId || 'N/A'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Session Master Tracks
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400">
              Access and download full-quality isolated video & audio recordings stored on AWS S3.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={getVideos}
              disabled={loading}
              className="btn-luxury btn-luxury-secondary text-xs py-2 px-3.5 flex items-center gap-1.5"
              title="Refresh recordings"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh Tracks</span>
            </button>

            <button
              onClick={() => navigate('/dashboard')}
              className="btn-luxury btn-luxury-primary text-xs py-2 px-4 flex items-center gap-1.5"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Studio Dashboard</span>
            </button>
          </div>
        </div>

        {/* Video Grid */}
        <div>
          {loading ? (
            <div className="py-24 text-center space-y-3">
              <Loader2 className="w-8 h-8 text-indigo-400 animate-spin mx-auto" />
              <p className="text-xs text-zinc-400">Fetching cloud recordings from AWS S3...</p>
            </div>
          ) : recordings && recordings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {recordings.map((vid: any, index: number) => (
                <div
                  key={index}
                  className="obsidian-card border-white/[0.08] overflow-hidden group shadow-2xl flex flex-col justify-between"
                >
                  {/* Card Header */}
                  <div className="p-4 sm:p-5 bg-white/[0.02] border-b border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Video className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white tracking-tight">
                          Track #{index + 1}
                        </h3>
                        <span className="text-[10px] font-mono text-zinc-500">
                          Isolated WebM Stream
                        </span>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-semibold uppercase tracking-wider">
                      S3 Archived
                    </span>
                  </div>

                  {/* Cinema Video Container */}
                  <div className="p-4 sm:p-5 flex flex-col items-center">
                    <div className="w-full aspect-video rounded-xl bg-black/80 border border-white/[0.08] overflow-hidden shadow-inner relative flex items-center justify-center">
                      <video
                        src={vid.s3Url}
                        controls
                        playsInline
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Download Action Bar */}
                  <div className="p-4 sm:p-5 bg-white/[0.01] border-t border-white/[0.06] flex items-center justify-between gap-3">
                    <span className="text-[11px] font-mono text-zinc-500 truncate max-w-[200px]" title={vid.s3Url}>
                      {vid.s3Url}
                    </span>

                    <button
                      onClick={() => downloadVideo(vid.s3Url, index)}
                      className="btn-luxury btn-luxury-primary text-xs py-2 px-4 flex items-center gap-1.5 shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Master</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="obsidian-card p-16 text-center space-y-4 border-white/[0.08]">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mx-auto shadow-inner">
                <FolderOpen className="w-7 h-7" />
              </div>
              <div className="space-y-1 max-w-sm mx-auto">
                <h3 className="text-base font-bold text-white">No Cloud Tracks Available</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  This session does not have any completed recordings uploaded to S3 yet. Once you complete a recording in the studio room, master tracks will appear here.
                </p>
              </div>
              <div>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="btn-luxury btn-luxury-secondary text-xs py-2 px-4 inline-flex items-center gap-2 mt-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to Dashboard</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
