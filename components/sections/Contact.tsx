"use client";

import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Send,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#030712] py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-black text-white md:text-6xl">
            Let&apos;s Build Something
            <span className="block text-cyan-400">
              Great Together.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Have an idea, opportunity, or project in mind?
            I&apos;d love to hear about it and explore how we can
            turn it into something meaningful.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              rounded-3xl
              border border-cyan-500/20
              bg-slate-900/60
              p-8
              backdrop-blur-xl
              shadow-[0_0_50px_rgba(34,211,238,0.06)]
              md:p-10
            "
          >
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Contact
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white">
                Let&apos;s Connect
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                I&apos;m currently looking for opportunities where I can
                contribute, learn, and grow as a software developer.
              </p>
            </div>

            {/* Email */}
            <a
              href="mailto:your.email@example.com"
              className="
                group mb-4 flex items-center justify-between
                rounded-2xl border border-white/10
                bg-white/[0.03] p-5
                transition-all duration-300
                hover:border-cyan-400/40
                hover:bg-cyan-500/5
              "
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-white">
                    your.email@example.com
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="text-slate-500 transition group-hover:text-cyan-400"
              />
            </a>

            {/* GitHub */}
            <a
              href="#"
              className="
                group mb-4 flex items-center justify-between
                rounded-2xl border border-white/10
                bg-white/[0.03] p-5
                transition-all duration-300
                hover:border-cyan-400/40
                hover:bg-cyan-500/5
              "
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/5 p-3 text-white">
                  <FaGithub size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    GitHub
                  </p>

                  <p className="mt-1 text-sm text-white">
                    View my projects
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="text-slate-500 transition group-hover:text-cyan-400"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="
                group flex items-center justify-between
                rounded-2xl border border-white/10
                bg-white/[0.03] p-5
                transition-all duration-300
                hover:border-cyan-400/40
                hover:bg-cyan-500/5
              "
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                  <FaLinkedin size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-sm text-white">
                    Connect with me
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="text-slate-500 transition group-hover:text-cyan-400"
              />
            </a>

            {/* Availability */}
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 px-5 py-4">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative h-3 w-3 rounded-full bg-emerald-400" />
              </span>

              <span className="text-sm font-medium text-emerald-300">
                Available for Software Opportunities
              </span>
            </div>
          </motion.div>

          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              rounded-3xl
              border border-cyan-500/20
              bg-slate-900/60
              p-8
              backdrop-blur-xl
              shadow-[0_0_50px_rgba(34,211,238,0.06)]
              md:p-10
            "
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Message
            </p>

            <h3 className="mt-3 text-3xl font-bold text-white">
              Send Me a Message
            </h3>

            <form className="mt-8 space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="
                    w-full rounded-xl
                    border border-white/10
                    bg-black/20
                    px-4 py-3
                    text-white
                    outline-none
                    placeholder:text-slate-600
                    transition
                    focus:border-cyan-400/50
                    focus:ring-2
                    focus:ring-cyan-400/10
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="
                    w-full rounded-xl
                    border border-white/10
                    bg-black/20
                    px-4 py-3
                    text-white
                    outline-none
                    placeholder:text-slate-600
                    transition
                    focus:border-cyan-400/50
                    focus:ring-2
                    focus:ring-cyan-400/10
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your opportunity or project..."
                  className="
                    w-full resize-none rounded-xl
                    border border-white/10
                    bg-black/20
                    px-4 py-3
                    text-white
                    outline-none
                    placeholder:text-slate-600
                    transition
                    focus:border-cyan-400/50
                    focus:ring-2
                    focus:ring-cyan-400/10
                  "
                />
              </div>

              {/* Button */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="button"
                className="
                  flex w-full items-center
                  justify-center gap-2
                  rounded-xl
                  bg-cyan-500
                  px-6 py-4
                  font-semibold
                  text-[#030712]
                  transition-all duration-300
                  hover:bg-cyan-400
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
                "
              >
                <Send size={18} />
                Send Message
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}