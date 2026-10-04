"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Rocket } from "lucide-react";

interface TimelineCardProps {
  year: string;
  title: string;
  company: string;
  type: string;
  points: string[];
}

export default function TimelineCard({
  year,
  title,
  company,
  type,
  points,
}: TimelineCardProps) {
  const getIcon = () => {
    switch (type) {
      case "Corporate Experience":
        return <Briefcase size={22} />;
      case "Education":
        return <GraduationCap size={22} />;
      default:
        return <Rocket size={22} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex gap-8"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
          {getIcon()}
        </div>

        <div className="mt-2 h-full w-[2px] bg-cyan-500/20" />
      </div>

      {/* Card */}
      <motion.div
        whileHover={{
          y: -6,
          scale: 1.02,
        }}
        className="mb-10 flex-1 rounded-3xl border border-cyan-500/20 bg-white/5 p-7 backdrop-blur-xl"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          {year}
        </span>

        <h3 className="mt-2 text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mb-5 text-slate-400">
          {company}
        </p>

        <ul className="space-y-3">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-slate-300"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}