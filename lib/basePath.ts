// Keep this in sync with `basePath` in next.config.ts.
// Plain <img>/<a> tags are NOT auto-prefixed by Next.js basePath,
// so any reference to files in /public must go through asset().
export const basePath =
  process.env.NODE_ENV === "production" ? "/Cell-Desk-Landing-page" : "";

export const asset = (path: string): string =>
  `${basePath}${path.startsWith("/") ? path : `/${path}`}`;

// Public production URL (GitHub Pages, includes the repo base path).
// Used for canonical URLs, Open Graph tags, sitemap and robots.
export const siteUrl =
  "https://buildwithmozi.github.io/Cell-Desk-Landing-page";

export const pageUrl = (path = "/"): string =>
  `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
