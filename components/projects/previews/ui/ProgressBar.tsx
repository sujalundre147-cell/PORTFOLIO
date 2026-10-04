"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
  color?: string;
  showValue?: boolean;
}

export default function ProgressBar({
  value,
  color = "bg-emerald-400",
  showValue = true,
}: ProgressBarProps) {
  return (
    <div className="space-y-2">
      {showValue && (
        <div className="flex justify-between text-xs">
          <span className="text-gray-400">Progress</span>

          <span className="font-medium text-white">
            {value}%
          </span>
        </div>
      )}

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
}