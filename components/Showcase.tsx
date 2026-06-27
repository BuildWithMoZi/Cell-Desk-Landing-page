"use client";

import { useState } from "react";
import { asset } from "@/lib/basePath";

type Screen = {
  src: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
};

const SCREENS: Screen[] = [
  {
    src: "/product-img/signup-signin-screen.png",
    label: "Sign In & Onboarding",
    desc: "Secure login and quick onboarding for new users.",
    icon: (
      <path d='M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3' />
    ),
  },
  {
    src: "/product-img/create-acc-screen.png",
    label: "Create Account",
    desc: "Create your Cell Desk account in a few simple steps.",
    icon: (
      <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm10-3v6m3-3h-6' />
    ),
  },
  {
    src: "/product-img/home-screen.png",
    label: "Dashboard",
    desc: "Get a real-time overview of your business performance.",
    icon: <path d='M3 3h8v8H3zM13 3h8v5h-8zM13 12h8v9h-8zM3 15h8v6H3z' />,
  },
  {
    src: "/product-img/home-screen1.png",
    label: "Home Overview",
    desc: "Snapshot of key metrics and important updates.",
    icon: <path d='M3 12l9-9 9 9M5 10v10h14V10' />,
  },
  {
    src: "/product-img/brand.png",
    label: "Brand",
    desc: "Manage and browse your full Brands list.",
    icon: (
      <path d='M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.3 7L12 12l8.7-5M12 22V12' />
    ),
  },
  {
    src: "/product-img/products-screen-2.png",
    label: "Product Catalog",
    desc: "Browse your complete product catalog with details.",
    icon: (
      <path d='M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z' />
    ),
  },
  {
    src: "/product-img/Brands-screen.png",
    label: "Brands",
    desc: "Organize products by brand for faster lookups.",
    icon: (
      <path d='M20.6 13.4L13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 3 12V4h8a2 2 0 0 1 1.4.6l8.2 8.2a2 2 0 0 1 0 2.6zM7 7h.01' />
    ),
  },
  {
    src: "/product-img/add-brand-screen.png",
    label: "Add Brand",
    desc: "Add and manage brands in just a few taps.",
    icon: <path d='M12 5v14M5 12h14' />,
  },
  {
    src: "/product-img/sales-screen.png",
    label: "Sales History",
    desc: "Track and manage all your sales in one place.",
    icon: <path d='M3 3v18h18M7 14l4-4 4 4 5-6' />,
  },
  {
    src: "/product-img/customer-screen.png",
    label: "Customers",
    desc: "View and manage your customer network.",
    icon: (
      <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11' />
    ),
  },
];

const INITIAL_COUNT = 6;

export default function Showcase() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? SCREENS : SCREENS.slice(0, INITIAL_COUNT);
  const hasMore = SCREENS.length > INITIAL_COUNT;

  return (
    <section id='showcase' className='section'>
      <div
        className='center'
        style={{ maxWidth: "var(--maxw)", margin: "0 auto 3rem" }}>
        <div className='eyebrow'>App Gallery</div>
        <h2 className='section-title'>
          Explore Cell Desk <em>in action</em>
        </h2>
        <p className='section-sub'>
          Browse real app screens that power your inventory, sales, and customer
          management — all in one place.
        </p>
      </div>

      <div className='gallery-grid reveal'>
        {visible.map((screen) => (
          <article className='gallery-card' key={screen.src}>
            <div className='gallery-card-body'>
              <span className='gallery-card-ic'>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  aria-hidden='true'>
                  {screen.icon}
                </svg>
              </span>
              <h3 className='gallery-card-title'>{screen.label}</h3>
              <p className='gallery-card-desc'>{screen.desc}</p>
            </div>
            <div className='gallery-card-shot'>
              <img src={asset(screen.src)} alt={screen.label} loading='lazy' />
            </div>
          </article>
        ))}
      </div>

      {hasMore && (
        <div className='gallery-more'>
          <button
            className='btn btn-ghost'
            onClick={() => setShowAll((v) => !v)}>
            {showAll ? "Show Less" : "View All Screens"}
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
              <path
                d={
                  showAll ? "M19 12H5M11 18l-6-6 6-6" : "M5 12h14M13 6l6 6-6 6"
                }
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
