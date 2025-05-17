import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mic } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  
  return (
    <header className={`w-full py-4 ${isLandingPage ? 'absolute top-0 z-10' : 'bg-gray-900 border-b border-gray-800'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Mic size={28} className="text-indigo-500" />
          <span className="text-xl font-bold">RiverSide</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {isLandingPage && (
            <>
              <Link to="/#features" className="text-gray-300 hover:text-white transition">Features</Link>
              <Link to="/#pricing" className="text-gray-300 hover:text-white transition">Pricing</Link>
              <Link to="/#testimonials" className="text-gray-300 hover:text-white transition">Testimonials</Link>
            </>
          )}
        </nav>
        
        <div className="flex items-center space-x-4">
          {isLandingPage ? (
            <>
              <Link to="/login" className="btn btn-secondary">Log in</Link>
              <Link to="/signup" className="btn btn-primary">Sign up</Link>
            </>
          ) : location.pathname === '/dashboard' ? (
            <Link to="/" className="btn btn-outline" onClick={()=>{
              localStorage.removeItem("JWT")
            }}>Log out</Link>
          ) : (
            // <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
            ""
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;