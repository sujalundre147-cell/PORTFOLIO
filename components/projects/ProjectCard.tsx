"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import AIPreview from "./previews/AIPreview";
import FinancePreview from "./previews/FinancePreview";
import HospitalPreview from "./previews/HospitalPreview";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
    color: string;
  };
  index: number;
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlight = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      rgba(255,255,255,0.18),
      transparent 70%
    )
  `;

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function renderPreview() {
    switch (project.title) {
      case "AI Interview & Resume Platform":
        return <AIPreview />;

      case "Smart Finance Dashboard":
        return <FinancePreview />;

      case "Hospital Management SaaS":
        return <HospitalPreview />;

      default:
        return null;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
      }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1200}
        scale={1.02}
        transitionSpeed={1500}
        glareEnable
        glareMaxOpacity={0.12}
        className="rounded-3xl"
      >
        <motion.div
          onMouseMove={handleMouseMove}
          className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0B1220]/80 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]"
        >
          {/* Spotlight */}
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: spotlight,
            }}
          />

          {/* Background Glow */}
          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
            <div
              className={`absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-r ${project.color} blur-3xl opacity-30`}
            />
          </div>

          {/* Preview */}
          <div className="relative h-64 overflow-hidden">
            {renderPreview()}
          </div>

          {/* Content */}
          <div className="relative flex min-h-[340px] flex-col p-7">
            <motion.h3
              whileHover={{ x: 5 }}
              className="text-2xl font-bold text-white"
            >
              {project.title}
            </motion.h3>

            <p className="mt-4 leading-7 text-slate-400">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                  }}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-auto flex gap-4 pt-8">
              <motion.a
                href={project.live}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 font-medium text-white transition hover:bg-cyan-400"
              >
                <ExternalLink size={18} />
                Live Demo
              </motion.a>

              <motion.a
                href={project.github}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-medium text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <FaGithub size={18} />
                GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
}