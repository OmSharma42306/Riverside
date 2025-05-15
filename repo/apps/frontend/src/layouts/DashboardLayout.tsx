import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Home, 
  Mic, 
  Video, 
  Settings, 
  Inbox, 
  Users, 
  Clock, 
  ChevronLeft, 
  ChevronRight,
  LogOut 
} from 'lucide-react';

const DashboardLayout: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const { user, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <Home size={20} /> },
    { name: 'Recordings', path: '/dashboard/recordings', icon: <Mic size={20} /> },
    { name: 'Videos', path: '/dashboard/videos', icon: <Video size={20} /> },
    { name: 'Schedules', path: '/dashboard/schedules', icon: <Clock size={20} /> },
    { name: 'Guests', path: '/dashboard/guests', icon: <Users size={20} /> },
    { name: 'Inbox', path: '/dashboard/inbox', icon: <Inbox size={20} /> },
    { name: 'Settings', path: '/dashboard/settings', icon: <Settings size={20} /> },
  ];

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex h-screen bg-gray-100 pt-16">
      {/* Sidebar */}
      <div 
        className={`fixed left-0 top-16 h-screen z-10 transition-all duration-300 bg-white border-r border-gray-200 shadow-sm ${
          expanded ? 'w-64' : 'w-20'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex justify-end">
            <button 
              onClick={toggleSidebar} 
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <nav className="px-3 pb-4">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`flex items-center px-3 py-3 rounded-lg text-sm transition-colors ${
                        location.pathname === item.path
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="inline-flex">{item.icon}</span>
                      {expanded && <span className="ml-3">{item.name}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className={`flex ${expanded ? 'items-center' : 'flex-col items-center'}`}>
              <img 
                src={user?.avatarUrl || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'} 
                alt={user?.name || 'User'} 
                className="h-10 w-10 rounded-full mr-3"
              />
              {expanded && (
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{user?.name}</p>
                  <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                </div>
              )}
              <button
                onClick={logout}
                className="p-2 ml-auto text-gray-500 hover:text-red-500 transition-colors"
                title="Log out"
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={`flex-1 transition-all duration-300 ${expanded ? 'ml-64' : 'ml-20'}`}>
        <div className="container mx-auto px-4 py-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;