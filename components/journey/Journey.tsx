"use client";

import { motion } from "framer-motion";
import Timeline from "./Timeline";

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
            MY JOURNEY
          </p>

          <h2 className="text-5xl font-black text-white md:text-6xl">
            Professional Journey
          </h2>

          <p className="mx-auto mt-6 max-w-full text-lg leading-8 text-slate-400">
            Every experience has shaped my transition from the corporate world
            to building modern software solutions.
          </p>
        </motion.div>

        <Timeline />
      </div>
    </section>
  );
}