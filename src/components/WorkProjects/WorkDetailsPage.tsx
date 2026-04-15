import { useParams } from "react-router-dom"
import { WorkArray } from "./Skeleton/workArray"
import FollowerBuffet from "./WorkList/FollowerBuffet";
import EducationPage from "./WorkList/EducationPage";
import Furry from "./WorkList/Furry";
import Nick from "./WorkList/Nick";
import DevSpace from "./WorkList/DevSpace";


const WorkDetailsPage = () => {

    const {id} =useParams();
    const IntId = id ? parseInt(id) : undefined;

    // check ID
    if (IntId === undefined || isNaN(IntId) || IntId <= 0 || IntId > WorkArray.length) {
        return <div>Invalid Work ID</div>;
    }
    
    return (
    <div className='w-screen h-screen flex bg-[#111]'>
        {IntId===1&&<DevSpace/>}
        {IntId===2&&<FollowerBuffet/>}
        {IntId===3&&<Nick/>}
        {IntId===4&&<Furry/>}
        {IntId===5&&<EducationPage/>}
    </div>
    )
}

export default WorkDetailsPage