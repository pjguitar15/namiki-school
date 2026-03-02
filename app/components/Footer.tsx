'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../providers/LanguageProvider";
import WideContainer from "./WideContainer";

const Footer = () => {
  const { content } = useLanguage();
  const groupedNav = [content.navItems.slice(0, 3), content.navItems.slice(3)];

  return (
    <footer className="bg-white pt-6">
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-sky-500 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.24),transparent_34%),radial-gradient(circle_at_82%_10%,rgba(255,255,255,0.18),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_32%,rgba(0,0,0,0.1))]" />

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

        <WideContainer className="relative z-10 flex flex-col gap-8 pb-10 pt-24 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white font-semibold">
                NE
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-white/80">
                  Namiki English School
                </p>
                <p className="text-lg font-semibold text-white">
                  ナミキイングリッシュスクール
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm text-white/90">
              子どもたちが英語で自信を持って話せる未来をサポートします。体験レッスンはいつでもお気軽に。
            </p>
          </div>
          <div className="flex flex-col items-start gap-5 md:items-end">
            <div className="grid grid-cols-2 gap-6 text-sm text-white/90">
              {groupedNav.map((group, index) => (
                <div key={index} className="space-y-3">
                  {group.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <Image
              src="/illustrations/footer-kids.png"
              alt="Three kids illustration"
              width={190}
              height={190}
              className="h-auto w-[130px] md:w-[190px]"
              sizes="(min-width: 768px) 190px, 130px"
            />
          </div>
        </WideContainer>

        <div className="border-t border-white/25 py-4 text-center text-xs text-white/90">
          {content.footerCredit}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
