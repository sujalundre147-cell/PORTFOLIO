"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020617]">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-white">
              Sujal <span className="text-cyan-400">Undre</span>
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Aspiring Software Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="GitHub"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-400 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-400 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="mailto:your.email@example.com"
              aria-label="Email"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-400 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <Mail size={18} />
            </a>

            {/* Back to Top */}
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/20"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-3 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Sujal Undre. All rights reserved.
          </p>

          <p>
            Built with{" "}
            <span className="text-cyan-400">
              Next.js
            </span>{" "}
            • React • TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}