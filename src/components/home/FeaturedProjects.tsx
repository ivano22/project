import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../../api/mockData';
import { Project } from '../../api/types';
import SectionTitle from '../shared/SectionTitle';
import { Calendar, Check, Clock } from 'lucide-react';

const FeaturedProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectsData = await fetchProjects();
        setProjects(projectsData.slice(0, 3)); // Get 3 featured projects
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <div className="section">
        <div className="container">
          <SectionTitle title="Our Projects\" subtitle="Making a difference in our community through football" />
          <div className="flex justify-center">
            <div className="animate-pulse h-64 w-full max-w-2xl bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section bg-gray-50">
      <div className="container">
        <SectionTitle title="Our Projects" subtitle="Making a difference in our community through football" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="card group hover:translate-y-[-5px]">
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute top-0 right-0 px-3 py-1 text-sm text-white 
                  ${project.status === 'Ongoing' ? 'bg-accent-500' : 
                    project.status === 'Completed' ? 'bg-green-600' : 'bg-secondary-300'}`}
                >
                  {project.status}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(project.startDate).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric',
                  })}
                  {project.endDate && (
                    <>
                      {' - '}
                      {new Date(project.endDate).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                {project.impact && (
                  <div className="flex items-center text-sm text-green-600 mb-4">
                    <Check className="h-4 w-4 mr-1" />
                    <span>{project.impact}</span>
                  </div>
                )}
                <Link
                  to={`/projects#project-${project.id}`}
                  className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/projects" className="btn btn-outline">
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;