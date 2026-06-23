"use client";

import { useEffect, useState } from "react";

type Item = {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
};

const ITEMS: Item[] = [
  {
    id: "hero",
    label: "Home",
    href: "#hero",
    icon: <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
  },
  {
    id: "features",
    label: "Features",
    href: "#features",
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.6" />
        <rect x="14" y="3" width="7" height="7" rx="1.6" />
        <rect x="3" y="14" width="7" height="7" rx="1.6" />
        <rect x="14" y="14" width="7" height="7" rx="1.6" />
      </>
    ),
  },
  {
    id: "pricing",
    label: "Pricing",
    href: "#pricing",
    icon: (
      <>
        <path d="M3 12V4a1 1 0 0 1 1-1h8l8 8-9 9z" />
        <circle cx="7.5" cy="7.5" r="1.4" />
      </>
    ),
  },
  {
    id: "faq",
    label: "FAQ",
    href: "#faq",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.6 9.4a2.5 2.5 0 1 1 3.4 2.4c-.7.3-1 .8-1 1.6" />
        <path d="M12 17h.01" />
      </>
    ),
  },
];

export default function BottomNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const ids = ITEMS.map((i) => i.id);
    const onScroll = () => {
      const probe = window.innerHeight * 0.4;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= probe) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="bottom-nav" aria-label="Section navigation">
      {ITEMS.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={`bottom-nav-item${active === item.id ? " active" : ""}`}
          aria-label={item.label}
          aria-current={active === item.id ? "true" : undefined}
        >
          <svg viewBox="0 0 24 24">{item.icon}</svg>
          <span className="bottom-nav-label">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
