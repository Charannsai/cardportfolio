import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const PerformanceMetrics: React.FC = () => {
  return (
    <>
      {/* Height-based Graph */}
      <div className="h-48 mb-10 mt-4">
        <div className="text-sm font-medium text-gray-700 mb-2">Performance Metrics</div>
        <div className="flex items-end justify-between h-32 pt-4">
          <motion.div 
            className="w-8 bg-blue-500 rounded-md"
            initial={{ height: 0 }}
            animate={{ height: '70%' }}
            transition={{ delay: 0.3, duration: 0.8 }}
          ></motion.div>
          <motion.div 
            className="w-8 bg-purple-500 rounded-md" 
            initial={{ height: 0 }}
            animate={{ height: '90%' }}
            transition={{ delay: 0.4, duration: 0.8 }}
          ></motion.div>
          <motion.div 
            className="w-8 bg-green-500 rounded-md" 
            initial={{ height: 0 }}
            animate={{ height: '60%' }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
          <motion.div 
            className="w-8 bg-yellow-500 rounded-md" 
            initial={{ height: 0 }}
            animate={{ height: '85%' }}
            transition={{ delay: 0.6, duration: 0.8 }}
          ></motion.div>
        </div>
        <div className="flex justify-between items-center mt-2 px-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full px-2 ml-1"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full px-2"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full px-2"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full px-2 mr-1"></div>
        </div>
      </div>

      {/* Signal-type Graph Metrics - More zigzag patterns */}
      <div className="space-y-5">
        <motion.div 
          className="flex justify-between items-center"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-sm text-gray-600">Projects</span>
          <div className="flex items-center">
            <svg width="60" height="20" viewBox="0 0 60 20" className="mr-2">
              <motion.path 
                d="M0,10 L8,5 L16,15 L24,3 L32,17 L40,7 L48,13 L56,8 L60,10" 
                stroke="#F59E0B" 
                strokeWidth="1.5" 
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
            </svg>
            <TrendingUp className="w-3 h-3 text-gray-800" />
          </div>
        </motion.div>
        
        <motion.div 
          className="flex justify-between items-center"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-sm text-gray-600">Clients</span>
          <div className="flex items-center">
            <svg width="60" height="20" viewBox="0 0 60 20" className="mr-2">
              <motion.path 
                d="M0,10 L7,16 L14,4 L21,12 L28,6 L35,14 L42,2 L49,18 L56,7 L60,10" 
                stroke="#10B981" 
                strokeWidth="1.5" 
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
            </svg>
            <TrendingUp className="w-3 h-3 text-gray-800" />
          </div>
        </motion.div>
        
        <motion.div 
          className="flex justify-between items-center"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-sm text-gray-600">Experience</span>
          <div className="flex items-center">
            <svg width="60" height="20" viewBox="0 0 60 20" className="mr-2">
              <motion.path 
                d="M0,10 L6,6 L12,14 L18,4 L24,10 L30,2 L36,16 L42,8 L48,12 L54,6 L60,10" 
                stroke="#3B82F6" 
                strokeWidth="1.5" 
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.9 }}
              />
            </svg>
            <TrendingUp className="w-3 h-3 text-gray-800" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PerformanceMetrics;