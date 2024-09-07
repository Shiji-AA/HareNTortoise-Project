import HareSleep from "./components/HareSleep";
import Introduction from "./components/Introduction";
import StartRacing from "./components/StartRacing";
import TortoiseOvertaking from "./components/TortoiseOvertaking";
import TortoiseWins from "./components/TortoiseWins";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();


const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
   
      <motion.div
        style={{
          position: "fixed", 
          top: 0,
          left: 0, 
          width: "100vw",
          height: "16px", 
          backgroundColor: "gray", 
          zIndex: 1000, 
          transformOrigin: "0%", 
          scaleX: smoothProgress, 
        }}
      />

      <Introduction />
      <hr />
      <StartRacing />
      <hr />
      <HareSleep />
      <hr />
      <TortoiseOvertaking />
      <hr />
      <TortoiseWins />
      <hr />
    </>
  );
}

export default App;
