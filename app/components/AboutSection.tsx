'use client';

import Container from "./Container";
import { useLanguage } from "../providers/LanguageProvider";
import FadeIn from "./FadeIn";

const AboutSection = () => {
  const { content } = useLanguage();

  return (
    <FadeIn>
      <Container
        id="about"
        className="space-y-10 bg-white py-16 text-slate-900 md:py-20"
      >
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
              {content.about.missionLabel}
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              {content.about.headline}
            </h2>
            <p className="text-lg leading-relaxed text-slate-700">
              {content.about.lead}
            </p>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-slate-700">
            {content.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {content.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </FadeIn>
  );
};

export default AboutSection;
