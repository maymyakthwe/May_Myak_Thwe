import { useParams } from "react-router-dom"
import { WorkArray } from "./Skeleton/workArray"
import FollowerBuffet from "./WorkList/FollowerBuffet";
import Portfolio from "./WorkList/Portfolio";
import Nora from "./WorkList/Nora";
import EducationPage from "./WorkList/EducationPage";
import Furry from "./WorkList/Furry";


const WorkDetailsPage = () => {

    const {id} =useParams();
    const IntId = id ? parseInt(id) : undefined;

    // check ID
    if (IntId === undefined || isNaN(IntId) || IntId <= 0 || IntId > WorkArray.length) {
        return <div>Invalid Work ID</div>;
    }
    
    return (
    <div className='w-screen h-screen flex bg-[#111]'>
        {IntId===1&&<FollowerBuffet/>}
        {IntId===2&&<Nora/>}
        {IntId===3&&<Portfolio/>}
        {IntId===4&&<Furry/>}
        {IntId===5&&<EducationPage/>}
    </div>
    )
}

export default WorkDetailsPage