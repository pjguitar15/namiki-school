'use client';

import Container from "./Container";
import { useLanguage } from "../providers/LanguageProvider";
import FadeIn from "./FadeIn";

const TestimonialsSection = () => {
  const { content, language } = useLanguage();

  return (
    <FadeIn>
      <Container className="space-y-8 py-16 md:py-20">
        <div className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">
            Voices
          </p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {language === "ja" ? "保護者・受講生の声" : "What families say"}
          </h2>
          <p className="text-base text-slate-600">
            {language === "ja"
              ? "学び続けたからこそ感じた変化の声を集めました。"
              : "Stories from families about how confidence and curiosity have grown."}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {content.testimonials.map((item) => (
            <div
              key={item.quote}
              className="flex h-full flex-col rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner shadow-slate-100"
            >
              <div className="text-4xl text-teal-500">“</div>
              <p className="flex-1 text-sm leading-relaxed text-slate-700">
                {item.quote}
              </p>
              <div className="mt-4 text-sm font-semibold text-slate-900">
                {item.name}
              </div>
              <div className="text-xs text-slate-500">{item.role}</div>
            </div>
          ))}
        </div>
      </Container>
    </FadeIn>
  );
};

export default TestimonialsSection;
