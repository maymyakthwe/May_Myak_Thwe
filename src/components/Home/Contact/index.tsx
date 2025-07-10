import { motion, useScroll, useTransform } from 'framer-motion';
import hero from '../../../assets/hero.jpg'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";

type Props = {
  contactRef:React.RefObject<HTMLDivElement | null>
}

const Contact = ({contactRef}:Props) => {

  const {scrollYProgress} = useScroll({
      target:contactRef,
        offset: ["start end", "end start"],
  })

  const contactY = useTransform(scrollYProgress,[0,1],[-800,0])
   
  return (
    <motion.section 
    id='contact-section' 
    className='w-[60%] h-max bg-[#222] mx-auto   overflow-hidden'
    style={{y:-100}}
    >
      <motion.div
      initial={{y:-800}}
      style={{y:contactY}}
      className='mt-[150px]'>
      <div>
        <div className='flex items-center gap-[30px] pb-[100px]'>
        <div className='w-[150px] h-[150px] rounded-full  '
        style={{backgroundImage:`url(${hero})`,
        backgroundSize:'cover',
        backgroundPosition:'center'}}>
          
        </div>
      <h1 className='w-[800px] text-[#eee] text-7xl font-medium '>Let&#8217;s cook up something <span className='text-[#5d5fe1]'>amazing.</span></h1>
      </div>
       
       <form className='flex items-center '>
        <div>
          <div className='p-[30px] mb-[40px] border-b-2 border-[#ccc7] w-[500px]'>
            <input className=' placeholder:text-xl placeholder:text-[#ccc7] w-full h-full border-none focus:border-none outline-none focus:outline-none text-[#eee] py-3 text-lg' name='' type="name" placeholder='Your Name'/>
          </div>
          <div className='p-[30px] mb-[40px] border-b-2 border-[#ccc7] w-[500px]'>
            <input className=' placeholder:text-xl placeholder:text-[#ccc7] w-full h-full border-none focus:border-none outline-none focus:outline-none text-[#eee] py-3 text-lg' name='' type="message" placeholder='Your Message'/>
          </div>
        </div>
        
        <div className='pl-[100px]'>
          <button className='w-[150px] h-[150px] rounded-full bg-[#5d5fe1] text-[#eee] cursor-pointer'>Send It!</button>
        </div>
        
       </form>
       <div className='py-[30px]'>
       <div className='flex gap-4 items-center'>
        <div className='text-[#ccc7] text-4xl flex w-max mb-[40px] gap-5 px-5'>
          <div className='cursor-pointer'><FaGithub /></div>
          <div className='cursor-pointer'><CiLinkedin /></div>
          <div className='cursor-pointer'><SiGmail /></div>
        </div>
        <div className='text-[#ccc7] border-2 border-[#ccc7] rounded-lg py-2 px-5 w-max mb-[40px] cursor-pointer'>+447557084273</div>
        </div>
        <div className='text-[#5d5fe1]'>Design Inspiration @Dennis_Snellenberg</div>
        
       </div>
      </div>
       </motion.div>
    </motion.section>
)
}

export default Contact







