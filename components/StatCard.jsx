"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useReducedMotion } from "framer-motion";

export default function StatCard({ value, label, suffix = "", display }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || reduceMotion || display) return;
    const controls = animate(motionValue, value, { duration: 1.6, ease: "easeOut" });
    return controls.stop;
  }, [display, isInView, motionValue, reduceMotion, value]);

  useEffect(() => {
    if (display) return;
    const unsubscribe = motionValue.on("change", () => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(motionValue.get())}${suffix}`;
      }
    });
    return unsubscribe;
  }, [motionValue, suffix, display]);

  return (
    <div className="card-base flex flex-col items-start gap-3 p-5">
      <div className="heading-font text-3xl font-semibold text-ui-text tabular-nums" ref={ref}>
        {display ?? `${value}${suffix}`}
      </div>
      <p className="text-muted text-sm uppercase tracking-[0.2em]">{label}</p>
    </div>
  );
}
