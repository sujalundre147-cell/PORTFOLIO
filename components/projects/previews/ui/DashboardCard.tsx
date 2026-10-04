"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface DashboardCardProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function DashboardCard({
  title,
  icon,
  children,
  className = "",
}: DashboardCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -2,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        rounded-xl
        border border-white/10
        bg-white/5
        backdrop-blur-md
        p-4
        shadow-lg
        ${className}
      `}
    >
      {(title || icon) && (
        <div className="mb-4 flex items-center gap-2">
          {icon && (
            <div className="text-emerald-400">
              {icon}
            </div>
          )}

          {title && (
            <h4 className="text-sm font-semibold text-white">
              {title}
            </h4>
          )}
        </div>
      )}

      {children}
    </motion.div>
  );
}