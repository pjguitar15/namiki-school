import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import { defaultOgImage, siteName, siteUrl } from "./constants/seo";
import "./globals.css";
import { LanguageProvider } from "./providers/LanguageProvider";

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

const defaultDescription =
  "Bilingual English school in Tsukuba, Japan offering daycare, Eikaiwa, and after-school programs for ages 2+.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "Namiki English School",
    "Tsukuba English school",
    "English daycare Tsukuba",
    "Eikaiwa Tsukuba",
    "After-school English program",
    "Ibaraki English school",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: siteName,
    description: defaultDescription,
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
    description: defaultDescription,
    images: [defaultOgImage],
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
  "@type": "EducationalOrganization",
  name: siteName,
  url: siteUrl,
  email: "tsukubanamikienglishschool@gmail.com",
  telephone: "080-2015-6832",
  address: {
    "@type": "PostalAddress",
    streetAddress: "331-1 Shimohiratsuka",
    addressLocality: "Tsukuba",
    addressRegion: "Ibaraki",
    postalCode: "305-0813",
    addressCountry: "JP",
  },
  sameAs: ["https://maps.app.goo.gl/YMADehE4bSCPtSHL9"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} bg-white text-slate-900 antialiased [&_h1]:font-(family-name:--font-nunito) [&_h2]:font-(family-name:--font-nunito) [&_h3]:font-(family-name:--font-nunito) [&_h4]:font-(family-name:--font-nunito) [&_h5]:font-(family-name:--font-nunito) [&_h6]:font-(family-name:--font-nunito) [&_h1]:font-extrabold [&_h2]:font-extrabold [&_h3]:font-extrabold [&_h4]:font-extrabold [&_h5]:font-extrabold [&_h6]:font-extrabold`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
