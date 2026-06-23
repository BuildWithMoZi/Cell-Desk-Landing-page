const beforeItems = [
  "Manual stock counts in a notebook — always a day out of date",
  "Customer history scattered across WhatsApp and paper slips",
  "Handwritten invoices that get lost, smudged or misread",
  "No single view across your branches",
];

const afterItems = [
  "Real-time inventory that updates the second a sale happens",
  "One customer database with full purchase history",
  "Professional, printable invoices in one tap",
  "One dashboard for every shop you run",
];

export default function ProblemSolution() {
  return (
    <section id="pvs" className="section">
      <div
        className="center"
        style={{ maxWidth: "var(--maxw)", margin: "0 auto 3rem" }}
      >
        <div className="eyebrow">The Problem</div>
        <h2 className="section-title">
          Running a mobile shop
          <br />
          <em>shouldn&apos;t mean three jobs at once</em>
        </h2>
      </div>
      <div className="pvs-card reveal">
        <div className="pvs-arrow">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12h16M14 6l6 6-6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="pvs-grid">
          <div className="pvs-col before">
            <div className="pvs-col-head">Without Cell Desk</div>
            {beforeItems.map((text) => (
              <div className="pvs-item" key={text}>
                <div className="pvs-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round">
                    <path d="M5 5l14 14M19 5L5 19" />
                  </svg>
                </div>
                <p className="pvs-text">{text}</p>
              </div>
            ))}
          </div>
          <div className="pvs-col after">
            <div className="pvs-col-head">With Cell Desk</div>
            {afterItems.map((text) => (
              <div className="pvs-item" key={text}>
                <div className="pvs-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 12.5l5 5L20 6.5" />
                  </svg>
                </div>
                <p className="pvs-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
