import { motion, useScroll, useTransform } from 'framer-motion';
import laptop from '../../../assets/laptop.png'
import image1 from '../../../assets/dev1.png'
import image2 from '../../../assets/dev2.png'
import image3 from '../../../assets/dev3.png'
import image4 from '../../../assets/dev4.png'
import image5 from '../../../assets/dev5.png'
import phone from '../../../assets/phone.png'
import followerBuffet from '../../../assets/followerBuffet.mp4'
import followerPhone from '../../../assets/follower_phone.mp4'
import DragSlider from '../dragSlider';



const wordArray=['Follower Buffet is a sleek, single-page website designed for a fictional social media marketing service. This project was built in just one week as a hands-on learning experience to master the fundamentals of Framer Motion.It&#39;s a simple project, but it taught me how to bring static components to life and turn basic UIs into more engaging, dynamic experiences.',"This project is a production-ready, full-stack web application built to deliver a seamless user experience backed by a high-performance infrastructure. The frontend is crafted with Next.js, a Python FastAPI backend and MongoDB ensures lightning-fast data processing and API management. A major focus of this project was security and accessibility. I implemented a robust authentication system that gives users flexibility: they can securely log in using a custom JWT-backed email/password system, or utilize frictionless third-party OAuth via Google and GitHub. Featuring complete CRUD functionality and a fully deployed architecture, this application demonstrates comprehensive, end-to-end software development."]

const img = [
    image1,image2,image3,image4,image5
]

type Props = {
    introSectionRef:React.RefObject<HTMLDivElement | null>
    work_color_targetRef:React.RefObject<HTMLDivElement | null>
    isInView_work_color:boolean
  }


const Work = ({introSectionRef,isInView_work_color,work_color_targetRef}:Props) => {

    const {scrollYProgress:SectionProgress} = useScroll({
        target:introSectionRef,
        offset: ["start end", "end start"],
      })
   
    const skillSection = useTransform(SectionProgress,[0.9, 1], [0, -100])

    const truncateToWords = (text: string, wordLimit: number) => {
      const words = text.trim().split(/\s+/);
      return words.slice(0, wordLimit).join(' ') + (words.length > wordLimit ? '...' : '');
    };

  return (
    <motion.section ref={work_color_targetRef} style={{y:skillSection}} animate={{backgroundColor:!isInView_work_color?'#f3f3f3':'#111'}}  id='contact-section' className='w-full h-max bg-[#f3f3f3] '>
      
    <div className=' px-[20px] flex-wrap w-[100%] py-[60px] lg:py-[120px] mx-auto flex  items-center justify-center lg:flex-row '>
      <div className='w-[320px] sm-plus:w-[600px] relative  sm:mr-[50px] xl:mr-[100px]'>
        <div className='relative '>
          <div className='w-full'>
            <img src={laptop} alt="" />
          </div>
          <div className='absolute left-[20px] bottom-[5px] z-[-1] w-[280px] sm-plus:w-[500px] h-[10px] shadow-[2px_2px_40px_#6366f1]'></div>
          <video src={followerBuffet} 
          className='absolute top-[15px] left-[46px] w-[228px] h-[150px] object-fill sm-plus:absolute sm-plus:top-[28px] sm-plus:left-[88px] sm-plus:w-[425px] sm-plus:h-[270px]' 
          autoPlay
          loop
          muted/>
        </div>
        <motion.div 
        initial={{rotateY: 0,rotateZ:0}}
        whileHover={{ rotateY: 10,rotateZ: -2 }}
        transition={{ duration:0.5, type: "spring", stiffness: 200, damping: 20}}>
          <div className='absolute right-0 sm:right-[-20px] bottom-[-50px] w-[100px] sm-plus:w-[150px] z-[100] '>
            <img src={phone} alt="" />
          </div>
          <video src={followerPhone} 
            className='absolute right-[6px] sm-plus:right-[-10px] sm-plus:bottom-[-40px] bottom-[-46px] w-[88px] sm-plus:w-[135px]  sm-plus:h-[285px] object-fill z-[99] rounded-lg sm-plus:rounded-2xl' 
            autoPlay
            loop
            muted/>
        </motion.div>
        
      </div>
      <div className='text-2xl  w-[90%] lg:w-[28%] xl:w-[40%] xl:text-4xl pt-[100px] lg:py-0 '> 
      <div className=' font-bold mb-[30px] text-[#eee]  '> Follower Buffet <span className='text-[#5d5fe1]'>Social Media Marketing Landing Page</span></div>
        <div className='xl:text-xl text-[16px] text-justify text-[#a7a7a7]'>{truncateToWords(wordArray[0],40)}</div>
      <p className='text-[#a7a7a7] text-xl underline mt-3 cursor-pointer'><a href="/work/2">Read More</a></p>

      </div>

    </div>


    <div className='px-[20px] flex-wrap w-[100%] py-[60px] lg:py-[120px] mx-auto flex  items-center justify-center lg:flex-row'>
      {/*FIRST TEXT*/}
      <div className='text-2xl  w-[90%] lg:w-[28%] xl:w-[40%] xl:text-4xl pt-[100px] lg:py-0 hidden lg:block'> 
          <div className=' font-bold mb-[30px] text-[#eee]'> DevSpace <span className='text-[#5d5fe1]'>Developer Profile Tracker</span></div>
          <div className='xl:text-xl text-[16px] text-justify text-[#a7a7a7]'>{truncateToWords(wordArray[1],40)}</div>
          <p className='text-[#a7a7a7] text-xl underline mt-3 cursor-pointer'><a href="/work/1">Read More</a></p>
      </div>


      {/* IMG*/}
        <div className='w-[320px] sm-plus:w-[600px] aspect-video relative lg:ml-[40px] xl:ml-[60px]'>
          <DragSlider img={img} color={'#6366f1'}/>
        </div>

      {/*second text*/}
        <div className='text-2xl  w-[90%] lg:w-[28%] xl:w-[40%] xl:text-4xl pt-[60px] lg:py-0 lg:hidden block'> 
          <div className=' font-bold mb-[30px] text-[#eee]'> DevSpace <span className='text-[#5d5fe1] '>Developer Profile Tracker</span></div>
          <div className='xl:text-xl text-[16px] text-justify text-[#a7a7a7]'>{truncateToWords(wordArray[1],40)}</div>
          <p className='text-[#a7a7a7] text-xl underline mt-3 cursor-pointer'><a href="/work/1">Read More</a></p>
      </div>
      
    </div>


    {/* <div className=' px-[20px] flex-wrap w-[100%] py-[60px] lg:py-[120px] mx-auto flex  items-center justify-center lg:flex-row '>
      <div className='w-[320px] sm-plus:w-[600px] relative  sm:mr-[50px] xl:mr-[100px]'>
        <div className='relative '>
          <div className='w-full'>
            <img src={laptop} alt="" />
          </div>
          <div className='absolute left-[20px] bottom-[5px] z-[-1] w-[280px] sm-plus:w-[500px] h-[10px] shadow-[2px_2px_40px_#6366f1]'></div>
          <video src={followerBuffet} 
          className='absolute top-[15px] left-[46px] w-[228px] h-[150px] object-fill sm-plus:absolute sm-plus:top-[28px] sm-plus:left-[88px] sm-plus:w-[425px] sm-plus:h-[270px]' 
          autoPlay
          loop
          muted/>
        </div>
        <motion.div 
        initial={{rotateY: 0,rotateZ:0}}
        whileHover={{ rotateY: 10,rotateZ: -2 }}
        transition={{ duration:0.5, type: "spring", stiffness: 200, damping: 20}}>
          <div className='absolute right-0 sm:right-[-20px] bottom-[-50px] w-[100px] sm-plus:w-[150px] z-[100] '>
            <img src={phone} alt="" />
          </div>
          <video src={followerPhone} 
            className='absolute right-[6px] sm-plus:right-[-10px] sm-plus:bottom-[-40px] bottom-[-46px] w-[88px] sm-plus:w-[135px]  sm-plus:h-[285px] object-fill z-[99] rounded-lg sm-plus:rounded-2xl' 
            autoPlay
            loop
            muted/>
        </motion.div>
      </div>
      <div className='text-2xl  w-[90%] lg:w-[28%] xl:w-[40%] xl:text-4xl pt-[100px] lg:py-0 '> 
      <div className=' font-bold mb-[30px] text-[#eee]  '> Follower Buffet <span className='text-[#5d5fe1]'>Social Media Marketing Landing Page</span></div>
        <div className='xl:text-xl text-[16px] text-justify text-[#a7a7a7]'>{truncateToWords(wordArray[2],40)}</div>
      <p className='text-[#a7a7a7] text-xl underline mt-3 cursor-pointer'><a href="/work/2">Read More</a></p>

      </div>

    </div> */}
    </motion.section>
  )
}

export default Work