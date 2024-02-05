"use client";
import { ISpinner } from "@/types/shared";
import { motion } from "framer-motion";

const Spinner = ({ dots = 3, size = "default", isDark = false }: ISpinner) => {
  const sizes = {
    xsmall: { width: "w-[6px]", height: "h-[6px]", gap: "gap-[2px]" },
    small: { width: "w-2", height: "h-2", gap: "gap-1" },
    default: { width: "w-4", height: "h-4", gap: "gap-2" },
    large: { width: "w-8", height: "h-8", gap: "gap-4" },
  };

  const animation = {
    initial: {
      scale: 1,
      opacity: 1,
    },
    animate: {
      opacity: [1, 0.75, 1],
      scale: [1, 0.75, 1],
    },
  };
  const transition = {
    repeat: Infinity,
    duration: 0.3,
  };

  return (
    <div className={`flex ${sizes[size].gap}`}>
      {Array(dots)
        .fill(null)
        .map((dot, i) => (
          <motion.div
            className={`rounded-full bg-white ${sizes[size].width} ${sizes[size].height}`}
            key={i}
            variants={animation}
            transition={{
              repeat: Infinity,
              duration: 0.75,
              delay: 0.1 * i,
            }}
            initial="initial"
            animate="animate"
          />
        ))}
    </div>
  );
};

export default Spinner;
