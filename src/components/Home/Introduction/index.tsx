import { motion, useScroll, useTransform } from 'framer-motion';
import hero from '../../../assets/hero.jpg'
import { useEffect, useRef, useState } from 'react';
import './mask.css'
import NavBar from '../NavBar';
import useMediaQuery from '../../Hooks/useMediaQuery';

type Props = {
  introSectionRef:React.RefObject<HTMLDivElement | null>
  color_targetRef:React.RefObject<HTMLDivElement | null>
  appear_targetRef:React.RefObject<HTMLDivElement | null>
}

const Introduction = ({introSectionRef,color_targetRef,appear_targetRef}:Props) => {

   const isAboveMediumScreen = useMediaQuery("(min-width:640px)")

 

  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress:imgProgress} = useScroll({
    target:imgRef,
    offset: ["start end", "end start"],
  })

  

  const {scrollYProgress:sectionProgress} = useScroll({
    target:introSectionRef,
    offset: ["start end", "end start"],
  })


  //initial
  const img = useTransform(imgProgress, [0, 0.5], [1, 1.3]);
  const imgY = useTransform(imgProgress, [0, 0.5,1], [0, 0,500]);
  const section= useTransform(sectionProgress, [0.9, 1], [0, -100]);


  //mouse position
      const [mousePosition,setMousePosition] = useState({x:0,y:0});
      const lastMousePosition = useRef({ x: 0, y: 0 });
      //check hover
      const [isHovered,setIsHovered] = useState(false);
  
      //size
      const size = isHovered?'150':'30'
  
      //check location of mouse
      useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const posX = e.clientX;
          const posY = e.clientY;
      
          const newX = isHovered ? posX - 75 : posX - 15;
          const newY = isHovered ? posY - 75 : posY - 15;
      
          // Store original values (without scroll offset)
          lastMousePosition.current = { x: newX, y: newY };
          const scrollY=Math.round(window.scrollY-window.innerHeight);
      
          // Update state with scroll included
          setMousePosition({
            x: newX,
            y: newY +scrollY ,
          });
        };
      
        const handleScroll = () => {
          const { x, y } = lastMousePosition.current;
      
          // Update mouse position using scroll value
          setMousePosition({
            x,
            y: y + Math.round(window.scrollY-window.innerHeight),
          });
        };
      
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isHovered]);

   
  return (
    <motion.section id='introduction-section' style={{y:section}} ref={introSectionRef} className='w-full h-[100vh] overflow-hidden relative cursor-default min-h-[500px]'>
       
       <div  ref={imgRef} style={{ perspective: 800 }} className='w-full h-full overflow-hidden '>
        <motion.img style={{scale:img,y:imgY}} className='w-full h-full object-cover' src={hero} alt="" />
       </div>
       
        <motion.div  
          
          ref={textRef} 
          animate={!isAboveMediumScreen?{
            x:[0, 200,0], 
          }:{}}
          transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
          }}
          className='absolute bottom-0 left-0 w-full h-full whitespace-nowrap text-center flex justify-center items-center flex-col'>
          {/* <button type='submit' className='bg-[#cfcfcfb3] text-[2rem] rounded-2xl my-[25px] px-[50px] py-2 w-max'>Contact ME</button> */}
          {/* <div className='text-[#cfcfcf] text-[2rem]'></div> */}
          <div ref={color_targetRef} className='text-white absolute 
          bottom-[7%]   h-[100px]  font-bold flex items-center font-hero xl-plus:-[10rem] xl:text-[9rem] lg-plus:text-[8rem] lg:text-[6.5rem] md:text-[5.5rem] sm:text-[5rem] text-[6rem]'>MAY MYAK THWE</div> 
       </motion.div>
       {isAboveMediumScreen?
       <motion.div 
          ref={textRef}  
          className='mask absolute bottom-0 left-0 w-full h-full whitespace-nowrap text-center flex justify-center items-center flex-col'
          animate={{WebkitMaskPosition:`${mousePosition.x}px ${mousePosition.y}px`,WebkitMaskSize:`${size}px`}}>
          <div ref={color_targetRef} className='absolute bottom-[7%]  text-[#222] h-[100px] font-bold flex items-center font-hero xl-plus:-[10rem] xl:text-[9rem] lg-plus:text-[8rem] lg:text-[6.5rem] md:text-[5.5rem] sm:text-[5rem] text-[6rem]'
          onMouseEnter={()=>setIsHovered(true)} 
          onMouseLeave={()=>setIsHovered(false)}>MAY MYAK THWE</div> 
       </motion.div>:''}
       
       
      

       <div ref={appear_targetRef} className='absolute top-[40px] w-full  whitespace-nowrap text-center px-[20px] sm:px-[40px] lg:px-[100px] ' >
        <NavBar/>
       </div>

    </motion.section>
)
}

export default Introduction







