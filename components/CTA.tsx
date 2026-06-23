export default function CTA() {
  return (
    <section id="cta">
      <div className="cta-ring r1" />
      <div className="cta-ring r2" />
      <div
        className="eyebrow center"
        style={{ justifyContent: "center", color: "rgba(19,18,16,0.6)" }}
      >
        Get Started
      </div>
      <h2 className="cta-title">
        Stop running your shop
        <br />
        from memory.
      </h2>
      <p className="cta-sub">
        Join 500+ shop owners already running on Cell Desk. No card required,
        cancel anytime.
      </p>
      <div className="cta-btns">
        <button className="btn btn-ink">Start Free Trial →</button>
        <button className="btn btn-ghost">Book a Demo</button>
      </div>
    </section>
  );
}
