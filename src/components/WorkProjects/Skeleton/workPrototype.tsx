import type { work } from '../../Types'
import {motion, useScroll, useTransform} from 'framer-motion'
import texture2 from '../../../assets/texture2.png'
import { useIsShortScreen } from '../../Hooks/isShortHook';
import useMediaQuery from '../../Hooks/useMediaQuery';

type Props = {
    work:work,
    scrollRef:React.RefObject<HTMLDivElement | null>
    idx:number
}

const WorkPrototype = ({idx,work,scrollRef}: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:640px)")


  const {scrollYProgress} = useScroll({
    target:scrollRef,
    offset:['start end','end start']
  })

   

  const x = useTransform(scrollYProgress,[0.17,0.83/5*(idx+1)],['0%',`-${idx*100}%`])

  
  const isShortScreen = useIsShortScreen(600);

  

  return (
    <motion.div
    
      style={{x:isAboveMediumScreen?x:''}}
     className={` w-max h-max  shrink-0 ${isAboveMediumScreen?'pr-[20px] ':''}`}>
      <motion.div 
      style={{backgroundImage:`url(${texture2})`,
    backgroundSize:'cover'}}
      className={`bg-[#111] rounded-[20px] p-[10px] border-1 border-[#333] relative  h-max ${isShortScreen?'flex flex-wrap   ':'xl:w-[450px]  w-[350px]'}`}>
        
          <div className='xl:w-[430px] w-[330px] xl:h-[300px] h-[200px] rounded-[10px] overflow-hidden '>
            <a href={`/work/${work.id}`}>
            <div className='w-full h-full  hover:scale-[1.1] transition-all duration-[800ms] ease-in-out'>
              <img className=' w-full h-full object-cover object-center' src={work.src} alt="" />
            </div>
            </a>
          </div>
          <div className={`text-[#ddd]  ${isShortScreen?'w-[350px] pl-[20px]':'p-[10px]'}`}>
            <a href={`/work/${work.id}`}><h1 className='xl:text-3xl font-bold my-[10px] text-2xl '>{work.name} <span>&#40;{work.type}&#41;</span></h1></a>
            <p className='text-[#888] mb-[20px]'>{work.date}</p>
            <div className='flex w-full'>
              <div className='w-[50%] text-xl xl:text-2xl font-bold'>{work.deployed?'Deployed':'Not Deployed'}</div>
              <div className='w-[50%] text-xl xl:text-2xl font-bold'>{work.techStack}</div>
            </div>
            <div className='pt-3 font-bold text-[#777]  cursor-pointer'>
              {work.link?<a  href={work.link} target='_blank'>{work.link}</a>:<div>Live site is not available</div>}
            </div>
         
        </div>
      </motion.div>
    </motion.div>
  )
}

export default WorkPrototype