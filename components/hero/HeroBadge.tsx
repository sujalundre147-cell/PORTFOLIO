"use client";

import { motion } from "framer-motion";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
    >
      <div className="h-2 w-2 rounded-full bg-green-400" />

      <span className="text-sm font-medium text-slate-300">
        AI ENGINEER • AVAILABLE
      </span>
    </motion.div>
  );
}