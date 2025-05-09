import React from "react";

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className = "" }) => {
  return (
    <div className={`relative pb-10 pt-20 ${className}`}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30" />
        </div>
      </div>
      {/* <div className="relative flex justify-center">
        <div className="px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center transform hover:rotate-180 transition-transform duration-500">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Divider;
