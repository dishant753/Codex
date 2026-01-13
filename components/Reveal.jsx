"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Reveal({ children, delay = 0, className = "" }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className = "", stagger = 0.1 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: reduceMotion ? {} : { staggerChildren: stagger },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      variants={{
        hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 },
        show: reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
