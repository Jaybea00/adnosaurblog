"use client";

import { useEffect, useState } from "react";

interface Stat {
  id: string;
  label: string;
  value: number;
}

export default function StatsCounters({ stats }: { stats: Stat[] }) {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const stepTime = 16; // ~60fps

    const startTime = performance.now();

    const raf = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // easeInOut

      const next = stats.map((s, i) => Math.floor(s.value * eased));
      setCounts(next);

      if (t < 1) requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, [stats]);

  const format = (n: number) => {
    // Use comma as thousands separator
    return new Intl.NumberFormat("en-US").format(n).replace(/\./g, ",");
  };

  return (
    <div className="max-w-6xl mx-auto mt-28 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((s, idx) => (
          <div key={s.id}>
            <div className="text-4xl md:text-5xl font-bold text-gray-900">
              {format(counts[idx])}
            </div>
            <div className="text-xs tracking-widest text-gray-500 mt-2">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
