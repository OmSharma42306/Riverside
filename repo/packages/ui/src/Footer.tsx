import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, Github, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Mic size={24} className="text-indigo-500" />
              <span className="text-xl font-bold text-white">RiverSide</span>
            </Link>
            <p className="text-sm">
              Professional studio quality recordings for podcasts, interviews, and more.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/#features" className="hover:text-white transition">Features</Link></li>
              <li><Link to="/#pricing" className="hover:text-white transition">Pricing</Link></li>
              <li><Link to="/" className="hover:text-white transition">Integration</Link></li>
              <li><Link to="/" className="hover:text-white transition">Changelog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition">Documentation</Link></li>
              <li><Link to="/" className="hover:text-white transition">Tutorial</Link></li>
              <li><Link to="/" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="/" className="hover:text-white transition">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition">About</Link></li>
              <li><Link to="/" className="hover:text-white transition">Careers</Link></li>
              <li><Link to="/" className="hover:text-white transition">Privacy</Link></li>
              <li><Link to="/" className="hover:text-white transition">Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 RiverSide. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition">Terms of Service</Link>
            <Link to="/" className="hover:text-white transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;