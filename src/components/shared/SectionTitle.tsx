import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = true,
  light = false 
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className={`mb-3 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-3xl ${center ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;