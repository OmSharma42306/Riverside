import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mic, LogOut, LayoutDashboard } from 'lucide-react';

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
    <header className={`w-full py-4 ${isLandingPage ? 'absolute top-0 z-10' : 'bg-gray-900 border-b border-gray-800'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* RiverSide Logo - Always goes to Dashboard when logged in, or Landing when logged out */}
        <Link to={homeRoute} className="flex items-center space-x-2 group">
          <Mic size={28} className="text-indigo-500 group-hover:text-indigo-400 transition" />
          <span className="text-xl font-bold text-white group-hover:text-gray-200 transition">RiverSide</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {isLandingPage ? (
            <>
              <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition">Testimonials</a>
            </>
          ) : isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                className={`text-sm font-medium transition ${
                  location.pathname === '/dashboard' ? 'text-indigo-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                Dashboard
              </Link>
              <Link
                to="/createSession"
                className={`text-sm font-medium transition ${
                  location.pathname === '/createSession' ? 'text-indigo-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                New Session
              </Link>
              <Link
                to="/joinSession"
                className={`text-sm font-medium transition ${
                  location.pathname === '/joinSession' ? 'text-indigo-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                Join Session
              </Link>
            </>
          ) : null}
        </nav>
        
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              {isLandingPage ? (
                <>
                  <Link to="/dashboard" className="btn btn-primary flex items-center gap-1.5 text-sm">
                    <LayoutDashboard size={16} />
                    <span>Dashboard</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="btn btn-secondary flex items-center gap-1.5 text-sm hover:bg-red-500/20 hover:text-red-400 transition"
                  >
                    <LogOut size={16} />
                    <span>Log out</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="btn btn-outline flex items-center gap-1.5 text-sm hover:bg-red-500/10 hover:border-red-500 hover:text-red-400 transition cursor-pointer"
                  title="Sign out"
                >
                  <LogOut size={16} />
                  <span>Log out</span>
                </button>
              )}
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-secondary">Log in</Link>
              <Link to="/signup" className="btn btn-primary">Sign up</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;