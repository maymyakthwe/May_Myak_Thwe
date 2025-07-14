import {motion} from "framer-motion"
import hero from '../../../assets/hero.jpg'
import { useEffect, useRef, useState } from "react"
import NavBar from "../../Home/NavBar"


const textArray = [
    "Hi, My name is May — I'm a junior web developer who started self-learning in 2022 and never stopped building. I'm currently a final-year student pursuing a Bachelor's Degree in Computer Systems Engineering at the University of Sunderland, United Kingdom. Regarding my technology stack, I specialize in front-end development with React and TypeScript but I'm also confident working on the backend using Node.js, Express, and MongoDB. As someone actively seeking opportunities, I can confidently say that I thrive on challenges and am genuinely excited to learn. I believe that with the right mentorship and guidance, I can grow into a valuable and dependable developer in the future.",
    "I began my academic journey studying Petroleum Engineering at Yangon Technological University. But everything changed in 2021. I joined Myanmar's civil disobedience movement, standing up for democracy and freedom. This decision cost me my scholarship and nearly completed degree, but it gave me purpose. Raised by a strong single mother who taught me resilience and the value of hard work, I faced these challenges head-on without giving up. While adapting to a new path, I discovered coding. What started as curiosity became a passion. I taught myself HTML, CSS, and JavaScript through YouTube and Udemy. I built mini projects, and kept learning every day. To push myself further, I enrolled in a Higher Diploma in Infocomm Technology at TMC Academy, Singapore. Now, I'm continuing my studies in Computer Engineering, blending self-taught grit with formal training. My background might be unconventional, but I believe that's my greatest strength.",
    "My passion is driven by the desire to do good for my family, who have supported me unconditionally. Someone who works for their family never backs down, no matter how hard the challenges get. With a clear purpose to give back to my family I am committed to working hard and never losing sight of what truly matters. Moreover, Coding perfectly suits my introverted personality. I enjoy quiet activities like watching anime, reading, and listening to music—and of course, coding and fixing bugs. I find peace and focus in these moments, where I can work deeply and solve problems.",
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
        <div  className='fixed top-[40px] w-full  whitespace-nowrap text-center  text-xl text-[#f3f3f3]  px-[100px] z-[1000] border-b-1 border-[#222] pb-5'>
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
                }`}>A Hint of My Background</div>
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