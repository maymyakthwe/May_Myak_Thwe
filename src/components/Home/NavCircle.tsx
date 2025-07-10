import { AnimatePresence, motion } from "framer-motion"
// import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";


type Props = {
    open:boolean
    setOpen:(value:boolean) => void;
    isInView_Appear:boolean
    IsInView_color:boolean
}

const NavCircle = ({open,setOpen,isInView_Appear,IsInView_color}:Props) => {

  return (
            <AnimatePresence>
              {!isInView_Appear && <motion.div 
              initial={{opacity:0,scale:0,y:-50}}
              animate={{opacity:1,scale:1,y:0,
                backgroundColor:IsInView_color?'#f3f3f3':'#333',
                color:IsInView_color?'#000':'#fff',
              }}
              exit={{opacity:0,scale:0,y:30}}
              transition={{duration:0.3, ease:'easeInOut'}}
              className={`w-[70px] h-[70px] rounded-[50%]  fixed top-[100px] transform -translate-y-1/2 right-[100px] z-1000 flex justify-center items-center cursor-pointer`}
              onClick={()=>setOpen(!open)}>
                {!open?<RxHamburgerMenu />:<RxCross1 />}
              </motion.div>} 
            </AnimatePresence>
  )
}

export default NavCircle