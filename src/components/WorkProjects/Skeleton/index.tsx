import { useRef } from 'react'
import { WorkArray } from './workArray'
import WorkPrototype from './workPrototype'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import {motion} from 'framer-motion'
import NavBar from '../../Home/NavBar';
import useMediaQuery from '../../Hooks/useMediaQuery';

const Skeleton = () => {

  const scrollRef = useRef<HTMLDivElement>(null);
  const isAboveMediumScreen = useMediaQuery("(min-width:640px)")
  

  return (
    <div ref={scrollRef} className={isAboveMediumScreen?'w-screen h-[500vh] flex ':'w-screen h-max'}>
        
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

      <div className={isAboveMediumScreen?'fixed flex w-full  h-screen top-0 left-0 sm:px-[100px]  xs:px-[50px] px-[20px] overflow-hidden ':'pt-[100px] w-screen h-max flex  justify-center'}>

          {/* work */}
          <div className={isAboveMediumScreen?'my-auto flex ':'flex flex-col gap-5 py-5'}>
            {WorkArray.map((work,idx)=>{
                return <WorkPrototype key={idx} idx={idx} work={work} scrollRef={scrollRef}/>
            })}
          </div>

          {/* scroll */}
          {isAboveMediumScreen&&<p className='text-[#eee] fixed bottom-[30px] xl:bottom-[40px] flex  gap-[15px] items-center'>SCROLL TO VIEW MORE <span className='text-3xl text-[#ccc]'><FaRegArrowAltCircleRight /></span> </p>}

      </div>
    </div>
  )
}

export default Skeleton