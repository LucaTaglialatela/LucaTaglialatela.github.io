import React from "react";
import { motion, useScroll } from "framer-motion";

export const ProgressBar = () => {
    const { scrollYProgress } = useScroll({});

    return (
        <motion.div style={{
            position: "sticky",
            top: "calc(40px + 3.6rem)",
            height: "1px",
            transformOrigin: "top left",
            background: "var(--brand)",
            opacity: "0.3",
            scaleX: scrollYProgress
        }} />
    );
};
