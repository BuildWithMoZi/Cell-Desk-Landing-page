"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  target: number;
  label: string;
};

function formatCount(val: number) {
  const k = val / 1000;
  return val >= 1000 ? `${k.toFixed(k >= 10 ? 0 : 1)}K+` : `${val}+`;
}

function Counter({ target, label }: CounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);

          let start = 0;
          const dur = 1800;
          const step = 16;
          const inc = target / (dur / step);
          const timer = setInterval(() => {
            start = Math.min(start + inc, target);
            setValue(Math.floor(start));
            if (start >= target) clearInterval(timer);
          }, step);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-num">{formatCount(value)}</span>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats">
      <div className="stats-row reveal">
        <Counter target={10000} label="Devices Managed" />
        <Counter target={500} label="Active Shops" />
        <Counter target={50000} label="Invoices Generated" />
        <div className="stat-item">
          <span className="stat-num">99.9%</span>
          <div className="stat-label">Uptime Guarantee</div>
        </div>
      </div>
    </section>
  );
}
