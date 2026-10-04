"use client";

import LiveDot from "@/components/common/LiveDot";
import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  PieChart,
  Wallet,
} from "lucide-react";

export default function FinancePreview() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-t-3xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 p-4">

      {/* Background Glow */}
      <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-emerald-300/20 blur-3xl" />

      {/* Browser Window */}
<div className="relative flex h-full flex-col rounded-2xl border border-white/15 bg-black/20 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="mb-4 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="rounded-full bg-white/10 px-2 py-0.5">
              <span className="text-[9px] text-emerald-100/80">
                finance.app/dashboard
              </span>
            </div>

          </div>

          <div className="flex items-center gap-2">
            <LiveDot />
            <span className="text-xs font-medium text-emerald-300">
              NYSE OPEN 
            </span>
          </div>

        </div>

        <div className="mb-5 h-px bg-white/10" />

        {/* Revenue & Savings */}
        <div className="mb-4 grid grid-cols-2 gap-3">

          <motion.div
            whileHover={{
              y: -3,
              scale: 1.02,
            }}
            className="rounded-2xl border border-white/10 bg-white/10 p-3"
          >
            <div className="flex items-center gap-2">
              <DollarSign
                size={18}
                className="text-emerald-200"
              />

              <span className="text-xs text-white">
                Revenue
              </span>
            </div>

            <motion.p
              animate={{
                scale: [1, 1.04, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
              }}
              className="mt-2 text-xl font-bold text-white"
            >
              $84K
            </motion.p>

            <span className="text-[11px] text-emerald-200">
              +18.4%
            </span>

          </motion.div>

          <motion.div
            whileHover={{
              y: -3,
              scale: 1.02,
            }}
            className="rounded-2xl border border-white/10 bg-white/10 p-3"
          >
            <div className="flex items-center gap-2">
              <Wallet
                size={18}
                className="text-emerald-200"
              />

              <span className="text-xs text-white">
                Savings
              </span>
            </div>

            <p className="mt-2 text-xl font-bold text-white">
              $26K
            </p>

            <span className="text-[11px] text-cyan-200">
              Stable
            </span>

          </motion.div>

        </div>

        {/* Analytics */}
        <div className="rounded-2xl border border-white/10 bg-white/10 p-4">

          <div className="mb-3 flex items-center justify-between">

            <div className="flex items-center gap-2">
              <PieChart
                size={18}
                className="text-emerald-200"
              />

              <span className="text-sm text-white">
                Analytics
              </span>
            </div>

            <span className="text-xs text-emerald-200">
              Live
            </span>

          </div>

          <div className="flex h-20 items-end gap-2">

            {[30, 55, 45, 80, 60, 95].map((h, i) => (
              <motion.div
                key={i}
                animate={{
                  height: [`${h - 15}%`, `${h}%`, `${h - 5}%`],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  delay: i * 0.15,
                }}
                className="flex-1 rounded-full bg-gradient-to-t from-emerald-400 to-emerald-200"
              />
            ))}

          </div>

        </div>

        {/* Status */}
        <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3">

          <div className="flex items-center justify-between">

            <span className="text-xs text-emerald-200">
              Portfolio Growth
            </span>

            <span className="text-sm font-semibold text-white">
              +18.4%
            </span>

          </div>

        </div>

      </div>

      {/* Floating Icon */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute bottom-5 right-5"
      >
        <div className="rounded-full bg-white/10 p-2 backdrop-blur-md">
          <TrendingUp
            size={28}
            className="text-white"
          />
        </div>
      </motion.div>

    </div>
  );
}