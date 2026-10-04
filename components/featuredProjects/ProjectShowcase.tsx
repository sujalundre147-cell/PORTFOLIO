"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import BrowserFrame from "./BrowserFrame";
import TechBadge from "./TechBadge";

import AIPreview from "@/components/projects/previews/AIPreview";
import FinancePreview from "@/components/projects/previews/FinancePreview";
import HospitalPreview from "@/components/projects/previews/HospitalPreview";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

interface Props {
  project: Project;
  index: number;
}

export default function ProjectShowcase({
  project,
  index,
}: Props) {
  const reversed = index % 2 !== 0;

  function renderPreview() {
    switch (project.title) {
      case "AI Resume Platform":
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
    <motion.article
      initial={{
        opacity: 0,
        y: 70,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="mb-32 last:mb-0"
    >
      <div
        className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Browser Preview */}

        <div className="relative">
          {/* Project Number */}

          <div className="absolute -top-7 left-5 z-10">
            <span className="text-xs font-bold tracking-[0.3em] text-cyan-400">
              {String(index + 1).padStart(2, "0")} / FEATURED PROJECT
            </span>
          </div>

          <BrowserFrame title={project.title}>
            {renderPreview()}
          </BrowserFrame>
        </div>

        {/* Project Information */}

        <div className="relative">
          {/* Category */}

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Software Project
          </p>

          {/* Title */}

          <motion.h3
            whileHover={{
              x: 5,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="text-4xl font-black tracking-tight text-white md:text-5xl"
          >
            {project.title}
          </motion.h3>

          {/* Description */}

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
            {project.description}
          </p>

          {/* Development Status */}

          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span className="text-sm font-medium text-emerald-300">
              In Active Development
            </span>
          </div>

          {/* Technologies */}

          <div className="mt-9">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Technology Stack
            </p>

            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((tech) => (
                <TechBadge
                  key={tech}
                  name={tech}
                />
              ))}
            </div>
          </div>

          {/* Future Links */}

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              disabled
              className="flex cursor-not-allowed items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-3 text-sm font-medium text-cyan-300 opacity-80"
            >
              <ExternalLink size={17} />
              Live Demo — Coming Soon
            </button>

            <button
              type="button"
              disabled
              className="flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-300 opacity-80"
            >
              <FaGithub size={17} />
              GitHub — Coming Soon
            </button>
          </div>

          {/* Small note */}

          <p className="mt-5 text-xs text-slate-600">
            This project is currently being designed and developed.
          </p>
        </div>
      </div>
    </motion.article>
  );
}