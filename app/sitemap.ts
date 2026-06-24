import type { MetadataRoute } from "next";
import { pageUrl } from "@/lib/basePath";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: pageUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: pageUrl("/contact/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: pageUrl("/privacy/"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: pageUrl("/terms/"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
