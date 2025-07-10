import {  useState } from 'react'
import image1 from '../../../assets/1.png'
import image2 from '../../../assets/3.png'
import image3 from '../../../assets/6.png'
import image4 from '../../../assets/8.png'
import Images from './Images'
import {motion, useMotionValue} from 'framer-motion'
import Dots from './Dots'


const img = [
    image1,image2,image3,image4
]

const dragBuffer = 50;
const springOptions = {type:'spring', mass:3,stiffness:400, damping:50}

const DragSlider = () => {
    const [dragging,setDragging] = useState(false);
    console.log(dragging,"this doesnt have any meaning.");
    const [imgIndex,setImageIndex] = useState(0);
    const dragX = useMotionValue(0);

    const onDragStart=()=>{
        setDragging(true);
    }

    const onDragEnd = ()=>{
        setDragging(false);
        const x = dragX.get();
        if(x<=-dragBuffer && imgIndex<img.length-1){
            setImageIndex((prev)=>prev+1)
        }else if (x>= dragBuffer && imgIndex>0){
            setImageIndex((prev)=>prev-1)
        }
    }

   

  return (
    <div className='relative w-full h-max overflow-hidden bg-[#111] py-8'>
        <motion.div 
        drag='x'
        dragConstraints={{
            left:0,
            right:0
        }}
        animate={{translateX:`-${imgIndex*100}%`}}
        style={{x:dragX}}
        transition={springOptions}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        className='flex items-center w-full  cursor-grab active:cursor-grabbing'>
            <Images  img={img} imgIndex={imgIndex}/>
        </motion.div>
        <Dots img={img} imgIndex={imgIndex} setImgIndex={setImageIndex}/>
    </div>
  )
}

export default DragSlider