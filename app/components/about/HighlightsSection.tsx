'use client';

import { useLanguage } from "../../providers/LanguageProvider";
import FadeIn from "../FadeIn";

const iconMap: Record<string, string> = {
  users: "👥",
  book: "📘",
  sparkles: "✨",
  chat: "💬",
};

const HighlightsSection = () => {
  const { content } = useLanguage();
  const highlights = content.aboutPage.highlights;

  return (
    <FadeIn>
      <div className="space-y-4">
        <div className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            Highlights
          </p>
          <h2 className="text-3xl font-bold text-slate-900">スクールの強み</h2>
          <p className="text-base text-slate-600">
            レッスンで大切にしていることと、続けやすさの仕組みをご紹介します。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-xl">
                {iconMap[item.icon] ?? "•"}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default HighlightsSection;
