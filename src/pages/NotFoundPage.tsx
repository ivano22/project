import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="container text-center px-4 py-16">
        <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-primary-100 text-primary-500 mb-6">
          <span className="text-4xl font-bold">404</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn btn-primary flex items-center">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-outline flex items-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;