"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function MagneticButton({
  children,
  className = "",
  href,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 12,
  });

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 12,
  });

  function handleMouseMove(
    e: React.MouseEvent<HTMLAnchorElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;

    x.set(dx * 0.25);
    y.set(dy * 0.25);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (href?.startsWith("#")) {
      e.preventDefault();

      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }

  return (
    <motion.a
      href={href}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={className}
    >
      {children}
    </motion.a>
  );
}