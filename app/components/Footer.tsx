'use client';

import Link from "next/link";
import { useLanguage } from "../providers/LanguageProvider";

const Footer = () => {
  const { content } = useLanguage();
  const groupedNav = [content.navItems.slice(0, 3), content.navItems.slice(3)];

  return (
    <footer className="border-t border-slate-100 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-start md:justify-between md:px-10 lg:px-14">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 text-white font-semibold">
              NE
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-slate-500">
                Namiki English School
              </p>
              <p className="text-lg font-semibold text-slate-900">
                ナミキイングリッシュスクール
              </p>
            </div>
          </div>
          <p className="max-w-sm text-sm text-slate-600">
            子どもたちが英語で自信を持って話せる未来をサポートします。体験レッスンはいつでもお気軽に。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm text-slate-700">
          {groupedNav.map((group, index) => (
            <div key={index} className="space-y-3">
              {group.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block transition hover:text-teal-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-slate-500">
        {content.footerCredit}
      </div>
    </footer>
  );
};

export default Footer;
