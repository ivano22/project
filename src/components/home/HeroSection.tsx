import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Video or Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-32 md:py-0">
        <div className="max-w-3xl">
          <h1 className="text-white mb-6 animate-fade-in">
            Gorilla Highland Sports Club
          </h1>
          <p className="text-2xl md:text-3xl text-primary-300 font-heading mb-6 animate-slide-up">
            Elevating Talent from the Highlands
          </p>
          <p className="text-gray-300 text-lg mb-8 max-w-xl animate-slide-up">
            We build champions on and off the field through excellence in football, 
            community engagement, and youth development across Uganda's highlands.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up">
            <Link
              to="/team"
              className="btn btn-primary"
            >
              Meet Our Team
            </Link>
            <Link
              to="/get-involved"
              className="btn btn-outline text-white border-white hover:bg-white hover:text-primary-500"
            >
              Get Involved <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
        <span className="text-sm mb-2">Scroll Down</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;