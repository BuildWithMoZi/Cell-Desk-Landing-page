import Link from "next/link";

type Feat = { t: string; color: string; bg: string; paths: string[] };

const features: Feat[] = [
  { t: "Unlimited Products", color: "#2563eb", bg: "#e8f0ff", paths: ["M3 7l9-4 9 4-9 4-9-4z", "M3 7v10l9 4 9-4V7", "M12 11v10"] },
  { t: "Customer Management", color: "#7c3aed", bg: "#f1ebfe", paths: ["M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8"] },
  { t: "Brand Management", color: "#d97706", bg: "#fef3e2", paths: ["M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z", "M7 7h.01"] },
  { t: "Unlimited Customers", color: "#4f46e5", bg: "#ebecfe", paths: ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8", "M22 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"] },
  { t: "Sales History & Reports", color: "#e11d48", bg: "#ffe8ee", paths: ["M12 7v5l3 2", "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"] },
  { t: "Product Search & Smart Catalog", color: "#0891b2", bg: "#e0f7fb", paths: ["M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z", "M21 21l-4.35-4.35"] },
  { t: "Unlimited Sales Records", color: "#ea580c", bg: "#ffeede", paths: ["M8 6h13", "M8 12h13", "M8 18h13", "M3 6h.01", "M3 12h.01", "M3 18h.01"] },
  { t: "Secure Cloud Storage", color: "#0d9488", bg: "#d9f5f0", paths: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", "M9 12l2 2 4-4"] },
  { t: "Cloud Data Backup", color: "#0284c7", bg: "#e2f2fe", paths: ["M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"] },
  { t: "Inventory Management", color: "#16a34a", bg: "#e3f8e8", paths: ["M3 3h7v7H3z", "M14 3h7v7h-7z", "M14 14h7v7h-7z", "M3 14h7v7H3z"] },
  { t: "WhatsApp Support", color: "#25D366", bg: "#e4fbec", paths: ["M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"] },
  { t: "Automatic Updates", color: "#9333ea", bg: "#f5e9fe", paths: ["M23 4v6h-6", "M1 20v-6h6", "M3.51 9a9 9 0 0 1 14.85-3.36L23 10", "M1 14l4.64 4.36A9 9 0 0 0 20.49 15"] },
  { t: "Sales & Billing Management", color: "#db2777", bg: "#fde8f3", paths: ["M3 3v18h18", "M7 16v-5", "M12 16V8", "M17 16v-8"] },
  { t: "Regular Feature Enhancements", color: "#ca8a04", bg: "#fdf4d6", paths: ["M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3z"] },
  { t: "Multi-Device Access", color: "#c026d3", bg: "#fbe8fd", paths: ["M3 4h11v9H3z", "M2 17h13", "M17 9h5v9h-5z"] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="sec-orb sec-orb-left-md" aria-hidden="true" />
      <div className="sec-orb sec-orb-tr-sm" aria-hidden="true" />
      <div
        className="center"
        style={{ maxWidth: "var(--maxw)", margin: "0 auto 2.6rem" }}
      >
        <div className="eyebrow">Pricing</div>
        <h2 className="section-title">
          Simple pricing for
          <br />
          <em>every mobile shop</em>
        </h2>
        <p className="section-sub">
          Run your entire mobile business with one powerful plan.
        </p>
      </div>

      <div className="pr3 reveal">
        {/* Left column */}
        <aside className="pr3-aside">
          <h3 className="pr3-aside-title">
            All the tools you need.
            <br />
            <span>One simple plan.</span>
          </h3>
          <p className="pr3-aside-sub">
            Powerful features to help you manage, grow and scale your mobile shop
            without any hassle.
          </p>

          <div className="pr3-trial">
            <div className="pr3-trial-box">
              <span className="pr3-trial-num">14</span>
              <span className="pr3-trial-days">DAYS</span>
            </div>
            <span className="pr3-trial-ribbon">FREE TRIAL</span>
          </div>

          <ul className="pr3-trust">
            <li>
              <span className="pr3-trust-ic" style={{ background: "#e8f0ff", color: "#2563eb" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
              </span>
              No credit card required
            </li>
            <li>
              <span className="pr3-trust-ic" style={{ background: "#f1ebfe", color: "#7c3aed" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v5l3 2" /><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" /></svg>
              </span>
              Cancel anytime
            </li>
            <li>
              <span className="pr3-trust-ic" style={{ background: "#e4fbec", color: "#16a34a" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 6.64A9 9 0 1 1 5.64 6.64" /><path d="M12 2v10" /></svg>
              </span>
              24/7 priority support
            </li>
          </ul>
        </aside>

        {/* Right card */}
        <div className="pr3-card">
          <div className="pr3-top">
            <span className="pr3-ribbon">Best Value</span>
            <div className="pr3-plan">
              Cell Desk <span>Pro</span>
              <svg className="pr3-star" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2.6 6.3L21 9.6l-5 4.3 1.6 6.5L12 16.9 6.4 20.4 8 13.9l-5-4.3 6.4-.3L12 3z" /></svg>
            </div>
            <div className="pr3-price">
              <span className="pr3-amount">₹699</span>
              <span className="pr3-per">/ month</span>
            </div>
            <div className="pr3-offer">
              <s>₹999</s>
              <span className="pr3-offer-pill">Limited-time launch price</span>
            </div>
          </div>

          <div className="pr3-body">
            <ul className="pr3-features">
              {features.map((f) => (
                <li key={f.t}>
                  <span className="pr3-fi" style={{ background: f.bg, color: f.color }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      {f.paths.map((p, i) => (
                        <path key={i} d={p} />
                      ))}
                    </svg>
                  </span>
                  {f.t}
                </li>
              ))}
            </ul>

            <Link href="/contact" className="pr3-cta">
              Start 14-Day Free Trial
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg>
            </Link>
            <p className="pr3-fine">
              14 days free trial · No credit card required · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
