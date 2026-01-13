"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = ["Clamp", "Inject", "Cool", "Eject"];

function TimelineStep({ step, index, progress, total }) {
  const rangeStart = index / total;
  const rangeEnd = (index + 1) / total;
  const opacity = useTransform(progress, [rangeStart, rangeEnd], [0.35, 1]);
  const glow = useTransform(progress, [rangeStart, rangeEnd], [0, 1]);

  return (
    <motion.div className="relative flex flex-1 items-center gap-3">
      <motion.div
        className="flex h-10 w-10 items-center justify-center rounded-full border border-ui-border bg-ui-s2 text-sm font-semibold text-ui-text"
        style={{ boxShadow: glow.to((value) => (value > 0.8 ? "0 0 20px rgba(27, 58, 120, 0.45)" : "none")) }}
      >
        {index + 1}
      </motion.div>
      <motion.div style={{ opacity }}>
        <p className="text-sm font-semibold text-ui-text">{step}</p>
        <p className="text-xs text-ui-muted">Step {index + 1}</p>
      </motion.div>
      {index < total - 1 ? <div className="hidden h-px flex-1 bg-ui-border md:block" aria-hidden /> : null}
    </motion.div>
  );
}

export default function TimelineProcess() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const fallbackProgress = useMotionValue(1);
  const progressValue = reduceMotion ? fallbackProgress : scrollYProgress;

  return (
    <div ref={ref} className="card-base overflow-hidden p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        {steps.map((step, index) => (
          <TimelineStep
            key={step}
            step={step}
            index={index}
            progress={progressValue}
            total={steps.length}
          />
        ))}
      </div>
    </div>
  );
}
