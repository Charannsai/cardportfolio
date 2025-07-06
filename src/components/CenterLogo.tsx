import React from 'react';
import { motion } from 'framer-motion';

interface CenterLogoProps {
  size?: string;
  showImagePlaceholder?: boolean;
}

const CenterLogo: React.FC<CenterLogoProps> = ({ 
  size = "text-[300px]", 
  showImagePlaceholder = false 
}) => {
  return (
    <div className="relative">
      <motion.div 
        className={`text-gray-900 ${size} font-semibold font-archivo leading-none select-none cursor-pointer`}
        initial={{ scale: 0}}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 15
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { type: "spring", stiffness: 400, damping: 25 }
        }}
      >
        C
      </motion.div>
      {showImagePlaceholder && (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ scale: 0}}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 15
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { type: "spring", stiffness: 400, damping: 25 }
        }}
        >
          <div className="w-96 h-96 overflow-hidden top-24 relative mx-auto">
            <img 
              src="https://raw.githubusercontent.com/Charannsai/images-haha/refs/heads/main/example.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CenterLogo;