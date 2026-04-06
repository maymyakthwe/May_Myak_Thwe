export type project = {
    image:string,
    name:string,
    src:string,
    video:boolean,
    description:string
}

export type work = {
    id:number,
    name: string,
    type:string,
    src: string,
    deployed: boolean,
    techStack:'FullStack' | 'FrontEnd' | 'Back-End',
    date:string,
    link:string,
    framework:string
};
