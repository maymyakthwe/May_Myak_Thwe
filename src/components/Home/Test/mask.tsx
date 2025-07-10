import { useEffect, useState } from 'react'
import '../mask.css'
import {motion} from 'framer-motion'
// import cursor from '../../../assets/cursor.png'

const Mask = () => {
    //mouse position
    const [mousePosition,setMousePosition] = useState({x:0,y:0});
    //check hover
    const [isHovered,setIsHovered] = useState(false);

    //size
    const size = isHovered?'150':'30'

    //check location of mouse
    useEffect(()=>{
        const setFromEvent = (e) =>{
            setMousePosition({x:isHovered?e.clientX-75:e.clientX-15,y:isHovered?e.clientY-75:e.clientY-15})
        }
        window.addEventListener('mousemove',setFromEvent)

        return ()=>{
            window.removeEventListener('mousemove',setFromEvent)
        }
    })


  return (
    <div className='wrapper flex items-center justify-center w-full h-[100vh] flex-col '>
        <motion.div 
        animate={{WebkitMaskPosition:`${mousePosition.x}px ${mousePosition.y}px`,WebkitMaskSize:`${size}px`}}
        className={`mask text-8xl absolute  w-full h-full text-center font-bold`}>
            <h1 
            onMouseEnter={()=>setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)}>Not <br />Found</h1>
        </motion.div>
        <div className='normal text-8xl w-full h-full text-center font-bold'>
            <h1>404 <br />Page</h1>
        </div>
    </div>
  )
}

export default Mask