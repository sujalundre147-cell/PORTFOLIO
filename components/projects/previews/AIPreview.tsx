"use client";

import LiveDot from "@/components/common/LiveDot";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Briefcase,
  CheckCircle2,
  FileText,
  Sparkles,
  Users,
} from "lucide-react";

export default function AIPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-none bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-700 p-5">

      {/* Background Glow */}
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />

      {/* Browser Window */}
<div className="relative h-full rounded-2xl border border-white/15 bg-black/20 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">

          <div className="flex items-center gap-3">

  <div className="flex gap-2">
    <div className="h-3 w-3 rounded-full bg-red-400" />
    <div className="h-3 w-3 rounded-full bg-yellow-400" />
    <div className="h-3 w-3 rounded-full bg-green-400" />
  </div>

  <div className="rounded-full bg-white/10 px-2 py-0.5">
    <span className="text-[9px] text-cyan-100/80">
      resume.ai/dashboard
    </span>
  </div>

</div>

          <div className="flex items-center gap-3">

            <div className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-[10px] font-medium text-cyan-100">
              Concept UI
            </div>

            <div className="flex items-center gap-2">
              <LiveDot />

              <span className="text-xs font-medium text-emerald-300">
                Online
              </span>
            </div>

          </div>

        </div>

        {/* Resume Score */}
        <div className="mb-5 rounded-2xl border border-white/10 bg-white/10 p-4">

          <div className="mb-3 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <FileText
                size={18}
                className="text-cyan-200"
              />

              <span className="text-sm text-white">
                Resume Score
              </span>

            </div>

            <span className="font-bold text-cyan-200">
              96%
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-white/10">

            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "96%" }}
              transition={{
                duration: 1.4,
                ease: "easeOut",
              }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-sky-200"
            />

          </div>

        </div>

        {/* AI Match */}
        <div className="mb-5 rounded-2xl border border-white/10 bg-white/10 p-4">

          <div className="mb-3 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <BrainCircuit
                size={18}
                className="text-cyan-200"
              />

              <span className="text-sm text-white">
                AI Match
              </span>

            </div>

            <span className="font-bold text-cyan-200">
              92%
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-white/10">

            <motion.div
              animate={{
                width: ["40%", "92%", "82%", "92%"],
                opacity:[0.8,1,0.9,1],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-sky-200"
            />

          </div>

        </div>
                {/* Bottom Stats */}
        <div className="grid grid-cols-2 gap-3">

          <motion.div
            whileHover={{
               y: -4,
                scale: 1.02,
              }}
              transition={{ type: "spring",
                 stiffness: 250,
                }}


            className="rounded-2xl border border-white/10 bg-white/10 p-4"
          >
            <div className="mb-2 flex items-center gap-2">
              <Briefcase
                size={18}
                className="text-cyan-200"
              />

              <span className="text-xs text-white/80">
                Jobs Applied
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white">
              24
            </h3>
          </motion.div>

          <motion.div
            whileHover={{ y: -2 }}
            className="rounded-2xl border border-white/10 bg-white/10 p-4"
          >
            <div className="mb-2 flex items-center gap-2">
              <Users
                size={18}
                className="text-cyan-200"
              />

              <span className="text-xs text-white/80">
                Interviews
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white">
              8
            </h3>
          </motion.div>

        </div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3"
        >
          <CheckCircle2
            size={18}
            className="text-emerald-300"
          />

          <div>
            <p className="text-xs font-medium text-emerald-200">
              AI Analysis Complete
            </p>

            <p className="text-[11px] text-emerald-100/80">
              Resume optimized successfully.
            </p>
          </div>

        </motion.div>

        {/* Floating Sparkle */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="absolute bottom-5 right-5"
        >
          <Sparkles
            size={30}
            className="text-cyan-100 drop-shadow-xl"
          />
        </motion.div>

      </div>
    </div>
  );
}