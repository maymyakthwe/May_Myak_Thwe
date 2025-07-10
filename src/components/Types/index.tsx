export type project = {
    image:string,
    name:string,
    src:string,
    video:boolean,
    description:string
}

export type work = {
    name: string,
    type:string,
    src: string,
    video: boolean,
    description: string,
    deployed: boolean,
    techStack:'FullStack' | 'Front-End' | 'Back-End',
    date:string,
    link:string
};
