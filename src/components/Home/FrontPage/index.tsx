import { useEffect,  useState, type Dispatch, type SetStateAction } from 'react'
// import Intro from '../Intro/Intro';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import './frontpage.css'
import profile from '../../../assets/profile.png'

import { FiPhone } from 'react-icons/fi'
import { HiOutlineVideoCamera } from 'react-icons/hi'
import { ImInfo } from 'react-icons/im'
import { RiEmojiStickerLine } from 'react-icons/ri'
import { BsMic } from 'react-icons/bs'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'
import { CgChevronDoubleDown } from 'react-icons/cg'



type SetStateBoolean = Dispatch<SetStateAction<boolean>>;
type Props ={
    introSectionRef:React.RefObject<HTMLDivElement | null>
    isInView_work_color:boolean
}

const FrontPage = ({introSectionRef,isInView_work_color}:Props) => {

    const [textRendered,setTextRendered] = useState<boolean>(false);
    
    //scroll animation
    const {scrollY} = useScroll();
    
    const springConfig = {stiffness:100,damping:30}

    const textOpacityRaw = useTransform(scrollY,[0,300],[1,0])
    const textOpacity = useSpring(textOpacityRaw,springConfig)

    const textYRaw = useTransform(scrollY,[0,300],[0,-30])
    const textY =useSpring(textYRaw,springConfig)

    const [renderTextOne, setRenderTextOne] = useState<boolean>(false)
    const [renderTextTwo, setRenderTextTwo] = useState<boolean>(false)
    const [renderTextThree, setRenderTextThree] = useState<boolean>(false)
    const [renderTextFour, setRenderTextFour] = useState<boolean>(false)
    const [renderTextFive, setRenderTextFive] = useState<boolean>(false)
    const [renderTextSix, setRenderTextSix] = useState<boolean>(false)
    const [typing, settyping] = useState<boolean>(false);


    //text render 
    useEffect(() => {

        const delayedRender = (setfunction:SetStateBoolean,delay:number)=>{
            setTimeout(()=>{
                setfunction(true);
            },delay)
        }

        delayedRender(settyping, 500)
        delayedRender(setRenderTextOne, 1000);
        delayedRender(setRenderTextTwo, 1500);
        delayedRender(setRenderTextThree, 2000);
        delayedRender(setRenderTextFour, 2500);
        delayedRender(setRenderTextFive, 3000);
        delayedRender(setRenderTextSix, 3500);

        setTimeout(() => {
            settyping(false);
        }, 4000);


        setTimeout(() => {
            // console.log('typing...end')
            setTextRendered(true);//scroll-btn
        }, 4500);
       
    },[setTextRendered])

    

  return (
        <motion.section  
        id='front-page-section' 
        className={`${isInView_work_color?'bg-black':'bg-white'} z-[1200] min-h-[700px]`} >
                    <div className='add-border'>
                        <div className={`front-page-nav ${isInView_work_color?'bg-black text-gray-200':'bg-white'} z-[1000] relative`}>
                            <div className='person'>
                                <img src={profile} alt="profile-pic" />
                                <div className='name'>May Myak Thwel</div>
                            </div>
                            <div className='icons'>
                                <div><FiPhone  /></div>
                                <div><HiOutlineVideoCamera  /></div>
                                <div><ImInfo  /></div>
                            </div>
                        </div>
                    </div>
                    <div className='text-section '>
                        <motion.div style={{opacity:textOpacity,y:textY}} className={`texts `}>
                            <ul >
                                {renderTextOne && <li className={`text ${isInView_work_color?'bg-[#5d5d5d86] text-gray-200':'bg-[#efefef]'}`}>Hi</li>}
                                {renderTextTwo && <li className={`text ${isInView_work_color?'bg-[#5d5d5d86] text-gray-200':'bg-[#efefef]'}`}>Are you a recruiter?</li>}
                                {renderTextThree && <li className={`text ${isInView_work_color?'bg-[#5d5d5d86] text-gray-200':'bg-[#efefef]'}`}>Are you here to look for inspiration?</li>}
                                {renderTextFour && <li className={`text ${isInView_work_color?'bg-[#5d5d5d86] text-gray-200':'bg-[#efefef]'}`}>Either Way</li>}
                                {renderTextFive && <li className={`text ${isInView_work_color?'bg-[#5d5d5d86] text-gray-200':'bg-[#efefef]'}`}>You are in the right place</li>}
                                {renderTextSix && <li className={`text ${isInView_work_color?'bg-[#5d5d5d86] text-gray-200':'bg-[#efefef]'}`}>Lets get started!</li>}
                            </ul>
                            <AnimatePresence>
                                {typing && <motion.div 
                                    animate={{ scale: 1, x: 60 }}
                                    initial={{ scale: 0, x: 60 }}
                                    exit={{ scale: 0, x: 60 }}
                                    transition={{ type: 'tween', duration: 0.3 }}
                                    className={`typing ${isInView_work_color?'bg-[#5d5d5d86] text-gray-200':'bg-[#efefef]'}`}>
                                    <div>.</div>
                                    <div>.</div>
                                    <div>.</div>
                                </motion.div>}
                            </AnimatePresence>
                            <img src={profile} alt="profile-pic" />
                        </motion.div>
                        <div className='text-bar'>
                            <div className={`text-bar-div ${isInView_work_color?' text-gray-200':''}`}>
                                <div><RiEmojiStickerLine className='icon' /></div>
                                <div className='input'><input type="text" /></div>
                                <div><BsMic className='icon' /></div>
                                <div><HiOutlinePhotograph className='icon' /></div>
                                <div><AiOutlineHeart className='icon' /></div>
                            </div>
                        </div >
                        {
                            textRendered && <div >
                                <motion.div
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                    className='scroll-down cursor-pointer'
                                    onClick={()=>introSectionRef.current?.scrollIntoView({ behavior: "smooth" })}><span>
                                    Scroll Down </span><CgChevronDoubleDown  /></motion.div>
                            </div>
                        }
                    </div>
                   

        </motion.section >
        
  )
}

export default FrontPage