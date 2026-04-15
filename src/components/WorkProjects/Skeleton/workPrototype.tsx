import type { work } from '../../Types';
import texture2 from '../../../assets/texture2.png';
// Note: Framer Motion and useScroll hooks are no longer needed here

type Props = {
  work: work;
};

const WorkPrototype = ({ work }: Props) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div 
        style={{
          backgroundImage: `url(${texture2})`,
          backgroundSize: 'cover'
        }}
        className="flex-1 bg-[#151515] rounded-[20px] p-[15px] border border-[#333] hover:border-[#555] transition-colors duration-300 shadow-lg group flex flex-col"
      >
        
        {/* Image Container */}
        <a href={`/work/${work.id}`} className="block w-full aspect-video rounded-[10px] overflow-hidden mb-5">
          <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out">
            <img 
              className="w-full h-full object-cover object-center" 
              src={work.src} 
              alt={`${work.name} preview`} 
            />
          </div>
        </a>

        {/* Text Content */}
        <div className="flex flex-col flex-1 px-2 pb-2">
          
          <a href={`/work/${work.id}`} className="block mb-1">
            <h2 className="text-2xl xl:text-3xl font-bold text-[#f3f3f3] group-hover:text-white transition-colors">
              {work.name} <span className="text-[#888] text-xl font-normal tracking-wide">({work.type})</span>
            </h2>
          </a>
          
          <p className="text-[#888] text-sm tracking-widest uppercase mb-6">{work.date}</p>
          
          {/* footer*/}
          <div className="mt-auto">
            {/* Added gap-4 so the tech stack and status don't collide */}
            <div className=" justify-between items-end mb-4 border-b border-[#333] pb-4 gap-4">
              
              <div className="flex flex-wrap gap-2 justify-start  text-right mb-3">
                {work.techStack && work.framework.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-[#222] border border-[#333] px-2 py-1 rounded-md text-xs font-medium text-[#ccc] hover:text-white transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>


              {/* Added whitespace-nowrap to prevent line breaks on the status text */}
              <div className="text-sm xl:text-base font-semibold text-[#aaa] whitespace-nowrap">
                {work.deployed ? (
                  <span className="text-green-500/80">● Deployed</span>
                ) : (
                  <span className="text-yellow-500/80">● Not Deployed</span>
                )}
              </div>
              
              

            </div>

            <div className="font-medium text-sm">
              {work.link ? (
                <a 
                  href={work.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Live Site ↗
                </a>
              ) : (
                <span className="text-[#555]">Live site is not available</span>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkPrototype;