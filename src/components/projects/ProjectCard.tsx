import React from 'react';
import { Project } from '../../api/types';
import { Calendar, Check } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div id={`project-${project.id}`} className="card group hover:translate-y-[-5px]">
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
        <p className="text-gray-600 mb-4">{project.description}</p>
        {project.impact && (
          <div className="flex items-center text-sm text-green-600 mb-2">
            <Check className="h-4 w-4 mr-1" />
            <span>{project.impact}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;