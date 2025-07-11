import { motion,useScroll,  useTransform } from "framer-motion";



type Props = {
    introSectionRef:React.RefObject<HTMLDivElement | null>
    isInView_work_color:boolean
  }

  const animationArray = ['Specialized','In', 'FrontEnd', 'MERN', 'STACK','Is','My','Playground.'];

  const techStackArray = ['HTML','CSS','JavaScript','ReactJS','TypeScript','NodeJS','PHP','MySQL','MongoDB','PostgreSQL'];

  

const Framework = ({introSectionRef,isInView_work_color}:Props) => {


    const {scrollYProgress:FwSectionProgress} = useScroll({
        target:introSectionRef,
        offset: ["start end", "end start"],
      })

    const FwSection = useTransform(FwSectionProgress,[0.9, 1], [0, -100])

  return (
    <motion.section id='frame-work-section' style={{y:FwSection}} className='w-full h-[700px]  flex items-center' 
    animate={{backgroundColor:!isInView_work_color?'#f3f3f3':'#111',
      color:!isInView_work_color?'#484848':'#eee'
    }}>
        <div className="w-[80%] mx-auto  ">
          
            <div className="w-full flex pb-[50px] flex-wrap justify-between">
                <div className="text-5xl w-[40%] font-bold pr-[40px] mb-[20px] leading-[1.35]"> 

                  {animationArray.map((a)=>{
                    return <span className="relative overflow-hidden inline-block pr-5">
                    <motion.span className="block"
                    initial={{ y: '80%' }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    viewport={{once:true,amount:0.1}}
                    >{a}</motion.span>
                  </span>
                  })}
                  
                </div>
                <div className="text-xl leading-[1.8] pt-2 w-[50%]">I started my journey as a self-taught web developer, driven by curiosity and a passion for building beautiful, functional web experiences. Over time, that passion evolved into purpose.</div>
            </div>

            <div className="flex flex-wrap justify-between">
              <div className="text-xl text-justify w-[40%] mb-5 leading-[1.8] ">As a junior web developer, I see every project as an opportunity to grow. What I&#8217;m truly seeking is a mentorship or internship where I can immerse myself in a professional development environment.
              </div>

              <div className=" text-2xl grid grid-cols-3 gap-5 mb-[40px] font-medium w-[50%] text-[#a7a7a7]">
                  {techStackArray.map((a)=>{
                    return <div className="overflow-hidden">
                    <motion.div 
                    initial={{ y: '80%' }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    viewport={{once:true,amount:0.1}}
                    >{a}</motion.div>
                  </div>
                  })}
              </div>
            </div>
           
        </div>
    </motion.section>
  )
}

export default Framework