import type { NextConfig } from "next";

// Repo is served from https://buildwithmozi.github.io/Cell-Desk-Landing-page/
// so production assets must live under this base path.
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/Cell-Desk-Landing-page" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
