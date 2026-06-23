"use client";

import { useState } from "react";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "How many shops can I manage?",
    a: "Starter supports 1 shop. Growth supports up to 3 locations. Enterprise gives you unlimited shops with a unified super-admin panel to control them all.",
  },
  {
    q: "Can I print invoices?",
    a: "Yes. Every invoice generates as a print-ready PDF with your shop name, item details and totals. You can also share it directly over WhatsApp in one tap.",
  },
  {
    q: "Does stock update automatically on sales?",
    a: "Yes — every recorded sale deducts inventory instantly. If any item drops below your set threshold, a low-stock alert fires right away.",
  },
  {
    q: "Can I renew subscriptions from the admin panel?",
    a: "Yes. The Super Admin panel on the Enterprise plan lets you renew, pause or block any shop's subscription, and track revenue across every branch in one view.",
  },
  {
    q: "Does Cell Desk work without internet?",
    a: "Core features like logging sales and adding inventory work offline. Data syncs automatically the moment your connection returns — no manual action needed.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section">
      <div
        className="center"
        style={{ maxWidth: "var(--maxw)", margin: "0 auto 3rem" }}
      >
        <div className="eyebrow">FAQ</div>
        <h2 className="section-title">Questions, answered</h2>
      </div>
      <div className="faq-list reveal">
        {faqs.map((faq, i) => {
          const open = openIndex === i;
          return (
            <div className={open ? "faq-item open" : "faq-item"} key={faq.q}>
              <div
                className="faq-q"
                onClick={() => setOpenIndex(open ? null : i)}
              >
                {faq.q}{" "}
                <span className="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </div>
              <div
                className="faq-a"
                style={{ maxHeight: open ? "240px" : "0px" }}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
