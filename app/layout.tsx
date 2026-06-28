import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteUrl, pageUrl } from "@/lib/basePath";
import { faqs } from "@/lib/faqs";

const siteName = "Cell Desk";
const defaultTitle = "Cell Desk — Mobile Shop Inventory & Sales Management";
const defaultDescription =
  "Cell Desk keeps inventory, sales, customers and invoices in sync for mobile phone retailers — so closing time is never a guessing game.";
const ogImage = pageUrl("/hero-imges/1.png");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s — Cell Desk",
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    // Core product
    "Cell Desk",
    "CellDesk",
    "CraftDesk",
    "Cell Desk app",
    // Mobile shop management
    "mobile shop management software",
    "mobile shop management app",
    "mobile shop software",
    "mobile store management software",
    "mobile shop software India",
    "best mobile shop software",
    "free mobile shop software",
    "cell phone shop software",
    "smartphone shop software",
    "mobile dealer software",
    "mobile retailer software",
    // Inventory & stock
    "mobile shop inventory software",
    "mobile phone inventory management",
    "mobile shop stock management",
    "mobile inventory tracking app",
    "IMEI inventory tracking",
    "IMEI tracking software",
    "mobile shop stock register app",
    // Billing & invoicing
    "mobile shop billing software",
    "mobile retailer billing app",
    "mobile shop GST billing software",
    "mobile shop invoice software",
    "mobile shop barcode billing",
    "cell phone shop POS",
    "smartphone shop POS",
    "mobile shop point of sale",
    "mobile recharge shop software",
    // Sales, customers & accounts
    "mobile shop sales management",
    "mobile shop daily sales report",
    "mobile shop customer management",
    "mobile shop CRM",
    "mobile shop accounting software",
    "mobile shop khata app",
    "mobile shop ledger app",
    "mobile shop udhaar khata",
    // Repair & accessories & used phones
    "mobile repair shop software",
    "mobile accessories shop software",
    "second hand mobile shop software",
    "used mobile shop billing software",
    // Generic intent
    "sales and invoice management",
    "phone shop inventory tracker",
    "cell phone retailer management software",
    "mobile shop management system",
  ],
  authors: [{ name: "CraftDesk", url: "https://craftdesk.co.in" }],
  creator: "CraftDesk",
  publisher: "CraftDesk",
  category: "business",
  alternates: {
    canonical: pageUrl("/"),
  },
  openGraph: {
    type: "website",
    url: pageUrl("/"),
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    locale: "en_US",
    images: [
      {
        url: ogImage,
        alt: "Cell Desk — mobile shop management dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4F6FA",
};

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "CraftDesk",
      url: "https://craftdesk.co.in",
      email: "craftdesk.tech@gmail.com",
      logo: {
        "@type": "ImageObject",
        url: pageUrl("/logo-img.png"),
      },
      brand: {
        "@type": "Brand",
        name: siteName,
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: pageUrl("/"),
      name: siteName,
      description: defaultDescription,
      inLanguage: "en",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "SoftwareApplication",
      name: siteName,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android",
      description: defaultDescription,
      url: pageUrl("/"),
      image: ogImage,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
      publisher: { "@id": organizationId },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=Sora:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="page-bg" aria-hidden="true">
          <span className="blob blob-1" />
          <span className="blob blob-2" />
          <span className="blob blob-3" />
          <span className="blob blob-4" />
          <div className="grain" />
        </div>
        {children}
      </body>
    </html>
  );
}
