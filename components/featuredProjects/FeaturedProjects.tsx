"use client";

import { motion } from "framer-motion";

import ProjectShowcase from "./ProjectShowcase";
import { projects } from "./projectsData";

export default function FeaturedProjects() {
  return (
    <section
  id="projects"
  className="relative overflow-hidden bg-[#030712] pt-44 pb-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
            Featured Projects
          </p>

          <h2 className="text-4xl font-black text-white md:text-6xl">
            Things I&apos;m Building
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            A collection of ambitious software projects focused on modern
            interfaces, scalable architecture, AI, and real-world problems.
          </p>
        </motion.div>

        {/* Projects */}
        <div>
          {projects.map((project, index) => (
            <ProjectShowcase
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}