import { AnimatePresence, motion } from "framer-motion"
import NavLink from "./Introduction/NavLink"

type Props = {
  open:boolean
  isInView_Appear?:boolean
  IsInView_color?:boolean
}

const SideBar = ({open,isInView_Appear,IsInView_color}:Props) => {
  return (
    <AnimatePresence>
      <div className={`fixed right-0 top-0 z-[970] ${open&&!isInView_Appear?'bg-[#0000004d] w-screen h-screen':'w-0 h-0'}`}>
    <motion.div
    initial={{width:'0px',height:'0px',borderBottomLeftRadius:'100%'}}
    animate={{width:open&&!isInView_Appear?'30%':'0px',
      height:open&&!isInView_Appear?'30vw':'0px',
      backgroundColor:IsInView_color?'#e5e5e5':'#222222',
      color:IsInView_color?'#000':'#fff'
    }}
    transition={{duration:0.3, ease:'easeInOut'}}
    className=' fixed right-0 top-0 bg-[#0000006c] z-[990] flex justify-center items-center overflow-hidden backdrop-blur-[4px] '>
      <div className="w-[400px] h-[400px] flex flex-col items-center text-2xl justify-center gap-[20px] ">
          <li ><NavLink><a href="/work">Work</a></NavLink></li>
          <li ><NavLink><a href="/background">Background</a></NavLink></li>
          <li ><NavLink><a href="/contact">Contact</a></NavLink></li> 
      </div>
    </motion.div>
    </div>
    </AnimatePresence>
  )
}

export default SideBar