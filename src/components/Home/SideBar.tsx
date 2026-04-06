import { AnimatePresence, motion } from "framer-motion"
import NavLink from "./Introduction/NavLink"
import { useContext } from "react"
import { SideBarContext } from "../Context/Context"
import useMediaQuery from "../Hooks/useMediaQuery"
import { RxCross1, RxHamburgerMenu } from "react-icons/rx"

type Props = {
  isInView_Appear?:boolean
  IsInView_color?:boolean
}

const SideBar = ({isInView_Appear,IsInView_color}:Props) => {

  const isAboveMediumScreen = useMediaQuery("(min-width:640px)")
  const context = useContext(SideBarContext);
      if(!context){
          throw new Error('context error');
      }
      const { open,setOpen } = context;

  return (
    <AnimatePresence>
    {
      isAboveMediumScreen?
      <div className={`fixed right-0 top-0 z-[970] ${open&&!isInView_Appear?'bg-[#0000004d] w-screen h-screen':'w-0 h-0'}`}>
    <motion.div
    initial={{width:'0px',height:'0px',borderBottomLeftRadius:'100%'}}
    animate={{width:open&&!isInView_Appear?'450px':'0px',
      height:open&&!isInView_Appear?'420px':'0px',
      backgroundColor:IsInView_color?'#e5e5e5':'#222222',
      color:IsInView_color?'#000':'#fff'
    }}
    transition={{duration:0.3, ease:'easeInOut'}}
    className='fixed right-0 top-0 bg-[#0000006c] z-[990] flex justify-center items-center overflow-hidden backdrop-blur-[100px] max-w-[100vw] max-h-[100vw]'>
      <div className=" flex flex-col items-center text-xl justify-center gap-[20px] xs:text-2xl">
          <li ><NavLink><a href="/work">Work</a></NavLink></li>
          <li ><NavLink><a href="/background">Background</a></NavLink></li>
          <li ><NavLink><a href="/contact">Contact</a></NavLink></li> 
      </div>
    </motion.div>
    </div>
    :
    <div className={`fixed right-0 top-0 z-[1300] ${open?'bg-[#0000004d] w-screen h-screen':'w-0 h-0'}`}>
    <motion.div
    initial={{width:'0px',height:'0px',borderBottomLeftRadius:'100%'}}
    animate={{width:open?'450px':'0px',
      height:open?'420px':'0px',
      backgroundColor:IsInView_color?'#e5e5e5':'#222222',
      color:IsInView_color?'#000':'#fff'
    }}
    transition={{duration:0.3, ease:'easeInOut'}}
    className='fixed right-0 top-0 bg-[#0000006c] z-[990] flex justify-center items-center overflow-hidden backdrop-blur-[100px] max-w-[100vw] max-h-[100vw]'>
      <div className=" flex flex-col items-center text-xl justify-center gap-[20px] xs:text-2xl">
          <li ><NavLink><a href="/work">Work</a></NavLink></li>
          <li ><NavLink><a href="/background">Background</a></NavLink></li>
          <li ><NavLink><a href="/contact">Contact</a></NavLink></li> 
      </div>
      <motion.div 
        initial={{opacity:0,scale:0,y:-50}}
        animate={{opacity:1,scale:1,y:0,
          backgroundColor:IsInView_color?'#f3f3f3':'#333',
          color:IsInView_color?'#000':'#fff',
        }}
        exit={{opacity:0,scale:0,y:30}}
        transition={{duration:0.3, ease:'easeInOut'}}
        className={`lg:w-[70px] lg:h-[70px] w-[60px] h-[60px]  rounded-[50%] transform -translate-y-1/2   fixed xl:top-[100px]  xl:right-[100px] md:top-[70px] md:right-[50px]  top-[55px] xs:right-[25px]  right-[18px] z-1400 flex justify-center items-center cursor-pointer`}
        onClick={()=>setOpen(!open)}>
          {!open?<RxHamburgerMenu />:<RxCross1 />}
        </motion.div>
    </motion.div>
    </div>
    }
    </AnimatePresence>
  )
}

export default SideBar