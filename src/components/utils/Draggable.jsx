import { useRef } from "react"
import { motion } from "framer-motion"
import styled from "styled-components";

const StyledDraggable = styled(motion.div)`
  display: inline-block;
  
  &:hover {
    cursor: grab;
  }

  &:active {
    cursor: grabbing;
  }
`;

export const Draggable = ({ children }) => {
    const ref = useRef(null);
  
    return (
      <StyledDraggable ref={ref}>
        <motion.div drag dragConstraints={ref}>{children}</motion.div>
      </StyledDraggable>
    );
};
