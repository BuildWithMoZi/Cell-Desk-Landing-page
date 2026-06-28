// Keep this in sync with `basePath` in next.config.ts (both read the same env var).
// Plain <img>/<a> tags are NOT auto-prefixed by Next.js basePath,
// so any reference to files in /public must go through asset().
//   - GitHub Pages: set NEXT_PUBLIC_BASE_PATH="/Cell-Desk-Landing-page"
//   - Cloudflare Pages / custom domain: leave it empty (served from root)
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string): string =>
  `${basePath}${path.startsWith("/") ? path : `/${path}`}`;

// Public production URL. Used for canonical URLs, Open Graph tags, sitemap and robots.
// Override per deployment via NEXT_PUBLIC_SITE_URL (no trailing slash).
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cell-desk.pages.dev"
).replace(/\/$/, "");

export const pageUrl = (path = "/"): string =>
  `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
