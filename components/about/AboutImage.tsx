"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 rounded-[32px] bg-cyan-500/20 blur-3xl" />

      {/* Available Badge */}
      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute -top-4 right-4 z-20 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-4 py-2 backdrop-blur-xl"
      >
        <span className="text-sm font-medium text-emerald-300">
          🟢 Available for Work
        </span>
      </motion.div>

      {/* Image Card */}
      <motion.div
        whileHover={{
          y: -8,
          rotate: -1,
          scale: 1.02,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
        }}
        className="relative overflow-hidden rounded-[32px] border border-cyan-500/20 bg-white/5 shadow-2xl shadow-cyan-500/10"
      >
        <Image
          src="/image/profile.jpeg"
          alt="Sujal Undre"
          width={420}
          height={520}
          className="h-[520px] w-[420px] object-cover"
          priority
        />

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/40 to-transparent" />
      </motion.div>
    </motion.div>
  );
}