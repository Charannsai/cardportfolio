import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, Calendar, MapPin, Mail, Phone, Star, GitBranch } from 'lucide-react';

interface StackedInfoCardProps {
  type: string;
  onClose: () => void;
  isFromLeft: boolean; // Determines if the button was pressed from the left or right
}

const StackedInfoCard: React.FC<StackedInfoCardProps> = ({ type, onClose, isFromLeft }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for initial
  const cardRef = useRef(null);
  
  // For swipe animation
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-10, 10]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleSendMessage = () => {
    window.location.href = 'mailto:pathurisai31@gmail.com';
  };

  const getCardData = () => {
    switch (type) {
      case 'about':
        return {
          title: 'About Me',
          isStack: false,
          content: (
            <div className="">
              <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience creating 
                digital solutions that make a difference. I love turning complex problems 
                into simple, beautiful designs.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  San Francisco, CA
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Available for freelance
                </div>
              </div>
            </div>
          )
        };
      
      case 'skills':
        return {
          title: 'Skills',
          isStack: true,
          items: [
            {
              title: 'Frontend Development',
              content: (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'Angular'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Expert in modern frontend frameworks and libraries with 5+ years of experience.
                  </p>
                </div>
              )
            },
            {
              title: 'Backend Development',
              content: (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express', 'FastAPI'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Proficient in server-side technologies and database management.
                  </p>
                </div>
              )
            },
            {
              title: 'Tools & Libraries',
              content: (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Docker', 'AWS', 'Figma', 'Webpack', 'Jest'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Experienced with modern development tools and deployment platforms.
                  </p>
                </div>
              )
            }
          ]
        };
      
      case 'projects':
        return {
          title: 'Projects',
          isStack: true,
          items: [
            {
              title: 'CodeMeow',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-600">AI-powered coding assistant that helps developers write better code faster.</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {['React', 'OpenAI', 'Node.js'].map(tech => (
                      <span key={tech} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>234</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitBranch className="w-3 h-3" />
                      <span>45</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex items-center px-3 py-1 bg-gray-800 text-white rounded-lg text-xs hover:bg-gray-700">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </button>
                    <button className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live Demo
                    </button>
                  </div>
                </div>
              )
            },
            {
              title: 'RapidUIX',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-600">Fast UI component library built with TypeScript and Tailwind CSS.</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {['TypeScript', 'Tailwind', 'Storybook'].map(tech => (
                      <span key={tech} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>189</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitBranch className="w-3 h-3" />
                      <span>32</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex items-center px-3 py-1 bg-gray-800 text-white rounded-lg text-xs hover:bg-gray-700">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </button>
                    <button className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live Demo
                    </button>
                  </div>
                </div>
              )
            },
            {
              title: 'EventOrgX',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-600">Event management platform with real-time updates and analytics.</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {['Next.js', 'Prisma', 'PostgreSQL'].map(tech => (
                      <span key={tech} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>156</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitBranch className="w-3 h-3" />
                      <span>28</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex items-center px-3 py-1 bg-gray-800 text-white rounded-lg text-xs hover:bg-gray-700">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </button>
                    <button className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live Demo
                    </button>
                  </div>
                </div>
              )
            }
          ]
        };
      
      case 'experience':
        return {
          title: 'Experience',
          isStack: true,
          items: [
            {
              title: 'Senior Frontend Developer',
              content: (
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">TechCorp Inc.</h4>
                      <p className="text-sm text-gray-600">2022 - Present</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Current</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Led frontend development for 3 major products</li>
                    <li>• Mentored 5 junior developers</li>
                    <li>• Improved app performance by 40%</li>
                    <li>• Implemented modern React patterns</li>
                  </ul>
                </div>
              )
            },
            {
              title: 'Full Stack Developer',
              content: (
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">StartupXYZ</h4>
                      <p className="text-sm text-gray-600">2020 - 2022</p>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">2 years</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Built MVP from scratch using React & Node.js</li>
                    <li>• Designed and implemented REST APIs</li>
                    <li>• Managed AWS infrastructure</li>
                    <li>• Collaborated with design team</li>
                  </ul>
                </div>
              )
            },
            {
              title: 'Junior Developer',
              content: (
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">WebAgency</h4>
                      <p className="text-sm text-gray-600">2019 - 2020</p>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">1 year</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Developed responsive websites</li>
                    <li>• Learned modern JavaScript frameworks</li>
                    <li>• Worked on client projects</li>
                    <li>• Gained experience in web development</li>
                  </ul>
                </div>
              )
            }
          ]
        };
      
      case 'blog':
        return {
          title: 'Latest Blog Posts',
          isStack: true,
          items: [
            {
              title: 'Building Scalable React Apps',
              content: (
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    Learn best practices for architecting large React applications that can scale with your team and user base.
                  </p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Dec 8, 2024</span>
                    <span>1.2K views</span>
                  </div>
                  <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Read More
                  </button>
                </div>
              )
            },
            {
              title: 'Understanding System Design',
              content: (
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    A comprehensive guide to system design principles and patterns for building robust applications.
                  </p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Dec 5, 2024</span>
                    <span>2.1K views</span>
                  </div>
                  <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Read More
                  </button>
                </div>
              )
            },
            {
              title: 'ML for Developers',
              content: (
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    Getting started with Machine Learning as a web developer - practical tips and resources.
                  </p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Dec 1, 2024</span>
                    <span>987 views</span>
                  </div>
                  <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Read More
                  </button>
                </div>
              )
            }
          ]
        };
      
      case 'contact':
        return {
          title: 'Get In Touch',
          isStack: false,
          content: (
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-gray-600" />
                  <span className="text-sm text-gray-700">pathurisai31@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-gray-600" />
                  <span className="text-sm text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-gray-600" />
                  <span className="text-sm text-gray-700">San Francisco, CA</span>
                </div>
              </div>
              <button 
                onClick={handleSendMessage}
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          )
        };
      
      default:
        return { title: 'Info', isStack: false, content: <div>Content not found</div> };
    }
  };

  const cardData = getCardData();
  const totalItems = cardData.isStack ? cardData.items?.length || 0 : 1;

  const nextCard = () => {
    if (cardData.isStack && cardData.items) {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % cardData.items.length);
    }
  };

  const prevCard = () => {
    if (cardData.isStack && cardData.items) {
      setDirection(-1);
      setCurrentIndex((prev) => (prev - 1 + cardData.items.length) % cardData.items.length);
    }
  };

  // Handle drag gestures for swiping cards
  const handleDragEnd = (_, info) => {
    if (info.offset.x < -100) {
      nextCard();
    } else if (info.offset.x > 100) {
      prevCard();
    }
  };

  const currentItem = cardData.isStack && cardData.items ? cardData.items[currentIndex] : null;

  // Calculate the positioning class based on isFromLeft
  const positionClass = isFromLeft 
    ? 'right-8 bottom-16' 
    : 'left-8 bottom-16';

  // Single card for non-stacked items
  if (!cardData.isStack) {
    return (
      <motion.div
        className={`fixed ${positionClass} w-80 bg-white rounded-2xl shadow-2xl p-6 z-50`}
        initial={{ 
          scale: 0.8, 
          opacity: 0,
          x: isFromLeft ? 100 : -100,
          y: 50
        }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          x: 0,
          y: 0
        }}
        exit={{ 
          scale: 0.8, 
          opacity: 0,
          x: isFromLeft ? 100 : -100,
          y: 50
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25
        }}
      >
        {/* Close button */}
        <motion.button
          className="absolute top-3 right-3 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-4 h-4 text-gray-600" />
        </motion.button>

        <div className="pt-2">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{cardData.title}</h3>
          {cardData.content}
        </div>
      </motion.div>
    );
  }

  // Stacked cards design
  return (
    <div className={`fixed ${positionClass} w-80 h-auto z-50 perspective-1000`}>
      {/* Background stacked cards */}
      {cardData.items && Array.from({ length: Math.min(3, totalItems) }).map((_, index) => {
        if (index === 0) return null; // Skip the first one as it's the main card
        
        const offset = index * 6;
        const scale = 1 - (index * 0.03);
        const opacity = 1 - (index * 0.2);
        const zIndex = totalItems - index;
        
        return (
          <motion.div
            key={`stack-${index}`}
            className="absolute inset-0 bg-white rounded-2xl shadow-lg p-6"
            style={{
              zIndex: zIndex,
              transformOrigin: isFromLeft ? "right bottom" : "left bottom"
            }}
            initial={{ 
              scale: 0.8, 
              opacity: 0,
              x: isFromLeft ? 100 : -100,
              y: 50
            }}
            animate={{ 
              scale: scale, 
              opacity: opacity,
              x: isFromLeft ? -offset : offset,
              y: offset,
              rotate: isFromLeft ? -2 * index : 2 * index
            }}
            exit={{ 
              scale: 0.8, 
              opacity: 0,
              x: isFromLeft ? 100 : -100,
              y: 50
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              delay: index * 0.05
            }}
          />
        );
      })}

      {/* Main front card */}
      <motion.div
        ref={cardRef}
        className="relative bg-white rounded-2xl shadow-2xl p-6 origin-center"
        style={{ 
          zIndex: totalItems + 1,
          x,
          rotate,
          opacity
        }}
        drag={cardData.isStack ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        dragElastic={0.7}
        initial={{ 
          scale: 0.8, 
          opacity: 0,
          x: isFromLeft ? 100 : -100,
          y: 50
        }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0
        }}
        exit={{ 
          scale: 0.8, 
          opacity: 0,
          x: isFromLeft ? 100 : -100,
          y: 50
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25
        }}
      >
        {/* Card indicator dots for multiple cards */}
        {totalItems > 1 && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {Array.from({ length: totalItems }).map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full ${
                  i === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}

        {/* Close button */}
        <motion.button
          className="absolute top-3 right-3 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-4 h-4 text-gray-600" />
        </motion.button>

        {/* Navigation arrows for multiple cards */}
        {totalItems > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-8 z-20">
            <motion.button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 shadow-md transition-colors"
              onClick={prevCard}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </motion.button>
            <motion.button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 shadow-md transition-colors"
              onClick={nextCard}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </motion.button>
          </div>
        )}

        {/* Card content */}
        <div className="pt-2 pb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction * 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 20 }}
              transition={{ duration: 0.2 }}
              className="min-h-[200px]"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {currentItem ? currentItem.title : cardData.title}
              </h3>
              {currentItem ? currentItem.content : cardData.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default StackedInfoCard;