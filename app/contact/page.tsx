"use client";

import { useState } from "react";
import Link from "next/link";
import SiteTopbar from "@/components/SiteTopbar";
import Footer from "@/components/Footer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_RE = /^[+]?[\d][\d\s-]{6,15}$/;

// WhatsApp business number in international format (country code + number, no +).
const WHATSAPP_NUMBER = "919403429923";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!MOBILE_RE.test(mobile.trim())) {
      setError("Please enter a valid mobile number.");
      return;
    }
    setError("");

    const message =
      `Hi Cell Desk, I want to get started with my mobile shop.\n\n` +
      `Email: ${email.trim()}\n` +
      `Mobile: ${mobile.trim()}`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setSent(true);
  };

  return (
    <>
      <SiteTopbar />
      <main className="contact-page">
        <div className="contact-card">
          <div className="contact-intro">
            <span className="eyebrow">Get in touch</span>
            <h1 className="contact-title">
              Let&apos;s set up <em>your shop</em>
            </h1>
            <p className="contact-sub">
              Drop your email and mobile number — the Cell Desk team will reach
              out to help you log in and get started.
            </p>

            <ul className="contact-points">
              <li>
                <span className="contact-point-dot" />
                Personal onboarding for your shop
              </li>
              <li>
                <span className="contact-point-dot" />
                Help importing products &amp; inventory
              </li>
              <li>
                <span className="contact-point-dot" />
                Support over email and phone
              </li>
            </ul>

            <div className="contact-direct">
              <span>Prefer email?</span>
              <a href="mailto:craftdesk.tech@gmail.com">
                craftdesk.tech@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="contact-success" role="status">
                <div className="contact-success-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h2>Opening WhatsApp…</h2>
                <p>
                  We&apos;ve opened a WhatsApp chat with your details. Just hit
                  send and our team will help <strong>{email}</strong> /{" "}
                  <strong>{mobile}</strong> get started right away.
                </p>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={() => {
                    setSent(false);
                    setEmail("");
                    setMobile("");
                  }}
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h2 className="contact-form-title">Login &amp; get started</h2>

                <label className="field">
                  <span className="field-label">Email address</span>
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@shop.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>

                <label className="field">
                  <span className="field-label">Mobile number</span>
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </label>

                {error && <p className="field-error">{error}</p>}

                <button type="submit" className="btn btn-ink btn-full">
                  Continue →
                </button>

                <p className="contact-form-note">
                  By continuing you agree to our{" "}
                  <Link href="/terms">Terms</Link> and{" "}
                  <Link href="/privacy">Privacy Policy</Link>.
                </p>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
