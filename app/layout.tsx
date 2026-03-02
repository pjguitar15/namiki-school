import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Namiki English School",
  description:
    "ナミキイングリッシュスクールの公式サイト。子どもたちの英語力を育てるプログラムと学びの体験をご紹介します。",
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
