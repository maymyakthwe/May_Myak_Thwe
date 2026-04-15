import { useRef } from 'react'
import { WorkArray } from './workArray'
import WorkPrototype from './workPrototype'
import {motion} from 'framer-motion'
import NavBar from '../../Home/NavBar';
import useMediaQuery from '../../Hooks/useMediaQuery';

const Skeleton = () => {

  const scrollRef = useRef<HTMLDivElement>(null);
  const isAboveMediumScreen = useMediaQuery("(min-width:640px)")
  

  return (
    <div ref={scrollRef} className={isAboveMediumScreen?'w-screen flex ':'w-screen h-max'}>
        
        {/* nav bar */}
        <div  className='fixed pt-[20px] xl:pt-[40px] w-full  whitespace-nowrap text-center  text-xl text-[#f3f3f3] bg-[#111] sm:px-[100px] z-[1000] border-b-1 border-[#222] pb-5 xs:px-[50px] px-[20px]'>
           <NavBar/>
       </div>

        {/* background */}
          <div style={{ transform: 'rotateZ(90deg) translateX(-300px)' }} className="fixed gap-[50px] w-screen flex   opacity-[0.3]">
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

        {/* gradient */}
        <div className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-b from-[#111]  via-[#111d] to-[#111e] ">
        </div>

        {/* Main Content Area */}
        <div className="container mx-auto px-[20px] sm:px-[50px] xl:px-[100px] pt-[120px] pb-[80px] z-[10] relative">
            
            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12">
            {WorkArray.map((work, idx) => (
                <WorkPrototype key={idx} work={work} />
            ))}
            </div>

            </div>
    </div>
  )
}

export default Skeleton