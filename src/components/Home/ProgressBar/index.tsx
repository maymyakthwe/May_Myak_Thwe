import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
    duration?: number; 
    onComplete:()=>void;
};

const PixelProgressBar = ({ duration = 1200 ,onComplete}: Props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 30;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      setProgress(Math.min(100, (current / steps) * 100));
      if (current >= steps) {
        clearInterval(timer)
        onComplete();
    };
    }, interval);

    return () => clearInterval(timer);
  }, [duration,onComplete]);

  const pixelBlocks = Array.from({ length: 50 });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#222] text-white font-mono">
      <div className="text-sm mb-4 tracking-widest text-[#c2c3ff]">
        LOADING: {Math.round(progress)}%
      </div>

      <div className="grid grid-cols-50 gap-[2px] w-[80%] max-w-[600px]">
        {pixelBlocks.map((_, index) => {
          const blockFill = (progress / 100) * 50;
          const filled = index < blockFill;

          return (
            <motion.div
              key={index}
              className={`w-[10px] h-[10px] ${
                filled ? 'bg-[#5d5fe1]' : 'bg-[#333]'
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: filled ? 1 : 0.8 }}
              transition={{ duration: 0.1 }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PixelProgressBar;
