"use client";

import { asset } from "@/lib/basePath";

const PRODUCTS = [
  { src: "/hero-imges/2.png", alt: "Wireless headphones" },
  { src: "/hero-imges/1.png", alt: "Wireless earbuds" },
  { src: "/hero-imges/5.png", alt: "Smartphone with clear case" },
  { src: "/hero-imges/3.png", alt: "Smartwatch" },
  { src: "/hero-imges/4.png", alt: "Power bank" },
];

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-panel">
        <div className="hero-panel-grid" />
        <div className="hero-panel-glow" />
        <div className="hero-panel-inner">
          <h1>
            <span className="line">
              <span style={{ animationDelay: ".15s" }}>Run the counter.</span>
            </span>
            <span className="line">
              <span style={{ animationDelay: ".3s" }}>
                Not the <span className="hl">chaos</span>.
              </span>
            </span>
          </h1>
          <p className="hero-sub">
            Cell Desk keeps inventory, sales, customers and invoices in sync —
            so closing time is never a guessing game.
          </p>

          <div className="hero-fan">
            {PRODUCTS.map((p, i) => (
              <div
                className="hero-fan-item"
                key={p.src}
                style={{ animationDelay: `${0.55 + i * 0.1}s` }}
              >
                <img src={asset(p.src)} alt={p.alt} draggable={false} />
              </div>
            ))}
          </div>

          <a href="#features" className="hero-shopnow">
            <span className="hero-shopnow-label">Explore Cell Desk</span>
            <span className="hero-shopnow-btn" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="18"
                height="18"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
