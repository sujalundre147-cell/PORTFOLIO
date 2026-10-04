"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import StatsCard from "./StatsCard";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Framer Motion",
  "AI",
  "Git",
];

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div>
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
          About Me
        </span>
      </div>

      <div className="space-y-4">
        <h2 className="text-5xl font-black leading-tight text-white">
          Building Intelligent
          <span className="block text-cyan-400">
            Digital Experiences.
          </span>
        </h2>

        <p className="text-lg leading-8 text-slate-400">
          I'm Sujal Undre, a B.Sc. Computer Science (AI & Graphics) student
          passionate about building modern web applications with React,
          Next.js, TypeScript, and AI. I enjoy creating fast, scalable,
          and visually polished digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <StatsCard value="15+" label="Projects" />
        <StatsCard value="20+" label="Technologies" />
        <StatsCard value="8 Mo." label="Experience" />
        <StatsCard value="6.70" label="CGPA" />
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href="/resume.pdf"
          className="flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-400"
        >
          <Download size={18} />
          Resume
        </a>

        <a
          href="#contact"
          className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:border-cyan-400 hover:text-cyan-300"
        >
          Contact
          <ArrowRight size={18} />
        </a>
      </div>
    </motion.div>
  );
}