'use client';

import { useLanguage } from "../../providers/LanguageProvider";
import FadeIn from "../FadeIn";

const ValuesSection = () => {
  const { content, language } = useLanguage();
  const values = content.aboutPage.values;

  return (
    <FadeIn>
      <section className="space-y-7">
        <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
          {language === "ja" ? "ビジョン・ミッション・教育理念" : "Vision, Mission and Philosophy"}
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {values.map((value, index) => {
            const tones = [
              "bg-[#eef9ff] border-[#cdefff]",
              "bg-[#fff2e8] border-[#ffd9bb]",
              "bg-[#ecfaec] border-[#c5edc5]",
            ];

            return (
              <article
                key={value.title}
                className={`rounded-3xl border p-6 text-left shadow-[0_10px_24px_rgba(15,23,42,0.06)] ${tones[index % tones.length]}`}
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
                  {value.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">{value.body}</p>
              </article>
            );
          })}
        </div>
      </section>
    </FadeIn>
  );
};

export default ValuesSection;
