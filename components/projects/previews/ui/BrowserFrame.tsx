"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface BrowserFrameProps {
  title: string;
  children: ReactNode;
}

export default function BrowserFrame({
  title,
  children,
}: BrowserFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.01,
      }}
      transition={{
        duration: 0.5,
      }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1220]/90 shadow-2xl backdrop-blur-xl"
    >
      {/* Header */}
      <div className="border-b border-white/10 bg-white/5 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <h3 className="text-sm font-semibold text-white">
              {title}
            </h3>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1">
            <Sparkles
              size={12}
              className="text-emerald-400"
            />

            <span className="text-[10px] font-medium uppercase tracking-wider text-emerald-300">
              Concept UI
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        {children}
      </div>
    </motion.div>
  );
}