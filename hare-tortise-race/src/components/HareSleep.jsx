import track1 from "../../src/assets/track1.jpg";
import hare from "../../src/assets/hare.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function HareSleep() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative h-screen bg-blue-100"
      style={{
        backgroundImage: `url(${track1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.img
        className="absolute bottom-0 w-36 h-32 z-20"
        src={hare}
        alt="Hare"
        animate={{ x: scrollPosition > 800 ? 300 : 0 }}
        transition={{ duration: 10, ease: "linear" }}
      />

      <motion.h1
        className="absolute text-3xl font-bold text-center  z-30"
        initial={{ opacity: 0, x: [-120, 0] }}
        animate={{
          color: "#ff2994",
          opacity: 1,
          scale: [1, 1.2, 1],

          x: [0, 450],
          y: [0, 150],
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          delay: 14,
          duration: 2,
          ease: "easeInOut",
        }}
      >
     The win is nearly secured, so let's relax for a bit
      </motion.h1>
    </div>
  );
}

export default HareSleep;
