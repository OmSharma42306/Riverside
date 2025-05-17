import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, Video, Headphones, Users, Zap, Shield, Sparkles, ArrowRight } from 'lucide-react';
import Header from '@repo/ui/Header';
import Footer from '@repo/ui/Footer';


const Landing: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              Studio-Quality Recording, Anywhere
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Create professional podcasts, interviews, and videos with the highest quality audio and video recordings, regardless of internet connection.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup" className="btn btn-primary text-lg px-8 py-3">
                Get Started
              </Link>
              <a href="#features" className="btn btn-secondary text-lg px-8 py-3">
                Learn More
              </a>
            </div>
          </div>
          
          <div className="relative mx-auto max-w-4xl">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800">
              <img 
                src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg" 
                alt="Studio Recording Session" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional tools designed for creators who demand quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="rounded-full bg-indigo-900/30 w-12 h-12 flex items-center justify-center mb-5">
                <Mic className="text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Studio Audio</h3>
              <p className="text-gray-400">
                Pristine audio recording with separate tracks and local recording backup.
              </p>
            </div>
            
            <div className="card">
              <div className="rounded-full bg-indigo-900/30 w-12 h-12 flex items-center justify-center mb-5">
                <Video className="text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">4K Video</h3>
              <p className="text-gray-400">
                Crystal clear 4K video recording with local backup to prevent quality loss.
              </p>
            </div>
            
            <div className="card">
              <div className="rounded-full bg-indigo-900/30 w-12 h-12 flex items-center justify-center mb-5">
                <Headphones className="text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Producer Mode</h3>
              <p className="text-gray-400">
                Take control of your session with advanced producer tools and features.
              </p>
            </div>
            
            <div className="card">
              <div className="rounded-full bg-indigo-900/30 w-12 h-12 flex items-center justify-center mb-5">
                <Users className="text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Remote Guests</h3>
              <p className="text-gray-400">
                Easy to join for guests with no downloads required, just a simple link.
              </p>
            </div>
            
            <div className="card">
              <div className="rounded-full bg-indigo-900/30 w-12 h-12 flex items-center justify-center mb-5">
                <Zap className="text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Editing</h3>
              <p className="text-gray-400">
                Edit your content right in the browser with our powerful editing tools.
              </p>
            </div>
            
            <div className="card">
              <div className="rounded-full bg-indigo-900/30 w-12 h-12 flex items-center justify-center mb-5">
                <Shield className="text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Recordings</h3>
              <p className="text-gray-400">
                Your content stays private with our enterprise-grade security protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that's right for your podcast or recording needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card flex flex-col border border-gray-800">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <div className="text-3xl font-bold mb-1">$15<span className="text-lg text-gray-400">/mo</span></div>
              <p className="text-gray-400 mb-6">Perfect for beginners</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Sparkles size={18} className="text-indigo-400 mr-2 mt-1" />
                  <span>3 hours of recording</span>
                </li>
                <li className="flex items-start">
                  <Sparkles size={18} className="text-indigo-400 mr-2 mt-1" />
                  <span>720p video quality</span>
                </li>
                <li className="flex items-start">
                  <Sparkles size={18} className="text-indigo-400 mr-2 mt-1" />
                  <span>Basic editing tools</span>
                </li>
                <li className="flex items-start">
                  <Sparkles size={18} className="text-indigo-400 mr-2 mt-1" />
                  <span>2 participants</span>
                </li>
              </ul>
              <Link to="/signup" className="btn btn-outline mt-auto">
                Get Started
              </Link>
            </div>
            
            <div className="card flex flex-col border-2 border-indigo-500 transform scale-105 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <div className="text-3xl font-bold mb-1">$35<span className="text-lg text-gray-400">/mo</span></div>
              <p className="text-gray-400 mb-6">For serious creators</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Sparkles size={18} className="text-indigo-400 mr-2 mt-1" />
                  <span>10 hours of recording</span>
                </li>
                <li className="flex items-start">
                  <Sparkles size={18} className="text-indigo-400 mr-2 mt-1" />
                  <span>1080p video quality</span>
                </li>
                <li className="flex items-start">
                  <Sparkles size={18} className="text-indigo-400 mr-2 mt-1" />
                  <span>Advanced editing tools</span>
                </li>
                <li className="flex items-start">
                  <Sparkles size={18} className="text-indigo-400 mr-2 mt-1" />
                  <span>5 participants</span>
                </li>
                <li className="flex items-start">
                  <Sparkles size={18} className="text-indigo-400 mr-2 mt-1" />
                  <span>Producer mode</span>
                </li>
              </ul>
              <Link to="/signup" className="btn btn-primary mt-auto">
                Get Started
              </Link>
            </div>
            
            <div className="card flex flex-col border border-gray-800">
              <h3 className="text-xl font-bold mb-2">Business</h3>
              <div className="text-3xl font-bold mb-1">$79<span className="text-lg text-gray-400">/mo</span></div>
              <p className="text-gray-400 mb-6">For teams & studios</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Sparkles size={18} className="text-indigo-400 mr-2 mt-1" />
                  <span>Unlimited recording</span>
                </li>
                <li className="flex items-start">
                  <Sparkles size={18} className="text-indigo-400 mr-2 mt-1" />
                  <span>4K video quality</span>
                </li>
                <li className="flex items-start">
                  <Sparkles size={18} className="text-indigo-400 mr-2 mt-1" />
                  <span>Premium editing suite</span>
                </li>
                <li className="flex items-start">
                  <Sparkles size={18} className="text-indigo-400 mr-2 mt-1" />
                  <span>8 participants</span>
                </li>
                <li className="flex items-start">
                  <Sparkles size={18} className="text-indigo-400 mr-2 mt-1" />
                  <span>Brand customization</span>
                </li>
              </ul>
              <Link to="/signup" className="btn btn-outline mt-auto">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-indigo-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to create amazing content?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators who trust WaveStudio for their professional recording needs.
            </p>
            <Link to="/signup" className="btn btn-primary text-lg px-8 py-3 inline-flex items-center">
              Get Started <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Landing;