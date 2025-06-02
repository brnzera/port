import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  delay?: number;
}

export const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  image, 
  bio,
  delay = 0
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm 
                 rounded-lg overflow-hidden flex flex-col md:flex-row
                 border border-accent/20 hover:border-accent/40 transition-all duration-300"
    >
      <div className="md:w-2/5 h-64 md:h-auto aspect-square mx-auto w-full max-w-xs relative overflow-hidden flex items-center justify-center">
        <motion.img 
          src={image} 
          alt={name} 
          loading="lazy"
          className="w-full h-full object-cover object-top"
          whileHover={{ scale: 1.10 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <motion.div 
        className="md:w-3/5 p-6"
        whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-semibold text-accent-light">{name}</h3>
        <p className="text-accent mb-4">{role}</p>
        <p className="text-gray-300">{bio}</p>
      </motion.div>
    </motion.div>
  );
};