import type { Metadata } from "next";

import type { LanguageCode } from "./content";
import { localizePath } from "./i18n";

export const siteName = "Namiki English School";
export const siteDescription =
  "Bilingual English school in Tsukuba, Japan offering daycare, Eikaiwa, and after-school programs for ages 2+.";
const fallbackSiteUrl = "https://www.namiki-english.com";
const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
export const siteUrl =
  envSiteUrl && /(^https:\/\/)(www\.)?namiki-english\.com$/i.test(envSiteUrl)
    ? envSiteUrl
    : fallbackSiteUrl;
export const defaultOgImage = "/og-thumbnail.png";
export const brandIcon = "/namiki-logo.png";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  locale: LanguageCode;
  keywords?: string[];
  image?: string;
};

export const createPageMetadata = ({
  title,
  description,
  path,
  locale,
  keywords = [],
  image = defaultOgImage,
}: PageMetadataInput): Metadata => ({
  title,
  description,
  keywords,
  alternates: {
    canonical: localizePath(path, locale),
    languages: {
      ja: localizePath(path, "ja"),
      en: localizePath(path, "en"),
    },
  },
  openGraph: {
    type: "website",
    title,
    description,
    siteName,
    url: localizePath(path, locale),
    locale: locale === "ja" ? "ja_JP" : "en_US",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: `${title} | ${siteName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: image,
        alt: `${title} | ${siteName}`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
});
