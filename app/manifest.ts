import type { MetadataRoute } from "next";

import { brandIcon, siteDescription, siteName, siteUrl } from "./constants/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Namiki English",
    description: siteDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#06b6d4",
    icons: [
      {
        src: brandIcon,
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
    categories: ["education", "kids", "school"],
    lang: "ja",
    id: siteUrl,
  };
}
