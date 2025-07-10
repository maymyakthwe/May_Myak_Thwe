import { motion } from "framer-motion";

type CircleProps = {
    children: React.ReactNode;
  };

const Circle: React.FC<CircleProps> = ({children}) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const visiblePortion = (9 / 10) * circumference; 
  const gap = circumference - visiblePortion;     

  return (
    
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="#fff"
          strokeWidth="8"
          strokeDasharray={`${visiblePortion} ${gap}`}
          strokeLinecap="round"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
          style={{ transformOrigin: "50% 50%" }}
        >{children}</motion.circle>
      </svg>
   
  );
};

export default Circle;
