import React, { useRef } from 'react'
import { motion } from "framer-motion";

  type circleType = {
    id:number,
    name:string,
    x:number,
    y:number,
    scale:number,
    delay:number,
    opacity:number
  }


  // Circle data
  const circles:Array<circleType> = [
    { id: 1,name:'JS' ,x:5,y:8, scale:0.7, delay: 0.8, opacity:0.3 },
    { id: 2,name:'PHP' ,x:35,y:10, scale:0.9, delay: 0.5, opacity:0.7 },
    { id: 3,name:'MongoDB' ,x:60,y:10, scale:0.7, delay: 0.3, opacity:0.5 },
    { id: 4,name:'JS' ,x:80,y:10, scale:0.6, delay: 0.8, opacity:0.5 },
    { id: 5,name:'JS' ,x:80,y:40, scale:1, delay: 0.5, opacity:0.5 },
    { id: 6,name:'JS' ,x:80,y:65, scale:0.6, delay: 0.3, opacity:0.4 },
    { id: 7,name:'JS' ,x:65,y:65, scale:0.9, delay: 0.8, opacity:0.8 },
    { id: 8,name:'JS' ,x:45,y:65, scale:0.6, delay: 0.5, opacity:0.3 },
    { id: 9,name:'JS' ,x:25,y:60, scale:0.7, delay: 0.3, opacity:0.9 },
    { id: 8,name:'JS' ,x:5,y:65, scale:0.6, delay: 0.5, opacity:0.3 },
    { id: 9,name:'JS' ,x:5,y:35, scale:0.9, delay: 0.3, opacity:0.9 },
    
  ];


  const GoodAt:React.FC = () => {

  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className='w-full h-[1000px] py-[100px] '>
        <motion.div 
        className='relative w-full h-full' ref={containerRef}>
          <h1 className='absolute top-[40%] left-[50%] text-7xl transform -translate-x-1/2 font-bold text-[#EA2F14]'>I'm Good At</h1>
          {circles.map((c)=>{
            return <div key={c.id} className={`absolute  rounded-[50%] w-[250px] h-[250px] text-4xl p-5 flex items-center justify-center `} style={{ top: `${c.y}%`, left: `${c.x}%`,scale:c.scale}}>{c.name}</div>
          })}
        </motion.div>
    </section>
  )
}

export default GoodAt