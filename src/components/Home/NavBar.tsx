import { RxHamburgerMenu } from "react-icons/rx"
import useMediaQuery from "../Hooks/useMediaQuery"
import NavLink from "./Introduction/NavLink"

const NavBar = () => {

   const isAboveMediumScreen = useMediaQuery("(min-width:640px)")


  return (
    <div className='flex  items-center  text-lg  text-[#f3f3f3] justify-between  sm:text-2xl'>
          <div >
            <NavLink>
              <a href="/">
              <span className='text-xl mr-1'>©</span>May — Protfolio</a>
              </NavLink>
          </div>
          {isAboveMediumScreen?
          <div className='flex items-center'>
            <li ><NavLink><a href="/work">Work</a></NavLink></li>
            <li ><NavLink><a href="/background">Background</a></NavLink></li>
            <li ><NavLink><a href="/contact">Contact</a></NavLink></li> 
          </div>:<div 
              
              className={`w-[50px] h-[50px] rounded-[20%]   flex justify-center items-center cursor-pointer bg-[#eee] text-[#000]`}>
                {/* {!open?<RxHamburgerMenu />:<RxCross1 />} */}
                <RxHamburgerMenu />
              </div>}
          
        </div>
  )
}

export default NavBar