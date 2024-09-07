import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import tree1 from "../../src/assets/tree1.jpeg";
import tortoise from "../../src/assets/tortoise.png";
import hare from "../../src/assets/hare.png";

function Introduction() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollPosition > 300) {
      controls.start({ x: 500 });
    } else {
      controls.start({ x: 0 });
    }
  }, [scrollPosition, controls]);

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row w-full h-screen bg-gradient-to-r from-blue-400 via-white to-blue-400 overflow-hidden">
        <div className="relative w-full md:w-2/3 h-screen">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
            src={tree1}
            alt="Tree"
          />

          <motion.img
            className="absolute bottom-9 left-1/4 w-24 h-20 md:w-32 md:h-24 z-20"
            src={tortoise}
            alt="Tortoise"
            animate={{ x: [0, 100] }}
            transition={{ duration: 5, ease: "easeInOut" }}
          />

          <motion.img
            className="absolute bottom-16 right-1/4 w-24 h-24 md:w-32 md:h-32 z-20"
            src={hare}
            alt="Hare"
            animate={{ x: [-100, 0], opacity: [1, 0.8, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="w-full md:w-1/3 h-screen flex flex-col items-center justify-center bg-transparent p-4">
          <motion.h1
            className="text-center text-xl md:text-4xl font-bold"
            initial={{ opacity: 0 }}
            animate={{
              color: "#ff2994",
              opacity: 1,
              scale: [1, 1.2, 1],
              y: [-15, 0],
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            Hey, This is the story of Hare and Tortoise?
          </motion.h1>
          <br />
          <br />
          <br />

          <motion.h2
            className="text-center text-xl md:text-4xl font-bold"
            initial={{ opacity: 0 }}
            animate={{
              color: "#ff2994",
              opacity: 1,
              scale: [1, 1.2, 1],
              y: [-15, 0],
            }}
            transition={{ duration: 2, delay: 2 }}
          >
            Who will win? The fast and furious or the slow and steady?
          </motion.h2>
          <br />
          <br />
          <br />

          <motion.h3
            className="text-center text-xl md:text-4xl font-bold"
            initial={{ opacity: 0 }}
            animate={{
              color: "#ff2994",
              opacity: 1,
              scale: [1, 1.2, 1],
              y: [-15, 0],
            }}
            transition={{ duration: 2, delay: 3 }}
          >
            Lets see!!!!
          </motion.h3>
        </div>
      </div>
    </div>
  );
}

export default Introduction;