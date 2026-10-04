"use client";

import { motion } from "framer-motion";

export default function HeroDescription() {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-8 max-w-xl text-lg leading-8 text-slate-400"
    >
      Building AI-powered applications, modern web platforms and scalable
      digital products with a focus on performance, clean architecture and
      exceptional user experience.
    </motion.p>
  );
}