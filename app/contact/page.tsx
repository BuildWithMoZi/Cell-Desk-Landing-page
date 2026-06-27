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

                <button type="submit" className="btn btn-whatsapp btn-full">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  >
                    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 2.5c-5.28 0-9.57 4.29-9.57 9.57 0 1.69.44 3.34 1.28 4.79L2.5 21.5l4.77-1.25c1.4.76 2.97 1.17 4.57 1.17 5.28 0 9.57-4.29 9.57-9.57S17.32 2.5 12.04 2.5zm0 17.5c-1.45 0-2.87-.39-4.11-1.13l-.29-.17-2.83.74.76-2.76-.19-.3a7.93 7.93 0 0 1-1.22-4.24c0-4.39 3.57-7.96 7.96-7.96 2.13 0 4.13.83 5.63 2.34a7.9 7.9 0 0 1 2.33 5.63c0 4.39-3.57 7.96-7.96 7.96z" />
                  </svg>
                  Send request on WhatsApp
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
