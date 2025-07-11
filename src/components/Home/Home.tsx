import {  useRef, useState } from "react"
import FrontPage from "./FrontPage"
import Introduction from "./Introduction";
import Skill from "./Skill";
import Work from "./Work";
import Framework from "./Framework";
import Contact from "./Contact";
import { useInView } from "framer-motion"
import NavCircle from "./NavCircle";
import SideBar from "./SideBar";
import ProgressBar from "./ProgressBar";


const Home = () => {

    //intro CountDown
    const [showMain,setShowMain] = useState<boolean>(false);


    return (
        <>
                {!showMain?<ProgressBar onComplete={()=>setShowMain(true)}/>
                :
                <Main/>
                }
        </>
    )
}




const Main =()=>{
    //sidebar
    const [open,setOpen] = useState<boolean>(false);

    //isInview - navCircle
    const appear_targetRef = useRef<HTMLDivElement>(null);
    const isInView_Appear = useInView(appear_targetRef);
    const color_targetRef= useRef<HTMLDivElement>(null);
    const IsInView_color = useInView(color_targetRef);

    //isInView - bodyColorChange
    const work_color_targetRef = useRef<HTMLDivElement>(null);
    const isInView_work_color =useInView(work_color_targetRef,{once:true, amount:0.25});

    //text rendered animation
    const introSectionRef=useRef<HTMLDivElement>(null);

    //contactYScroll Animation
    const contactRef = useRef<HTMLDivElement>(null);


    return <div className="Main">
        <FrontPage introSectionRef={introSectionRef}/>
        <Introduction color_targetRef={color_targetRef} appear_targetRef={appear_targetRef} introSectionRef={introSectionRef}/>
        <NavCircle  
        isInView_Appear={isInView_Appear}
        open={open} 
        setOpen={setOpen} 
        IsInView_color={IsInView_color} />
        <SideBar 
        open={open} 
        isInView_Appear={isInView_Appear} 
        IsInView_color={IsInView_color} />
        <Framework isInView_work_color={isInView_work_color} introSectionRef={introSectionRef}/>
        <Work work_color_targetRef={work_color_targetRef} isInView_work_color={isInView_work_color} introSectionRef={introSectionRef}/>
        <Skill contactRef={contactRef} introSectionRef={introSectionRef}/>
        <Contact  contactRef={contactRef}/>
    </div>
}

export default Home



