import NavBar from "../../Home/NavBar"

import DragSlider from "../../Home/dragSlider"
import image1 from '../../../assets/dev1.png'
import image2 from '../../../assets/dev2.png'
import image3 from '../../../assets/dev3.png'
import image4 from '../../../assets/dev4.png'
import image5 from '../../../assets/dev5.png'

const img:string[] = [image1,image2,image3,image4,image5]

const Furry = () => {
   

  return (
    <div className='w-screen h-max flex bg-[#111]'>
        {/* nav bar */}
        <div  className='fixed pt-[20px] xl:pt-[40px] w-full  whitespace-nowrap text-center  text-xl text-[#f3f3f3] bg-[#111] sm:px-[100px] z-[1000] border-b-1 border-[#222] pb-5 xs:px-[50px] px-[20px]'>
           <NavBar/>
       </div>

       {/* main */}
       <div className="xl:w-[65%] w-[80%]  m-auto my-[120px]  ">
        <div className=' font-bold mb-[20px] sm:mb-[40px] text-[#eee] text-3xl sm:text-4xl md-plus:text-5xl lg:text-6xl'> 
            DevSpace <span className='text-[#5e29d0]'>Developer Profile Tracker</span>
        </div>
        <div className="flex text-[14px] sm:text-xl md-plus:text-2xl text-white leading-[1.6]">
            <p >This project is a production-ready, full-stack web application built to deliver a seamless user experience backed by a high-performance infrastructure. The frontend is crafted with Next.js, a Python FastAPI backend and MongoDB ensures lightning-fast data processing and API management. A major focus of this project was security and accessibility. I implemented a robust authentication system that gives users flexibility: they can securely log in using a custom JWT-backed email/password system, or utilize frictionless third-party OAuth via Google and GitHub. Featuring complete CRUD functionality and a fully deployed architecture, this application demonstrates comprehensive, end-to-end software development.</p>
        </div>

       

        <DragSlider img={img} color={'#4400d5'}/>


       
        {/* informations */}
        <div className="w-full flex justify-between ">
            <div className="w-[20%] text-[#ccc]">
                <p className="text-[12px] text-lg border-b-2 border-[#222] py-[30px]">FULLSTACK</p>
            </div>
            <div className="w-[20%] text-[#ccc]">
                <p className="text-[12px] text-lg border-b-2 border-[#222] py-[30px]">DEPLOYED</p>
            </div>
            <div className="w-[20%] text-[#ccc]">
                <p className="text-[12px] text-lg border-b-2 border-[#222] py-[30px]">NEXT.JS / PYTHON</p>
            </div>
            <div className="w-[20%] text-[#ccc]">
                <p className="text-[12px] text-lg border-b-2 border-[#222] py-[30px]">@2024</p>
            </div>
        </div>
        <div className="flex my-[20px] text-[12px] sm:text-xl text-[#5d5fe1] underline leading-[1.6] ">
            <a href="https://dev-space-lilac-one.vercel.app/" target="_blank">Click To See Live Site.</a>
        </div>
        
    </div>
</div>

    
  )
}

export default Furry