import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const isLoggedIn = !!localStorage.getItem('JWT');

  return (
    <footer className="w-full bg-[#07080b] border-t border-white/[0.07] text-zinc-400 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Brief Tagline */}
          <div className="flex items-center space-x-3.5">
            <Link to={isLoggedIn ? '/dashboard' : '/'} className="flex items-center space-x-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/20 border border-white/10 group-hover:scale-105 transition-transform duration-200">
                <Mic className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors">
                RiverSide
              </span>
            </Link>
            <span className="text-zinc-600 text-xs hidden sm:inline">•</span>
            <span className="text-xs text-zinc-400 hidden sm:inline">
              Precision studio recording & lossless multi-tracks
            </span>
          </div>

          {/* Quick Studio Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-zinc-400">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="hover:text-white transition-colors">
                  Dashboard
                </Link>
                <Link to="/createSession" className="hover:text-white transition-colors">
                  New Session
                </Link>
                <Link to="/allSessions" className="hover:text-white transition-colors">
                  Recordings
                </Link>
                <Link to="/joinSession" className="hover:text-white transition-colors">
                  Join Studio
                </Link>
              </>
            ) : (
              <>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  Architecture
                </a>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
                <Link to="/login" className="hover:text-white transition-colors">
                  Sign In
                </Link>
              </>
            )}
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
              title="Twitter"
            >
              <Twitter className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Twitter</span>
            </a>
          </nav>
        </div>

        {/* Hairline Separator & Copyright */}
        <div className="mt-6 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} RiverSide Studio. All rights reserved.</p>
          
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-zinc-400 font-mono text-[11px]">Studio Network Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;