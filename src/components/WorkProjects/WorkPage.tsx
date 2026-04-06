import { useState } from "react";
import PixelProgressBar from "../Home/ProgressBar";
import Skeleton from "./Skeleton";
import SideBar from "../Home/SideBar";


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
       <SideBar />
    </div>
}

export default WorkPage