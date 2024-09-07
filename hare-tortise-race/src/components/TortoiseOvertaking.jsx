import track1 from "../../src/assets/track1.jpg";
import tortoise from "../../src/assets/tortoise.png";
import sleep from "../../src/assets/sleep.png";
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import hare from "../../src/assets/hare.png";

function TortoiseOvertaking() {
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
        backgroundImage: `url(${track1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >   
    <motion.img
       className="absolute bottom-0 w-36 h-32 z-20"
        src={hare}     
        alt="Hare"
        initial={{ x: 350,y:-72}}
        animate={{ x: 380, rotateZ: -50, opacity: [1, 0.8, 1] }}
        transition={{ duration: 10, ease: "easeInOut" }}      
       />
       <motion.img
       className="absolute bottom-0 w-36 h-32 z-20"    
        src={sleep}
        alt="sleep"
        initial={{ x: 400,y:-200}}
        animate={{ x: 380,opacity: [1, 0.8, 1] }}
        transition={{ color:'#FFFF99',type:'spring',stiffness:"120",duration: 20,repeat:Infinity, ease: "easeInOut" }}      
       />


      {/* Tortoise image animation */}
      <motion.img
       className="absolute bottom-0 w-36 h-32 z-20"
        src={tortoise}
        alt="Tortoise"
        initial={{ x: 250}}
        animate={{ x: scrollPosition > 1000 ? 600 : 0 }} 
        transition={{ duration: 20, ease: "linear" }}  
       
       
      />
       <motion.h1
        className="absolute text-3xl font-bold text-center  z-30"
        initial={{ opacity: 0 }}
        animate={{ color: "#ff2994", opacity: 1, scale: [1, 1.2, 1], x: [0,470], y: [0,150] }}
        transition={{ type: 'spring', delay: 18, duration: 2 }}
      >
        Tortoise Overtaking
      </motion.h1>
    </div>
  );
}

export default TortoiseOvertaking;
