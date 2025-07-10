import { useState } from "react";
import PixelProgressBar from "../Home/ProgressBar";
import Background from "./Skeleton";


const BackgroundPage = () => {
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
       <Background/>
    </div>
}

export default BackgroundPage