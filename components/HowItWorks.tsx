import type { ReactNode } from "react";

type Step = {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    icon: (
      <>
        <circle cx="10" cy="8" r="3.5" />
        <path d="M3 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5" />
        <path d="M19 8v4M21 10h-4" />
      </>
    ),
    eyebrow: "STEP 01",
    title: "Create Account",
    desc: "Set up your shop profile in under a minute.",
  },
  {
    icon: (
      <path d="M3 7.5L12 3l9 4.5M3 7.5v9L12 21l9-4.5v-9M3 7.5L12 12m0 0l9-4.5M12 12v9" />
    ),
    eyebrow: "STEP 02",
    title: "Add Inventory",
    desc: "Pull devices from our catalog or add your own.",
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
    eyebrow: "STEP 03",
    title: "Import Customers",
    desc: "Bring in existing records or start fresh.",
  },
  {
    icon: (
      <>
        <path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 8H6.2" />
        <circle cx="9.5" cy="20.5" r="1.2" />
        <circle cx="17" cy="20.5" r="1.2" />
      </>
    ),
    eyebrow: "STEP 04",
    title: "Log Sales",
    desc: "Record a sale, stock adjusts on its own.",
  },
  {
    icon: (
      <>
        <path d="M6 2.5h9l3 3V21a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 21V3a.5.5 0 0 1 .5-.5z" />
        <path d="M9 9h6M9 13h6M9 17h3" />
      </>
    ),
    eyebrow: "STEP 05",
    title: "Generate Invoice",
    desc: "One tap, print-ready, branded to your shop.",
  },
  {
    icon: <path d="M3 21h18M6 21V10m6 11V4m6 17v-7" />,
    eyebrow: "STEP 06",
    title: "Track Analytics",
    desc: "Watch revenue and stock trends in real time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section">
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
          A straight line from setup to a running shop floor. Most owners are
          fully live the same day.
        </p>
      </div>
      <div className="steps-row reveal">
        {steps.map((step) => (
          <div className="step" key={step.eyebrow}>
            <div className="step-node">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {step.icon}
              </svg>
            </div>
            <div className="step-eyebrow">{step.eyebrow}</div>
            <div className="step-title">{step.title}</div>
            <div className="step-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
