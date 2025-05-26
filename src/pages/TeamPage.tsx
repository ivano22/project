import React, { useState, useEffect } from 'react';
import { fetchPlayers } from '../api/mockData';
import { Player } from '../api/types';
import PageHero from '../components/shared/PageHero';
import SectionTitle from '../components/shared/SectionTitle';
import PlayerCard from '../components/team/PlayerCard';

const TeamPage: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        const playersData = await fetchPlayers();
        setPlayers(playersData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch players:', error);
        setLoading(false);
      }
    };

    loadPlayers();
  }, []);

  const filteredPlayers = filter === 'all' 
    ? players 
    : players.filter(player => player.position.toLowerCase().includes(filter.toLowerCase()));

  const positions = ['all', 'goalkeeper', 'defender', 'midfielder', 'striker'];

  return (
    <div>
      <PageHero 
        title="Our Team" 
        subtitle="Meet the talented players who represent Gorilla Highland Sports Club"
        backgroundImage="https://images.pexels.com/photos/3621121/pexels-photo-3621121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="section">
        <div className="container">
          <SectionTitle 
            title="First Team Squad" 
            subtitle="The stars who represent Gorilla Highland on the pitch"
          />

          <div className="flex justify-center mb-8">
            <div className="inline-flex flex-wrap justify-center gap-2">
              {positions.map((position) => (
                <button
                  key={position}
                  onClick={() => setFilter(position)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    filter === position
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {position.charAt(0).toUpperCase() + position.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center">
              <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-gray-200 h-96 rounded-lg"></div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlayers.map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="section bg-gray-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-6">Technical Staff</h2>
              <p className="text-gray-300 mb-6">
                Behind every successful team is a dedicated technical staff working tirelessly 
                to develop players, implement tactics, and ensure our team performs at its best.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="John Musoke" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">John Musoke</h3>
                    <p className="text-primary-300">Head Coach</p>
                    <p className="text-gray-400 text-sm">UEFA B License, Former National Player</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Michael Ouma" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Michael Ouma</h3>
                    <p className="text-primary-300">Assistant Coach</p>
                    <p className="text-gray-400 text-sm">CAF A License, 10+ Years Experience</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.pexels.com/photos/6629653/pexels-photo-6629653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Daniel Ssekitto" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Daniel Ssekitto</h3>
                    <p className="text-primary-300">Goalkeeper Coach</p>
                    <p className="text-gray-400 text-sm">Former International Goalkeeper</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.pexels.com/photos/6456144/pexels-photo-6456144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Grace Nakimuli" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Grace Nakimuli</h3>
                    <p className="text-primary-300">Fitness Coach</p>
                    <p className="text-gray-400 text-sm">MSc in Sports Science</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/2042322/pexels-photo-2042322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Coach giving instructions" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-gray-100">
        <div className="container">
          <SectionTitle 
            title="Youth Academy" 
            subtitle="Developing the next generation of football talent in the highlands"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Youth players training" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">Nurturing Future Stars</h3>
              <p className="text-gray-700 mb-4">
                Our youth academy is the backbone of Gorilla Highland Sports Club. We believe in developing 
                local talent and providing pathways to professional football for promising young players.
              </p>
              <p className="text-gray-700 mb-6">
                The academy caters to players from ages 8 to 18, with structured training programs 
                designed to develop technical skills, tactical understanding, physical capabilities, 
                and mental resilience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold mr-4">
                    U12
                  </div>
                  <span className="text-gray-700">Development Phase (Ages 8-12)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold mr-4">
                    U16
                  </div>
                  <span className="text-gray-700">Foundation Phase (Ages 13-16)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold mr-4">
                    U19
                  </div>
                  <span className="text-gray-700">Professional Phase (Ages 17-19)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;