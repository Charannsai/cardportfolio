import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Calendar, Award } from 'lucide-react';

const StatsCards: React.FC = () => {
  return (
    <div className="absolute -top-12 -right-24 grid grid-cols-2 gap-3 p-2" style={{ width: '180px', zIndex: 10 }}>
      <motion.div 
        className="bg-blue-500 p-3 rounded-xl shadow-lg transform origin-top-right text-white"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center justify-between">
          <Users className="w-4 h-4 text-white" />
          <div className="text-base font-bold">147</div>
        </div>
        <div className="text-sm mt-1">Clients</div>
      </motion.div>

      <motion.div 
        className="bg-purple-500 p-3 rounded-xl shadow-lg transform origin-top-right text-white"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="flex items-center justify-between">
          <Briefcase className="w-4 h-4 text-white" />
          <div className="text-base font-bold">89</div>
        </div>
        <div className="text-sm mt-1">Projects</div>
      </motion.div>

      <motion.div 
        className="bg-green-500 p-3 rounded-xl shadow-lg transform origin-top-right text-white"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center justify-between">
          <Calendar className="w-4 h-4 text-white" />
          <div className="text-base font-bold">12</div>
        </div>
        <div className="text-sm mt-1">Years</div>
      </motion.div>

      <motion.div 
        className="bg-yellow-500 p-3 rounded-xl shadow-lg transform origin-top-right text-white"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <div className="flex items-center justify-between">
          <Award className="w-4 h-4 text-white" />
          <div className="text-base font-bold">24</div>
        </div>
        <div className="text-sm mt-1">Awards</div>
      </motion.div>
    </div>
  );
};

export default StatsCards;
