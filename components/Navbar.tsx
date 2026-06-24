"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { asset } from "@/lib/basePath";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <nav id="navbar">
        <a href="#hero" className="nav-logo" aria-label="Cell Desk home">
          <img
            className="nav-logo-img"
            src={asset("/logo-img.png")}
            alt="Cell Desk logo"
            width={32}
            height={32}
          />
          Cell Desk
        </a>

        <div className="nav-actions">
          <Link href="/contact" className="btn btn-ghost btn-sm">
            Login
          </Link>
          <button
            className="nav-menu-btn"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span className="nav-menu-icon">
              <span />
              <span />
            </span>
            Menu
          </button>
        </div>
      </nav>

      <div
        className={`nav-overlay${menuOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        <div className="nav-overlay-top">
          <div className="nav-logo nav-overlay-logo">
            <span className="dot" />
            Cell Desk
          </div>
          <button
            className="nav-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <span />
            <span />
          </button>
        </div>

        <ul className="nav-overlay-links">
          {NAV_LINKS.map((l, i) => (
            <li key={l.href} style={{ ["--i" as string]: i } as React.CSSProperties}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li
            style={{ ["--i" as string]: NAV_LINKS.length } as React.CSSProperties}
          >
            <a
              href="#cta"
              className="nav-overlay-cta"
              onClick={() => setMenuOpen(false)}
            >
              Get Started <span className="arr">↗</span>
            </a>
          </li>
        </ul>

        <div className="nav-overlay-footer">
          <Link
            href="/contact"
            className="btn btn-ghost"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <span className="nav-overlay-note">© Cell Desk</span>
        </div>
      </div>
    </>
  );
}
