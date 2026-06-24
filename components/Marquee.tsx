const SOLUTIONS = [
  "Every sale auto-recorded — no missed entries",
  "Zero calculation errors",
  "Stock updates in real time",
  "Safe cloud backup — never lose data",
  "Low-stock alerts before you run out",
  "Smart purchase suggestions",
  "No more manual stock counting",
  "Always-accurate live inventory",
  "All suppliers & records in one place",
  "Instant invoices & sales reports",
];

export default function Marquee() {
  const items = [...SOLUTIONS, ...SOLUTIONS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((name, i) => (
          <span className="marquee-item" key={i}>
            {name}
            <span className="marquee-sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
