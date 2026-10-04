"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mt-8 flex flex-wrap gap-4"
    >
      {/* Explore Work */}
      <MagneticButton
        href="#projects"
        className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Explore Work →
      </MagneticButton>

      {/* Let's Talk */}
      <MagneticButton
        href="#contact"
        className="rounded-full border border-white/10 bg-white/5 px-8 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
      >
        Let's Talk
      </MagneticButton>
    </motion.div>
  );
}