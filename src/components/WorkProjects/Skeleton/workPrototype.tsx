import type { work } from '../../Types'
import {motion, useScroll, useTransform} from 'framer-motion'
import texture2 from '../../../assets/texture2.png'

type Props = {
    work:work,
    scrollRef:React.RefObject<HTMLDivElement | null>
    idx:number
}

const WorkPrototype = ({idx,work,scrollRef}: Props) => {

  const {scrollYProgress} = useScroll({
    target:scrollRef,
    offset:['start end','end start']
  })

  const x = useTransform(scrollYProgress,[0.17,0.83/5*(idx+1)],['0%',`-${idx*100}%`])

  

  return (
    <motion.div
      style={{x}}
     className='w-max h-max pr-[20px] shrink-0 '>
      <motion.div 
      style={{backgroundImage:`url(${texture2})`,
    backgroundSize:'cover'}}
      className='w-[450px] h-max bg-[#111] rounded-[20px]    border-1 border-[#333] relative p-[10px]'>
        
          <div className='w-[430px] h-[300px] rounded-[10px] overflow-hidden '>
            <div  className='w-[430px] h-[300px] hover:scale-[1.1] transition-all duration-[800ms] ease-in-out' 
            style={{backgroundImage:`url(${work.src})`,
            backgroundSize:'cover',backgroundPosition:'center'}}>
            </div>
          </div>
          <div className='text-[#ddd] p-[10px]'>
            <h1 className='text-3xl font-bold my-[10px]'>{work.name} <span>&#40;{work.type}&#41;</span></h1>
            <p className='text-[#888] mb-[20px]'>{work.date}</p>
            <div className='flex w-full'>
              <div className='w-[50%] text-2xl font-bold'>{work.deployed?'Deployed':'Not Deployed'}</div>
              <div className='w-[50%] text-2xl font-bold'>{work.techStack}</div>
            </div>
            <div className='py-3 font-bold text-[#777] underline cursor-pointer'><a href={work.link} target='_blank'>{work.link}</a></div>
         
        </div>
      </motion.div>
    </motion.div>
  )
}

export default WorkPrototype