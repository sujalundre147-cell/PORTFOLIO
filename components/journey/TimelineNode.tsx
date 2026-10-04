"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TimelineNodeProps {
  year: string;
  Icon: LucideIcon;
}

export default function TimelineNode({
  year,
  Icon,
}: TimelineNodeProps) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Year Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-4 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl"
      >
        {year}
      </motion.div>

      {/* Outer Glow */}
      <div className="absolute top-10 h-14 w-14 rounded-full bg-cyan-400/20 blur-xl" />

      {/* Icon Circle */}
      <motion.div
        whileHover={{
          scale: 1.08,
        }}
        className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-[#08111f] text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.25)]"
      >
        <Icon size={24} strokeWidth={2.2} />
      </motion.div>
    </div>
  );
}