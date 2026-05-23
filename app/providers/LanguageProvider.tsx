'use client';

import { createContext, useContext, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  LANGUAGE_CONTENT,
  LanguageCode,
  LanguageContent,
} from "../constants/content";
import {
  getAlternateLocale,
  localizeHref,
  replaceLocaleInPathname,
} from "../constants/i18n";

type LanguageContextValue = {
  language: LanguageCode;
  content: LanguageContent;
  href: (path: string) => string;
  toggleLanguage: () => void;
  setLanguage: (lang: LanguageCode) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "namiki-language";

export const LanguageProvider = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: LanguageCode;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const href = (path: string) => localizeHref(path, locale);

  const setLanguage = (lang: LanguageCode) => {
    if (lang === locale) {
      return;
    }

    const nextPath = replaceLocaleInPathname(pathname || "/", lang);
    window.localStorage.setItem(STORAGE_KEY, lang);
    router.push(nextPath);
  };

  const toggleLanguage = () =>
    setLanguage(getAlternateLocale(locale));

  const value = {
    language: locale,
    content: LANGUAGE_CONTENT[locale],
    href,
    toggleLanguage,
    setLanguage,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};
