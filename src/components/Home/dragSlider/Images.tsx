import {motion} from 'framer-motion'
const springOptions = {type:'spring', mass:3,stiffness:400, damping:50}


const Images = ({img,imgIndex}:{img:string[],imgIndex:number}) => {
  return (
    <> {img.map((imgSrc,idx)=>{
        return <motion.div 
        key={idx}
        style={{backgroundImage:`url(${imgSrc})`,
                backgroundSize:'cover',
                backgroundPosition:'center'}}
        animate={{scale:idx===imgIndex?0.95:0.85}}
        transition={springOptions}
        className='aspect-video w-full shrink-0 rounded-xl bg-neutral-800 object-cover border-2 border-white shadow-[5px_6px_10px_rgba(99,102,241,0.4)] '></motion.div>
        })}
    </>
  )
}

export default Images