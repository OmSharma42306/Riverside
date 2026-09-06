import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mic, LogOut, LayoutDashboard, Plus, Radio, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === '/';
  const isLoggedIn = !!localStorage.getItem('JWT');
  const homeRoute = isLoggedIn ? '/dashboard' : '/';

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem('JWT');
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#07080b]/80 backdrop-blur-xl border-b border-white/[0.07] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-8">
          <Link to={homeRoute} className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 border border-white/20 group-hover:scale-105 transition-transform duration-200">
              <Mic className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors">
                RiverSide
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-zinc-500 -mt-0.5">
                Studio
              </span>
            </div>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {isLandingPage ? (
              <>
                <a
                  href="#features"
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-all"
                >
                  Capabilities
                </a>
                <a
                  href="#how-it-works"
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-all"
                >
                  Architecture
                </a>
                <a
                  href="#pricing"
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-all"
                >
                  Pricing
                </a>
              </>
            ) : isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    location.pathname === '/dashboard'
                      ? 'bg-white/[0.08] text-white shadow-inner'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/createSession"
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    location.pathname === '/createSession'
                      ? 'bg-white/[0.08] text-white shadow-inner'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <Plus className="w-3.5 h-3.5" />
                  New Session
                </Link>
                <Link
                  to="/joinSession"
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    location.pathname === '/joinSession'
                      ? 'bg-white/[0.08] text-white shadow-inner'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <Radio className="w-3 h-3 text-indigo-400 animate-pulse" />
                  Join Studio
                </Link>
              </>
            ) : null}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          {isLoggedIn ? (
            <>
              {isLandingPage ? (
                <Link
                  to="/dashboard"
                  className="btn-luxury btn-luxury-primary text-xs py-2 px-4 flex items-center gap-1.5"
                >
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>Go to Studio</span>
                </Link>
              ) : (
                <Link
                  to="/createSession"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold py-1.5 px-3 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Host Broadcast</span>
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-red-400 hover:bg-red-500/10 border border-white/[0.08] hover:border-red-500/30 transition-all cursor-pointer"
                title="Sign out of your studio session"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log out</span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-all"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="btn-luxury btn-luxury-primary text-xs py-2 px-4"
              >
                Start Recording Free
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;