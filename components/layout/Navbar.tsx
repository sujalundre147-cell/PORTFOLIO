"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          const id = visibleSections[0].target.id;
          setActiveSection(id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mx-auto mt-5 flex w-[95%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-6 py-4 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-8"
      >
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={closeMenu}
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer text-xl font-bold tracking-wide text-white"
        >
          Sujal <span className="text-blue-500">Undre</span>
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <li key={link.name}>
                <motion.a
                  href={link.href}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`group relative text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}

                  <motion.span
                    initial={false}
                    animate={{
                      width: isActive ? "100%" : "0%",
                    }}
                    className="absolute -bottom-1 left-0 h-[2px] bg-cyan-400"
                  />
                </motion.a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-white/20 px-5 py-2 text-sm text-white transition hover:border-blue-500 hover:text-blue-400"
          >
            Resume
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(59,130,246,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 w-[95%] max-w-7xl rounded-2xl border border-white/10 bg-[#030712]/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    onClick={closeMenu}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-cyan-400/10 text-cyan-300"
                        : "text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}

              <div className="my-2 h-px bg-white/10" />

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm font-medium text-white transition hover:border-cyan-400/40 hover:text-cyan-300"
              >
                Resume
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}