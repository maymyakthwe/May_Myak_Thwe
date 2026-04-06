import NavBar from "../../Home/NavBar"
// import { useScroll, useTransform} from 'framer-motion'
import laptop from '../../../assets/laptop.png'
// import phone1 from '../../../assets/followerbuffetPhone1.png'
// import phone2 from '../../../assets/followerbuffetPhone2.png'
// import phone3 from '../../../assets/followerbuffetPhone3.png'
import nora_web from '../../../assets/nora-_web.mp4'
import { useRef } from "react"
// import followerPhone from '../../../assets/follower_phone.mp4'


const EducationPage = () => {
    const targetRef=useRef<HTMLDivElement|null>(null);

    // const {scrollYProgress} = useScroll({
    //     target:targetRef,
    //     offset: ["start end", "end start"],
    //   });

    // const y1 = useTransform(scrollYProgress,[0.8,1],[40,-40])
    // const y3 = useTransform(scrollYProgress,[0.8,1],[-40,40])

  return (
    <div className='w-screen h-max flex bg-[#111]'>
        {/* nav bar */}
        <div  className='fixed pt-[20px] xl:pt-[40px] w-full  whitespace-nowrap text-center  text-xl text-[#f3f3f3] bg-[#111] sm:px-[100px] z-[1000] border-b-1 border-[#222] pb-5 xs:px-[50px] px-[20px]'>
           <NavBar/>
       </div>

       {/* main */}
       <div className="xl:w-[65%] w-[80%]  m-auto my-[120px]  ">
        <div className=' font-bold mb-[20px] sm:mb-[40px] text-[#eee] text-3xl sm:text-4xl md-plus:text-5xl lg:text-6xl'> 
            My Academy <span className='text-[#96afb8]'>Education Platform Website</span>
        </div>
        <div className="flex text-[14px] sm:text-xl md-plus:text-2xl text-white leading-[1.6]">
            <p >This project was one of my earliest React.js developments, created shortly after learning the framework. Through building this website, I learned key React concepts, including state management and conditional component rendering. Additionally, I implemented introductory animations using Framer Motion, enhancing the user experience with dynamic visual interactions.</p>
        </div>

        {/* video */}
        <div className="w-full flex justify-center my-[50px]">
            <div className='w-[280px] xxs:w-[320px] sm:w-[580px] md-plus:w-[680px] lg:w-[800px] ' ref={targetRef}>
                <div className='relative '>
                    <div className='w-full'>
                        <img src={laptop} alt="" />
                    </div>
                    <video  src={nora_web} 
                    className='absolute 
                    top-[13px] left-[41px] 
                    xxs:top-[15px] xxs:left-[46px]
                    sm:top-[26px] sm:left-[86px] 
                    md-plus:top-[30px] md-plus:left-[100px] 
                    lg:top-[38px] lg:left-[118px]
                    w-[198px] h-[128px]
                    xxs:w-[228px] xxs:h-[150px]
                    sm:w-[410px] sm:h-[264px] 
                    md-plus:w-[484px] md-plus:h-[310px]   
                    lg:h-[362px] lg:w-[564px] object-fill ' 
                    autoPlay
                    loop
                    muted/>
                </div>
            </div>
        </div>

        {/* text */}
        {/* <div className="flex my-[50px] text-[14px] sm:text-xl md-plus:text-2xl text-white leading-[1.6]">
            <p >And It is Completely <span className="font-bold">Responsive</span>.</p>
        </div> */}

        {/* phone */}
        {/* <div className="w-full flex justify-center my-[60px] sm:my-[100px] xl:my-[120px] gap-[20px] h-max items-center">
            <motion.div 
            initial={{y:40}}
            style={{y:y1}}
                 className='w-[90px] xxs:w-[100px] xs:w-[120px] md:w-[200px] md-plus:w-[250px] xl:w-[300px]  shrink-0 grow-0 '>
                <div >
                    <img src={phone1} alt="" />
                </div>
                
            </motion.div>
             <div 
                 className='w-[90px] xxs:w-[100px] xs:w-[120px] md:w-[200px] md-plus:w-[250px] xl:w-[300px]  shrink-0 grow-0 '>
                <div >
                    <img src={phone2} alt="" />
                </div>
            </div>
             <motion.div 
            initial={{y:-40}}
            style={{y:y3}}
                 className='w-[90px] xxs:w-[100px] xs:w-[120px] md:w-[200px] md-plus:w-[250px] xl:w-[300px]  shrink-0 grow-0 '>
                <div >
                    <img src={phone3} alt="" />
                </div>
                
            </motion.div>
        </div> */}

        {/* informations */}
        <div className="w-full flex justify-between ">
            <div className="w-[20%] text-[#ccc]">
                <p className="text-[12px] text-lg border-b-2 border-[#222] py-[30px]">FRONTEND</p>
            </div>
            <div className="w-[20%] text-[#ccc]">
                <p className="text-[12px] text-lg border-b-2 border-[#222] py-[30px]">DEPLOYED</p>
            </div>
            <div className="w-[20%] text-[#ccc]">
                <p className="text-[12px] text-lg border-b-2 border-[#222] py-[30px]">React JS</p>
            </div>
            <div className="w-[20%] text-[#ccc]">
                <p className="text-[12px] text-lg border-b-2 border-[#222] py-[30px]">@2024</p>
            </div>
        </div>

        <div className="flex my-[20px] text-[12px] sm:text-xl text-[#96afb8] underline leading-[1.6] ">
            <a href="https://nora-hazel.vercel.app/" target="_blank">Click To See Live Site.</a>
        </div>
    </div>
</div>

    
  )
}

export default EducationPage