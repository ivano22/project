import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPlayers } from '../../api/mockData';
import { Player } from '../../api/types';
import SectionTitle from '../shared/SectionTitle';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const TeamHighlights: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        const playersData = await fetchPlayers();
        setPlayers(playersData.slice(0, 4)); // Get 4 featured players
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch players:', error);
        setLoading(false);
      }
    };

    loadPlayers();
  }, []);

  if (loading) {
    return (
      <div className="section bg-gray-100">
        <div className="container">
          <SectionTitle title="Meet Our Team\" subtitle="The stars who represent Gorilla Highland Sports Club" />
          <div className="flex justify-center">
            <div className="animate-pulse h-64 w-full max-w-2xl bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section bg-white">
      <div className="container">
        <SectionTitle title="Meet Our Team" subtitle="The stars who represent Gorilla Highland Sports Club" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {players.map((player) => (
            <div key={player.id} className="card group text-center overflow-hidden hover:translate-y-[-5px]">
              <div className="relative overflow-hidden h-64">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h3 className="text-white font-bold text-xl">{player.name}</h3>
                  <p className="text-primary-300">{player.position}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-sm line-clamp-3">{player.bio}</p>
                <div className="mt-4 flex justify-center space-x-3">
                  {player.socialMedia?.twitter && (
                    <a
                      href={player.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {player.socialMedia?.instagram && (
                    <a
                      href={player.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  )}
                  {player.socialMedia?.facebook && (
                    <a
                      href={player.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/team" className="btn btn-outline">
            View Full Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamHighlights;