"use client";

import { motion } from "framer-motion";
import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        <p className="mb-3 text-cyan-400 uppercase tracking-[0.3em]">
          Portfolio
        </p>

        <h2 className="text-5xl font-black text-white">
          Featured Projects
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-slate-400">
          A collection of projects showcasing modern web development,
          interactive UI, scalable architecture, and premium user
          experiences.
        </p>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}