import type { MetadataRoute } from "next";
import { pageUrl } from "@/lib/basePath";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: pageUrl("/sitemap.xml"),
    host: pageUrl("/"),
  };
}
