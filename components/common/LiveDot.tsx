"use client";

import { motion } from "framer-motion";

export default function LiveDot() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.4, 1],
        opacity: [1, 0.4, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
      }}
      className="h-2.5 w-2.5 rounded-full bg-emerald-400"
    />
  );
}