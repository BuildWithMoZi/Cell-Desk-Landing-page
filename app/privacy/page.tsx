import type { Metadata } from "next";
import SiteTopbar from "@/components/SiteTopbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Cell Desk",
  description:
    "How CraftDesk collects, uses, stores, and protects information in the Cell Desk app.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteTopbar />
      <main className="legal-page">
        <div className="legal-card">
          <span className="eyebrow">Legal</span>
          <h1 className="legal-title">Privacy Policy — Cell Desk</h1>

          <div className="legal-meta">
            <span>
              <strong>Effective date:</strong> 20 June 2026
            </span>
            <span>
              <strong>Last updated:</strong> 20 June 2026
            </span>
          </div>

          <ul className="legal-facts">
            <li>
              <strong>Community / Operator:</strong> CraftDesk
            </li>
            <li>
              <strong>App name:</strong> Cell Desk
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a href="https://craftdesk.co.in" target="_blank" rel="noreferrer">
                craftdesk.co.in
              </a>
            </li>
            <li>
              <strong>Support email:</strong>{" "}
              <a href="mailto:craftdesk.tech@gmail.com">
                craftdesk.tech@gmail.com
              </a>
            </li>
          </ul>

          <div className="legal-body">
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy explains how <strong>CraftDesk</strong> (“we”,
              “us”, “our”) collects, uses, stores, and protects information when
              you use the <strong>Cell Desk</strong> mobile application (“App”).
            </p>
            <p>
              Cell Desk is a shop inventory and sales management app for mobile
              phone retailers and related businesses. By creating an account or
              using the App, you agree to this Privacy Policy. If you do not
              agree, please do not use the App.
            </p>

            <h2>2. Who This Policy Applies To</h2>
            <p>This policy applies to:</p>
            <ul>
              <li>
                Shop owners and authorized users who register and log in to Cell
                Desk
              </li>
              <li>
                Data entered about their business, products, customers, and
                sales
              </li>
            </ul>
            <p>
              This App is intended for <strong>business use by adults</strong>.
              It is not directed at children under 13 (or the minimum age
              required in your country).
            </p>

            <h2>3. Information We Collect</h2>
            <h3>3.1 Account &amp; shop information</h3>
            <p>When you register or use the App, we may collect:</p>
            <ul>
              <li>Shop name, owner name, phone number, email address</li>
              <li>Business address and city</li>
              <li>
                Login credentials (passwords are stored securely on our servers
                using industry-standard hashing; we do not store plain-text
                passwords)
              </li>
              <li>Subscription and shop status information</li>
            </ul>

            <h3>3.2 Business &amp; inventory data</h3>
            <p>
              To provide inventory and sales features, the App processes data
              you enter or generate, including:
            </p>
            <ul>
              <li>
                Products (name, model, brand, prices, stock, IMEI, photos,
                descriptions)
              </li>
              <li>Customers (name, phone, address)</li>
              <li>Sales, invoices, and payment method</li>
              <li>Brands and shop profile details</li>
            </ul>
            <p>
              This data is stored on our backend servers and linked to your shop
              account.
            </p>

            <h3>3.3 Photos &amp; device permissions</h3>
            <p>The App may request permission to:</p>
            <ul>
              <li>
                <strong>Camera</strong> — to capture product photos
              </li>
              <li>
                <strong>Photo library / gallery</strong> — to select and upload
                product images
              </li>
            </ul>
            <p>
              Images you upload are sent to our servers (or designated cloud
              storage) for product listings and invoices. We only access photos
              you choose to upload.
            </p>

            <h3>3.4 Automatically collected information</h3>
            <p>We and our service providers may automatically collect:</p>
            <ul>
              <li>Device type, operating system, app version</li>
              <li>IP address and general network information</li>
              <li>App usage events (via analytics tools)</li>
              <li>Crash or performance data (if enabled)</li>
            </ul>

            <h3>3.5 Local storage on your device</h3>
            <p>The App may store on your device:</p>
            <ul>
              <li>Authentication tokens (to keep you signed in)</li>
              <li>
                Cached app configuration (theme colors, ads settings, carousel
                banners)
              </li>
              <li>Other preferences needed for offline or faster startup</li>
            </ul>

            <h3>3.6 Advertising data</h3>
            <p>
              If ads are enabled in the App, <strong>Google AdMob</strong> may
              collect advertising identifiers and related data to show ads. This
              is governed by{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Google&apos;s Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noreferrer"
              >
                Google Advertising Policies
              </a>
              .
            </p>
            <p>
              You can limit ad personalization through your device settings
              (e.g. “Opt out of Ads Personalization” on Android).
            </p>

            <h2>4. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Create and manage your shop account</li>
              <li>
                Provide inventory, sales, customer, invoice, and reporting
                features
              </li>
              <li>
                Authenticate users and protect against unauthorized access
              </li>
              <li>Upload and display product images</li>
              <li>
                Generate PDF invoices locally on your device using data from our
                API
              </li>
              <li>Deliver app configuration (branding, banners, ad visibility)</li>
              <li>Show advertisements when enabled</li>
              <li>
                Improve app performance, fix bugs, and understand usage
                (analytics)
              </li>
              <li>Respond to support requests</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              We do <strong>not</strong> sell your personal business data to
              third parties for their marketing.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              We use trusted third-party services that may process data on our
              behalf:
            </p>
            <table className="legal-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Backend API (hosted cloud infrastructure)</td>
                  <td>
                    Store and sync shop, product, customer, and sales data
                  </td>
                </tr>
                <tr>
                  <td>Google AdMob</td>
                  <td>Display banner and native/video ads (when enabled)</td>
                </tr>
                <tr>
                  <td>Firebase / Google Analytics</td>
                  <td>App analytics and usage measurement (if enabled)</td>
                </tr>
                <tr>
                  <td>Cloud image storage</td>
                  <td>Store uploaded product photos</td>
                </tr>
                <tr>
                  <td>Google Fonts</td>
                  <td>Load typography in the App UI</td>
                </tr>
              </tbody>
            </table>
            <p>
              Each third party has its own privacy policy. We encourage you to
              review their policies.
            </p>

            <h2>6. Data Sharing &amp; Disclosure</h2>
            <p>We may share information only in these situations:</p>
            <ul>
              <li>
                <strong>Service providers</strong> — hosting, analytics, ads,
                storage, email (under contract and for App operation only)
              </li>
              <li>
                <strong>Legal requirements</strong> — if required by law, court
                order, or government request
              </li>
              <li>
                <strong>Business protection</strong> — to enforce our terms,
                prevent fraud, or protect rights and safety
              </li>
              <li>
                <strong>With your consent</strong> — when you explicitly agree
              </li>
            </ul>
            <p>
              We do not share your customer or inventory lists with other shops
              or unrelated advertisers except as needed for ad delivery through
              AdMob&apos;s standard ad network (device/ad identifiers, not your
              shop customer list).
            </p>

            <h2>7. Data Retention</h2>
            <p>We retain your data:</p>
            <ul>
              <li>For as long as your shop account is active</li>
              <li>
                As needed to provide the App and comply with legal obligations
              </li>
              <li>
                Until you request deletion (subject to backup and legal
                retention limits)
              </li>
            </ul>
            <p>
              You may request account or data deletion by contacting{" "}
              <a href="mailto:craftdesk.tech@gmail.com">
                craftdesk.tech@gmail.com
              </a>
              .
            </p>

            <h2>8. Security</h2>
            <p>
              We use reasonable technical and organizational measures to protect
              data, including:
            </p>
            <ul>
              <li>HTTPS encryption for API communication</li>
              <li>Secure token-based authentication</li>
              <li>Server-side access controls</li>
            </ul>
            <p>
              No method of transmission or storage is 100% secure. You are
              responsible for keeping your login credentials confidential.
            </p>

            <h2>9. Your Rights &amp; Choices</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>
                Correct inaccurate shop or profile information (via Profile in
                the App)
              </li>
              <li>Request deletion of your account or data</li>
              <li>Withdraw consent where processing is consent-based</li>
              <li>Opt out of personalized ads via device settings</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
            <p>
              To exercise these rights, email{" "}
              <a href="mailto:craftdesk.tech@gmail.com">
                craftdesk.tech@gmail.com
              </a>{" "}
              with your shop email and request details.
            </p>

            <h2>10. International Data Transfers</h2>
            <p>
              Your data may be processed on servers located outside your
              country. By using the App, you consent to such transfer where
              permitted by applicable law, with appropriate safeguards where
              required.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post
              the updated version with a new “Last updated” date. Continued use
              of the App after changes means you accept the updated policy.
            </p>
            <p>
              Material changes may also be communicated in the App or by email
              where appropriate.
            </p>

            <h2>12. Contact Us</h2>
            <p>For privacy-related questions, data requests, or complaints:</p>
            <p>
              <strong>CraftDesk</strong>
              <br />
              Email:{" "}
              <a href="mailto:craftdesk.tech@gmail.com">
                craftdesk.tech@gmail.com
              </a>
              <br />
              Website:{" "}
              <a href="https://craftdesk.co.in" target="_blank" rel="noreferrer">
                craftdesk.co.in
              </a>
            </p>

            <h2>13. Summary (Quick Reference)</h2>
            <table className="legal-table">
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>What you should know</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Who operates the App</td>
                  <td>CraftDesk — Cell Desk</td>
                </tr>
                <tr>
                  <td>What we collect</td>
                  <td>
                    Shop account, inventory, customers, sales, photos,
                    device/analytics/ad data
                  </td>
                </tr>
                <tr>
                  <td>Why we collect it</td>
                  <td>
                    To run inventory &amp; sales features, auth, ads (optional),
                    analytics
                  </td>
                </tr>
                <tr>
                  <td>Ads</td>
                  <td>Google AdMob; can be turned off remotely via app config</td>
                </tr>
                <tr>
                  <td>Sharing</td>
                  <td>
                    Service providers only; we don&apos;t sell your business data
                  </td>
                </tr>
                <tr>
                  <td>Contact</td>
                  <td>craftdesk.tech@gmail.com</td>
                </tr>
              </tbody>
            </table>

            <p className="legal-note">
              This document is a template aligned with Cell Desk&apos;s current
              features. Have it reviewed by legal counsel before publishing on
              craftdesk.co.in, Google Play, or in-app.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
