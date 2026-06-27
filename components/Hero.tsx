"use client";

import { asset } from "@/lib/basePath";

const FEATURES = [
  {
    label: "Inventory Management",
    icon: (
      <path d='M3 7l9-4 9 4-9 4-9-4zm0 0v10l9 4 9-4V7M12 11v10' />
    ),
  },
  {
    label: "Sales & Purchase Tracking",
    icon: (
      <path d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 4.5A1 1 0 0 0 5.6 19H17m-9 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
    ),
  },
  {
    label: "Reports & Analytics",
    icon: <path d='M4 20V10m6 10V4m6 16v-7m4 7H2' />,
  },
  {
    label: "Customer Management",
    icon: (
      <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11' />
    ),
  },
  {
    label: "Secure & Reliable",
    icon: (
      <path d='M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3zm-2 9l2 2 4-4' />
    ),
  },
];

const TRUST = [
  {
    label: "100% Secure",
    icon: <path d='M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z' />,
  },
  {
    label: "Cloud Backup",
    icon: (
      <path d='M18 10a4 4 0 0 0-7.7-1.5A4.5 4.5 0 1 0 7.5 18H18a4 4 0 0 0 0-8z' />
    ),
  },
  {
    label: "24/7 Support",
    icon: (
      <path d='M3 12a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1v-7h3M3 12v5a2 2 0 0 0 2 2h1v-7H3' />
    ),
  },
];

const STATS = [
  {
    title: "1000+",
    sub: "Mobile Shops",
    badge: "Trusted by",
    icon: (
      <path d='M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3zm-2 9l2 2 4-4' />
    ),
  },
  {
    title: "Reliable",
    sub: "Always available when you need it",
    icon: <path d='M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z' />,
  },
  {
    title: "Secure",
    sub: "Your data is safe with us",
    icon: (
      <path d='M5 11V8a7 7 0 0 1 14 0v3M5 11h14v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9z' />
    ),
  },
  {
    title: "Fast",
    sub: "Optimized for speed and performance",
    icon: <path d='M13 2L3 14h7l-1 8 10-12h-7l1-8z' />,
  },
  {
    title: "Support",
    sub: "Our team is here to help you",
    icon: (
      <path d='M3 12a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1v-7h3M3 12v5a2 2 0 0 0 2 2h1v-7H3' />
    ),
  },
];

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'>
      {children}
    </svg>
  );
}

export default function Hero() {
  return (
    <section id='hero'>
      <div className='hero-panel'>
        <div className='hero-panel-grid' />
        <div className='hero-panel-glow' />
        <div className='hero-orb' aria-hidden='true' />
        <div className='hero-orb hero-orb-left' aria-hidden='true' />
        <div className='hero-panel-inner'>
          <div className='hero-left'>
            <span className='hero-eyebrow'>
              <svg
                viewBox='0 0 24 24'
                fill='currentColor'
                width='14'
                height='14'
                aria-hidden='true'>
                <path d='M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17l-6 3.4 1.4-6.8L2.3 9l6.9-.7L12 2z' />
              </svg>
              Smart. Simple. Secure.
            </span>
            <h1 className='hero-title'>
              Cell <span className='hero-hl'>Desk</span>
              <br />
              Mobile Inventory Application
            </h1>
            <p className='hero-sub'>
              The best solution for any mobile shop to manage stock, sales, and
              customers with ease.
            </p>

            <ul className='hero-feature-row'>
              {FEATURES.map((f) => (
                <li className='hero-feature' key={f.label}>
                  <span className='hero-feature-ic'>
                    <Icon>{f.icon}</Icon>
                  </span>
                  <span className='hero-feature-label'>{f.label}</span>
                </li>
              ))}
            </ul>

            <div className='hero-cta'>
              <a href='#pricing' className='btn btn-primary'>
                Start Free Trial
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  width='16'
                  height='16'
                  aria-hidden='true'>
                  <path d='M5 12h14M13 6l6 6-6 6' />
                </svg>
              </a>
              <a href='#features' className='btn btn-ghost'>
                View Features
                <svg
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  width='14'
                  height='14'
                  aria-hidden='true'>
                  <path d='M8 5v14l11-7z' />
                </svg>
              </a>
            </div>

            <ul className='hero-trust'>
              {TRUST.map((t) => (
                <li key={t.label}>
                  <Icon>{t.icon}</Icon>
                  {t.label}
                </li>
              ))}
            </ul>
          </div>

          <div className='hero-visual'>
            <img
              src={asset("/hero image.png")}
              alt='Cell Desk dashboard showing inventory, sales and analytics'
              draggable={false}
            />
          </div>
        </div>

        <ul className='hero-statsbar'>
          {STATS.map((s) => (
            <li className='hero-stat' key={s.title}>
              <span className='hero-stat-ic'>
                <Icon>{s.icon}</Icon>
              </span>
              <div className='hero-stat-text'>
                {s.badge && <span className='hero-stat-badge'>{s.badge}</span>}
                <span className='hero-stat-title'>{s.title}</span>
                <span className='hero-stat-sub'>{s.sub}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
