"use client";

import { useState } from "react";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>
);

const prices = {
  starter: { mo: "₹799", yr: "₹559" },
  growth: { mo: "₹1,499", yr: "₹1,049" },
};

const starterFeatures = [
  "1 Shop Location",
  "Inventory Management",
  "600+ Device Catalog",
  "Unlimited Invoices",
  "Customer Database",
];

const growthFeatures = [
  "Up to 3 Shop Locations",
  "Everything in Starter",
  "Advanced Analytics",
  "Low Stock Alerts",
  "Priority Support",
  "Sales Reports",
];

const enterpriseFeatures = [
  "Unlimited Shop Locations",
  "Everything in Growth",
  "Super Admin Panel",
  "Session Management",
  "Dedicated Account Manager",
  "Custom Integrations",
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="section">
      <div className="sec-orb sec-orb-left-md" aria-hidden="true" />
      <div className="sec-orb sec-orb-tr-sm" aria-hidden="true" />
      <div
        className="center"
        style={{ maxWidth: "var(--maxw)", margin: "0 auto 2.5rem" }}
      >
        <div className="eyebrow">Pricing</div>
        <h2 className="section-title">
          Pricing that scales
          <br />
          <em>with your shop floor</em>
        </h2>
      </div>
      <div className="pricing-toggle reveal">
        <span
          className={yearly ? "toggle-label" : "toggle-label active"}
          id="label-monthly"
        >
          Monthly
        </span>
        <div
          className={yearly ? "toggle-track on" : "toggle-track"}
          id="billingToggle"
          onClick={() => setYearly((v) => !v)}
        >
          <div className="toggle-thumb" />
        </div>
        <span
          className={yearly ? "toggle-label active" : "toggle-label"}
          id="label-yearly"
        >
          Yearly <span className="save-badge">Save 30%</span>
        </span>
      </div>
      <div className="pricing-grid reveal">
        <div className="price-card">
          <div className="plan-name">Starter</div>
          <div className="plan-price" id="price-starter">
            {yearly ? prices.starter.yr : prices.starter.mo}
            <span>/mo</span>
          </div>
          <p className="plan-desc">
            Perfect for a single shop just getting organised.
          </p>
          <div className="price-divider" />
          <ul className="plan-features">
            {starterFeatures.map((f) => (
              <li key={f}>
                <CheckIcon />
                {f}
              </li>
            ))}
          </ul>
          <button className="btn btn-ghost btn-full">Start Free Trial</button>
        </div>
        <div className="price-card featured">
          <div className="plan-ribbon">Most Popular</div>
          <div className="plan-name">Growth</div>
          <div className="plan-price" id="price-growth">
            {yearly ? prices.growth.yr : prices.growth.mo}
            <span>/mo</span>
          </div>
          <p className="plan-desc">
            For growing shops that need deeper insight.
          </p>
          <div className="price-divider" />
          <ul className="plan-features">
            {growthFeatures.map((f) => (
              <li key={f}>
                <CheckIcon />
                {f}
              </li>
            ))}
          </ul>
          <button className="btn btn-ink btn-full">Get Started →</button>
        </div>
        <div className="price-card">
          <div className="plan-name">Enterprise</div>
          <div className="plan-price">Custom</div>
          <p className="plan-desc">
            Chains, franchises and high-volume operations.
          </p>
          <div className="price-divider" />
          <ul className="plan-features">
            {enterpriseFeatures.map((f) => (
              <li key={f}>
                <CheckIcon />
                {f}
              </li>
            ))}
          </ul>
          <button className="btn btn-ghost btn-full">Contact Sales</button>
        </div>
      </div>
    </section>
  );
}
