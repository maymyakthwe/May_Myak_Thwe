import { RxCross1, RxHamburgerMenu } from "react-icons/rx"
import useMediaQuery from "../Hooks/useMediaQuery"
import NavLink from "./Introduction/NavLink"
import { useContext } from "react"
import { SideBarContext } from "../Context/Context"

const NavBar = () => {

   const isAboveMediumScreen = useMediaQuery("(min-width:640px)")
  const context = useContext(SideBarContext);
        if(!context){
            throw new Error('context error');
        }
        const { open,setOpen } = context;

  return (
    <div className='flex  items-center  text-lg  text-[#f3f3f3] justify-between  sm:text-xl xl:text:2xl'>
          <div >
            <NavLink>
              <a href="/">
              <span className='text-xl mr-1'>©</span>May — Protfolio</a>
              </NavLink>
          </div>
          {isAboveMediumScreen?
          <div className='flex items-center' >
            <li ><NavLink><a href="/work">Work</a></NavLink></li>
            <li ><NavLink><a href="/background">Background</a></NavLink></li>
            <li ><NavLink><a href="/contact">Contact</a></NavLink></li> 
          </div>:<div 
              
              className={`w-[50px] h-[50px] rounded-[20%]   flex justify-center items-center cursor-pointer bg-[#eee] text-[#000]`}
              onClick={()=>setOpen(!open)}>
                {/* {!open?<RxHamburgerMenu />:<RxCross1 />} */}
               {!open?<RxHamburgerMenu />:<RxCross1 />}
              </div>}
          
        </div>
  )
}

export default NavBar