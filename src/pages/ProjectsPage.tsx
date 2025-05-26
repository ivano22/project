import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../api/mockData';
import { Project } from '../api/types';
import PageHero from '../components/shared/PageHero';
import SectionTitle from '../components/shared/SectionTitle';
import ProjectCard from '../components/projects/ProjectCard';
import { CheckCircle, Clock, Calendar } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectsData = await fetchProjects();
        setProjects(projectsData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.status.toLowerCase() === filter.toLowerCase());

  const statuses = ['all', 'ongoing', 'completed', 'upcoming'];

  return (
    <div>
      <PageHero 
        title="Our Projects" 
        subtitle="Making a difference in our community through football"
        backgroundImage="https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="section">
        <div className="container">
          <SectionTitle 
            title="Community Initiatives" 
            subtitle="At Gorilla Highland SC, we believe in the power of football to transform communities"
          />

          <div className="flex justify-center mb-8">
            <div className="inline-flex flex-wrap justify-center gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    filter === status
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse h-80 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="section bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Approach to Community Development</h2>
              <p className="text-gray-700 mb-4">
                At Gorilla Highland Sports Club, we believe that football is more than just a game. 
                It's a powerful tool for social change, education, and community development.
              </p>
              <p className="text-gray-700 mb-6">
                Our projects are designed with sustainability and long-term impact in mind. 
                We work closely with local communities, schools, and organizations to ensure 
                our initiatives address real needs and create lasting positive change.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary-500 text-white mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Community-Led</h4>
                    <p className="text-gray-600">
                      We involve community members in project planning and implementation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary-500 text-white mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Sustainable Impact</h4>
                    <p className="text-gray-600">
                      Our projects focus on long-term solutions rather than quick fixes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary-500 text-white mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Holistic Development</h4>
                    <p className="text-gray-600">
                      We address various aspects of development including education, health, and skills training.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3771833/pexels-photo-3771833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Community project" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <SectionTitle 
            title="Project Impact" 
            subtitle="The difference we're making in numbers"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-500 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">500+</div>
              <div className="text-gray-600">Youth Participants</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-500 mb-4">
                <Map className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">8</div>
              <div className="text-gray-600">Communities Served</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-500 mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">11</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-500 mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">12</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Adding missing imports
import { Users, Map, Heart } from 'lucide-react';

export default ProjectsPage;