import NavBar from "../../Home/NavBar"

import DragSlider from "../../Home/dragSlider"
import nick1 from '../../../assets/nick1.png'
import nick2 from '../../../assets/nick2.png'
import nick3 from '../../../assets/nick3.png'
import nick4 from '../../../assets/nick4.png'
import nick5 from '../../../assets/nick5.png'


const img:string[] = [nick1,nick2,nick3,nick4,nick5]

const Nick = () => {
  

  return (
    <div className='w-screen h-max flex bg-[#111]'>
        {/* nav bar */}
        <div  className='fixed pt-[20px] xl:pt-[40px] w-full  whitespace-nowrap text-center  text-xl text-[#f3f3f3] bg-[#111] sm:px-[100px] z-[1000] border-b-1 border-[#222] pb-5 xs:px-[50px] px-[20px]'>
           <NavBar/>
       </div>

       {/* main */}
       <div className="xl:w-[65%] w-[80%]  m-auto my-[120px]  ">
        <div className=' font-bold mb-[20px] sm:mb-[40px] text-[#eee] text-3xl sm:text-4xl md-plus:text-5xl lg:text-6xl'> 
            Nick's Kitchen <span className='text-[#c7231b]'>Simple CRUD Website Using PHP</span>
        </div>
        <div className="flex text-[14px] sm:text-xl md-plus:text-2xl text-white leading-[1.6]">
            <p >This project was one of my final assignments in 2nd year . This includes simple frontend design and basic CRUD operations written in <span className="font-bold ">PHP</span>.</p>
        </div>

       

        <DragSlider img={img} color={'#c7231b'}/>


       
        {/* informations */}
        <div className="w-full flex justify-between ">
            <div className="w-[20%] text-[#ccc]">
                <p className="text-[12px] text-lg border-b-2 border-[#222] py-[30px]">FULLSTACK</p>
            </div>
            <div className="w-[20%] text-[#ccc]">
                <p className="text-[12px] text-lg border-b-2 border-[#222] py-[30px]">NOT DEPLOYED</p>
            </div>
            <div className="w-[20%] text-[#ccc]">
                <p className="text-[12px] text-lg border-b-2 border-[#222] py-[30px]">PHP</p>
            </div>
            <div className="w-[20%] text-[#ccc]">
                <p className="text-[12px] text-lg border-b-2 border-[#222] py-[30px]">@2024</p>
            </div>
        </div>

        <div className="flex my-[20px] text-[12px] sm:text-xl text-[#cb4740] underline leading-[1.6] ">
        </div>
    </div>
</div>

    
  )
}

export default Nick