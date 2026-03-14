'use client';

import { motion } from "framer-motion";
import { ReactNode, useId, useMemo } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

const FadeIn = ({ children, delay = 0, className = "" }: Props) => {
  const id = useId();

  const preset = useMemo(() => {
    const presets = [
      { x: 0, y: 44, scale: 0.95, rotate: 0 },
      { x: 0, y: 30, scale: 0.95, rotate: 0.8 },
      { x: 0, y: 30, scale: 0.95, rotate: -0.8 },
      { x: 0, y: 24, scale: 0.93, rotate: 0 },
      { x: 0, y: 36, scale: 0.96, rotate: 0 },
    ];

    const hash = Array.from(id).reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    return presets[hash % presets.length];
  }, [id]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15, margin: "0px 0px -6% 0px" }}
      variants={{
        hidden: {
          opacity: 0,
          x: preset.x,
          y: preset.y,
          scale: preset.scale,
          rotate: preset.rotate,
          filter: "blur(4px)",
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          filter: "blur(0px)",
        },
      }}
      transition={{
        type: "spring",
        stiffness: 110,
        damping: 18,
        mass: 0.7,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
