const revenueBars: { height: string; peak?: boolean }[] = [
  { height: "45%" },
  { height: "60%" },
  { height: "40%" },
  { height: "75%" },
  { height: "55%" },
  { height: "85%" },
  { height: "70%" },
  { height: "95%", peak: true },
  { height: "80%" },
  { height: "100%", peak: true },
  { height: "88%" },
  { height: "92%" },
];

export default function Analytics() {
  return (
    <section id="analytics" className="section">
      <div
        className="center"
        style={{ maxWidth: "var(--maxw)", margin: "0 auto 3rem" }}
      >
        <div className="eyebrow">Insights</div>
        <h2 className="section-title">
          Know your numbers
          <br />
          <em>without digging for them</em>
        </h2>
      </div>
      <div className="analytics-grid reveal">
        <div className="analytics-card">
          <div className="a-title">Monthly Revenue</div>
          <div className="a-caption">
            Updates automatically every time a sale is logged.
          </div>
          <div className="a-chart">
            {revenueBars.map((bar, i) => (
              <div
                key={i}
                className={bar.peak ? "a-bar peak" : "a-bar"}
                style={{ height: bar.height }}
              />
            ))}
          </div>
          <div className="a-labels">
            <span className="a-label">JAN</span>
            <span className="a-label">APR</span>
            <span className="a-label">JUL</span>
            <span className="a-label">OCT</span>
            <span className="a-label">DEC</span>
          </div>
          <div className="kpi-row">
            <div className="kpi">
              <div className="kpi-v">₹8.4L</div>
              <div className="kpi-l">This Month</div>
              <div className="kpi-delta">↑ 18%</div>
            </div>
            <div className="kpi">
              <div className="kpi-v">1,240</div>
              <div className="kpi-l">Devices Sold</div>
              <div className="kpi-delta">↑ 12%</div>
            </div>
          </div>
        </div>
        <div className="analytics-card">
          <div className="a-title">Stock by Category</div>
          <div className="a-caption">
            A live breakdown across every connected branch.
          </div>
          <div className="donut-wrap">
            <svg
              width="130"
              height="130"
              viewBox="0 0 130 130"
              style={{ flexShrink: 0 }}
            >
              <circle
                cx="65"
                cy="65"
                r="50"
                fill="none"
                stroke="var(--surface-alt)"
                strokeWidth="20"
              />
              <circle
                cx="65"
                cy="65"
                r="50"
                fill="none"
                stroke="var(--ink)"
                strokeWidth="20"
                strokeDasharray="125 189"
                strokeLinecap="round"
                transform="rotate(-90 65 65)"
              />
              <circle
                cx="65"
                cy="65"
                r="50"
                fill="none"
                stroke="var(--accent-deep)"
                strokeWidth="20"
                strokeDasharray="75 239"
                strokeDashoffset="-125"
                strokeLinecap="round"
                transform="rotate(-90 65 65)"
              />
              <circle
                cx="65"
                cy="65"
                r="50"
                fill="none"
                stroke="var(--border-strong)"
                strokeWidth="20"
                strokeDasharray="50 265"
                strokeDashoffset="-200"
                strokeLinecap="round"
                transform="rotate(-90 65 65)"
              />
              <text
                x="65"
                y="70"
                textAnchor="middle"
                fill="var(--ink)"
                fontSize="14"
                fontFamily="JetBrains Mono"
                fontWeight="700"
              >
                312
              </text>
            </svg>
            <div className="donut-legend">
              <div className="legend-item">
                <div className="legend-dot" style={{ background: "var(--ink)" }} />
                iPhones — 40%
              </div>
              <div className="legend-item">
                <div
                  className="legend-dot"
                  style={{ background: "var(--accent-deep)" }}
                />
                Android — 24%
              </div>
              <div className="legend-item">
                <div
                  className="legend-dot"
                  style={{ background: "var(--border-strong)" }}
                />
                Accessories — 16%
              </div>
              <div className="legend-item">
                <div
                  className="legend-dot"
                  style={{ background: "var(--surface-alt)" }}
                />
                Others — 20%
              </div>
            </div>
          </div>
          <div className="kpi-row">
            <div className="kpi">
              <div className="kpi-v">312</div>
              <div className="kpi-l">Total Units</div>
            </div>
            <div className="kpi">
              <div className="kpi-v">18</div>
              <div className="kpi-l">Low Stock</div>
              <div className="kpi-delta" style={{ color: "var(--danger)" }}>
                ⚠ Needs reorder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
