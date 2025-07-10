import { motion, useScroll, useTransform } from 'framer-motion';
import hero from '../../../assets/hero.jpg'
import { useEffect, useRef, useState } from 'react';
import NavLink from './NavLink';
import './mask.css'

type Props = {
  introSectionRef:React.RefObject<HTMLDivElement | null>
  color_targetRef:React.RefObject<HTMLDivElement | null>
  appear_targetRef:React.RefObject<HTMLDivElement | null>
}

const Introduction = ({introSectionRef,color_targetRef,appear_targetRef}:Props) => {

 

  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress:imgProgress} = useScroll({
    target:imgRef,
    offset: ["start end", "end start"],
  })

  const {scrollYProgress:textProgress} = useScroll({
    target:textRef,
    offset: ["start end", "end start"],
  })

  const {scrollYProgress:sectionProgress} = useScroll({
    target:introSectionRef,
    offset: ["start end", "end start"],
  })


  //initial
  const img = useTransform(imgProgress, [0, 0.5], [1, 1.3]);
  const imgY = useTransform(imgProgress, [0, 0.5,1], [0, 0,500]);
  const textScale = useTransform(textProgress, [0, 0.1], [0.8, 1]);
  const textY = useTransform(textProgress, [0, 0.1,0.9,1], [100, 0,0,-200]);
  const textOpacity = useTransform(textProgress, [0, 0.1], [0, 1]);
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
    <motion.section id='introduction-section' style={{y:section}} ref={introSectionRef} className='w-full h-[100vh] overflow-hidden relative cursor-default'>
       
       <div  ref={imgRef} style={{ perspective: 800 }} className='w-full h-full overflow-hidden '>
        <motion.img style={{scale:img,y:imgY}} className='w-full h-full object-cover' src={hero} alt="" />
       </div>
       
        <motion.div  
          
          ref={textRef} 
          style={{scale:textScale,y:textY,opacity:textOpacity}}
          className='absolute bottom-0 left-0 w-full h-full whitespace-nowrap text-center flex justify-center items-center flex-col'>
          {/* <button type='submit' className='bg-[#cfcfcfb3] text-[2rem] rounded-2xl my-[25px] px-[50px] py-2 w-max'>Contact ME</button> */}
          {/* <div className='text-[#cfcfcf] text-[2rem]'></div> */}
          <div ref={color_targetRef} className='text-white absolute bottom-[10%]   h-[100px] text-[10rem] font-bold flex items-center font-hero'>MAY MYAK THWE</div> 
       </motion.div>
       <motion.div 
          ref={textRef}  
          style={{scale:textScale,y:textY,opacity:textOpacity}}
          className='mask absolute bottom-0 left-0 w-full h-full whitespace-nowrap text-center flex justify-center items-center flex-col'
          animate={{WebkitMaskPosition:`${mousePosition.x}px ${mousePosition.y}px`,WebkitMaskSize:`${size}px`}}>
          <div ref={color_targetRef} className='absolute bottom-[10%]  text-[#222] h-[100px] text-[10rem] font-bold flex items-center font-hero'
          onMouseEnter={()=>setIsHovered(true)} 
          onMouseLeave={()=>setIsHovered(false)}>MAY MYAK THWE</div> 
       </motion.div>
       
      

       <div ref={appear_targetRef} className='absolute top-[100px] w-full  whitespace-nowrap text-center flex  items-center text-xl text-[#f3f3f3] justify-between px-[100px]'>
       <div><NavLink><a href="/">@May — Protfolio</a></NavLink></div>

        <div className='flex items-center'>
          <li ><NavLink><a href="/work">Work</a></NavLink></li>
          <li ><NavLink><a href="/background">Background</a></NavLink></li>
          <li ><NavLink><a href="/contact">Contact</a></NavLink></li> 
        </div>
       </div>

    </motion.section>
)
}

export default Introduction







