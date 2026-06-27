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
  {
    text: "Daily sales and profit reports land on my phone every evening. I finally know my numbers without touching a calculator.",
    initials: "SN",
    name: "Sana Naaz",
    role: "Owner, Smart Gadgets · Hyderabad",
  },
  {
    text: "IMEI tracking made warranty claims painless. One search pulls up the full purchase and service history instantly.",
    initials: "DV",
    name: "Deepak Verma",
    role: "Proprietor, Verma Telecom · Lucknow",
  },
  {
    text: "Switching took an afternoon. Within a week my whole team was billing faster and the paperwork just disappeared.",
    initials: "FK",
    name: "Faisal Khan",
    role: "Owner, City Mobiles · Jaipur",
  },
];

const LOOP = [...testimonials, ...testimonials];

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

      <div className="testi-marquee reveal">
        <div className="testi-track">
          {LOOP.map((t, i) => (
            <div className="testi-card" key={`${t.name}-${i}`}>
              <div className="testi-card-top">
                <span className="quote-mark">&ldquo;</span>
                <span className="stars">★★★★★</span>
              </div>
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
      </div>
    </section>
  );
}
