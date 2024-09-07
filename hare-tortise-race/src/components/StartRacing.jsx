import { motion } from 'framer-motion';
import track3 from "../../src/assets/track3.jpg";
import tortoise from "../../src/assets/tortoise.png";
import hare from "../../src/assets/hare.png";
import { useEffect, useState } from 'react';

function StartRacing() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="relative h-screen bg-blue-100"
      style={{
        backgroundImage: `url(${track3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
   >

       {/* Center the h1 element */}
       <motion.h1
        className="absolute text-3xl font-bold text-center text-white z-30"
        initial={{ opacity: 0 , x: [-120, 0]}}
        animate={{ color: "#ff2994", opacity: 1, scale: [1, 1.2, 1], x: [ 0,450], y: [-15, 0] }}
        transition={{ type: 'spring',stiffness:120, delay: 8, duration: 2 }}
      >
        Wow !!! Hare is leading
      </motion.h1>

      {/* Hare Animation */}
      <motion.img
        className="absolute bottom-16 mb-32 w-36 h-28 z-20"
        src={hare}
        alt="Hare"
        animate={{ x: scrollPosition > 500 ? 700 : 0 }}
        transition={{ duration: 15, ease: "linear" }}
      />

      {/* Tortoise Animation */}
      <motion.img
        className="absolute bottom-10 mb-20 w-18 h-20 z-20"
        src={tortoise}
        alt="Tortoise"
        animate={{ x: scrollPosition > 500 ? 80 : 0 }}
        transition={{ duration: 15, ease: "linear" }}
      />
    </div>
  );
}

export default StartRacing;
