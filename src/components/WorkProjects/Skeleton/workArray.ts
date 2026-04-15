import type {  work } from "../../Types";

import follower_buffet_design from '../../../assets/follower_buffet_design.png'
import Dev from '../../../assets/dev1.png'
import furry_design from '../../../assets/furry_design.png'
import education_design from '../../../assets/educationdesign.png'
import nick_design from '../../../assets/nickdesign.png'


export const WorkArray:Array<work>= [
    {
        id:1,
        name:'DevSpace Portfolio',
        type:'Developer Portfolio Website',
        src:Dev,
        deployed: true,
        techStack:'FullStack' ,
        date:"March, 2026",
        link:'https://follower-buffet.vercel.app/',
        framework:['Next.JS', 'Python',  'TypeScript', 'MongoDB']
    },
    {
        id:2,
        name:'Follower Buffet',
        type:'SMM Website',
        src:follower_buffet_design,
        deployed: true,
        techStack:'FrontEnd' ,
        date:"Jan, 2025",
        link:'https://follower-buffet.vercel.app/',
        framework:['React.JS', 'TypeScript']
    },
    {
        id:3,
        name:"Nick's Kitchen",
        type:'Recipes Sharing Website',
        src:nick_design,
        deployed: false,
        techStack:'FullStack' ,
        date:"Dec, 2024",
        link:'',
        framework:['PHP']
    },
    {
        id:4,
        name:'Furry Friends Refuge',
        type:'Animal Shelter Website',
        src:furry_design,
        deployed: false,
        techStack:'FullStack' ,
        date:"Aug, 2024",
        link:'',
        framework:['React.JS', 'Node.JS', 'Express', 'MongoDB']
    },
    {
        id:5,
        name:'My Academy',
        type:'Education Platform Website',
        src:education_design,
        deployed: true,
        techStack:'FrontEnd' ,
        date:"Feb, 2024",
        link:'https://nora-hazel.vercel.app/',
        framework:['React.JS', 'Tailwind CSS', 'TypeScript']
    }
    ];