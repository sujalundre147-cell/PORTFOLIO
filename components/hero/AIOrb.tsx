"use client";

import { motion } from "framer-motion";

const particles = [
  { left: 20, top: 20 },
  { left: 35, top: 70 },
  { left: 60, top: 30 },
  { left: 75, top: 80 },
  { left: 15, top: 50 },
  { left: 45, top: 15 },
  { left: 80, top: 40 },
  { left: 55, top: 60 },
  { left: 30, top: 40 },
  { left: 70, top: 20 },
  { left: 50, top: 80 },
  { left: 85, top: 65 },
];

export default function AIOrb() {
  return (
    <div className="relative flex h-[420px] w-[420px] items-center justify-center">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
      />

      {/* Ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[360px] w-[360px] rounded-full border border-cyan-500/30"
      >
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
        <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
        <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
        <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
      </motion.div>

      {/* Ring 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[280px] w-[280px] rounded-full border border-blue-500/30"
      >
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_15px_#3b82f6]" />
        <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_15px_#3b82f6]" />
        <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_15px_#3b82f6]" />
        <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_15px_#3b82f6]" />
      </motion.div>

      {/* Ring 3 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[200px] w-[200px] rounded-full border border-white/20"
      >
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_12px_white]" />
        <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_white]" />
        <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_12px_white]" />
        <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_white]" />
      </motion.div>

      {/* Energy Pulse 1 */}
      <motion.div
        animate={{
          scale: [1, 2.3],
          opacity: [0.35, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="absolute h-20 w-20 rounded-full border border-cyan-400/40"
      />

      {/* Energy Pulse 2 */}
      <motion.div
        animate={{
          scale: [1, 3],
          opacity: [0.2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1.2,
          ease: "easeOut",
        }}
        className="absolute h-24 w-24 rounded-full border border-cyan-300/20"
      />

      {/* Floating Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300"
          style={{        
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
        />
      ))}

      {/* AI Core */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/10 backdrop-blur-md"
      >
        <div className="absolute h-12 w-12 rounded-full border border-cyan-400/30" />

        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            boxShadow: [
              "0 0 20px #22d3ee",
              "0 0 100px #22d3ee",
              "0 0 20px #22d3ee",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="h-8 w-8 rounded-full bg-cyan-300"
        />
      </motion.div>
    </div>
  );
}