import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TopStatusBar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 17) return "Good afternoon";
    if (hour >= 17 && hour < 22) return "Good evening";
    return "Good night";
  };

  const getFormattedDate = () => {
    return currentTime.toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'short' 
    });
  };

  const getTemperature = () => {
    const hour = currentTime.getHours();
    // Simulate temperature based on time of day
    if (hour >= 6 && hour < 12) return Math.floor(Math.random() * 5) + 18; // 18-22°C morning
    if (hour >= 12 && hour < 18) return Math.floor(Math.random() * 8) + 25; // 25-32°C afternoon
    if (hour >= 18 && hour < 22) return Math.floor(Math.random() * 6) + 20; // 20-25°C evening
    return Math.floor(Math.random() * 4) + 20; // 12-15°C night
  };

  return (
    <motion.div 
      className="flex justify-between items-center mb-8"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.6 }}
    >
      <div>
        <div className="text-gray-800 text-lg font-medium">{getGreeting()}</div>
        <div className="text-gray-500 text-sm">{getFormattedDate()}</div>
      </div>
      <div className="flex items-center space-x-4 text-gray-600 text-sm">
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
          <span>{getTemperature()}°C</span>
        </div>
        <span>{currentTime.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: false 
        })}</span>
      </div>
    </motion.div>
  );
};

export default TopStatusBar;