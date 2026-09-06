import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mic, Mail, Lock, User, AlertCircle, Loader2, ArrowLeft } from 'lucide-react';
import Footer from '@repo/ui/Footer';
import { signUp } from '../api/api';

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
      setError('Password must be at least 8 characters long');
      return;
    }

    setIsLoading(true);
    try {
      const response = await signUp(name, email, password);
      console.log(response.data);
      if (response.status === 200) {
        navigate('/login');
      }
    } catch (err: any) {
      if (err.response) {
        const status = err.response.status;
        const message = err.response.data?.msg || err.response.data?.error || err.response.msg;

        console.log('Status : ', status);
        console.log('Message : ', message);

        if (status === 409) {
          setError('An account with this email already exists. Please sign in instead.');
        } else if (status === 400) {
          setError(typeof message === 'string' ? message : 'Invalid signup information');
        } else {
          setError('Signup failed. Please check your connection and try again.');
        }
      } else {
        setError('Network error. Please make sure the backend server is running.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07080b] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Bar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between relative z-10">
        <Link
          to="/"
          className="inline-flex items-center text-xs font-medium text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
          <span>Back to Home</span>
        </Link>

        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/20 border border-white/20">
            <Mic className="w-4 h-4 text-white" />
          </div>
          <span className="text-base font-bold text-white tracking-tight">RiverSide Studio</span>
        </Link>
        <div className="w-20 hidden sm:block" />
      </div>

      {/* Main Container */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 relative z-10">
        <div className="w-full max-w-md">
          <div className="obsidian-card p-8 sm:p-10 shadow-2xl border border-white/[0.08]">
            <div className="text-center mb-8 space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Create Studio Account
              </h1>
              <p className="text-xs sm:text-sm text-zinc-400">
                Join thousands of creators recording pristine multi-track productions
              </p>
            </div>

            {/* Error Notification */}
            {error && (
              <div className="mb-6 bg-red-950/40 border border-red-800/60 text-red-300 px-4 py-3 rounded-xl flex items-start gap-2.5 text-xs shadow-inner">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <User className="w-4 h-4 text-zinc-500" />
                  </div>
                  <input
                    type="text"
                    required
                    autoFocus
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Jane Doe"
                    className="luxury-input pl-10 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Mail className="w-4 h-4 text-zinc-500" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="creator@studio.com"
                    className="luxury-input pl-10 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Lock className="w-4 h-4 text-zinc-500" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="At least 8 characters"
                    className="luxury-input pl-10 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Lock className="w-4 h-4 text-zinc-500" />
                  </div>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Repeat password"
                    className="luxury-input pl-10 text-sm"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-luxury btn-luxury-primary py-3 text-sm font-semibold shadow-lg shadow-indigo-600/25"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Creating Studio Account...</span>
                    </>
                  ) : (
                    <span>Create Studio Account</span>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-white/[0.06] text-center text-xs text-zinc-400">
              <span>Already have an account? </span>
              <Link
                to="/login"
                className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors underline underline-offset-4"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Signup;