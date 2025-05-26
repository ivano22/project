import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  overlay?: boolean;
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = 'https://images.pexels.com/photos/47354/the-ball-stadion-football-the-pitch-47354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  overlay = true 
}) => {
  return (
    <div 
      className="relative py-24 md:py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      )}
      <div className="container relative z-10 text-center">
        <h1 className="text-white mb-4 animate-fade-in">{title}</h1>
        {subtitle && (
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto animate-slide-up">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHero;