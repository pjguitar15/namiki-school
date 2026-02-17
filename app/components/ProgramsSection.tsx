'use client';

import Container from "./Container";
import ProgramCard from "./ProgramCard";
import { useLanguage } from "../providers/LanguageProvider";
import FadeIn from "./FadeIn";

const ProgramsSection = () => {
  const { content, language } = useLanguage();

  return (
    <FadeIn>
      <Container id="programs" className="space-y-10 py-16 md:py-20">
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">
            Programs
          </p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {language === "ja" ? "提供プログラム一覧" : "Programs"}
          </h2>
          <p className="text-base text-slate-600">
            {language === "ja"
              ? "基礎から応用、体験イベントまで。お子さまに合わせてお選びいただけます。"
              : "From foundations to workshops, choose the pace that fits your child."}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.programs.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </Container>
    </FadeIn>
  );
};

export default ProgramsSection;
