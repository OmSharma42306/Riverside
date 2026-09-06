import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#07080b] text-slate-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-600/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-6 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto text-indigo-400">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>
        
        <div className="space-y-2">
          <p className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">404 Error</p>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Stage Not Found</h1>
          <p className="text-sm text-slate-400">
            The studio session or recording URL you are looking for does not exist or has been archived.
          </p>
        </div>
        
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/25"
          >
            <Home className="w-4 h-4" />
            <span>Return to Riverside</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;