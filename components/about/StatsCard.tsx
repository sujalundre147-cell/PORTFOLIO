"use client";

import { motion } from "framer-motion";

interface StatsCardProps {
  value: string;
  label: string;
}

export default function StatsCard({
  value,
  label,
}: StatsCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="rounded-2xl border border-cyan-500/20 bg-white/5 p-5 backdrop-blur-xl"
    >
      <h3 className="text-3xl font-black text-cyan-300">
        {value}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {label}
      </p>
    </motion.div>
  );
}