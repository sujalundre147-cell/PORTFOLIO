"use client";

import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills } from "./skillsData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#030712] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            I enjoy building modern applications using scalable technologies,
            clean architecture, and tools that help deliver exceptional user
            experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              icon={skill.icon}
              items={skill.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}