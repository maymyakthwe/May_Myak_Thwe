import {motion} from 'framer-motion'
const springOptions = {type:'spring', mass:3,stiffness:400, damping:50}


const Images = ({img,imgIndex,color}:{img:string[],imgIndex:number,color:string}) => {
  return (
    <> {img.map((imgSrc,idx)=>{
        return <motion.div 
        key={idx}
        style={{backgroundImage:`url(${imgSrc})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                boxShadow: `5px 6px 10px ${color}aa`}}
        animate={{scale:idx===imgIndex?0.95:0.85}}
        transition={springOptions}
        className={`aspect-video w-full shrink-0 rounded-xl bg-neutral-800 object-cover border-2 border-white  `}
        ></motion.div>
        })}
    </>
  )
}

export default Images