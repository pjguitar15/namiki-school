import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono, Nunito } from "next/font/google";

import {
  brandIcon,
  defaultOgImage,
  siteDescription,
  siteName,
  siteUrl,
} from "./constants/seo";
import { defaultLocale, isValidLocale } from "./constants/i18n";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Namiki English School",
    "Tsukuba English school",
    "English daycare Tsukuba",
    "Eikaiwa Tsukuba",
    "After-school English program",
    "Ibaraki English school",
    "English lessons for children in Japan",
    "Preschool English Tsukuba",
  ],
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  category: "education",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: brandIcon, type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: [{ url: brandIcon, type: "image/png" }],
    apple: [{ url: brandIcon, type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${siteName} classroom`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: defaultOgImage,
        alt: `${siteName} classroom`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  email: "tsukubanamikienglishschool@gmail.com",
  telephone: "+81-80-2015-6832",
  priceRange: "JPY",
  areaServed: ["Tsukuba", "Ibaraki"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "1193-1 Sasagi",
    addressLocality: "Tsukuba",
    addressRegion: "Ibaraki",
    postalCode: "305-0043",
    addressCountry: "JP",
  },
  hasMap:
    "https://www.google.com/maps?q=1193-1%20Sasagi%20Tsukuba-shi%20Ibaraki-ken%20Japan%20305-0043",
  sameAs: [
    "https://www.google.com/maps?q=1193-1%20Sasagi%20Tsukuba-shi%20Ibaraki-ken%20Japan%20305-0043",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  description: siteDescription,
  inLanguage: ["ja", "en"],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const requestedLocale = headerStore.get("x-current-locale");
  const documentLanguage =
    requestedLocale && isValidLocale(requestedLocale)
      ? requestedLocale
      : defaultLocale;

  return (
    <html lang={documentLanguage}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} bg-white text-slate-900 antialiased [&_h1]:font-(family-name:--font-nunito) [&_h2]:font-(family-name:--font-nunito) [&_h3]:font-(family-name:--font-nunito) [&_h4]:font-(family-name:--font-nunito) [&_h5]:font-(family-name:--font-nunito) [&_h6]:font-(family-name:--font-nunito) [&_h1]:font-extrabold [&_h2]:font-extrabold [&_h3]:font-extrabold [&_h4]:font-extrabold [&_h5]:font-extrabold [&_h6]:font-extrabold`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([websiteJsonLd, organizationJsonLd]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
