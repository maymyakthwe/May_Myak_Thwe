import { AnimatePresence, motion } from "framer-motion"
import { useContext } from "react";
// import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { SideBarContext } from "../Context/context";


type Props = {
    isInView_Appear:boolean
    IsInView_color:boolean
}

const NavCircle = ({isInView_Appear,IsInView_color}:Props) => {

      const context = useContext(SideBarContext);
        if(!context){
            throw new Error('context error');
        }
        const { open,setOpen } = context;

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
              className={`lg:w-[70px] lg:h-[70px] w-[60px] h-[60px]  rounded-[50%] transform -translate-y-1/2   fixed xl:top-[100px]  xl:right-[100px] md:top-[70px] md:right-[50px]  top-[55px] xs:right-[25px]  right-[18px] z-1000 flex justify-center items-center cursor-pointer`}
              onClick={()=>setOpen(!open)}>
                {!open?<RxHamburgerMenu />:<RxCross1 />}
              </motion.div>} 
            </AnimatePresence>
  )
}

export default NavCircle