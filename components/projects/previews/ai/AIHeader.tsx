"use client";

import { motion } from "framer-motion";
import { Sparkles, Bot } from "lucide-react";
import LiveDot from "@/components/common/LiveDot";

export default function AIHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6 flex items-center justify-between"
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/20">
          <Bot className="h-6 w-6 text-emerald-400" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">
            AI Resume Platform
          </h2>

          <p className="text-sm text-gray-400">
            Intelligent Resume Analysis Dashboard
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5">
          <Sparkles className="h-4 w-4 text-emerald-400" />

          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
            Concept UI
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
          <LiveDot />

          <span className="text-xs font-medium text-gray-300">
            AI Online
          </span>
        </div>
      </div>
    </motion.div>
  );
}