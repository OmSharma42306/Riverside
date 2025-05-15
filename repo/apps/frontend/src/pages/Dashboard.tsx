import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Calendar, 
  List, 
  Grid, 
  MoreVertical, 
  Clock,
  Users,
  Mic
} from 'lucide-react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { useAuth } from '../context/AuthContext';
import { Recording, Project } from '../types';

// Mock data for example
const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Tech Today Podcast',
    description: 'Weekly discussions about the latest in tech',
    recordings: [
      {
        id: '101',
        title: 'Episode 42: The Future of AI',
        description: 'We discuss the implications of recent AI advancements',
        participants: [
          {
            id: '1',
            name: 'John Doe',
            email: 'john@example.com',
            isHost: true,
          },
          {
            id: '2',
            name: 'Jane Smith',
            email: 'jane@example.com',
            isHost: false,
          }
        ],
        status: 'ready',
        createdAt: new Date('2023-05-10'),
        updatedAt: new Date('2023-05-15'),
        duration: 3540, // 59 minutes
        thumbnailUrl: 'https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: '102',
        title: 'Episode 43: Cybersecurity Trends',
        description: 'Exploring the latest cybersecurity challenges',
        participants: [
          {
            id: '1',
            name: 'John Doe',
            email: 'john@example.com',
            isHost: true,
          },
          {
            id: '3',
            name: 'Mike Johnson',
            email: 'mike@example.com',
            isHost: false,
          }
        ],
        status: 'processing',
        createdAt: new Date('2023-05-17'),
        updatedAt: new Date('2023-05-17'),
        duration: 2700, // 45 minutes
        thumbnailUrl: 'https://images.pexels.com/photos/9821104/pexels-photo-9821104.jpeg?auto=compress&cs=tinysrgb&w=600',
      }
    ],
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2023-05-17'),
  },
  {
    id: '2',
    title: 'Startup Stories',
    description: 'Interviews with successful entrepreneurs',
    recordings: [
      {
        id: '201',
        title: 'Interview with Sarah Chen, Founder of GreenTech',
        description: 'Sarah shares her journey building a sustainable tech company',
        participants: [
          {
            id: '1',
            name: 'John Doe',
            email: 'john@example.com',
            isHost: true,
          },
          {
            id: '4',
            name: 'Sarah Chen',
            email: 'sarah@greentech.com',
            isHost: false,
          }
        ],
        status: 'ready',
        createdAt: new Date('2023-04-20'),
        updatedAt: new Date('2023-04-25'),
        duration: 4500, // 75 minutes
        thumbnailUrl: 'https://images.pexels.com/photos/4342400/pexels-photo-4342400.jpeg?auto=compress&cs=tinysrgb&w=600',
      }
    ],
    createdAt: new Date('2023-02-10'),
    updatedAt: new Date('2023-04-25'),
  }
];

// Mock upcoming recordings
const mockUpcomingRecordings = [
  {
    id: '301',
    title: 'Tech Today Podcast - Episode 44',
    scheduledFor: new Date(Date.now() + 86400000), // Tomorrow
    participants: ['John Doe', 'Jane Smith', 'Mike Johnson'],
  },
  {
    id: '302',
    title: 'Startup Stories - Interview with Jason Wong',
    scheduledFor: new Date(Date.now() + 259200000), // 3 days from now
    participants: ['John Doe', 'Jason Wong'],
  }
];

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [projects] = useState<Project[]>(mockProjects);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter recordings based on search query
  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.recordings.some(recording => 
      recording.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Get all recordings across all projects
  const allRecordings = projects.flatMap(project => 
    project.recordings.map(recording => ({
      ...recording,
      projectTitle: project.title
    }))
  );

  // Sort recordings by date (newest first)
  const sortedRecordings = [...allRecordings].sort(
    (a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()
  );

  // Format duration from seconds to MM:SS
  const formatDuration = (seconds: number | undefined) => {
    if (!seconds) return '00:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Format date to readable string
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-8">
      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome back, {user?.name?.split(' ')[0]}!</h1>
          <p className="text-gray-600">Manage your recordings and create new content</p>
        </div>
        <Link to="/dashboard/studio/new">
          <Button leftIcon={<Plus size={16} />}>
            New Recording
          </Button>
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
              <Mic size={24} />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Total Recordings</p>
              <h3 className="text-2xl font-bold text-gray-800">{allRecordings.length}</h3>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Upcoming Sessions</p>
              <h3 className="text-2xl font-bold text-gray-800">{mockUpcomingRecordings.length}</h3>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
              <Users size={24} />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Total Guests</p>
              <h3 className="text-2xl font-bold text-gray-800">
                {new Set(allRecordings.flatMap(r => 
                  r.participants.filter(p => !p.isHost).map(p => p.id)
                )).size}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Recordings */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-800">Upcoming Recordings</h2>
            <Link to="/dashboard/schedules" className="text-sm text-blue-600 hover:text-blue-800">
              View all
            </Link>
          </div>
        </div>
        
        <div className="divide-y divide-gray-100">
          {mockUpcomingRecordings.length > 0 ? (
            mockUpcomingRecordings.map(recording => (
              <div key={recording.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{recording.title}</h3>
                      <p className="text-sm text-gray-500">
                        {recording.scheduledFor.toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-4">
                      {recording.participants.slice(0, 3).map((name, i) => (
                        <div 
                          key={i} 
                          className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-800"
                          title={name}
                        >
                          {name.charAt(0)}
                        </div>
                      ))}
                      {recording.participants.length > 3 && (
                        <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-800">
                          +{recording.participants.length - 3}
                        </div>
                      )}
                    </div>
                    <Button size="sm">Join</Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center">
              <p className="text-gray-500">No upcoming recordings scheduled</p>
              <Link to="/dashboard/schedules/new">
                <Button variant="outline" size="sm" className="mt-4">
                  Schedule a recording
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Recordings List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
            <h2 className="text-lg font-bold text-gray-800">Recent Recordings</h2>
            <div className="flex items-center space-x-4">
              <Input
                placeholder="Search recordings..."
                leftIcon={<Search size={18} />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64"
              />
              <div className="flex bg-gray-100 rounded-md p-1">
                <button
                  className={`p-1.5 rounded-md ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                >
                  <Grid size={18} />
                </button>
                <button
                  className={`p-1.5 rounded-md ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                  onClick={() => setViewMode('list')}
                  aria-label="List view"
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.flatMap(project => 
                project.recordings.map(recording => (
                  <div 
                    key={recording.id} 
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative aspect-video bg-gray-100">
                      {recording.thumbnailUrl ? (
                        <img 
                          src={recording.thumbnailUrl} 
                          alt={recording.title} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Mic size={32} className="text-gray-400" />
                        </div>
                      )}
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                        {formatDuration(recording.duration)}
                      </div>
                      {recording.status === 'processing' && (
                        <div className="absolute top-2 left-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center">
                          <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1.5 animate-pulse"></div>
                          Processing
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 truncate">{recording.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{project.title}</p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-gray-500 text-xs">
                          {formatDate(recording.updatedAt)}
                        </span>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )
            ) : (
              <div className="col-span-full p-8 text-center">
                <p className="text-gray-500">No recordings found matching "{searchQuery}"</p>
                <Button variant="outline" size="sm" className="mt-4" onClick={() => setSearchQuery('')}>
                  Clear search
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {sortedRecordings.length > 0 ? (
              filteredProjects.flatMap(project => 
                project.recordings
                  .filter(recording => 
                    recording.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    project.title.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map(recording => (
                    <div 
                      key={recording.id} 
                      className="p-4 hover:bg-gray-50 transition-colors flex items-center"
                    >
                      <div className="w-16 h-12 mr-4 relative rounded overflow-hidden flex-shrink-0">
                        {recording.thumbnailUrl ? (
                          <img 
                            src={recording.thumbnailUrl} 
                            alt={recording.title} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="bg-gray-100 w-full h-full flex items-center justify-center">
                            <Mic size={20} className="text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="font-medium text-gray-900 truncate">{recording.title}</h3>
                        <p className="text-gray-500 text-sm">{project.title}</p>
                      </div>
                      <div className="text-right ml-4">
                        <p className="text-sm text-gray-900">{formatDuration(recording.duration)}</p>
                        <p className="text-xs text-gray-500">{formatDate(recording.updatedAt)}</p>
                      </div>
                      <div className="ml-4">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <MoreVertical size={16} className="text-gray-500" />
                        </button>
                      </div>
                    </div>
                  ))
              )
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-500">No recordings found matching "{searchQuery}"</p>
                <Button variant="outline" size="sm" className="mt-4" onClick={() => setSearchQuery('')}>
                  Clear search
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;