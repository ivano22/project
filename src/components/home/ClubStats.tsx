import React from 'react';
import { Trophy, Users, Heart, Calendar } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label }) => {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-500 text-white mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold font-heading text-white mb-2">{value}</div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
};

const ClubStats: React.FC = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem
            icon={<Calendar className="h-8 w-8" />}
            value="11"
            label="Years of Excellence"
          />
          <StatItem
            icon={<Trophy className="h-8 w-8" />}
            value="15"
            label="Trophies Won"
          />
          <StatItem
            icon={<Users className="h-8 w-8" />}
            value="120+"
            label="Youth Players"
          />
          <StatItem
            icon={<Heart className="h-8 w-8" />}
            value="12"
            label="Community Projects"
          />
        </div>
      </div>
    </div>
  );
};

export default ClubStats;