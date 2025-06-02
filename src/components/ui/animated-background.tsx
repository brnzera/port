import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 50%)',
          filter: 'blur(90px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 70% 30%, #93c5fd 0%, transparent 50%)',
          filter: 'blur(90px)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground