import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import BlogPage from './pages/BlogPage';

function AppContent() {
  const location = useLocation();
  
  const getPageIndex = (pathname: string) => {
    switch (pathname) {
      case '/': return 0;
      case '/dashboard': return 0;
      case '/profile': return 1;
      case '/blog': return 2;
      default: return 0;
    }
  };

  const currentPage = getPageIndex(location.pathname);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center p-4 font-archivo">
      <motion.div 
        className="w-full max-w-6xl h-[600px] bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 rounded-[40px] shadow-2xl relative overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Routes>
          <Route path="/" element={<DashboardPage currentPage={currentPage} />} />
          <Route path="/dashboard" element={<DashboardPage currentPage={currentPage} />} />
          <Route path="/profile" element={<ProfilePage currentPage={currentPage} />} />
          <Route path="/blog" element={<BlogPage currentPage={currentPage} />} />
        </Routes>
      </motion.div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;