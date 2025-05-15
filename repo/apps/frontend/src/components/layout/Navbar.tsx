import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../common/Button';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  const transparentNav = isHomePage && !isMenuOpen;
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { title: 'Features', href: '/#features' },
    { title: 'Pricing', href: '/#pricing' },
    { title: 'Resources', href: '/#resources' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparentNav 
          ? 'bg-transparent text-white' 
          : 'bg-white text-gray-800 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 mr-2"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span className="font-bold text-xl">Wavecast</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                  transparentNav ? 'text-white hover:text-blue-200' : 'text-gray-700'
                }`}
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Auth buttons - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard">
                  <Button variant="outline" className={transparentNav ? 'border-white text-white' : ''}>
                    Dashboard
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  onClick={logout}
                  className={transparentNav ? 'text-white' : ''}
                >
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button 
                    variant="ghost" 
                    className={transparentNav ? 'text-white' : ''}
                  >
                    Log in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant={transparentNav ? 'outline' : 'primary'} className={transparentNav ? 'border-white text-white' : ''}>
                    Sign up free
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </a>
          ))}
        </div>
        
        {/* Auth buttons - Mobile */}
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-5 space-y-3 flex-col">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" fullWidth>
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" onClick={() => { logout(); setIsMenuOpen(false); }} fullWidth>
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" fullWidth>
                    Log in
                  </Button>
                </Link>
                <Link to="/signup" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" fullWidth>
                    Sign up free
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;