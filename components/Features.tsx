import type { ReactNode } from "react";

type Feature = {
  icon: ReactNode;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: (
      <path d="M3 7.5L12 3l9 4.5M3 7.5v9L12 21l9-4.5v-9M3 7.5L12 12m0 0l9-4.5M12 12v9" />
    ),
    title: "Inventory Management",
    desc: "Track every unit by model and IMEI. Low-stock alerts fire before you actually run out.",
  },
  {
    icon: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M20 20l-4.7-4.7" />
      </>
    ),
    title: "600+ Device Catalog",
    desc: "Type three letters, find any device. Specs and pricing autofill instantly.",
  },
  {
    icon: <path d="M3 21h18M6 21V10m6 11V4m6 17v-7" />,
    title: "Sales Tracking",
    desc: "Every sale logged automatically. Stock deducts itself — zero manual updates.",
  },
  {
    icon: (
      <>
        <path d="M6 2.5h9l3 3V21a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 21V3a.5.5 0 0 1 .5-.5z" />
        <path d="M9 9h6M9 13h6M9 17h3" />
      </>
    ),
    title: "Invoice Generator",
    desc: "Print-ready invoices in one tap, branded with your shop's name and logo.",
  },
  {
    icon: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <circle cx="17.5" cy="9" r="2.4" />
        <path d="M15.8 14.2c2.6.4 4.7 2.6 4.7 5.3" />
      </>
    ),
    title: "Customer Management",
    desc: "A full purchase history for every customer — handy for service follow-ups.",
  },
  {
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
        <path d="M8.5 15l2 2 4-4" />
      </>
    ),
    title: "Subscription System",
    desc: "Manage shop plans, renewals and billing for every branch from one place.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section">
      <div
        className="center"
        style={{ maxWidth: "var(--maxw)", margin: "0 auto 3rem" }}
      >
        <div className="eyebrow">Features</div>
        <h2 className="section-title">
          Everything your shop needs
          <br />
          <em>nothing it doesn&apos;t</em>
        </h2>
      </div>
      <div className="bento reveal">
        {features.map((feature) => (
          <div className="bento-cell" key={feature.title}>
            <div className="icon-tile">
              <svg viewBox="0 0 24 24">{feature.icon}</svg>
            </div>
            <div className="bento-title">{feature.title}</div>
            <div className="bento-desc">{feature.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
