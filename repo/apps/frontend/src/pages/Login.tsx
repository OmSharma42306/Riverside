import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mic, Mail, Lock, AlertCircle, Loader2, ArrowLeft } from 'lucide-react';
import Footer from '@repo/ui/Footer';
import { login } from '../api/api';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in both email and password');
      return;
    }

    setIsLoading(true);
    try {
      const response = await login(email, password);
      const data = response.data;
      console.log(data);
      localStorage.setItem('JWT', data.token);
      if (response.status === 200) {
        navigate('/dashboard');
      }
    } catch (err: any) {
      if (err.response) {
        const status = err.response.status;
        const message = err.response.data?.msg || err.response.data?.error || err.response.msg;

        console.log('Status : ', status);
        console.log('Message : ', message);

        if (status === 400) {
          setError(typeof message === 'string' ? message : 'Invalid email or password');
        } else {
          setError('Unable to log in. Please check your connection and credentials.');
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

      {/* Auth Card Container */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 relative z-10">
        <div className="w-full max-w-md">
          <div className="obsidian-card p-8 sm:p-10 shadow-2xl border border-white/[0.08]">
            {/* Card Header */}
            <div className="text-center mb-8 space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Welcome Back
              </h1>
              <p className="text-xs sm:text-sm text-zinc-400">
                Log in to access your studio sessions and multi-track recordings
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
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Mail className="w-4 h-4 text-zinc-500" />
                  </div>
                  <input
                    type="email"
                    required
                    autoFocus
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
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    Password
                  </label>
                </div>
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
                    placeholder="••••••••"
                    className="luxury-input pl-10 text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-luxury btn-luxury-primary py-3 text-sm font-semibold shadow-lg shadow-indigo-600/25 mt-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying Studio Access...</span>
                  </>
                ) : (
                  <span>Sign in to Studio</span>
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/[0.06] text-center text-xs text-zinc-400">
              <span>Don't have a studio account yet? </span>
              <Link
                to="/signup"
                className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors underline underline-offset-4"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;