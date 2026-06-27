import type { ReactNode } from "react";

type Old = { text: string; icon: ReactNode; color: string };
type New = { lead: string; rest: string; icon: ReactNode; color: string };

const OLD_WAY: Old[] = [
  {
    text: "Manual stock counts in a notebook — always a day out of date",
    color: "#8b5cf6",
    icon: (
      <>
        <path d="M4 4h13a1 1 0 0 1 1 1v15l-3-2-3 2-3-2-3 2V5a1 1 0 0 1 1-1z" />
        <path d="M8 8h6M8 12h6" />
      </>
    ),
  },
  {
    text: "Customer history scattered across WhatsApp and paper slips",
    color: "#22c55e",
    icon: (
      <>
        <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3z" />
        <path d="M8.5 8.5c0 4 3 7 7 7" />
      </>
    ),
  },
  {
    text: "Handwritten invoices that get lost, smudged or misread",
    color: "#ec4899",
    icon: (
      <>
        <path d="M6 2.5h9l3 3V21a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 21V3a.5.5 0 0 1 .5-.5z" />
        <path d="M9 9h6M9 13h6M9 17h3" />
      </>
    ),
  },
  {
    text: "No single view across your branches",
    color: "#f43f5e",
    icon: (
      <>
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <circle cx="12" cy="5" r="2.5" />
        <path d="M12 7.5v4M12 11.5L6 15.5M12 11.5l6 4" />
      </>
    ),
  },
];

const NEW_WAY: New[] = [
  {
    lead: "Real-time inventory",
    rest: " that updates the second a sale happens",
    color: "#3b82f6",
    icon: (
      <path d="M3 7.5L12 3l9 4.5M3 7.5v9L12 21l9-4.5v-9M3 7.5L12 12m0 0l9-4.5M12 12v9" />
    ),
  },
  {
    lead: "One customer database",
    rest: " with full purchase history",
    color: "#14b8a6",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <circle cx="17.5" cy="9" r="2.4" />
        <path d="M15.8 14.2c2.6.4 4.7 2.6 4.7 5.3" />
      </>
    ),
  },
  {
    lead: "Professional, printable invoices",
    rest: " in one tap",
    color: "#a855f7",
    icon: (
      <>
        <path d="M6 2.5h9l3 3V21a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 21V3a.5.5 0 0 1 .5-.5z" />
        <path d="M9 9h6M9 13h6M9 17h3" />
      </>
    ),
  },
  {
    lead: "One dashboard for every shop",
    rest: " you run",
    color: "#f59e0b",
    icon: <path d="M3 21h18M6 21V10m6 11V4m6 17v-7" />,
  },
];

const BENEFITS = [
  {
    title: "Save Time",
    desc: "Automate daily tasks and focus on growth.",
    color: "#8b5cf6",
    icon: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
  },
  {
    title: "Reduce Errors",
    desc: "Accurate data, fewer mistakes.",
    color: "#22c55e",
    icon: <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3zm-2 9l2 2 4-4" />,
  },
  {
    title: "Increase Sales",
    desc: "Serve customers better and sell more.",
    color: "#f59e0b",
    icon: <path d="M3 17l6-6 4 4 7-7M14 8h7v7" />,
  },
  {
    title: "Work Anywhere",
    desc: "Access your business from any device.",
    color: "#3b82f6",
    icon: (
      <path d="M3 12a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1v-7h3M3 12v5a2 2 0 0 0 2 2h1v-7H3" />
    ),
  },
];

function Glyph({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function ProblemSolution() {
  return (
    <section id="pvs" className="section">
      <div className="sec-orb sec-orb-left-lg" aria-hidden="true" />
      <div
        className="center"
        style={{ maxWidth: "var(--maxw)", margin: "0 auto 2.6rem" }}
      >
        <div className="eyebrow">The Problem</div>
        <h2 className="section-title">
          Running a mobile shop
          <br />
          <em>shouldn&apos;t mean three jobs at once</em>
        </h2>
        <p className="section-sub">
          Notebooks, WhatsApp chats and spreadsheets pull you in every
          direction. Here&apos;s exactly what changes the day you switch.
        </p>
      </div>

      <div className="pvs reveal">
        <div className="pvs-col">
          <span className="pvs-head old">The Old Way</span>
          {OLD_WAY.map((o) => (
            <div className="pvs-card old" key={o.text}>
              <span
                className="pvs-card-ic"
                style={{ ["--c" as string]: o.color } as React.CSSProperties}
              >
                <Glyph>{o.icon}</Glyph>
              </span>
              <p>{o.text}</p>
              <span className="pvs-mark x" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </span>
            </div>
          ))}
        </div>

        <div className="pvs-vs" aria-hidden="true">
          <span>VS</span>
        </div>

        <div className="pvs-col">
          <span className="pvs-head new">With Cell Desk</span>
          {NEW_WAY.map((n) => (
            <div
              className="pvs-card new"
              key={n.lead}
              style={{ ["--c" as string]: n.color } as React.CSSProperties}
            >
              <span className="pvs-card-ic">
                <Glyph>{n.icon}</Glyph>
              </span>
              <p>
                <strong>{n.lead}</strong>
                {n.rest}
              </p>
              <span className="pvs-mark check" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pvs-benefits reveal">
        {BENEFITS.map((b) => (
          <div
            className="pvs-benefit"
            key={b.title}
            style={{ ["--c" as string]: b.color } as React.CSSProperties}
          >
            <span className="pvs-benefit-ic">
              <Glyph>{b.icon}</Glyph>
            </span>
            <div>
              <span className="pvs-benefit-title">{b.title}</span>
              <span className="pvs-benefit-desc">{b.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
