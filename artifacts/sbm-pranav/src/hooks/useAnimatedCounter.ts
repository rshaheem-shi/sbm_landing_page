import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

/**
 * Animates a number from 0 to `end` using an ease-out cubic curve.
 * Returns a ref to attach to the element and the current animated count.
 */
export function useAnimatedCounter(end: number, duration = 2) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isFloat = !Number.isInteger(end);

  useEffect(() => {
    if (!isInView) return;

    let rafId: number;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;

      setCount(isFloat ? Math.round(current * 10) / 10 : Math.ceil(current));

      if (progress < 1) {
        rafId = requestAnimationFrame(update);
      } else {
        setCount(end);
      }
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, end, duration, isFloat]);

  return { ref, count };
}
