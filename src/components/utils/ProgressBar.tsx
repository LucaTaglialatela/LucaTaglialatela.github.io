import { motion, useScroll } from 'framer-motion';

const ScrollLine = () => {
    const { scrollYProgress } = useScroll();
  
    return (
      <motion.div 
        className="fixed top-[calc(45px+3.6rem-4px)] left-0 right-0 h-0.5 bg-gray-200 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
        initial={{ scaleX: 0 }}
      />
    );
  };
  
  export default ScrollLine;