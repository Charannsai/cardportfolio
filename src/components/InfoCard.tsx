import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, MapPin, Mail, Phone } from 'lucide-react';

interface InfoCardProps {
  type: string;
  onClose: () => void;
  isFromLeft: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({ type, onClose, isFromLeft }) => {
  const getCardContent = () => {
    switch (type) {
      case 'about':
        return {
          title: 'About Me',
          content: (
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
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
          content: (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Next.js', 'Tailwind CSS'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python', 'PostgreSQL', 'MongoDB'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        };
      
      case 'projects':
        return {
          title: 'Projects',
          content: (
            <div className="space-y-4">
              {[
                { name: 'CodeMeow', desc: 'AI-powered coding assistant', tech: 'React, OpenAI' },
                { name: 'RapidUIX', desc: 'Fast UI component library', tech: 'TypeScript, Tailwind' },
                { name: 'EventOrgX', desc: 'Event management platform', tech: 'Next.js, Prisma' }
              ].map((project, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">{project.name}</h4>
                    <div className="flex space-x-2">
                      <Github className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
                      <ExternalLink className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{project.desc}</p>
                  <p className="text-xs text-gray-500">{project.tech}</p>
                </div>
              ))}
            </div>
          )
        };
      
      case 'experience':
        return {
          title: 'Experience',
          content: (
            <div className="space-y-4">
              {[
                { role: 'Senior Frontend Developer', company: 'TechCorp', period: '2022 - Present' },
                { role: 'Full Stack Developer', company: 'StartupXYZ', period: '2020 - 2022' },
                { role: 'Junior Developer', company: 'WebAgency', period: '2019 - 2020' }
              ].map((exp, index) => (
                <div key={index} className="border-l-2 border-blue-200 pl-4">
                  <h4 className="font-semibold text-gray-800">{exp.role}</h4>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                  <p className="text-xs text-gray-500">{exp.period}</p>
                </div>
              ))}
            </div>
          )
        };
      
      case 'blog':
        return {
          title: 'Latest Blog Posts',
          content: (
            <div className="space-y-4">
              {[
                { title: 'Building Scalable React Apps', date: 'Dec 8, 2024', views: '1.2K' },
                { title: 'Understanding System Design', date: 'Dec 5, 2024', views: '2.1K' },
                { title: 'ML for Developers', date: 'Dec 1, 2024', views: '987' }
              ].map((post, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                  <h4 className="font-semibold text-gray-800 mb-1">{post.title}</h4>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.views} views</span>
                  </div>
                </div>
              ))}
            </div>
          )
        };
      
      case 'contact':
        return {
          title: 'Get In Touch',
          content: (
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-gray-600" />
                  <span className="text-sm text-gray-700">hello@charansai.dev</span>
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
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </div>
          )
        };
      
      default:
        return { title: 'Info', content: <div>Content not found</div> };
    }
  };

  const { title, content } = getCardContent();

  return (
    <motion.div
      className={`absolute top-1/2 transform -translate-y-1/2 ${
        isFromLeft ? 'right-8' : 'left-8'
      } w-80 bg-white rounded-2xl shadow-2xl p-6 z-50`}
      initial={{ 
        scale: 0.8, 
        opacity: 0,
        x: isFromLeft ? 100 : -100
      }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        x: 0
      }}
      exit={{ 
        scale: 0.8, 
        opacity: 0,
        x: isFromLeft ? 100 : -100
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
    >
      {/* Close button */}
      <motion.button
        className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <X className="w-4 h-4 text-gray-600" />
      </motion.button>

      {/* Card content */}
      <div className="pr-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        {content}
      </div>
    </motion.div>
  );
};

export default InfoCard;