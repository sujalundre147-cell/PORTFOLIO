"use client";

import { motion } from "framer-motion";

interface Props {
  name: string;
}

export default function TechBadge({
  name,
}: Props) {
  return (
    <motion.span
      whileHover={{
        y: -3,
        scale: 1.05,
      }}
      className="
      rounded-full
      border
      border-cyan-500/20
      bg-cyan-500/10
      px-4
      py-2
      text-sm
      font-medium
      text-cyan-300
      transition-all
      hover:border-cyan-400
      hover:bg-cyan-500/20
    "
    >
      {name}
    </motion.span>
  );
}