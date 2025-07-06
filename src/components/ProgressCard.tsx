import React from 'react';

interface ProgressCardProps {
  title: string;
  value: number;
  max: number;
  color: string;
  unit?: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ title, value, max, color, unit = "" }) => {
  const percentage = (value / max) * 100;
  
  return (
    <div className="bg-white rounded-xl p-4 shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <span className="text-xs text-gray-400">{value}/{max}{unit}</span>
      </div>
      <div className="relative w-16 h-16 mx-auto">
        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="#f3f4f6"
            strokeWidth="4"
          />
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeDasharray={`${percentage * 1.76} 176`}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-gray-800">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;