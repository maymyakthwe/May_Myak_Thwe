import { motion } from "framer-motion";
import { useState } from "react";
import type { MouseEvent } from "react";

const RadialHoverButton = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsHovering(true);
  };

  return (
    <motion.button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovering(false)}
      className="relative overflow-hidden px-8 py-4 rounded-xl bg-black text-white font-medium text-lg"
    >
      {/* Radial color fill */}
      <motion.div
        className="absolute inset-0 bg-[#00d1ff] z-0"
        initial={{ 
          clipPath: `circle(0% at ${coords.x}px ${coords.y}px)`,
          opacity: 0
        }}
        animate={{
          clipPath: isHovering 
            ? `circle(150% at ${coords.x}px ${coords.y}px)`
            : `circle(0% at ${coords.x}px ${coords.y}px)`,
          opacity: isHovering ? 1 : 0
        }}
        transition={{ 
          duration: 0.5,
          ease: "easeOut"
        }}
      />

      {/* Simple text */}
      <span className="relative z-10">Hover Me</span>
    </motion.button>
  );
};

export default RadialHoverButton;