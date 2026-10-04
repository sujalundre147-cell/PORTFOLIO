"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
    >
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
          {title}
        </p>

        {icon && (
          <div className="text-emerald-400">
            {icon}
          </div>
        )}
      </div>

      <h2 className="text-2xl font-bold text-white">
        {value}
      </h2>

      {subtitle && (
        <p className="mt-1 text-xs text-gray-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}