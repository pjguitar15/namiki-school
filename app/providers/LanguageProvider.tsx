'use client';

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  LANGUAGE_CONTENT,
  LanguageCode,
  LanguageContent,
} from "../constants/content";

type LanguageContextValue = {
  language: LanguageCode;
  content: LanguageContent;
  toggleLanguage: () => void;
  setLanguage: (lang: LanguageCode) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "namiki-language";

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<LanguageCode>("ja");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    if (stored === "ja" || stored === "en") {
      setLanguageState(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const setLanguage = (lang: LanguageCode) => setLanguageState(lang);
  const toggleLanguage = () =>
    setLanguageState((prev) => (prev === "ja" ? "en" : "ja"));

  const value = useMemo(
    () => ({
      language,
      content: LANGUAGE_CONTENT[language],
      toggleLanguage,
      setLanguage,
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};
