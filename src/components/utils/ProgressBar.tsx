import { motion, useScroll } from 'framer-motion';

const ScrollLine = () => {
    const { scrollYProgress } = useScroll();
  
    return (
      <motion.div 
        className="md:hidden fixed w-0.5 left-0 h-screen bg-gray-200 z-50 mix-blend-difference"
        style={{ scaleY: scrollYProgress }}
        initial={{ scaleY: 0 }}
      />
    );
  };
  
  export default ScrollLine;