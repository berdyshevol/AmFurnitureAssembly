"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

const stats: StatItem[] = [
  { value: 100, suffix: "+", label: "Projects", decimals: 0 },
  { value: 5.0, suffix: "", label: "Thumbtack Rating", decimals: 1 },
  { value: 30, suffix: "", label: "Five-Star Reviews", decimals: 0 },
  { value: 100, suffix: "%", label: "Satisfaction", decimals: 0 },
];

function AnimatedNumber({
  value,
  suffix,
  decimals = 0,
  animate,
}: StatItem & { animate: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!animate) return;

    const duration = 1200;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(eased * value);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [animate, value]);

  return (
    <span>
      {decimals > 0 ? display.toFixed(decimals) : Math.round(display)}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-8 sm:grid-cols-4 py-12 px-4 sm:px-8"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-4xl font-bold text-primary">
            <AnimatedNumber {...stat} animate={isInView} />
          </div>
          <p className="mt-2 text-sm text-secondary">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
