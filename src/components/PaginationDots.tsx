import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface PaginationDotsProps {
  currentPage: number;
  totalPages: number;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({ 
  currentPage, 
  totalPages
}) => {
  const navigate = useNavigate();

  const routes = ['/dashboard', '/profile'];

  const handlePageChange = (page: number) => {
    if (page < routes.length) {
      navigate(routes[page]);
    }
  };

  return (
    <motion.div 
      className="absolute -bottom-2"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <div className="bg-white rounded-full px-8 py-4 shadow-lg">
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, page) => (
            <motion.button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPage === page 
                  ? 'bg-gray-800 w-6' 
                  : 'bg-gray-300 w-2'
              }`}
              whileHover={{ 
                scale: 1.3,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              whileTap={{ 
                scale: 0.8,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PaginationDots;