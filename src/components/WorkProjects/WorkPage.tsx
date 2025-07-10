import { useState } from "react";
import PixelProgressBar from "../Home/ProgressBar";
import Skeleton from "./Skeleton";


const WorkPage = () => {
    //intro CountDown
        const [showMain,setShowMain] = useState<boolean>(false);
  return (
            <>
                {!showMain?<PixelProgressBar onComplete={()=>setShowMain(true)}/>
                :
                <Main/>
                }
            </>
  )
}


const Main =()=>{
   


    return <div className="Main">
       <Skeleton/>
    </div>
}

export default WorkPage