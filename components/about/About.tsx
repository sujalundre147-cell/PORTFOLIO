"use client";

import { motion } from "framer-motion";

import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#030712] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            More Than Just Code
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Passionate about building beautiful, scalable applications that
            combine clean architecture, smooth interactions, and modern
            technologies.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <AboutImage />

          <AboutContent />

        </div>

      </div>
    </section>
  );
}