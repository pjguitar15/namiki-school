'use client';

import { HiSparkles } from "react-icons/hi2";
import { IconType } from "react-icons/lib";
import { LuBookOpen, LuMessageCircleMore, LuUsers } from "react-icons/lu";
import { useLanguage } from "../../providers/LanguageProvider";
import FadeIn from "../FadeIn";

const iconMap: Record<string, IconType> = {
  users: LuUsers,
  book: LuBookOpen,
  sparkles: HiSparkles,
  chat: LuMessageCircleMore,
};

const HighlightsSection = () => {
  const { content, language } = useLanguage();
  const highlights = content.aboutPage.highlights;

  return (
    <FadeIn>
      <section className="space-y-5">
        <div className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Highlights</p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {language === "ja" ? "スクールの強み" : "What makes our school different"}
          </h2>
          <p className="text-base text-slate-600">
            {language === "ja"
              ? "続けやすく、成長を実感しやすい学習環境づくりを大切にしています。"
              : "A learning environment designed for steady progress and long-term motivation."}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {highlights.map((item, index) => {
            const tones = [
              "from-cyan-50 to-white",
              "from-orange-50 to-white",
              "from-emerald-50 to-white",
              "from-violet-50 to-white",
            ];

            const Icon = iconMap[item.icon] ?? LuUsers;

            return (
              <article
                key={item.title}
                className={`flex gap-4 rounded-3xl border border-slate-100 bg-gradient-to-br p-6 shadow-[0_10px_24px_rgba(15,23,42,0.06)] ${tones[index % tones.length]}`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl shadow-sm">
                  <Icon className="text-cyan-700" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-700 md:text-base">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </FadeIn>
  );
};

export default HighlightsSection;
