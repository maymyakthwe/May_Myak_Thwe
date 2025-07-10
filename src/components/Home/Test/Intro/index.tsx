import { motion,useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const Intro = () => {

  const IntrosectionRef = useRef(null);
  const {scrollY} = useScroll();

    const {scrollYProgress} = useScroll({
      target: IntrosectionRef,
      offset: ["0 1", "1.33 1"] // Tracks when element enters/leaves viewport
    });

    
    const springConfig = {stiffness:100,damping:30}
    const IntroSectionYRaw = useTransform(scrollY,[0, 300],[0,-150])
    const IntroSectionY = useSpring(IntroSectionYRaw,springConfig)

    const imageDivRaw = useTransform(scrollYProgress,[0, 0.5],[200, 0])
    const imageDiv = useSpring(imageDivRaw,springConfig)

    const text:string = "Hi, I'm May Myak Thwel — I Study Website Development Specialized in MERN Stack";

    const words:string[] = text.split(" ");

  return (
    <motion.section
      ref={IntrosectionRef}
      style={{y:IntroSectionY}} className="w-full h-[90vh] flex items-center">
      {/* intro-text-wrapper */}
      <motion.div className="text-7xl font-medium ml-[100px] w-[50%]"
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { staggerChildren: 0.3 }
        }
      }}>
        {words.map((word,i)=>(
          <motion.span key={i} className={`inline-block mr-[20px]`} 
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}>
            {word}
          </motion.span>
        ))}
      </motion.div>

      {/* intro-image-wrapper */}
      <motion.div 
        style={{x:imageDiv}}
        className=" w-[30%] h-[500px] rounded-4xl bg-[#DDDDDD] ml-[50px] relative">

        <svg className="absolute top-[-7.5%] right-[-10%] w-40 h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width="200" height="100">
          <rect x="10" y="10" width="180" height="80" rx="20" fill="#fff" stroke="#626262" stroke-width="2"/>
          <text x="100" y="62" font-family="'Segoe UI', Tahoma, sans-serif" font-size="38" fill="#EA2F14" text-anchor="middle" font-weight="bold">Hi</text>
          <circle cx="140" cy="40" r="4" fill="#EA2F14" opacity="0.7"/>
          <circle cx="160" cy="60" r="4" fill="#EA2F14" opacity="0.7"/>
        </svg>

        {/* add-image */}
        <img src="" alt="" />

      </motion.div>
     
    </motion.section>
  )
}

export default Intro