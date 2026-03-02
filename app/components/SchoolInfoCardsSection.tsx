"use client";

import { LuCalendarDays, LuSchool } from "react-icons/lu";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { useLanguage } from "../providers/LanguageProvider";

const SchoolInfoCardsSection = () => {
  const { content, language } = useLanguage();

  const firstProgram = content.programs[0];
  const secondProgram = content.programs[1];

  return (
    <FadeIn>
      <section className="bg-white py-16 md:py-20">
        <Container className="space-y-10 py-0 md:space-y-14">
          <div className="mx-auto max-w-4xl space-y-5 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f05b42]">
              {language === "ja" ? "ナミキについて" : "Namiki English School"}
            </p>
            <h2 className="text-3xl leading-tight text-[#242f79] md:text-4xl">
              {content.about.headline}
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              {content.hero.subheadline}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <article className="rounded-2xl bg-white p-8 shadow-[0_1px_0_rgba(15,23,42,0.04)] md:p-10">
              <div className="mb-5 text-3xl" aria-hidden="true">
                <LuSchool />
              </div>
              <h3 className="text-2xl text-[#242f79] md:text-3xl">
                {language === "ja" ? "学校紹介" : "About"}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                {content.about.lead}
              </p>
            </article>

            <article className="rounded-2xl bg-white p-8 shadow-[0_1px_0_rgba(15,23,42,0.04)] md:p-10">
              <div className="mb-5 text-3xl text-[#f05b42]" aria-hidden="true">
                <LuCalendarDays />
              </div>
              <h3 className="text-2xl text-[#242f79] md:text-3xl">
                {language === "ja" ? "プログラム" : "Programs"}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                {language === "ja"
                  ? `${firstProgram.title}（${firstProgram.duration}）や${secondProgram.title}（${secondProgram.duration}）など、年齢やレベルに合わせたコースをご用意しています。`
                  : `Choose from ${firstProgram.title} (${firstProgram.duration}) and ${secondProgram.title} (${secondProgram.duration}), with guided tracks for each age and learning level.`}
              </p>
            </article>
          </div>
        </Container>
      </section>
    </FadeIn>
  );
};

export default SchoolInfoCardsSection;
