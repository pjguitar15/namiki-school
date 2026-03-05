'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../providers/LanguageProvider";
import WideContainer from "./WideContainer";

const Footer = () => {
  const { content, language } = useLanguage();
  const isJa = language === "ja";

  return (
    <footer className="bg-white pt-6">
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-700 to-sky-700 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.2),transparent_34%),radial-gradient(circle_at_82%_10%,rgba(255,255,255,0.14),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(255,255,255,0.01)_32%,rgba(0,0,0,0.26))]" />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 -translate-y-[55%]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-full w-full">
            <path
              d="M0,54 C120,22 240,90 360,54 C480,18 600,90 720,54 C840,18 960,90 1080,54 C1200,22 1320,90 1440,54 L1440,0 L0,0 Z"
              fill="rgba(255,255,255,0.95)"
            />
          </svg>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-14 -translate-y-[35%]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-full w-full">
            <path
              d="M0,62 C160,30 320,92 480,62 C640,30 800,92 960,62 C1120,30 1280,92 1440,62 L1440,0 L0,0 Z"
              fill="rgba(255,255,255,0.35)"
            />
          </svg>
        </div>

        <WideContainer className="relative z-10 grid gap-8 pb-10 pt-24 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                NE
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/90">
                  Namiki English School
                </p>
                <p className="text-lg font-semibold text-white">
                  {isJa ? "ナミキイングリッシュスクール" : "Namiki English School"}
                </p>
              </div>
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-white md:text-base">
              {isJa
                ? "子どもたちが英語で自信を持って話せる未来へ。少人数クラスと楽しい実践レッスンで、毎週の成長をサポートします。"
                : "Helping children speak English with confidence through small classes, practical activities, and weekly progress support."}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-teal-800 transition hover:bg-slate-100"
              >
                {isJa ? "無料体験を予約" : "Book Trial"}
              </Link>
              <Link
                href="/programs"
                className="rounded-full border border-white/70 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                {isJa ? "プログラムを見る" : "View Programs"}
              </Link>
            </div>
          </div>

          <div className="grid gap-5 rounded-3xl border border-white/45 bg-slate-900/25 p-5 backdrop-blur-sm">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/95">
                  {isJa ? "サイトマップ" : "Quick Links"}
                </p>
                <div className="mt-3 space-y-2 text-sm">
                  {content.navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-white transition hover:text-cyan-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/95">
                  {isJa ? "お問い合わせ" : "Contact"}
                </p>
                <div className="mt-3 space-y-2 text-sm text-white">
                  <a href={`mailto:${content.contact.email}`} className="block break-all text-cyan-100 hover:text-cyan-200">
                    {content.contact.email}
                  </a>
                  <a href={`tel:${content.contact.phone}`} className="block text-cyan-100 hover:text-cyan-200">
                    {content.contact.phoneLabel}
                  </a>
                  <p>{content.contact.hours}</p>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-3">
              <p className="text-xs text-white/95">
                {isJa ? "体験レッスンは随時受付中です。" : "Trial lessons available year-round."}
              </p>
              <Image
                src="/illustrations/footer-kids.png"
                alt={isJa ? "子どものイラスト" : "Kids illustration"}
                width={190}
                height={190}
                className="h-auto w-[110px] md:w-[150px]"
                sizes="(min-width: 768px) 150px, 110px"
              />
            </div>
          </div>
        </WideContainer>

        <div className="border-t border-white/35 py-4 text-center text-xs text-white">
          {content.footerCredit}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
