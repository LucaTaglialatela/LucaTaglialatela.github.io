import { useRef } from "react"
import { motion } from "framer-motion"

export const Draggable = ({ children }) => {
    const ref = useRef(null);
  
    return (
      <motion.div ref={ref} style={{ display: "inline-block" }}>
        <motion.div drag dragConstraints={ref}>{children}</motion.div>
      </motion.div>
    );
};
