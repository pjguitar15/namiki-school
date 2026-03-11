'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../providers/LanguageProvider";
import WideContainer from "./WideContainer";

const Navbar = () => {
  const { content, language, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-white shadow-sm backdrop-blur">
      <WideContainer className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/namiki-logo.png"
            alt="Namiki English School logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
            sizes="44px"
            priority
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900 sm:hidden">
              Namiki English School
            </p>
            <p className="hidden text-sm uppercase tracking-wide text-slate-500 sm:block">
              Namiki English
            </p>
            <p className="hidden text-lg font-semibold text-slate-900 sm:block">
              ナミキイングリッシュスクール
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {content.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-teal-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-600"
            aria-label="Toggle language"
          >
            {language === "ja" ? "日本語 / EN" : "EN / 日本語"}
          </button>
          <Link
            href="/contact"
            className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
          >
            {language === "ja" ? "お問合せ" : "Contact"}
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition hover:border-slate-300 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-6 bg-slate-700" />
            <span className="block h-0.5 w-6 bg-slate-700" />
            <span className="block h-0.5 w-6 bg-slate-700" />
          </div>
        </button>
      </WideContainer>

      {open && (
        <div className="fixed inset-0 z-40 bg-white">
          <WideContainer className="flex items-center justify-between py-4">
            <Link href="#home" className="flex items-center gap-3" onClick={closeMenu}>
              <Image
                src="/namiki-logo.png"
                alt="Namiki English School logo"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
                sizes="44px"
              />
              <div className="leading-tight">
                <p className="text-sm uppercase tracking-wide text-slate-500">
                  Namiki English
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  ナミキイングリッシュスクール
                </p>
              </div>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="flex h-10 w-10 items-center justify-center text-slate-600 transition hover:text-slate-800"
            >
              <span className="sr-only">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </WideContainer>
          <div className="space-y-4 px-6 md:px-10 lg:px-14 bg-white py-10">
            <nav className="flex flex-col divide-y divide-slate-200 text-base font-semibold text-slate-800">
              {content.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="py-3 transition hover:text-teal-600"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  toggleLanguage();
                  closeMenu();
                }}
                className="w-full rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-600"
              >
                {language === "ja" ? "日本語 / EN" : "EN / 日本語"}
              </button>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="inline-flex w-full items-center justify-center rounded-lg bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600"
              >
                {language === "ja" ? "お問合せ" : "Contact"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
