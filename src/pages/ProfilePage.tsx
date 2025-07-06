import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Code, Briefcase, Calendar, BookOpen, Mail } from 'lucide-react';
import TopStatusBar from '../components/TopStatusBar';
import CenterLogo from '../components/CenterLogo';
import PaginationDots from '../components/PaginationDots';
import StackedInfoCard from '../components/StackedInfoCard';

interface ProfilePageProps {
  currentPage: number;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ currentPage }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile devices
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleButtonClick = (buttonId: string) => {
    console.log('Button clicked:', buttonId);
    setActiveCard(activeCard === buttonId ? null : buttonId);
  };

  const closeCard = () => {
    setActiveCard(null);
  };

  // Mobile version message
  if (isMobile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center p-4 font-archivo">
        <motion.div 
          className="w-full max-w-md rounded-3xl shadow-2xl p-8 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-6xl mb-6">📱</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Mobile Version Coming Soon</h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The mobile version of the portfolio is not yet released. 
              Please use a desktop version to view the portfolio for the best experience.
            </p>
            <div className="text-sm text-gray-500">
              Thank you for your patience! 🙏
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  // Left side buttons in a curved arc
  const leftButtons = [
    { 
      id: 'about', 
      icon: User, 
      label: 'About Me', 
      bgColor: 'bg-blue-600',
      position: { top: '0%', left: '30%' }
    },
    { 
      id: 'skills', 
      icon: Code, 
      label: 'Skills', 
      bgColor: 'bg-purple-600',
      position: { top: '20%', left: '25%' }
    },
    { 
      id: 'projects', 
      icon: Briefcase, 
      label: 'Projects', 
      bgColor: 'bg-gray-800',
      position: { top: '45%', left: '24%' }
    },
    { 
      id: 'experience', 
      icon: Calendar, 
      label: 'Experience', 
      bgColor: 'bg-gray-800',
      position: { top: '70%', left: '30%' }
    }
  ];

  // Right side buttons
  const rightButtons = [
    { 
      id: 'blog', 
      icon: BookOpen, 
      label: 'Blog', 
      bgColor: 'bg-white', 
      textColor: 'text-gray-800',
      position: { top: '0%', right: '30%' }
    },
    { 
      id: 'contact', 
      icon: Mail, 
      label: 'Contact', 
      bgColor: 'bg-white', 
      textColor: 'text-gray-800',
      position: { top: '20%', right: '25%' }
    }
  ];

  const allButtons = [...leftButtons, ...rightButtons];

  return (
    <div className="relative w-full h-full p-8 overflow-hidden">
      <TopStatusBar />

      {/* Main Content */}
      <div className="relative h-[calc(100%-140px)]">
        {/* Curved Buttons */}
        {allButtons.map((button, index) => {
          const isLeftButton = leftButtons.some(btn => btn.id === button.id);
          const isRightButton = rightButtons.some(btn => btn.id === button.id);
          
          return (
            <motion.div
              key={button.id}
              className="absolute flex flex-col items-center cursor-pointer z-10"
              style={button.position}
              initial={{ 
                scale: 0, 
                opacity: 0,
                x: isLeftButton ? -100 : isRightButton ? 100 : 0
              }}
              animate={{ 
                scale: 1, 
                opacity: activeCard && activeCard !== button.id ? 0.3 : 1,
                filter: activeCard && activeCard !== button.id ? 'blur(1px)' : 'blur(0px)',
                x: 0
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.2 + index * 0.1
              }}
              onClick={() => handleButtonClick(button.id)}
            >
              {/* Round Button */}
              <motion.div
                className={`${button.bgColor} rounded-3xl w-14 h-14 flex items-center justify-center shadow-lg relative`}
                whileHover={{ 
                  scale: 1.1,
                  y: -3,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                whileTap={{ 
                  scale: 0.9,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                animate={{
                  scale: activeCard === button.id ? 1.15 : 1,
                  boxShadow: activeCard === button.id ? "0 15px 30px rgba(0,0,0,0.3)" : "0 5px 15px rgba(0,0,0,0.1)"
                }}
              >
                <button.icon className={`w-6 h-6 ${button.textColor || 'text-white'}`} />
                
                {/* Active indicator */}
                {activeCard === button.id && (
                  <motion.div
                    className="absolute -inset-1 rounded-3xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </motion.div>

              {/* Label below the button */}
              <motion.div 
                className={`text-xs font-medium mt-3 ${button.textColor === 'text-gray-800' ? 'text-gray-800' : 'text-gray-700'} text-center whitespace-nowrap`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 + 0.2 }}
              >
                {button.label}
              </motion.div>
            </motion.div>
          );
        })}
        
        <motion.div
  className="absolute top-[55%] right-[14%] text-slate-500 font-bold leading-tight text-right"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.8, duration: 0.6 }}
>
  <div className="text-2xl text-left">Know More</div>
  <div className="text-4xl font-extrabold">About Me!</div>
</motion.div>


        <div className="col-span-6 flex flex-col items-center justify-center relative">
          <div className="">
            <CenterLogo size="text-[400px]" showImagePlaceholder/>
          </div>

          <PaginationDots className="mt-8"
            currentPage={currentPage}
            totalPages={2}
          />
        </div>

        <AnimatePresence>
          {activeCard && (
            <StackedInfoCard
              type={activeCard}
              onClose={closeCard}
              isFromLeft={leftButtons.some(btn => btn.id === activeCard)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProfilePage;