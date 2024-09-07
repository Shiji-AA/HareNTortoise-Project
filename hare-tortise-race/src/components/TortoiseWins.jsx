import track from "../../src/assets/track.jpg";
import tortoise from "../../src/assets/tortoise.png";
import flag2 from "../../src/assets/flag2.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function TortoiseWins() {
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
      className="relative h-screen bg-blue-100 flex items-center justify-center"
      style={{
        backgroundImage: `url(${track})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.img
        className="absolute bottom-0 w-36 h-32 z-20"
        src={tortoise}
        alt="tortoise"
        initial={{ x: [0, 250] }}
        animate={{ x: scrollPosition > 1400 ? 400 : 0 }}
        transition={{ duration: 10, ease: "linear" }}
      />
      <motion.img
        className="absolute bottom-0 w-72 h-72 z-45"
        initial={{ x: [0, 300] }}
        animate={{ x: [300], opacity: [1, 0.8, 1] }}
        transition={{
          type: "spring",
          stiffness: "500",
          duration: 10,
          ease: "easeInOut",
        }}
        src={flag2}
        alt="winnerflag"
      />

      <motion.h1
        className="absolute text-4xl font-bold text-center mb-20"
        initial={{ opacity: 0 }}
        animate={{
          color: "#ff2994",
          opacity: 1,
          scale: [1, 1.2, 1],
          x: [-120, 0],
          y: [-15, 0],
        }}
        transition={{ type: "spring", delay: 20, duration: 2 }}
      >
        Finally Tortoise Wins
      </motion.h1>

      <motion.h1
        className="text-center text-xl md:text-4xl font-bold mt-10"
        initial={{ opacity: 0 }}
        animate={{
          color: "#ff2994",
          opacity: 1,
          scale: [1, 1.2, 1],
          y: [-1, 0],
        }}
        transition={{
          type: "spring",
          duration: 2,
          delay: 22,
          ease: "easeInOut",
        }}
      >
        Moral of the story is Slow and steady wins the race.
      </motion.h1>
    </div>
  );
}

export default TortoiseWins;