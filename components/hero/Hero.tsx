import HeroHeading from "./HeroHeading";
import { motion } from "framer-motion";
import BackgroundEffects from "@/components/hero/BackgroundEffects";
export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center px-6 pt-24">
      <BackgroundEffects />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:items-center lg:justify-between">
       {/* Badge */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
>
  <div className="h-2 w-2 rounded-full bg-green-400"></div>

  <span className="text-sm font-medium text-gray-300">
    Open to Opportunities
  </span>
</motion.div>

<HeroHeading />
<div className="mt-10 space-y-2">

  <h2 className="text-2xl font-bold text-white md:text-3xl">
    Sujal <span className="text-blue-500">Undre</span>
  </h2>

  <p className="text-lg text-slate-400">
    AI & Full Stack Developer
  </p>

</div>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-slate-400">
  I build AI-powered applications, scalable web platforms, and modern digital
  experiences with a focus on performance, clean architecture, and exceptional
  user experience.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
  <button className="rounded-full bg-blue-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700">
    View Projects →
  </button>

  <button className="rounded-full border border-white/15 bg-white/5 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10">
    Contact Me
  </button>
</div>
      </div>
    </section>
  );
}