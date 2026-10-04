"use client";

import { motion } from "framer-motion";
import TimelineNode from "./TimelineNode";
import { journey } from "./journeyData";

export default function Timeline() {
  return (
    <div className="relative mx-auto mt-20 max-w-6xl">
      {/* Center Line */}
      <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-cyan-500/30 to-transparent md:block" />

      <div className="space-y-24">
        {journey.map((item, index) => {
          const isLeft = item.side === "left";

          return (
            <div
              key={item.year}
              className="relative grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]"
            >
              {/* LEFT CARD */}
              <div
                className={`${
                  isLeft ? "md:block" : "md:invisible"
                }`}
              >
                {isLeft && (
                  <TimelineContent
                    title={item.title}
                    company={item.company}
                    points={item.points}
                    from="left"
                  />
                )}
              </div>

              {/* NODE */}
              <div className="flex justify-center">
                <TimelineNode
                  year={item.year}
                  Icon={item.icon}
                />
              </div>

              {/* RIGHT CARD */}
              <div
                className={`${
                  !isLeft ? "md:block" : "md:invisible"
                }`}
              >
                {!isLeft && (
                  <TimelineContent
                    title={item.title}
                    company={item.company}
                    points={item.points}
                    from="right"
                  />
                )}
              </div>

              {/* Mobile Card */}
              <div className="md:hidden">
                <TimelineContent
                  title={item.title}
                  company={item.company}
                  points={item.points}
                  from="bottom"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface ContentProps {
  title: string;
  company: string;
  points: string[];
  from: "left" | "right" | "bottom";
}

function TimelineContent({
  title,
  company,
  points,
  from,
}: ContentProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x:
          from === "left"
            ? -60
            : from === "right"
            ? 60
            : 0,
        y: from === "bottom" ? 40 : 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
    >
      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 mb-6 text-cyan-300">
        {company}
      </p>

      <ul className="space-y-3">
        {points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-3 text-slate-300"
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}