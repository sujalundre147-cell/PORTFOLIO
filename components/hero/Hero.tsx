"use client";
import MagneticButton from "@/components/ui/MagneticButton";
import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroDescription from "./HeroDescription";
import AIOrb from "./AIOrb";
import { motion } from "framer-motion";
import BackgroundEffects from "@/components/hero/BackgroundEffects";
import HeroHeading from "./HeroHeading";

export default function Hero() {
  return (
    <section
  id="home"
  className="relative scroll-mt-28 overflow-hidden"
>
      <BackgroundEffects />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-16 px-6 py-24 lg:flex-row lg:justify-between">

        {/* LEFT */}
        <div className="max-w-2xl text-center lg:text-left">

          <HeroBadge />
          {/* Heading */}
          <HeroHeading />

          <HeroDescription />
          <HeroButtons />

        </div>

       {/* RIGHT */}
<div className="flex items-center justify-center">
  <AIOrb />
</div>

      </div>
    </section>
  );
}