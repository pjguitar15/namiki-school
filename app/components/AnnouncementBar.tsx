'use client';

import { useLanguage } from "../providers/LanguageProvider";

const AnnouncementBar = () => {
  const { content, language } = useLanguage();

  return (
    <div className="flex items-center justify-center bg-slate-900 px-4 py-2 text-xs text-white">
      <span className="rounded-full bg-orange-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
        {language === "ja" ? "お知らせ" : "Notice"}
      </span>
      <span className="ml-3 font-medium">
        {content.announcement}
      </span>
    </div>
  );
};

export default AnnouncementBar;
