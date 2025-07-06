import React from 'react';
import { User } from 'lucide-react';

interface ProfileImageProps {
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-2xl">
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
          <User className="w-20 h-20 text-gray-300" />
        </div>
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse"></div>
    </div>
  );
};

export default ProfileImage;