import type { project } from "../../Types";


type Props = {
  project:project
}

const Project = ({project}:Props) => {
 

  return (
    <div className="flex items-center w-[400px] h-max p-[30px] bg-[#19193b] text-2xl m-5 justify-center grayscale-50  " > 
                        {project.video? <video
                            src={project.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto "
                            ></video>:
                            <img className=" " src={project.src} />
                            }
                        </div>
  );
};

export default Project;
