import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  delay?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  image, 
  description,
  delay = 0
}) => {
  return (
    <div 
      className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
      style={{ 
        animation: 'slideUp 0.5s ease-out forwards',
        animationDelay: `${delay}s`,
        opacity: 0
      }}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="btn bg-white text-primary flex items-center">
            Ver Projeto
            <ExternalLink className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="p-5 bg-white">
        <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};