import NavLink from "../../Home/Introduction/NavLink"
import {motion} from "framer-motion"
import hero from '../../../assets/hero.jpg'


const Background = () => {
   



 

  return (
    <div className="bg-[#111] w-screen h-screen overflow-hidden">

        {/* nav bar */}
        <div  className='absolute top-[40px] w-full  whitespace-nowrap text-center flex  items-center text-xl text-[#f3f3f3] justify-between px-[100px] z-[1000] border-b-1 border-[#222] pb-5'>
            <div><NavLink><a href="/">@May — Protfolio</a></NavLink></div>
            <div className='flex items-center'>
          <li ><NavLink><a href="/work">Work</a></NavLink></li>
          <li ><NavLink><a href="/background">Background</a></NavLink></li>
          <li ><NavLink><a href="/contact">Contact</a></NavLink></li> 
            </div>
       </div>

       {/*image moves */}
       <div className=" gap-[50px] w-screen flex justify-between opacity-[0.3]">
            <motion.div 
            initial={{y:0}}
            animate={{y:[0,'-50%',0]}}
            transition={{duration:60,ease:'linear',repeat:Infinity}} className="  gap-[50px] shrink-0 w-[33.33%]">
                <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
            </motion.div>
            <motion.div 
            initial={{y:'-50%'}}
            animate={{y:['-50%',0,'-50%']}}
            transition={{duration:60,ease:'linear',repeat:Infinity}} className="  gap-[50px] shrink-0 w-[33.33%]">
                <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
            </motion.div>
            <motion.div 
            initial={{y:0}}
            animate={{y:[0,'-50%',0]}}
            transition={{duration:60,ease:'linear',repeat:Infinity}} className="  gap-[50px] shrink-0 w-[33.33%]">
                <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
                <div className="w-full h-[650px] bg-amber-50 mb-[50px]"></div>
            </motion.div>
       </div>

        <div className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-b from-[#111]  via-[#111c] to-[#111b] ">
        </div>

        <div className="h-[90%] w-screen  fixed top-[100px] left-0  text-[#aaa] flex">
            {/*sidebar */}
            <div className="text-3xl w-[50%] ml-[10%] font-bold  uppercase">
                <div className="py-[20px] text-[#fff] text-5xl my-[10px]">Who I Am, What I can do</div>
                <div className="py-[20px]  ">How I Get Into Tech</div>
                <div className="py-[20px]  ">Passion, Purpose, and Personality</div>
                <div className="w-[70%] overflow-hidden rounded-lg mt-[40px]"><img src={hero} alt="" /></div>
            </div>
            <div className="w-[50%] bg-[#0006] h-full text-2xl px-[30px] py-5  overflow-y-scroll pr-[10%] text-justify">
                <div className="mb-[50px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet suscipit eius officiis blanditiis reiciendis modi nostrum doloremque ea, quis, veritatis aperiam excepturi at beatae, dolorem nulla a ipsam! Deserunt, ad? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati consequatur sit ex tempore beatae architecto cum laudantium quas, facilis, animi a, laborum expedita doloribus ipsum quae veritatis ab illum quia.</div>
                <div className="mb-[50px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis temporibus, enim error sapiente exercitationem nihil tempore nam iusto itaque iure placeat officiis eius, ullam nisi. Sapiente accusamus illum ratione ipsam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem consectetur inventore quaerat, nemo est nihil, vel placeat eveniet deleniti corporis optio omnis aut, voluptatum ipsa odio iure. Quasi, numquam maxime?</div>
                <div className="mb-[500px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit soluta perferendis atque reprehenderit voluptatibus dignissimos nemo. Voluptates tenetur facere obcaecati eligendi illum exercitationem dolores placeat, sunt harum veniam dicta voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, neque. Cupiditate nam eum reprehenderit, ipsa, deleniti dolore earum quia ullam sequi consequuntur quae nisi tempora incidunt debitis alias? Dolor, nam.</div>
            </div>
        </div>
        
    </div>
  )
}

export default Background