import { type Dispatch, type SetStateAction } from 'react'

type Props = {
    img:string[]
    imgIndex:number
    setImgIndex:Dispatch<SetStateAction<number>>;
}

const Dots = ({img,imgIndex,setImgIndex}: Props) => {
  return (
    <div className='mt-4 flex w-full justify-center gap-2'>
        {img.map((_,idx)=>{
            return <button key={idx} 
            onClick={()=>setImgIndex(idx)}
            className={`h-3 w-3 rounded-full     transition-colors  ${idx===imgIndex? 'bg-[rgba(99,102,241,0.8)]':'bg-[rgba(99,102,241,0.3)]'}`}/>
        })}
    </div>
  )
}

export default Dots