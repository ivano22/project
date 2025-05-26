import React from 'react';
import { Player } from '../../api/types';
import { Instagram, Twitter, Facebook } from 'lucide-react';

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className="card group overflow-hidden hover:translate-y-[-5px]">
      <div className="relative overflow-hidden h-80">
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
          <h3 className="text-white font-bold text-xl">{player.name}</h3>
          <div className="flex justify-between items-center">
            <span className="text-primary-300">{player.position}</span>
            <div className="flex space-x-2">
              {player.socialMedia?.twitter && (
                <a
                  href={player.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              )}
              {player.socialMedia?.instagram && (
                <a
                  href={player.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )}
              {player.socialMedia?.facebook && (
                <a
                  href={player.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-700 mb-4">{player.bio}</p>
        {player.stats && (
          <div className="grid grid-cols-3 gap-2 text-center border-t border-gray-200 pt-4">
            {player.stats.appearances !== undefined && (
              <div>
                <div className="text-sm text-gray-500">Appearances</div>
                <div className="font-bold text-lg">{player.stats.appearances}</div>
              </div>
            )}
            {player.stats.goals !== undefined && (
              <div>
                <div className="text-sm text-gray-500">Goals</div>
                <div className="font-bold text-lg">{player.stats.goals}</div>
              </div>
            )}
            {player.stats.assists !== undefined && (
              <div>
                <div className="text-sm text-gray-500">Assists</div>
                <div className="font-bold text-lg">{player.stats.assists}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerCard;