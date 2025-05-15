// User related types
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  createdAt: Date;
}

// Authentication related types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Recording related types
export type RecordingStatus = 'scheduled' | 'in-progress' | 'completed' | 'processing' | 'ready';

export interface Participant {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  isHost: boolean;
}

export interface Recording {
  id: string;
  title: string;
  description?: string;
  participants: Participant[];
  status: RecordingStatus;
  scheduledFor?: Date;
  createdAt: Date;
  updatedAt: Date;
  duration?: number; // in seconds
  thumbnailUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  recordings: Recording[];
  createdAt: Date;
  updatedAt: Date;
}