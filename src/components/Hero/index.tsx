import { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Reveal from "../utils/Reveal";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Hero = () => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  return (
    <motion.section
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 bg-gray-950 text-gray-200"
      style={{ backgroundImage }}
    >
      <Reveal>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl front-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
            Hello I am Luca
          </h1>
          <p className="my-6 max-w-2xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
            I am a software engineer with 2 years of experience working across
            the full stack. Please scroll down to learn more about me, or reach
            out!
          </p>
          <motion.button
            className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            style={{ border, boxShadow }}
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight - window.innerHeight - 248,
                behavior: "smooth",
              });
            }}
          >
            Contact me
          </motion.button>
        </div>
      </Reveal>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={1000} factor={3} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Hero;
