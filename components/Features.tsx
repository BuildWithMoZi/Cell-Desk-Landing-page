import type { ReactNode } from "react";

type Feature = {
  icon: ReactNode;
  title: string;
  desc: string;
  img: string;
};

const features: Feature[] = [
  {
    icon: (
      <path d='M3 7.5L12 3l9 4.5M3 7.5v9L12 21l9-4.5v-9M3 7.5L12 12m0 0l9-4.5M12 12v9' />
    ),
    title: "Inventory Management",
    desc: "Track every unit by model and IMEI. Low-stock alerts fire before you actually run out.",
    img: "https://i.pinimg.com/736x/7f/16/35/7f1635d49952f8a1ec44a0aed9b0100b.jpg",
  },
  {
    icon: (
      <>
        <circle cx='10.5' cy='10.5' r='6.5' />
        <path d='M20 20l-4.7-4.7' />
      </>
    ),
    title: "600+ Device Catalog",
    desc: "Type three letters, find any device. Specs and pricing autofill instantly.",
    img: "https://i.pinimg.com/originals/f5/c6/c2/f5c6c266494a301b79cb9fd6c10326dc.gif",
  },
  {
    icon: <path d='M3 21h18M6 21V10m6 11V4m6 17v-7' />,
    title: "Sales Tracking",
    desc: "Every sale logged automatically. Stock deducts itself — zero manual updates.",
    img: "https://i.pinimg.com/1200x/c5/a6/8b/c5a68b38b6f0d29a85c5160803ed68ca.jpg",
  },
  {
    icon: (
      <>
        <path d='M6 2.5h9l3 3V21a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 21V3a.5.5 0 0 1 .5-.5z' />
        <path d='M9 9h6M9 13h6M9 17h3' />
      </>
    ),
    title: "Invoice Generator",
    desc: "Print-ready invoices in one tap, branded with your shop's name and logo.",
    img: "https://i.pinimg.com/736x/2f/0f/03/2f0f03ae90c6b518ba93e1aee45ab445.jpg",
  },
  {
    icon: (
      <>
        <circle cx='9' cy='8' r='3.2' />
        <path d='M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6' />
        <circle cx='17.5' cy='9' r='2.4' />
        <path d='M15.8 14.2c2.6.4 4.7 2.6 4.7 5.3' />
      </>
    ),
    title: "Customer Management",
    desc: "A full purchase history for every customer — handy for service follow-ups.",
    img: "https://i.pinimg.com/1200x/c6/32/bb/c632bb705f0128eb7584ac458745b645.jpg",
  },
  {
    icon: (
      <>
        <rect x='3' y='5' width='18' height='16' rx='2' />
        <path d='M3 10h18M8 3v4M16 3v4' />
        <path d='M8.5 15l2 2 4-4' />
      </>
    ),
    title: "Subscription System",
    desc: "Manage shop plans, renewals and billing for every branch from one place.",
    img: "https://i.pinimg.com/736x/19/6a/fa/196afa3175d0f533b4b4628cbdf4fe1f.jpg",
  },
];

export default function Features() {
  return (
    <section id='features' className='section'>
      <div className='sec-orb sec-orb-right-lg' aria-hidden='true' />
      <div className='sec-orb sec-orb-tl-sm' aria-hidden='true' />
      <div
        className='center'
        style={{ maxWidth: "var(--maxw)", margin: "0 auto 3rem" }}>
        <div className='eyebrow'>Features</div>
        <h2 className='section-title'>
          Everything your shop needs
          <br />
          <em>nothing it doesn&apos;t</em>
        </h2>
      </div>
      <div className='feat-grid reveal'>
        {features.map((feature) => (
          <article className='feat-card' key={feature.title}>
            <div className='feat-media'>
              <img src={feature.img} alt={feature.title} loading='lazy' />
              <span className='feat-icon'>
                <svg viewBox='0 0 24 24'>{feature.icon}</svg>
              </span>
            </div>
            <div className='feat-body'>
              <h3 className='feat-title'>{feature.title}</h3>
              <p className='feat-desc'>{feature.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
