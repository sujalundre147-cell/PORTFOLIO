"use client";

import LiveDot from "@/components/common/LiveDot";
import { motion } from "framer-motion";
import {
  Calendar,
  UserRound,
  HeartPulse,
  Activity,
  ShieldCheck,
} from "lucide-react";

export default function HospitalPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-t-3xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 p-4">

      {/* Background Glow */}
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />

      {/* Browser */}
      <div className="relative h-full rounded-2xl border border-white/15 bg-black/20 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">

        {/* Header */}
        <div className="mb-4 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="rounded-full bg-white/10 px-2 py-0.5">
              <span className="text-[9px] text-violet-100/80">
                hospital.app/dashboard
              </span>
            </div>

          </div>

          <div className="flex items-center gap-2">
            <LiveDot />
            <span className="text-xs font-medium text-emerald-300">
              System Healthy
            </span>
          </div>

        </div>

        <div className="mb-5 h-px bg-white/10" />

        {/* Stats */}
        <div className="mb-4 space-y-3">

          <motion.div
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-3"
          >
            <div className="flex items-center gap-2">
              <Calendar
                size={18}
                className="text-white"
              />

              <span className="text-sm text-white">
                Appointments
              </span>
            </div>

            <span className="text-lg font-bold text-white">
              18
            </span>

          </motion.div>

          <motion.div
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-3"
          >
            <div className="flex items-center gap-2">
              <UserRound
                size={18}
                className="text-white"
              />

              <span className="text-sm text-white">
                Doctors Online
              </span>
            </div>

            <span className="text-lg font-bold text-white">
              42
            </span>

          </motion.div>

        </div>

        {/* ECG Monitor */}
        <div className="rounded-2xl border border-white/10 bg-white/10 p-4">

          <div className="mb-3 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <HeartPulse
                size={18}
                className="text-white"
              />

              <span className="text-sm text-white">
                Heart Monitor
              </span>

            </div>

            <span className="text-xs text-emerald-300">
              Live
            </span>

          </div>

          <svg
            viewBox="0 0 300 50"
            className="h-12 w-full"
            fill="none"
          >
            <motion.path
              d="M0 25 H40 L55 8 L70 42 L85 18 L100 25 H150 L165 12 L180 40 L195 20 L210 25 H300"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>

        </div>

        {/* Status */}
        <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3">

          <div className="flex items-center gap-2">

            <ShieldCheck
              size={18}
              className="text-emerald-300"
            />

            <div>

              <p className="text-xs font-medium text-emerald-200">
                All Systems Operational
              </p>

              <p className="text-[11px] text-emerald-100/80">
                No critical alerts detected.
              </p>

            </div>

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
          <Activity
            size={28}
            className="text-white"
          />
        </div>
      </motion.div>

    </div>
  );
}