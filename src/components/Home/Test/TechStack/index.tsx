import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Classic arrows as cursor
const leftArrowCursor =
  "url('data:image/svg+xml;utf8," +
  "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 40 24\" width=\"40\" height=\"24\">" +
  "<line x1=\"12\" y1=\"12\" x2=\"40\" y2=\"12\" stroke=\"black\" stroke-width=\"2\" />" +
  "<polyline points=\"12,6 4,12 12,18\" fill=\"none\" stroke=\"black\" stroke-width=\"2\" />" +
  "</svg>') 12 12, auto";


  
  const rightArrowCursor =
  "url('data:image/svg+xml;utf8," +
  "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 40 24\" width=\"40\" height=\"24\">" +
  "<line x1=\"0\" y1=\"12\" x2=\"28\" y2=\"12\" stroke=\"black\" stroke-width=\"2\" />" +
  "<polyline points=\"28,6 36,12 28,18\" fill=\"none\" stroke=\"black\" stroke-width=\"2\" />" +
  "</svg>') 12 12, auto";


// Transition config
const transition = { duration: 0.3, ease: "easeIn" };

export default function TechStack() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [cursorDirection, setCursorDirection] = useState<"left" | "right">("right");

  const slides = [
    <motion.div
      key="slide1"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={transition}
      viewport={{ once: true }}
      className="flex items-center justify-center  flex-wrap w-full"
    >
      <motion.div className="w-[50%] flex justify-center items-center">
        <div className="relative w-[400px] h-[400px] rounded-[50%] bg-[#EEEEEE]">
          <div className="absolute top-[-50px] left-[-90px]">
            <svg width="128" height="128" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C12.5 5 14 8 17 8C14 8 12.5 11 12 14C11.5 11 10 8 7 8C10 8 11.5 5 12 2Z"
                fill="#EA2F14"
              />
            </svg>
          </div>
        </div>
      </motion.div>
      <div className="w-[50%] px-3">
        <h1 className="text-6xl mb-5">Me, in a nutshell</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime illo delectus non ut, aperiam unde excepturi consequatur aut rem dolores ex, reiciendis explicabo quas exercitationem labore sapiente fugiat accusamus necessitatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit reprehenderit omnis eos iure, debitis a, ab eligendi corporis, repellat consequuntur repellendus facere iste incidunt enim consequatur impedit ullam eaque?
        </p>
      </div>
    </motion.div>,

    <motion.div
    key="slide1"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={transition}
    viewport={{ once: true }}
    className="flex items-center justify-center  flex-wrap w-full"
    >
    <motion.div className="w-[50%] flex justify-center items-center">
      <div className="relative w-[400px] h-[400px] rounded-[50%] bg-[#EEEEEE]">
        <div className="absolute top-[-50px] left-[-90px]">
          <svg width="128" height="128" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C12.5 5 14 8 17 8C14 8 12.5 11 12 14C11.5 11 10 8 7 8C10 8 11.5 5 12 2Z"
              fill="#EA2F14"
            />
          </svg>
        </div>
      </div>
    </motion.div>
    <div className="w-[50%] px-3">
      <h1 className="text-6xl mb-5">Personality Preview</h1>
      <p className="text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime illo delectus non ut, aperiam unde excepturi consequatur aut rem dolores ex, reiciendis explicabo quas exercitationem labore sapiente fugiat accusamus necessitatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit reprehenderit omnis eos iure, debitis a, ab eligendi corporis, repellat consequuntur repellendus facere iste incidunt enim consequatur impedit ullam eaque?
      </p>
    </div>
    </motion.div>,

    <motion.div
      key="slide1"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={transition}
      viewport={{ once: true }}
      className="flex items-center justify-center  flex-wrap w-full"
    >
      <motion.div className="w-[50%] flex justify-center items-center">
        <div className="relative w-[400px] h-[400px] rounded-[50%] bg-[#EEEEEE]">
          <div className="absolute top-[-50px] left-[-90px]">
            <svg width="128" height="128" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C12.5 5 14 8 17 8C14 8 12.5 11 12 14C11.5 11 10 8 7 8C10 8 11.5 5 12 2Z"
                fill="#EA2F14"
              />
            </svg>
          </div>
        </div>
      </motion.div>
      <div className="w-[50%] px-3">
        <h1 className="text-6xl mb-5">Career Journey, At a Glance</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime illo delectus non ut, aperiam unde excepturi consequatur aut rem dolores ex, reiciendis explicabo quas exercitationem labore sapiente fugiat accusamus necessitatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit reprehenderit omnis eos iure, debitis a, ab eligendi corporis, repellat consequuntur repellendus facere iste incidunt enim consequatur impedit ullam eaque?
        </p>
      </div>
    </motion.div>,
  ];

  const paginate = (dir: number) => {
    setIndex([(index + dir + slides.length) % slides.length, dir]);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left; // x within the div
    const half = bounds.width / 2;
    setCursorDirection(x < half ? "left" : "right");
  };

  const handleClick = () => {
    paginate(cursorDirection === "left" ? -1 : 1);
  };

  const getCursorStyle = () => ({
    cursor: cursorDirection === "left" ? leftArrowCursor : rightArrowCursor,
  });

  return (
    <div
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      className="relative max-w-[1200px] min-h-[600px] p-5 mx-auto my-[100px]  bg-white rounded-xl shadow-lg select-none "
      style={getCursorStyle()}
    >
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={index}
          custom={direction}
          variants={{
            enter: (dir) => ({
              x: dir > 0 ? 300 : -300,
              opacity: 0,
            }),
            center: { x: 0, opacity: 1 },
            exit: (dir) => ({
              x: dir > 0 ? -300 : 300,
              opacity: 0,
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3 }}
          
        >
          {slides[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
