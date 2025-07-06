import React from 'react';
import { motion } from 'framer-motion';
import TopStatusBar from '../components/TopStatusBar';
import CenterLogo from '../components/CenterLogo';
import PaginationDots from '../components/PaginationDots';
import AnimatedCard from '../components/AnimatedCard';
import StatsCards from '../components/StatsCards';
import PerformanceMetrics from '../components/PerformanceMetrics';

interface DashboardPageProps {
  currentPage: number;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ currentPage }) => {
  return (
    <div className="relative w-full h-full p-8">
      <TopStatusBar />

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-6 h-[calc(100%-120px)]">
        {/* Left Panel - Expanded Stats Section */}
        <div className="col-span-3 relative">
          <AnimatedCard 
            className="bg-white rounded-2xl p-6 shadow-lg h-full relative"
            delay={0.3}
            direction="left"
          >
            {/* Stats content */}
            <PerformanceMetrics />
          </AnimatedCard>
          <StatsCards />
        </div>

        {/* Center - Letter C */}
        <div className="col-span-6 flex flex-col items-center justify-center relative">
          {/* Text on top center of the C */}
          <motion.div 
            className="absolute -top-4 transform -translate-y-full z-10"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h1 className="text-3xl font-extrabold text-gray-700 text-center">
              Hello, I'm Charan Sai
            </h1>
          </motion.div>

          <CenterLogo size="text-[400px]" showImagePlaceholder />

          {/* Dots below */}
          <PaginationDots 
            currentPage={currentPage}
            totalPages={2}
          />
        </div>

        {/* Right Panel */}
        <div className="col-span-3 space-y-4">
          {/* Currently Building Card */}
          <AnimatedCard 
            className="bg-white rounded-2xl p-4 shadow-lg"
            delay={0.2}
            direction="right"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="text-xl font-bold text-gray-800">Currently Building</div>
                <div className="text-sm mt-1 text-gray-600">CodeMeoww</div>
                <div className="text-xs text-gray-600">Follow me on <a className="underline " href="https://www.linkedin.com/in/charannsai">LinkedIn</a> and Stay Tuned for more updates</div>
              </div>
              <div className="w-5 h-5 text-gray-400">♡</div>
            </div>
          </AnimatedCard>

          {/* Weekly Working Hours Card */}
          <AnimatedCard 
            className="bg-white rounded-2xl p-4 shadow-lg"
            delay={0.3}
            direction="right"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-lg font-bold text-gray-800">Hours This Week</div>
              <div className="text-sm text-gray-500">~32 hrs</div>
            </div>
            <div className="relative h-8 mb-2">
              <motion.svg 
                className="w-full h-full" 
                viewBox="0 0 100 20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.path
                  d="M0,10 L10,5 L20,15 L30,3 L40,17 L50,7 L60,13 L70,5 L80,15 L90,7 L100,10"
                  stroke="#F68537"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, delay: 0.5 }}
                />
              </motion.svg>
            </div>
            <div className="text-xs text-gray-600">Mon to Sun Active Hours</div>
          </AnimatedCard>

          {/* Contact Me Card */}
          <AnimatedCard 
            className="bg-white rounded-2xl p-4 shadow-lg"
            delay={0.4}
            direction="right"
          >
            <div className="mb-4">
              <div className="text-xl font-bold text-gray-800">Availability</div>
              <div className="text-xs text-gray-500 mt-1">Open for Freelance</div>
            </div>
            <button className="w-full py-2 text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition">
              Hire Me
            </button>
          </AnimatedCard>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
