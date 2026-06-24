import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteUrl, pageUrl } from "@/lib/basePath";

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
    "mobile shop management",
    "mobile shop inventory software",
    "mobile retailer billing app",
    "cell phone shop POS",
    "IMEI inventory tracking",
    "sales and invoice management",
    "Cell Desk",
    "CraftDesk",
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

const jsonLd = {
  "@context": "https://schema.org",
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
  publisher: {
    "@type": "Organization",
    name: "CraftDesk",
    url: "https://craftdesk.co.in",
    email: "craftdesk.tech@gmail.com",
  },
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
