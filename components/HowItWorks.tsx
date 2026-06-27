import type { ReactNode } from "react";

type Step = {
  icon: ReactNode;
  num: string;
  title: string;
  desc: string;
  color: string;
  mock: ReactNode;
  badge: ReactNode;
};

const profileMock = (
  <>
    <span className="m-avatar" />
    <span className="m-line" />
    <span className="m-line short" />
  </>
);

const thumbsMock = (
  <div className="m-thumbs">
    <span className="m-thumb" />
    <span className="m-thumb" />
    <span className="m-thumb" />
  </div>
);

const contactsMock = (
  <div className="m-list">
    <span className="m-contact" />
    <span className="m-contact" />
    <span className="m-contact" />
  </div>
);

const linesMock = (
  <>
    <span className="m-line" />
    <span className="m-line" />
    <span className="m-line short" />
  </>
);

const barsMock = (
  <div className="m-bars">
    <span style={{ height: "40%" }} />
    <span style={{ height: "70%" }} />
    <span style={{ height: "50%" }} />
    <span style={{ height: "90%" }} />
    <span style={{ height: "65%" }} />
    <span style={{ height: "100%" }} />
  </div>
);

const steps: Step[] = [
  {
    icon: (
      <>
        <circle cx="10" cy="8" r="3.5" />
        <path d="M3 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5" />
        <path d="M19 8v4M21 10h-4" />
      </>
    ),
    num: "01",
    title: "Create Account",
    desc: "Sign up and set up your shop profile in under a minute.",
    color: "#8b5cf6",
    mock: profileMock,
    badge: <path d="M20 6L9 17l-5-5" />,
  },
  {
    icon: (
      <path d="M3 7.5L12 3l9 4.5M3 7.5v9L12 21l9-4.5v-9M3 7.5L12 12m0 0l9-4.5M12 12v9" />
    ),
    num: "02",
    title: "Add Inventory",
    desc: "Add your products manually or import from a catalog.",
    color: "#3b82f6",
    mock: thumbsMock,
    badge: <path d="M12 5v14M5 12h14" />,
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
    num: "03",
    title: "Import Customers",
    desc: "Bring in your existing customers or start adding new ones.",
    color: "#14b8a6",
    mock: contactsMock,
    badge: <path d="M20 6L9 17l-5-5" />,
  },
  {
    icon: (
      <>
        <path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 8H6.2" />
        <circle cx="9.5" cy="20.5" r="1.2" />
        <circle cx="17" cy="20.5" r="1.2" />
      </>
    ),
    num: "04",
    title: "Log Sales",
    desc: "Record sales, update stock, and manage transactions.",
    color: "#f59e0b",
    mock: linesMock,
    badge: (
      <>
        <path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 8H6.2" />
        <circle cx="9.5" cy="20.5" r="1" />
        <circle cx="17" cy="20.5" r="1" />
      </>
    ),
  },
  {
    icon: (
      <>
        <path d="M6 2.5h9l3 3V21a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 21V3a.5.5 0 0 1 .5-.5z" />
        <path d="M9 9h6M9 13h6M9 17h3" />
      </>
    ),
    num: "05",
    title: "Generate Invoice",
    desc: "Create professional invoices in seconds and print-ready.",
    color: "#a855f7",
    mock: linesMock,
    badge: <path d="M12 4v12m0 0l-4-4m4 4l4-4M5 20h14" />,
  },
  {
    icon: <path d="M3 21h18M6 21V10m6 11V4m6 17v-7" />,
    num: "06",
    title: "Track Analytics",
    desc: "Monitor revenue, stock and customer insights in real time.",
    color: "#3b82f6",
    mock: barsMock,
    badge: <path d="M3 21h18M6 21V10m6 11V4m6 17v-7" />,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="sec-orb sec-orb-bl-md" aria-hidden="true" />
      <div
        className="center"
        style={{ maxWidth: "var(--maxw)", margin: "0 auto 3.5rem" }}
      >
        <div className="eyebrow">Getting Started</div>
        <h2 className="section-title">
          From sign-up to your
          <br />
          <em>first invoice — six steps</em>
        </h2>
        <p className="section-sub">
          Everything you need to set up your shop, add products, and start
          selling — in just a few simple steps.
        </p>
      </div>

      <div className="how-steps reveal">
        <svg
          className="how-wave"
          viewBox="0 0 1100 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="howWaveGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="20%" stopColor="#3b82f6" />
              <stop offset="42%" stopColor="#14b8a6" />
              <stop offset="62%" stopColor="#f59e0b" />
              <stop offset="82%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <path
            d="M0,45 Q45.8,72 91.7,45 Q183.3,18 275,45 Q366.7,72 458.3,45 Q550,18 641.7,45 Q733.3,72 825,45 Q916.7,18 1008.3,45 Q1054,58 1100,45"
            fill="none"
            stroke="url(#howWaveGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        {steps.map((step) => (
          <div
            className="how-step"
            key={step.num}
            style={{ ["--c" as string]: step.color } as React.CSSProperties}
          >
            <div className="how-node">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {step.icon}
              </svg>
            </div>
            <span className="how-dot" />

            <div className="how-card">
              <span className="how-num">{step.num}</span>
              <h3 className="how-title">{step.title}</h3>
              <p className="how-desc">{step.desc}</p>
              <div className="how-mock">
                {step.mock}
                <span className="how-mock-badge">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {step.badge}
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="how-more">
        <a href="#showcase" className="btn btn-ghost">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
          </svg>
          Explore All Screens
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
