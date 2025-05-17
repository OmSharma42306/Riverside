import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mic, Mail, Lock, AlertCircle } from 'lucide-react';
import Footer from '@repo/ui/Footer';
import axios from 'axios';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    setIsLoading(true);
    
      const response = await axios.post('http://localhost:3001/api/v1/user/signin',{email:email,password:password});
      const data = response.data;
      console.log(data);
      localStorage.setItem("JWT",data.token);
      
      navigate('/dashboard');
      
    
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16">
          <div className="max-w-md mx-auto w-full">
            <Link to="/" className="flex items-center space-x-2 mb-10">
              <Mic size={32} className="text-indigo-500" />
              <span className="text-2xl font-bold">WaveStudio</span>
            </Link>
            
            <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
            <p className="text-gray-400 mb-8">Log in to your account to continue</p>
            
            {error && (
              <div className="bg-red-900/20 border border-red-800 text-red-400 px-4 py-3 rounded-lg flex items-start mb-6">
                <AlertCircle size={20} className="mr-3 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-500" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input pl-10"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="password" className="block text-sm font-medium">Password</label>
                  <Link to="/" className="text-sm text-indigo-400 hover:text-indigo-300">Forgot password?</Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-500" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input pl-10"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className={`btn btn-primary w-full flex justify-center ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : 'Log in'}
              </button>
              
              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-indigo-400 hover:text-indigo-300 font-medium">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        
        {/* Right side - Image */}
        <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-indigo-900 to-gray-900 relative">
          <div className="absolute inset-0 bg-black/40"></div>
          <img 
            src="https://images.pexels.com/photos/4062560/pexels-photo-4062560.jpeg"
            alt="Recording studio"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center p-10">
            <div className="max-w-md text-center">
              <h2 className="text-3xl font-bold mb-4">Create studio-quality content</h2>
              <p className="text-gray-300">
                Join thousands of podcasters, interviewers, and content creators making professional recordings with WaveStudio.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;