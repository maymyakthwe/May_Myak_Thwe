import type {  work } from "../../Types";

import follower_buffet_design from '../../../assets/follower_buffet_design.png'
import furry_design from '../../../assets/furry_design.png'
import education_design from '../../../assets/educationdesign.png'
import nick_design from '../../../assets/nickdesign.png'
import portfolio_design from '../../../assets/portfolio_design.png'


export const WorkArray:Array<work>= [
    {
        id:1,
        name:'Follower Buffet',
        type:'SMM Website',
        src:follower_buffet_design,
        deployed: true,
        techStack:'FrontEnd' ,
        date:"Dec, 2024",
        link:'https://follower-buffet.vercel.app/',
        framework:'TypeScript'
    },
    {
        id:2,
        name:"Nick's Kitchen",
        type:'Recipes Sharing Website',
        src:nick_design,
        deployed: false,
        techStack:'FullStack' ,
        date:"Dec, 2024",
        link:'',
        framework:'PHP'
    },
    {
        id:3,
        name:'My Portfolio',
        type:'Former Portfolio Website',
        src:portfolio_design,
        deployed: true,
        techStack:'FrontEnd' ,
        date:"Sep, 2024",
        link:'https://may-portfolio-theta.vercel.app/',
        framework:'React.JS'
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
        framework:'MERN Stack'
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
        framework:'React.JS'
    }
    ];