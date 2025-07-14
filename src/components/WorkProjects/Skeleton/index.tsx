import { useRef } from 'react'
import { WorkArray } from './workArray'
import WorkPrototype from './workPrototype'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import {motion} from 'framer-motion'
import NavBar from '../../Home/NavBar';

const Skeleton = () => {

  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={scrollRef} className='w-screen h-[500vh] flex '>
        
        {/* nav bar */}
        <div  className='fixed top-[40px] w-full  whitespace-nowrap text-center  text-xl text-[#f3f3f3]  px-[100px] z-[1000] border-b-1 border-[#222] pb-5'>
           <NavBar/>
       </div>


       <div className='fixed flex w-full h-screen top-0 left-0 px-[100px]  overflow-hidden '>
          <div style={{ transform: 'rotateZ(90deg) translateX(-300px)' }} className="absolute gap-[50px] w-screen flex   opacity-[0.3]">
          <motion.div 
                initial={{y:0}}
                animate={{y:[0,'20%',0]}}
                transition={{duration:20,ease:'linear',repeat:Infinity}} className="  gap-[50px] shrink-0 w-[100px]">
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                </motion.div>
              <motion.div 
                initial={{y:'20%'}}
                animate={{y:['20%',0,'20%']}}
                transition={{duration:20,ease:'linear',repeat:Infinity}} className="  gap-[50px] shrink-0 w-[100px]">
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                </motion.div>
          <motion.div 
                initial={{y:0}}
                animate={{y:[0,'20%',0]}}
                transition={{duration:20,ease:'linear',repeat:Infinity}} className="  gap-[50px] shrink-0 w-[100px]">
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                </motion.div>
              <motion.div 
                initial={{y:'20%'}}
                animate={{y:['20%',0,'20%']}}
                transition={{duration:20,ease:'linear',repeat:Infinity}} className="  gap-[50px] shrink-0 w-[100px]">
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                </motion.div>
                <motion.div 
                initial={{y:0}}
                animate={{y:[0,'20%',0]}}
                transition={{duration:20,ease:'linear',repeat:Infinity}} className="  gap-[50px] shrink-0 w-[100px]">
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                </motion.div>
                <motion.div 
                initial={{y:'20%'}}
                animate={{y:['20%',0,'20%']}}
                transition={{duration:20,ease:'linear',repeat:Infinity}} className="  gap-[50px] shrink-0 w-[100px]">
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                </motion.div>
                <motion.div 
                initial={{y:0}}
                animate={{y:[0,'20%',0]}}
                transition={{duration:20,ease:'linear',repeat:Infinity}} className="  gap-[50px] shrink-0 w-[100px]">
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                    <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                </motion.div>
          </div>

          <div className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-b from-[#111]  via-[#111d] to-[#111e] ">
          </div>


          <div className='my-auto flex '>
            {WorkArray.map((work,idx)=>{
                return <WorkPrototype idx={idx} work={work} scrollRef={scrollRef}/>
            })}
          </div>
          <p className='text-[#eee] fixed bottom-[40px] flex  gap-[15px] items-center'>SCROLL TO VIEW MORE <span className='text-3xl text-[#ccc]'><FaRegArrowAltCircleRight /></span> </p>

        </div>
    </div>
  )
}

export default Skeleton