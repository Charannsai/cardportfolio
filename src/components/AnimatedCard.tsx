import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down' | 'center';
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className = "", 
  onClick,
  delay = 0,
  direction = 'up'
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left': return { x: -100, opacity: 0 };
      case 'right': return { x: 100, opacity: 0 };
      case 'up': return { y: 20, opacity: 0 };
      case 'down': return { y: -20, opacity: 0 };
      case 'center': return { scale: 0.8, opacity: 0 };
      default: return { y: 20, opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case 'center': return { scale: 1, opacity: 1 };
      default: return { x: 0, y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      initial={getInitialPosition()}
      animate={getAnimatePosition()}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay
      }}
      whileHover={{ 
        scale: 1.05, 
        y: direction === 'center' ? 0 : -4,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;