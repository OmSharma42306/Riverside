import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mic, Mail, Lock, User, AlertCircle, CheckCircle } from 'lucide-react';
import Footer from '@repo/ui/Footer'
import axios from 'axios';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    
    setIsLoading(true);
    try{
      const response = await axios.post('http://localhost:3001/api/v1/user/signup',{
        name:name,email:email,password:confirmPassword
      });
      console.log(response.data);
      if(response.status===200){
        navigate('/login');
      }
    }catch(error){
      // @ts-ignore
      if(error.response){
        // @ts-ignore
        const status = error.response.status;
        // @ts-ignore
        const message = error.response.data.msg;
        console.log("Status : ",status)
        console.log("Message : ",message)
      if(status===409){
        alert("User Alerady Exists!");
        setIsLoading(false)
      }else if(status === 400){
        setError(message || "Invalid Format!");
        setIsLoading(false)
      }else{
        setError(message || "Something Went Wrong!")
        setIsLoading(false)
      }
      }       
      } 
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16">
          <div className="max-w-md mx-auto w-full">
            <Link to="/" className="flex items-center space-x-2 mb-10">
              <Mic size={32} className="text-indigo-500" />
              <span className="text-2xl font-bold">RiverSide</span>
            </Link>
            
            <h1 className="text-3xl font-bold mb-2">Create your account</h1>
            <p className="text-gray-400 mb-8">Start creating professional recordings today</p>
            
            {error && (
              <div className="bg-red-900/20 border border-red-800 text-red-400 px-4 py-3 rounded-lg flex items-start mb-6">
                <AlertCircle size={20} className="mr-3 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-500" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input pl-10"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              
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
                <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
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
                <div className="mt-2 flex items-center">
                  <CheckCircle 
                    size={16} 
                    className={`mr-2 ${password.length >= 8 ? 'text-green-500' : 'text-gray-600'}`} 
                  />
                  <span className={`text-xs ${password.length >= 8 ? 'text-green-500' : 'text-gray-400'}`}>
                    At least 8 characters
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">Confirm password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-500" />
                  </div>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="input pl-10"
                    placeholder="••••••••"
                  />
                </div>
                {confirmPassword && (
                  <div className="mt-2 flex items-center">
                    <CheckCircle 
                      size={16} 
                      className={`mr-2 ${password === confirmPassword ? 'text-green-500' : 'text-red-500'}`} 
                    />
                    <span className={`text-xs ${password === confirmPassword ? 'text-green-500' : 'text-red-500'}`}>
                      {password === confirmPassword ? 'Passwords match' : 'Passwords do not match'}
                    </span>
                  </div>
                )}
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
                ) : 'Create account'}
              </button>
              
              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  Already have an account?{' '}
                  <Link to="/login" className="text-indigo-400 hover:text-indigo-300 font-medium">
                    Log in
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
            src="https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg"
            alt="Podcast setup"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center p-10">
            <div className="max-w-md text-center">
              <h2 className="text-3xl font-bold mb-4">Join the creator community</h2>
              <p className="text-gray-300">
                Create professional podcasts, interviews, and videos with the highest audio and video quality.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Signup;