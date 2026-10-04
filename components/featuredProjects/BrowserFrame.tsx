"use client";

import { motion } from "framer-motion";
import { Globe, Lock } from "lucide-react";

interface BrowserFrameProps {
  title: string;
  children: React.ReactNode;
}

export default function BrowserFrame({
  title,
  children,
}: BrowserFrameProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
      }}
      className="
      overflow-hidden
      rounded-[28px]
      border
      border-cyan-500/20
      bg-[#0B1220]/80
      backdrop-blur-xl
      shadow-[0_0_40px_rgba(34,211,238,.08)]
      hover:border-cyan-400/40
      hover:shadow-[0_0_70px_rgba(34,211,238,.15)]
      "
    >
      {/* Browser Header */}

      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">

        <div className="flex items-center gap-2">

          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />

        </div>

        {/* Address Bar */}

        <div className="flex w-[60%] items-center gap-2 rounded-full border border-white/10 bg-[#08111F] px-4 py-2">

          <Lock
            size={14}
            className="text-cyan-300"
          />

          <Globe
            size={14}
            className="text-cyan-300"
          />

          <span className="truncate text-xs text-slate-300">
            {title.toLowerCase().replace(/\s+/g, "")}.dev
          </span>

        </div>

        <div className="w-16" />

      </div>

      {/* Preview */}

      <div className="relative h-[430px] overflow-hidden">
        {children}
      </div>

    </motion.div>
  );
}