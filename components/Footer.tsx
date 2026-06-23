import Link from "next/link";

const productLinks = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how" },
  { label: "App Gallery", href: "/#showcase" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

const companyLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <img
              className="footer-logo-img"
              src="/logo-img.png"
              alt="Cell Desk logo"
              width={32}
              height={32}
            />
            Cell Desk
          </Link>
          <p className="footer-tagline">
            The platform built for mobile phone shop owners who want to run a
            real business.
          </p>
        </div>

        <div>
          <div className="footer-col-title">Product</div>
          <ul className="footer-links">
            {productLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">
          © 2026 Cell Desk by CraftDesk. Built for mobile shop owners.
        </span>
        <a className="footer-copy" href="mailto:craftdesk.tech@gmail.com">
          craftdesk.tech@gmail.com
        </a>
      </div>
    </footer>
  );
}
