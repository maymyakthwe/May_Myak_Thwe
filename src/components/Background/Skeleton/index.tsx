import NavLink from "../../Home/Introduction/NavLink"
import {motion} from "framer-motion"
import hero from '../../../assets/hero.jpg'
import { useEffect, useRef, useState } from "react"

const textArray = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cupiditate cum cumque sunt magnam ab placeat, facere officia qui hic, delectus magni dicta beatae nam veniam saepe perferendis rem asperiores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cupiditate cum cumque sunt magnam ab placeat, facere officia qui hic, delectus magni dicta beatae nam veniam saepe perferendis rem asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cupiditate cum cumque sunt magnam ab placeat, facere officia qui hic, delectus magni dicta beatae nam veniam saepe perferendis rem asperiores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cupiditate cum cumque sunt magnam ab placeat, facere officia qui hic, delectus magni dicta beatae nam veniam saepe perferendis rem asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cupiditate cum cumque sunt magnam ab placeat, facere officia qui hic, delectus magni dicta beatae nam veniam saepe perferendis rem asperiores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cupiditate cum cumque sunt magnam ab placeat, facere officia qui hic, delectus magni dicta beatae nam veniam saepe perferendis rem asperiores?",
]


const Background = () => {
   
    const containerRef=useRef<HTMLDivElement>(null);

    const [activeIndex,setActiveIndex] = useState<number>(0);

    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            (entries)=>{
                entries.forEach((entry)=>{
                    const index=Number(entry.target.getAttribute("data-index"));
                    if(entry.isIntersecting&&entry.intersectionRatio > 0.9){
                        setActiveIndex(index);
                    }
                })
            },
            {
                root:containerRef.current,
                threshold: 0.9,
            }
        );

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
          });
      
          return () => {
            sectionRefs.current.forEach((section) => {
              if (section) observer.unobserve(section);
            });
          };
    },[])

 

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
                <div className={` pb-[30px]  ${
                    activeIndex === 0 ? "text-[#fff] text-5xl my-[10px]": ""
                }`}>Who I Am, What I can do</div>
                <div className={` pb-[30px] ${
                    activeIndex === 1 ? "text-[#fff] text-5xl my-[10px]": ""
                }`}>How I Get Into Tech</div>
                <div className={`  pb-[30px] ${
                    activeIndex === 2 ? "text-[#fff] text-5xl my-[10px]": ""
                }`}>Passion, Purpose, and Personality</div>
                <div className="w-[70%] overflow-hidden rounded-lg mt-[40px]"><img src={hero} alt="" /></div>
            </div>
            <div className="w-[50%] bg-[#0006] h-full text-2xl px-[30px] py-5  overflow-y-scroll pr-[10%] text-justify">
            {textArray.map((text, index) => (
                <motion.div
                key={index}
                ref={(el) => {
                    sectionRefs.current[index] = el;
                  }}
                data-index={index}
                className={` mb-[50px] ${
                    activeIndex === index ? "text-[#5d5fe1] ": "text-[#aaa]"
                }`}
                >
                {text}
                </motion.div>
      ))}
            </div>
        </div>
        
    </div>
  )
}

export default Background