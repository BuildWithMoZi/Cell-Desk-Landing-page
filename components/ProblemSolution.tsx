const PAIRS = [
  {
    pain: "Manual stock counts in a notebook — always a day out of date",
    gain: "Real-time inventory that updates the second a sale happens",
  },
  {
    pain: "Customer history scattered across WhatsApp and paper slips",
    gain: "One customer database with full purchase history",
  },
  {
    pain: "Handwritten invoices that get lost, smudged or misread",
    gain: "Professional, printable invoices in one tap",
  },
  {
    pain: "No single view across your branches",
    gain: "One dashboard for every shop you run",
  },
];

export default function ProblemSolution() {
  return (
    <section id="pvs" className="section">
      <div className="sec-orb sec-orb-left-lg" aria-hidden="true" />
      <div
        className="center"
        style={{ maxWidth: "var(--maxw)", margin: "0 auto 2.4rem" }}
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

      <div className="pvs2">
        <div className="pvs2-heads" aria-hidden="true">
          <span className="pvs2-head pain">The old way</span>
          <span />
          <span className="pvs2-head gain">With Cell Desk</span>
        </div>

        {PAIRS.map((p, i) => (
          <div
            className="pvs2-row reveal"
            key={p.gain}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="pvs2-side pvs2-pain">
              <span className="pvs2-ic pvs2-ic-x" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round">
                  <path d="M5 5l14 14M19 5L5 19" />
                </svg>
              </span>
              <p>{p.pain}</p>
            </div>

            <span className="pvs2-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12h16M14 6l6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <div className="pvs2-side pvs2-gain">
              <span className="pvs2-ic pvs2-ic-check" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
              </span>
              <p>{p.gain}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
