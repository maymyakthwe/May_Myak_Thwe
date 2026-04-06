import { type Dispatch, type SetStateAction } from 'react'

type Props = {
    img:string[]
    imgIndex:number
    setImgIndex:Dispatch<SetStateAction<number>>;
    color:string
}

const Dots = ({img,imgIndex,setImgIndex,color}: Props) => {
  return (
    <div className='mt-4 flex w-full justify-center gap-2'>
        {img.map((_,idx)=>{
            return <button key={idx} 
            onClick={()=>setImgIndex(idx)}
            className={'h-3 w-3 rounded-full     transition-colors  '}
            style={{backgroundColor: idx===imgIndex?`${color}ff` :`${color}44` }}/>
        })}
    </div>
  )
}

export default Dots