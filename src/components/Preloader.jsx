import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Progress increment interval (37ms * 100 = 3.7 seconds total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 37);

    // After the progress reaches 100%, wait a brief moment then hide
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4200); // 4.2s total (3.7s progress + 0.5s pause)

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -100,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#021526] overflow-hidden"
        >
          {/* Animated background glows */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>

          <div className="relative flex flex-col items-center">
            {/* Logo/Icon Area */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-24 h-24 mb-8 flex items-center justify-center"
            >
              {/* Spinning Ring */}
              <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="44"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="2"
                  fill="none"
                />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="44"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ strokeDasharray: "0 283" }}
                  animate={{ strokeDasharray: `${(progress * 283) / 100} 283` }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Central Initial */}
              <motion.span 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl font-league font-bold text-white tracking-tighter"
              >
                M
              </motion.span>
            </motion.div>

            {/* Progress Text */}
            <div className="flex flex-col items-center gap-2">
              <motion.div 
                className="font-outfit text-sm text-gray-500 uppercase tracking-[0.3em]"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Initializing Experience
              </motion.div>
              <div className="flex items-baseline gap-1">
                <span className="font-league text-5xl font-bold text-white tabular-nums">
                  {progress}
                </span>
                <span className="font-outfit text-blue-400 text-lg">%</span>
              </div>
            </div>
          </div>

          {/* Bottom decorative line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-500 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
