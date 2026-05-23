import { notFound } from "next/navigation";

import { locales, isValidLocale } from "../constants/i18n";
import { LanguageProvider } from "../providers/LanguageProvider";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return <LanguageProvider locale={lang}>{children}</LanguageProvider>;
}
