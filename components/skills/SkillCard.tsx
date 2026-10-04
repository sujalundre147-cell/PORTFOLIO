"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  title: string;
  icon: string;
  items: Skill[];
}

export default function SkillCard({
  title,
  icon,
  items,
}: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
      }}
      className="group rounded-3xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div className="mb-8 flex items-center gap-3">
        <span className="text-3xl">{icon}</span>

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>
      </div>

      <div className="space-y-5">
        {items.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex justify-between">
              <span className="text-slate-300">
                {skill.name}
              </span>

              <span className="text-cyan-300">
                {skill.level}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${skill.level}%`,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                }}
                className="h-full rounded-full bg-cyan-400"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}