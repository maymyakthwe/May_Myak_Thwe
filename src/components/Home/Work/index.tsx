import { motion, useScroll, useTransform } from 'framer-motion';
import laptop from '../../../assets/laptop.png'
import iPad from '../../../assets/iPad.png'
import phone from '../../../assets/phone.png'
import followerBuffet from '../../../assets/followerBuffet.mp4'
import portFolio from '../../../assets/portfolio.mp4'
import followerPhone from '../../../assets/follower_phone.mp4'
import DragSlider from '../dragSlider';



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


  return (
    <motion.section ref={work_color_targetRef} style={{y:skillSection}} animate={{backgroundColor:!isInView_work_color?'#f3f3f3':'#111'}}  id='contact-section' className='w-full h-max bg-[#f3f3f3] '>
      
    <div className='w-[90%] h-[600px] mx-auto flex flex-wrap items-center justify-center'>
      <div className='w-[600px] relative mr-[100px]'>
        <div className='relative '>
          <div className='w-full'>
            <img src={laptop} alt="" />
          </div>
          <div className='absolute left-[20px] bottom-[5px] z-[-1] w-[500px] h-[10px] shadow-[2px_2px_40px_#6366f1]'></div>
          <video src={followerBuffet} 
          className='absolute top-[28px] left-[88px] w-[425px] h-[270px] object-fill' 
          autoPlay
          loop
          muted/>
        </div>
        <motion.div 
        initial={{rotateY: 0,rotateZ:0}}
        whileHover={{ rotateY: 10,rotateZ: -2 }}
        transition={{ duration:0.5, type: "spring", stiffness: 200, damping: 20}}>
          <div className='absolute right-[-20px] bottom-[-50px] w-[150px] z-[100] '>
            <img src={phone} alt="" />
          </div>
          <video src={followerPhone} 
            className='absolute right-[-10px] bottom-[-40px] w-[135px] h-[285px] object-fill z-[99] rounded-2xl' 
            autoPlay
            loop
            muted/>
        </motion.div>
      </div>
      <div className='w-[40%] text-4xl '> 
      <div className=' font-bold mb-[30px] text-[#eee]'> Follower Buffet <span className='text-[#5d5fe1]'>Social Media Marketing Website</span></div>
        <div className='text-xl  text-[#a7a7a7]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet in amet libero. Tempore dolores soluta consequatur fugiat obcaecati sapiente aut tenetur laborum. Vel, aperiam iure veritatis modi beatae commodi expedita!</div>
      </div>
    </div>


    <div className='w-[90%] h-[600px] mx-auto flex flex-wrap items-center justify-center'>
    <div className='w-[40%] text-4xl '> 
    <div className=' font-bold mb-[30px] text-[#eee]'> Furry Friends Refuge <span className='text-[#5d5fe1]'>Pet Shelter Website</span></div>
        <div className='text-xl  text-[#a7a7a7]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet in amet libero. Tempore dolores soluta consequatur fugiat obcaecati sapiente aut tenetur laborum. Vel, aperiam iure veritatis modi beatae commodi expedita!</div>
      </div>
      <div className='w-[600px] aspect-video relative ml-[50px]'>
        <DragSlider/>
      </div>
      
    </div>


    <div className='w-[90%] h-[600px] mx-auto flex flex-wrap items-center justify-center'>
      <div className='w-[600px] relative mr-[100px]'>
        <div className='relative '>
          <div className='w-full'>
            <img src={iPad} alt="" />
          </div>
          <div className='absolute left-[20px] bottom-[0px] z-[-1] w-[550px] h-[10px] shadow-[0_0_17px_#6366f1]'></div>
          <video src={portFolio} 
          className='absolute top-[10px] left-[10px] w-[580px] h-[400px] object-fill z-[-1] rounded-2xl' 
          autoPlay
          loop
          muted/>
        </div>
        {/* here copy phone if needs */}

      </div>
      <div className='w-[40%] text-4xl '> 
      <div className=' font-bold mb-[30px] text-[#eee]'> My Portfolio <span className='text-[#5d5fe1]'>Previous Portfolio Website</span></div>
        <div className='text-xl  text-[#a7a7a7]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet in amet libero. Tempore dolores soluta consequatur fugiat obcaecati sapiente aut tenetur laborum. Vel, aperiam iure veritatis modi beatae commodi expedita!</div>
      </div>
    </div>
    </motion.section>
  )
}

export default Work