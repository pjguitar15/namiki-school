import type { Metadata } from "next";

export const siteName = "Namiki English School";
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
  keywords?: string[];
  image?: string;
};

export const createPageMetadata = ({
  title,
  description,
  path,
  keywords = [],
  image = defaultOgImage,
}: PageMetadataInput): Metadata => ({
  title,
  description,
  keywords,
  alternates: {
    canonical: path,
  },
  openGraph: {
    type: "website",
    title,
    description,
    siteName,
    url: path,
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
