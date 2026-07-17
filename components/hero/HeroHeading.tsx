import { motion } from "framer-motion";

export default function HeroHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-2"
    >
      <h1 className="text-5xl font-black uppercase leading-none tracking-tight text-white md:text-7xl lg:text-8xl">
        BUILDING
      </h1>

      <h1 className="text-5xl font-black uppercase leading-none tracking-tight text-blue-500 md:text-7xl lg:text-8xl">
        INTELLIGENT
      </h1>

      <h1 className="text-5xl font-black uppercase leading-none tracking-tight text-white md:text-7xl lg:text-8xl">
        SOFTWARE
      </h1>
    </motion.div>
  );
}