"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function ParallaxImage({ src, alt, className = "", height = 520, priority = false }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -60]);

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-2xl ${className}`} style={{ height }}>
      <motion.div style={{ y }} className="absolute inset-0">
        <Image src={src} alt={alt} fill className="object-cover" priority={priority} />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ui-bg/70 via-transparent to-transparent" />
    </div>
  );
}
