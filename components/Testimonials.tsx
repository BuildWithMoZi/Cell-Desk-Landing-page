type Testimonial = {
  text: string;
  initials: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    text: "Cell Desk cut our invoice time from 10 minutes to 30 seconds. The stock alerts alone saved us from two stockouts this month.",
    initials: "AM",
    name: "Arjun Mehta",
    role: "Owner, Mehta Mobiles · Mumbai",
  },
  {
    text: "Managing 3 branches used to mean 3 separate headaches. Now I see everything on one screen — a real game-changer.",
    initials: "PS",
    name: "Priya Sharma",
    role: "Director, TechZone Stores · Delhi",
  },
  {
    text: "The 600+ device catalog is brilliant. I search, it appears, I sell. My staff learned the whole system in under an hour.",
    initials: "RK",
    name: "Ravi Kulkarni",
    role: "Founder, QuickCell · Pune",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="sec-orb sec-orb-br-sm" aria-hidden="true" />
      <div
        className="center"
        style={{ maxWidth: "var(--maxw)", margin: "0 auto 3rem" }}
      >
        <div className="eyebrow">Trusted By Shop Owners</div>
        <h2 className="section-title">
          Shops that switched,
          <br />
          <em>never went back</em>
        </h2>
      </div>
      <div className="testi-grid reveal">
        {testimonials.map((t) => (
          <div className="testi-card" key={t.name}>
            <div className="quote-mark">&ldquo;</div>
            <div className="stars">★★★★★</div>
            <p className="testi-text">{t.text}</p>
            <div className="testi-author">
              <div className="testi-avatar">{t.initials}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
