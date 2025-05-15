import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto h-16 w-16 text-blue-600"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
        
        <h1 className="mt-6 text-3xl font-extrabold text-gray-900">Page not found</h1>
        <p className="mt-2 text-md text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        
        <div className="mt-6">
          <Link to="/">
            <Button 
              leftIcon={<Home size={18} />}
              variant="primary"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;