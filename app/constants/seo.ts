import type { Metadata } from "next";

export const siteName = "Namiki English School";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://namikienglishschool.com";
export const defaultOgImage = "/assets/asset-7.jpg";

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
    images: [image],
  },
  robots: {
    index: true,
    follow: true,
  },
});
