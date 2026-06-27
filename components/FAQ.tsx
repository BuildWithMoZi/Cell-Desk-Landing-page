"use client";

import { useState } from "react";
import { faqs } from "@/lib/faqs";

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
