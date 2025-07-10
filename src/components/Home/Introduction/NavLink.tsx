'use client'
import { motion,useMotionValue, useSpring } from 'framer-motion';
import React, { useRef } from 'react'


const NavLink = ({children}:{children:React.ReactNode}) => {

    const ref= useRef<HTMLDivElement>(null);
    
    const x=useMotionValue(0);
    const y=useMotionValue(0);

    const springConfig={stiffness:300,damping:30}
    const springX=useSpring(x,springConfig);
    const springY=useSpring(y,springConfig);

    const handleMouseMove = (e:React.MouseEvent)=>{
        if(!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        //finding center // distance from left + width/2 
        const centerX = rect.x + rect.width/2;
        const centerY = rect.y + rect.height/2;

        //finding mouse position
        const offsetX = e.clientX-centerX;
        const offsetY = e.clientY-centerY;

        //set x & y value
        x.set(offsetX*0.2);
        y.set(offsetY*0.6);
    }

    const handleMouseLeave = ()=>{
        //set x & y value
        x.set(0);
        y.set(0);
    }
    

  return (
    <motion.div ref={ref}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    style={{
        x: springX,
        y: springY,
      }}
      className="w-full h-full cursor-default select-none px-[15px]">
        {children}
    </motion.div>
  )
}

export default NavLink