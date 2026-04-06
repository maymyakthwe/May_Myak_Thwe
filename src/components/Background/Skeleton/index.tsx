import {motion} from "framer-motion"
import hero from '../../../assets/hero.png'
import { useEffect, useRef, useState } from "react"
import NavBar from "../../Home/NavBar"
import { useIsShortScreen } from "../../Hooks/isShortHook"
import useMediaQuery from "../../Hooks/useMediaQuery"


const textArray = [
    "Hi, My name is May — I'm a junior web developer who started self-learning in 2022 and never stopped building. I'm currently a final-year student pursuing a Bachelor's Degree in Computer Systems Engineering at the University of Sunderland, United Kingdom. Regarding my technology stack, I specialize in front-end development with React and TypeScript but I'm also confident working on the backend using Node.js, Express, and MongoDB. As someone actively seeking opportunities, I can confidently say that I thrive on challenges and am genuinely excited to learn. I believe that with the right mentorship and guidance, I can grow into a valuable and dependable developer in the future.",
    "I began my academic journey studying Petroleum Engineering at Yangon Technological University. But everything changed in 2021. I joined Myanmar's civil disobedience movement, standing up for democracy and freedom. This decision cost me my scholarship and nearly completed degree. Raised by a strong single mother who taught me resilience and the value of hard work, I faced these challenges head-on without giving up. While adapting to a new path, I discovered coding. What started as curiosity became a passion. I taught myself HTML, CSS, and JavaScript through YouTube and Udemy. I built mini projects, and kept learning every day. To push myself further, I enrolled in a Higher Diploma in Infocomm Technology at TMC Academy, Singapore. Now, I'm continuing my studies in Computer Engineering. My background might be unconventional, but I believe that's my greatest strength.",
    "My passion is driven by the desire to do good for my family, who have supported me unconditionally. Someone who works for their family never backs down, no matter how hard the challenges get. With a clear purpose to give back to my family I am committed to working hard and never losing sight of what truly matters. Moreover, Coding perfectly suits my introverted personality. I enjoy quiet activities like watching anime, reading, and listening to music—and of course, coding and fixing bugs. I find peace and focus in these moments, where I can work deeply and solve problems.",
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