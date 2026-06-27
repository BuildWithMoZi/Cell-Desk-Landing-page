"use client";

import { useRef } from "react";
import { asset } from "@/lib/basePath";

const SCREENS = [
  { src: "/product-img/signup-signin-screen.png", label: "Sign In & Onboarding" },
  { src: "/product-img/create-acc-screen.png", label: "Create Account" },
  { src: "/product-img/home-screen.png", label: "Dashboard" },
  { src: "/product-img/home-screen1.png", label: "Home Overview" },
  { src: "/product-img/products-screen.png", label: "Products" },
  { src: "/product-img/products-screen-2.png", label: "Product Catalog" },
  { src: "/product-img/Brands-screen.png", label: "Brands" },
  { src: "/product-img/add-brand-screen.png", label: "Add Brand" },
  { src: "/product-img/sales-screen.png", label: "Sales History" },
  { src: "/product-img/customer-screen.png", label: "Customers" },
];

export default function Showcase() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByDir = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.8 * dir, behavior: "smooth" });
  };

  return (
    <section id="showcase" className="section">
      <div
        className="center"
        style={{ maxWidth: "var(--maxw)", margin: "0 auto 3rem" }}
      >
        <div className="eyebrow">App Gallery</div>
        <h2 className="section-title">
          See Cell Desk <em>in action</em>
        </h2>
        <p className="section-sub">
          A quick tour of the screens your team uses every day — from inventory
          and sales to customers and invoices.
        </p>
      </div>

      <div className="showcase-slider reveal">
        <button
          className="slider-arrow prev"
          aria-label="Previous screens"
          onClick={() => scrollByDir(-1)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="showcase-track" ref={trackRef}>
          {SCREENS.map((screen) => (
            <figure className="phone" key={screen.src}>
              <div className="phone-frame">
                <img src={asset(screen.src)} alt={screen.label} loading="lazy" />
              </div>
              <figcaption className="phone-label">{screen.label}</figcaption>
            </figure>
          ))}
        </div>

        <button
          className="slider-arrow next"
          aria-label="Next screens"
          onClick={() => scrollByDir(1)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
