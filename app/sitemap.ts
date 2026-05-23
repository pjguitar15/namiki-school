import type { MetadataRoute } from "next";

import { locales } from "./constants/i18n";
import { siteUrl } from "./constants/seo";

const defaultLastModified = "2026-05-23";

const routes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/programs", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/pricing", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/admissions", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/contact", changeFrequency: "weekly" as const, priority: 0.95 },
  { path: "/hiring", changeFrequency: "monthly" as const, priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map(({ path, changeFrequency, priority }) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: defaultLastModified,
      changeFrequency,
      priority,
    }))
  );
}
