import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <div 
      className="bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm p-6 rounded-lg 
                 border border-accent/20 hover:border-accent/40 transition-all duration-300 
                 group hover:-translate-y-1"
      style={{ 
        animation: 'slideUp 0.5s ease-out forwards',
        animationDelay: `${delay}s`,
        opacity: 0
      }}
    >
      <div className="mb-4 p-3 inline-flex items-center justify-center rounded-full 
                    bg-gradient-to-br from-accent to-accent-light/50 
                    group-hover:from-accent-light group-hover:to-accent 
                    transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-accent-light transition-colors">{title}</h3>
      <p className="text-gray-300 group-hover:text-white transition-colors">{description}</p>
    </div>
  );
};