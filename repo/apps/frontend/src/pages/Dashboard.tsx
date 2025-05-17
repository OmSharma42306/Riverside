import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mic, Plus, Video, Clock, MoreVertical, Search, Settings, Filter, Play, Edit, Trash2, Download } from 'lucide-react';
import Header from '@repo/ui/Header';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('recent');
  const navigate = useNavigate();
  
  const recordings = [
    {
      id: 1,
      title: 'Interview with Dr. Sarah Johnson',
      date: 'Apr 12, 2025',
      duration: '45:22',
      type: 'audio',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Weekly Podcast Episode 23',
      date: 'Apr 8, 2025',
      duration: '32:15',
      type: 'video',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Marketing Team Discussion',
      date: 'Apr 3, 2025',
      duration: '51:07',
      type: 'video',
      status: 'editing'
    },
    {
      id: 4,
      title: 'Product Launch Planning',
      date: 'Mar 28, 2025',
      duration: '28:45',
      type: 'audio',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Guest Interview - Tech Trends',
      date: 'Mar 22, 2025',
      duration: '39:18',
      type: 'video',
      status: 'completed'
    },
  ];
  
  const handleRecordingAction = (action: string, id: number) => {
    console.log(`${action} recording ${id}`);
    // In a real app, you would implement these actions
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-900 pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-gray-400">Manage your recordings, projects, and media</p>
            </div>
            
            <div className="flex space-x-3 mt-4 md:mt-0">
              <button className="btn btn-outline flex items-center">
                <Settings size={18} className="mr-2" />
                Settings
              </button>
              <button className="btn btn-primary flex items-center" onClick={()=>{
                navigate("/createRoom")
              }}>
                <Plus size={18} className="mr-2" />
                New Recording
              </button>
               <button className="btn btn-primary flex items-center" onClick={()=>{
                navigate("/joinRoom")
              }}>
                <Plus size={18} className="mr-2" />
                Join Via RoomId
              </button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="card bg-indigo-900/30 border border-indigo-800">
              <h3 className="text-lg font-medium mb-3 text-gray-300">Total Recordings</h3>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold">28</div>
                <Mic size={28} className="text-indigo-400" />
              </div>
            </div>
            
            <div className="card bg-purple-900/30 border border-purple-800">
              <h3 className="text-lg font-medium mb-3 text-gray-300">Recording Hours</h3>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold">16.5</div>
                <Clock size={28} className="text-purple-400" />
              </div>
            </div>
            
            <div className="card bg-blue-900/30 border border-blue-800">
              <h3 className="text-lg font-medium mb-3 text-gray-300">Studio Quality</h3>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold">1080p</div>
                <Video size={28} className="text-blue-400" />
              </div>
            </div>
            
            <div className="card bg-green-900/30 border border-green-800">
              <h3 className="text-lg font-medium mb-3 text-gray-300">Storage Used</h3>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold">3.8 GB</div>
                <div className="w-8 h-8 rounded-full bg-green-800/50 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-green-400"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between mb-6 gap-4">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search recordings..."
                className="input pl-10"
              />
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="btn btn-secondary flex items-center">
                <Filter size={18} className="mr-2" />
                Filter
              </button>
              
              <div className="border-l border-gray-700 h-8 hidden md:block"></div>
              
              <div className="bg-gray-800 rounded-lg p-1 flex">
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'recent' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('recent')}
                >
                  Recent
                </button>
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'editing' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('editing')}
                >
                  Editing
                </button>
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'archived' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('archived')}
                >
                  Archived
                </button>
              </div>
            </div>
          </div>
          
          {/* Recordings Table */}
          <div className="bg-gray-800 rounded-xl overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-850">
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {recordings.map((recording) => (
                    <tr key={recording.id} className="hover:bg-gray-750 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${
                            recording.type === 'video' ? 'bg-blue-900/30' : 'bg-indigo-900/30'
                          } flex items-center justify-center`}>
                            {recording.type === 'video' ? (
                              <Video size={18} className="text-blue-400" />
                            ) : (
                              <Mic size={18} className="text-indigo-400" />
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium">{recording.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{recording.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{recording.duration}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          recording.type === 'video' 
                            ? 'bg-blue-900/20 text-blue-400' 
                            : 'bg-indigo-900/20 text-indigo-400'
                        }`}>
                          {recording.type === 'video' ? 'Video' : 'Audio'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          recording.status === 'completed' 
                            ? 'bg-green-900/20 text-green-400' 
                            : 'bg-yellow-900/20 text-yellow-400'
                        }`}>
                          {recording.status === 'completed' ? 'Completed' : 'Editing'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-3">
                          <button 
                            onClick={() => handleRecordingAction('play', recording.id)}
                            className="text-gray-400 hover:text-indigo-400 transition-colors"
                          >
                            <Play size={18} />
                          </button>
                          <button 
                            onClick={() => handleRecordingAction('edit', recording.id)}
                            className="text-gray-400 hover:text-indigo-400 transition-colors"
                          >
                            <Edit size={18} />
                          </button>
                          <button 
                            onClick={() => handleRecordingAction('download', recording.id)}
                            className="text-gray-400 hover:text-indigo-400 transition-colors"
                          >
                            <Download size={18} />
                          </button>
                          <button 
                            onClick={() => handleRecordingAction('delete', recording.id)}
                            className="text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-lg font-medium mb-4">Quick Start</h3>
              <div className="space-y-3">
                <button className="w-full btn btn-secondary flex items-center justify-center">
                  <Mic size={18} className="mr-2" />
                  New Audio Recording
                </button>
                <button className="w-full btn btn-secondary flex items-center justify-center">
                  <Video size={18} className="mr-2" />
                  New Video Recording
                </button>
                <button className="w-full btn btn-outline flex items-center justify-center">
                  <Plus size={18} className="mr-2" />
                  Schedule Session
                </button>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3"></div>
                  <div>
                    <p className="text-sm">Completed recording <span className="text-indigo-400">"Interview with Dr. Sarah Johnson"</span></p>
                    <p className="text-xs text-gray-400">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-3"></div>
                  <div>
                    <p className="text-sm">Started editing <span className="text-indigo-400">"Marketing Team Discussion"</span></p>
                    <p className="text-xs text-gray-400">Yesterday at 3:45 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3"></div>
                  <div>
                    <p className="text-sm">Exported <span className="text-indigo-400">"Weekly Podcast Episode 23"</span></p>
                    <p className="text-xs text-gray-400">Yesterday at 11:20 AM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-medium mb-4">Storage</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Used</span>
                    <span>3.8 GB / 10 GB</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: '38%' }}></div>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-400">Video recordings</span>
                    <span>2.5 GB</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-400">Audio recordings</span>
                    <span>1.2 GB</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Other files</span>
                    <span>0.1 GB</span>
                  </div>
                </div>
                <div className="pt-2">
                  <button className="w-full btn btn-outline flex items-center justify-center text-sm">
                    Upgrade Storage
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;