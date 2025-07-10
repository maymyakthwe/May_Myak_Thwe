import { motion,useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import JS from '../../../assets/js.png'
import followerBuffet from '../../../assets/followerBuffet.mp4'
import furry1 from '../../../assets/1.png'
import furry2 from '../../../assets/8.png'
import snake1 from '../../../assets/snake1.png'
import cross from '../../../assets/t1.png'
import noraWeb from '../../../assets/nora-_web.mp4'
import type { project } from "../../Types";
import Project from "./Project";


type Props = {
    introSectionRef:React.RefObject<HTMLDivElement | null>
    contactRef:React.RefObject<HTMLDivElement | null>
  }
  

const Skill = ({introSectionRef,contactRef}:Props) => {
    
    //text
    const ArrayTop:Array<project>= [
        {
            image:JS,
            name:'Javascript',
            src:followerBuffet,
            video:true,
            description:'Quasi laudantium nisi aut, laborum veritatis ad alias quae dolor, distinctio illum harum earum tenetur hic illo magnam, quas'
        },{
            image:JS,
            name:'Javascript',
            src:furry1,
            video:false,
            description:'Quasi laudantium nisi aut, laborum veritatis ad alias quae dolor, distinctio illum harum earum tenetur hic illo magnam, quas'
        },{
            image:JS,
            name:'Javascript',
            src:cross,
            video:false,
            description:'Quasi laudantium nisi aut, laborum veritatis ad alias quae dolor, distinctio illum harum earum tenetur hic illo magnam, quas'
        },{
            image:JS,
            name:'Javascript',
            src:followerBuffet,
            video:true,
            description:'Quasi laudantium nisi aut, laborum veritatis ad alias quae dolor, distinctio illum harum earum tenetur hic illo magnam, quas'
        },{
            image:JS,
            name:'Javascript',
            src:furry2,
            video:false,
            description:'Quasi laudantium nisi aut, laborum veritatis ad alias quae dolor, distinctio illum harum earum tenetur hic illo magnam, quas'
        }];
    const ArrayBot:Array<project>=[
        {
            image:JS,
            name:'Javascript',
            src:cross,
            video:false,
            description:'Quasi laudantium nisi aut, laborum veritatis ad alias quae dolor, distinctio illum harum earum tenetur hic illo magnam, quas'
        },{
            image:JS,
            name:'Javascript',
            src:furry2,
            video:false,
            description:'Quasi laudantium nisi aut, laborum veritatis ad alias quae dolor, distinctio illum harum earum tenetur hic illo magnam, quas'
        },{
            image:JS,
            name:'Javascript',
            src:noraWeb,
            video:true,
            description:'Quasi laudantium nisi aut, laborum veritatis ad alias quae dolor, distinctio illum harum earum tenetur hic illo magnam, quas'
        },{
            image:JS,
            name:'Javascript',
            src:snake1,
            video:false,
            description:'Quasi laudantium nisi aut, laborum veritatis ad alias quae dolor, distinctio illum harum earum tenetur hic illo magnam, quas'
        },{
            image:JS,
            name:'Javascript',
            src:followerBuffet,
            video:true,
            description:'Quasi laudantium nisi aut, laborum veritatis ad alias quae dolor, distinctio illum harum earum tenetur hic illo magnam, quas'
        }];

    //section
    const springConfig = {stiffness:150,damping:50}

    const {scrollYProgress:skillSectionProgress} = useScroll({
        target:introSectionRef,
        offset: ["start end", "end start"],
      })
   

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    // const ref3 = useRef(null);

    const { scrollYProgress: progress1 } = useScroll({ target: ref1,offset: ["start end", "end start"] });
    const { scrollYProgress: progress2 } = useScroll({ target: ref2,offset: ["start end", "end start"] });
    // const { scrollYProgress: progress3 } = useScroll({ target: ref3,offset: ["start end", "end start"] });
        

    const topTextRaw = useTransform(progress1,[0,1],[-150,0]);
    const topText = useSpring(topTextRaw,springConfig)

    const midTextRaw = useTransform(progress2,[0,1],[0,-150]);
    const midText = useSpring(midTextRaw,springConfig)

    // const botTextRaw = useTransform(progress3,[0,1],[-350,0]);
    // const botText = useSpring(botTextRaw,springConfig)

    const skillSection = useTransform(skillSectionProgress,[0.9, 1], [0, -100])

  return (
    <motion.section id="skill-section" style={{y:skillSection}}  ref={contactRef}className="w-full h-max  overflow-hidden bg-[#111] pt-[100px] pb-[200px]">
        <div className="pb-[200px]">
            <motion.div 
            ref={ref1} 
            style={{x:topText}} 
            className="flex flex-wrap w-max">
                {
                    ArrayTop.map((array,i)=>(
                        <Project project={array} key={i}/> 
                    ))
                }
            </motion.div>
            <motion.div  
            ref={ref2} 
            style={{x:midText}} 
            viewport={{  margin: "-20% 0px" }}
            className="flex flex-wrap w-max">
                {
                    ArrayBot.map((array,i)=>(
                        <Project project={array} key={i}/> 
                    ))
                }
            </motion.div>
        </div>
        <div className="text-5xl text-[#eee] font-bold text-center">Contact <span className="text-[#6366f1]">ME ?</span></div>
    </motion.section>
  )
}

export default Skill


