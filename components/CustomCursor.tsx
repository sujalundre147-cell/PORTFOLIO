"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 350,
    damping: 28,
    mass: 0.4,
  });

  const y = useSpring(mouseY, {
    stiffness: 350,
    damping: 28,
    mass: 0.4,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    window.addEventListener("mousemove", move);

    const elements = document.querySelectorAll(
      "a, button, input, textarea, [role='button']"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 64 : 40,
          height: hovering ? 64 : 40,
          borderColor: hovering
            ? "rgba(34,211,238,1)"
            : "rgba(34,211,238,0.45)",
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border backdrop-blur-sm"
      />

      {/* Glow */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9997] h-12 w-12 rounded-full bg-cyan-400/20 blur-xl"
      />

      {/* Core */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovering ? 0.7 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_#22d3ee]"
      />
    </>
  );
}