import type { Metadata } from "next";
import { pageUrl } from "@/lib/basePath";

const title = "Contact & Get Started";
const description =
  "Get in touch with the Cell Desk team. Share your email and mobile number and we'll help you log in and set up your mobile shop.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: pageUrl("/contact/"),
  },
  openGraph: {
    type: "website",
    url: pageUrl("/contact/"),
    siteName: "Cell Desk",
    title: `${title} — Cell Desk`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} — Cell Desk`,
    description,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
