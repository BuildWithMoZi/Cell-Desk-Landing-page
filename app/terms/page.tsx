import type { Metadata } from "next";
import Link from "next/link";
import SiteTopbar from "@/components/SiteTopbar";
import Footer from "@/components/Footer";
import { pageUrl } from "@/lib/basePath";

const description =
  "The terms governing your access to and use of the Cell Desk app by CraftDesk.";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description,
  alternates: {
    canonical: pageUrl("/terms/"),
  },
  openGraph: {
    type: "article",
    url: pageUrl("/terms/"),
    siteName: "Cell Desk",
    title: "Terms & Conditions — Cell Desk",
    description,
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions — Cell Desk",
    description,
  },
};

export default function TermsPage() {
  return (
    <>
      <SiteTopbar />
      <main className="legal-page">
        <div className="legal-card">
          <span className="eyebrow">Legal</span>
          <h1 className="legal-title">Terms and Conditions — Cell Desk</h1>

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
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms and Conditions (“Terms”) govern your access to and use
              of the <strong>Cell Desk</strong> mobile application (“App”)
              provided by <strong>CraftDesk</strong> (“we”, “us”, “our”).
            </p>
            <p>
              By downloading, registering for, or using the App, you agree to be
              bound by these Terms and our{" "}
              <Link href="/privacy">Privacy Policy</Link>. If you do not agree,
              you must not use the App.
            </p>

            <h2>2. About the Service</h2>
            <p>
              Cell Desk is a cloud-based{" "}
              <strong>mobile inventory and sales management</strong> application
              designed for mobile phone retailers and related businesses. The
              App may include features such as:
            </p>
            <ul>
              <li>Product and stock management</li>
              <li>Brand and customer records</li>
              <li>Sales and invoice generation</li>
              <li>Shop profile and dashboard</li>
              <li>Remote app configuration (branding, banners, advertisements)</li>
              <li>PDF invoice export</li>
            </ul>
            <p>
              We may add, modify, or remove features at any time without prior
              notice.
            </p>

            <h2>3. Eligibility</h2>
            <p>To use Cell Desk, you must:</p>
            <ul>
              <li>
                Be at least <strong>18 years old</strong> (or the age of legal
                majority in your jurisdiction)
              </li>
              <li>
                Operate or be authorized to operate a legitimate retail business
              </li>
              <li>Provide accurate registration and shop information</li>
              <li>Comply with all applicable local, state, and national laws</li>
            </ul>
            <p>
              You are responsible for ensuring that your use of the App complies
              with laws governing your business (including consumer protection,
              tax, and data protection rules).
            </p>

            <h2>4. Account Registration &amp; Security</h2>
            <h3>4.1 Account creation</h3>
            <p>
              Shop accounts are created through our registration process or by
              an administrator. You agree to provide true, current, and complete
              information and to keep it updated.
            </p>
            <h3>4.2 Credentials</h3>
            <p>You are responsible for:</p>
            <ul>
              <li>
                Maintaining the confidentiality of your login email and password
              </li>
              <li>All activity that occurs under your account</li>
              <li>
                Notifying us immediately of unauthorized access at{" "}
                <a href="mailto:craftdesk.tech@gmail.com">
                  craftdesk.tech@gmail.com
                </a>
              </li>
            </ul>
            <p>
              We are not liable for losses caused by unauthorized use of your
              account where you failed to safeguard your credentials.
            </p>
            <h3>4.3 Account suspension or termination</h3>
            <p>We may suspend, restrict, or terminate your account if you:</p>
            <ul>
              <li>Violate these Terms</li>
              <li>Provide false or misleading information</li>
              <li>
                Misuse the App or attempt to harm our systems or other users
              </li>
              <li>Fail to pay applicable subscription fees (if any)</li>
              <li>
                Are required to be blocked by law or by our super-admin /
                compliance process
              </li>
            </ul>
            <p>
              You may stop using the App at any time. Upon termination, your
              right to access the App ends, subject to data retention described
              in our Privacy Policy.
            </p>

            <h2>5. Acceptable Use</h2>
            <p>
              You agree <strong>not</strong> to:
            </p>
            <ul>
              <li>Use the App for unlawful, fraudulent, or harmful purposes</li>
              <li>
                Upload malicious code, spam, or content that infringes others&apos;
                rights
              </li>
              <li>
                Attempt to reverse engineer, decompile, or hack the App or
                backend
              </li>
              <li>Access data belonging to other shops without authorization</li>
              <li>Scrape, overload, or interfere with our servers or APIs</li>
              <li>
                Resell, sublicense, or white-label the App without written
                permission from CraftDesk
              </li>
              <li>
                Use the App to store or process data you are not legally
                permitted to hold (e.g. stolen devices, falsified IMEI records)
              </li>
            </ul>
            <p>
              We reserve the right to investigate violations and cooperate with
              law enforcement where required.
            </p>

            <h2>6. Your Business Data</h2>
            <h3>6.1 Ownership</h3>
            <p>
              You retain ownership of the business data you enter into Cell Desk
              (products, customers, sales records, images, etc.).
            </p>
            <h3>6.2 License to us</h3>
            <p>
              By using the App, you grant CraftDesk a limited, non-exclusive
              license to host, store, process, display, and transmit your data{" "}
              <strong>solely</strong> to operate and improve the App, provide
              support, and comply with law.
            </p>
            <p>We do not claim ownership of your inventory or customer lists.</p>
            <h3>6.3 Accuracy &amp; backups</h3>
            <p>
              You are solely responsible for the accuracy of data you enter.
              While we implement reasonable backups and security,{" "}
              <strong>
                you should maintain your own business records and backups
              </strong>{" "}
              where required for your operations or legal obligations.
            </p>

            <h2>7. Subscriptions &amp; Payments</h2>
            <p>If Cell Desk is offered under a paid subscription plan:</p>
            <ul>
              <li>
                Fees, billing cycles, and plan features will be communicated at
                signup or on our website
              </li>
              <li>
                Subscriptions may renew automatically unless cancelled before
                the renewal date
              </li>
              <li>
                Failure to pay may result in restricted access or account
                suspension
              </li>
              <li>
                Refunds are handled according to our published refund policy or
                applicable law
              </li>
            </ul>
            <p>
              Free trials or promotional access may be modified or withdrawn at
              our discretion.
            </p>

            <h2>8. Advertisements</h2>
            <p>
              The App may display third-party advertisements (e.g. via Google
              AdMob) when enabled through remote configuration.
            </p>
            <ul>
              <li>
                Ad content is provided by third-party ad networks, not by
                CraftDesk
              </li>
              <li>We do not endorse products or services shown in ads</li>
              <li>Ad visibility may change without notice</li>
              <li>
                Your interaction with ads is subject to the advertiser&apos;s and
                Google&apos;s terms and policies
              </li>
            </ul>

            <h2>9. Third-Party Services</h2>
            <p>
              The App integrates with third-party services (hosting, analytics,
              advertising, fonts, image storage, etc.). Your use of those
              services may be subject to their separate terms and privacy
              policies.
            </p>
            <p>
              CraftDesk is not responsible for third-party services outside our
              reasonable control.
            </p>

            <h2>10. Intellectual Property</h2>
            <h3>10.1 Our property</h3>
            <p>
              The App, including its design, logo, software, documentation, and
              branding (including “Cell Desk” and “CraftDesk”), is owned by
              CraftDesk or its licensors and protected by intellectual property
              laws.
            </p>
            <p>
              You receive a limited, non-transferable, revocable license to use
              the App for your internal business purposes in accordance with
              these Terms.
            </p>
            <h3>10.2 Feedback</h3>
            <p>
              If you submit suggestions or feedback, we may use them without
              obligation to compensate you.
            </p>

            <h2>11. Invoices &amp; PDF Documents</h2>
            <p>
              Cell Desk can generate invoice PDFs from data stored in your
              account. You are responsible for:
            </p>
            <ul>
              <li>Verifying invoice accuracy before sharing with customers</li>
              <li>
                Ensuring invoices meet your local tax, GST, or legal invoicing
                requirements
              </li>
              <li>
                How and where you store or distribute generated PDF files
              </li>
            </ul>
            <p>
              CraftDesk does not provide legal, tax, or accounting advice.
            </p>

            <h2>12. Disclaimer of Warranties</h2>
            <p>
              THE APP IS PROVIDED <strong>“AS IS”</strong> AND{" "}
              <strong>“AS AVAILABLE”</strong> WITHOUT WARRANTIES OF ANY KIND,
              WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT.
            </p>
            <p>We do not warrant that:</p>
            <ul>
              <li>
                The App will be uninterrupted, error-free, or secure at all
                times
              </li>
              <li>Data will never be lost (though we use reasonable safeguards)</li>
              <li>
                Results from using the App will meet your business expectations
              </li>
            </ul>
            <p>You use the App at your own risk.</p>

            <h2>13. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, CRAFTDESK AND ITS OFFICERS,
              EMPLOYEES, AND PARTNERS SHALL NOT BE LIABLE FOR:
            </p>
            <ul>
              <li>
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES
              </li>
              <li>
                LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS OPPORTUNITY
              </li>
              <li>
                DAMAGES ARISING FROM UNAUTHORIZED ACCESS, THIRD-PARTY SERVICES,
                OR AD CONTENT
              </li>
            </ul>
            <p>
              OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS OR THE
              APP SHALL NOT EXCEED THE AMOUNT YOU PAID TO CRAFTDESK IN THE{" "}
              <strong>TWELVE (12) MONTHS</strong> BEFORE THE CLAIM, OR{" "}
              <strong>INR 5,000</strong> (whichever is greater), UNLESS HIGHER
              LIABILITY IS REQUIRED BY APPLICABLE LAW.
            </p>
            <p>
              Some jurisdictions do not allow certain limitations; in those
              cases, our liability is limited to the fullest extent permitted by
              law.
            </p>

            <h2>14. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless CraftDesk from claims,
              damages, losses, and expenses (including reasonable legal fees)
              arising from:
            </p>
            <ul>
              <li>Your use of the App</li>
              <li>Your business data or content</li>
              <li>Your violation of these Terms or applicable law</li>
              <li>Your infringement of any third-party rights</li>
            </ul>

            <h2>15. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The updated version
              will be posted with a revised “Last updated” date. Material changes
              may be communicated through the App, email, or our website.
            </p>
            <p>
              Continued use of the App after changes constitutes acceptance of
              the updated Terms.
            </p>

            <h2>16. Governing Law &amp; Disputes</h2>
            <p>
              These Terms are governed by the laws of <strong>India</strong>,
              without regard to conflict-of-law principles.
            </p>
            <p>
              Any dispute arising from these Terms or the App shall first be
              attempted to be resolved through good-faith contact at{" "}
              <a href="mailto:craftdesk.tech@gmail.com">
                craftdesk.tech@gmail.com
              </a>
              . If unresolved, disputes shall be subject to the exclusive
              jurisdiction of the competent courts at our registered business
              location in India, unless otherwise required by mandatory local
              law.
            </p>

            <h2>17. Severability</h2>
            <p>
              If any provision of these Terms is found invalid or unenforceable,
              the remaining provisions remain in full force and effect.
            </p>

            <h2>18. Entire Agreement</h2>
            <p>
              These Terms, together with the Privacy Policy and any subscription
              or service-specific agreements, constitute the entire agreement
              between you and CraftDesk regarding the App.
            </p>

            <h2>19. Contact Us</h2>
            <p>For questions about these Terms:</p>
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

            <h2>20. Summary (Quick Reference)</h2>
            <table className="legal-table">
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>Summary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Service</td>
                  <td>Cell Desk — inventory &amp; sales app for mobile retailers</td>
                </tr>
                <tr>
                  <td>Your duty</td>
                  <td>Accurate data, lawful use, secure login</td>
                </tr>
                <tr>
                  <td>Our duty</td>
                  <td>Provide App as-is; reasonable support &amp; security</td>
                </tr>
                <tr>
                  <td>Your data</td>
                  <td>You own it; we process it to run the App</td>
                </tr>
                <tr>
                  <td>Ads</td>
                  <td>Third-party; optional via remote config</td>
                </tr>
                <tr>
                  <td>Liability</td>
                  <td>Limited as described above</td>
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
