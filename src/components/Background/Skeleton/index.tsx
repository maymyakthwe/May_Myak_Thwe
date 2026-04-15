import {motion} from "framer-motion"
import hero from '../../../assets/hero.png'
import { useEffect, useRef, useState } from "react"
import NavBar from "../../Home/NavBar"
import { useIsShortScreen } from "../../Hooks/isShortHook"
import useMediaQuery from "../../Hooks/useMediaQuery"


const textArray = [
    "Hi, I'm May — a Full-Stack Web Developer passionate about building robust, user-centric applications. With a BSc in Computer Systems Engineering from the University of Sunderland and a dedicated self-taught coding journey that began in 2022, I combine formal engineering principles with modern web technologies. I specialize in building high-performance, SEO-friendly frontends using Next.js, React, and TypeScript, complemented by secure, scalable backends utilizing Node.js, Express, MongoDB, and Python FastAPI. I thrive on tackling complex challenges and am actively seeking opportunities to bring my skills to a forward-thinking engineering team.",
    "Resilience and adaptability are at the core of who I am as a developer. Before I wrote my first line of code, I was on track to graduate with a degree in Petroleum Engineering. In 2021, I sacrificed my scholarship and my studies to join Myanmar's civil disobedience movement, standing up for the values of freedom and democracy. Raised by a strong single mother who taught me how to weather adversity, I put my energy into reinventing my future. I turned to technology, teaching myself web development from the ground up and building projects every single day, all on my own. As my passion grew, I pursued a Higher Diploma in Infocomm Technology through TMC Academy—a Singapore-managed institution in Myanmar and ultimately earned my BSc in Computer Systems Engineering from the University of Sunderland. I didn't come through a traditional tech pipeline, but my journey has equipped me with the problem-solving skills, perspective, and determination to tackle any challenge thrown my way.",
    "Beyond my technical skills, my greatest motivation is my family. Their unconditional support has shaped my strong work ethic and keeps me focused on building a stable, successful career to give back to them. On a personal level, software development perfectly aligns with my introverted nature. I thrive in environments that require deep focus whether that means losing myself in a complex debugging session, getting absorbed in a good book, watching anime, or listening to music. For me, coding is a quiet space where I can focus completely, solve intricate puzzles, and build things that matter.",
]


const Background = () => {

    const isShortScreen = useIsShortScreen(600);
    const isAboveMediumScreen640 = useMediaQuery("(min-width:640px)")
    const isAboveMediumScreen512 = useMediaQuery("(min-width:512px)")

   
    const containerRef=useRef<HTMLDivElement>(null);

    const [activeIndex,setActiveIndex] = useState<number>(0);

    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(()=>{
        const intersectionRatio=isAboveMediumScreen512?0.25:0.75
        const observer = new IntersectionObserver(
            (entries)=>{
                entries.forEach((entry)=>{
                    const index=Number(entry.target.getAttribute("data-index"));
                    if(entry.isIntersecting&&entry.intersectionRatio > intersectionRatio){
                        setActiveIndex(index);
                    }
                })
            },
            {
                root:containerRef.current,
                threshold: intersectionRatio,
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
    <div className="bg-[#111] w-screen xs:text-2xl h-screen overflow-hidden">

        {/* nav bar */}
        <div  className='fixed pt-[20px] xl:pt-[40px] w-full  whitespace-nowrap text-center  text-xl text-[#f3f3f3]  xl:px-[100px] z-[1000] border-b-1 border-[#222] pb-5 sm:px-[50px] px-[20px]'>
            <NavBar/>
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
        {/* background gradient */}
        <div className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-b from-[#111]  via-[#111c] to-[#111b] ">
        </div>

        <div className="  h-[90%] w-screen  fixed top-[100px] left-0  text-[#aaa]  xs-plus:flex flex-row xs-plus:p-0 p-5">
            {/*sidebar */}
            <div className="xs-plus:text-2xl md-plus:text-3xl xs-plus:w-[40%] md-plus:w-[50%] xs-plus:ml-[5%] lg:ml-[8%] xl:ml-[10%] font-bold  uppercase xs-plus:mr-[20px] xs-plus:flex-col flex text-[12px] gap-3 xs-plus:gap-0 justify-between xs-plus:justify-start xs-plus:text-start text-center">
                <div className={` pb-[20px] xl:pb-[30px]  ${
                    activeIndex === 0 ? "text-[#fff]  lg:text-3xl xl:text-4xl": ""
                }`}>Who I Am, What I can do</div>
                <div className={` pb-[20px] xl:pb-[30px] ${
                    activeIndex === 1 ? "text-[#fff]  lg:text-3xl xl:text-4xl": ""
                }`}>A Hint of My Background</div>
                <div className={`  pb-[20px] xl:pb-[30px] ${
                    activeIndex === 2 ? "text-[#fff]  lg:text-3xl xl:text-4xl": ""
                }`}>Passion, Purpose, and Personality</div>
                <div className={`w-[70%] overflow-hidden rounded-lg mt-[20px] xl:mt-[40px] ${(isShortScreen||!isAboveMediumScreen640)?'hidden':''}`}><img src={hero} alt="" /></div>
            </div>
            <div className="xs-plus:w-[60%] md-plus:w-[50%] bg-[#0006] h-full max-h-[960px] md:px-[30px] xs-plus:px-[15px] md:py-5 xs-plus:pt-3  overflow-y-scroll xl:pr-[10%] md:text-2xl  xs-plus:text-lg text-[16px] p-[30px] pb-[100px]">
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