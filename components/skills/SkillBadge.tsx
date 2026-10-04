"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.span
      whileHover={{
        scale: 1.08,
        y: -3,
      }}
      transition={{ duration: 0.2 }}
      className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-sm font-medium text-cyan-300"
    >
      {name}
    </motion.span>
  );
}