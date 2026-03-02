'use client';

import { HiSparkles } from "react-icons/hi2";
import { LuHandshake, LuPresentation } from "react-icons/lu";
import Container from "./Container";
import { useLanguage } from "../providers/LanguageProvider";
import FadeIn from "./FadeIn";

const AboutSection = () => {
  const { content } = useLanguage();
  const cardIcons = [HiSparkles, LuPresentation, LuHandshake];
  const cardThemes = [
    "bg-[#f43f7a] text-white",
    "bg-[#0ea5e9] text-white",
    "bg-[#f59e0b] text-slate-900",
  ];

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
          {content.features.map((feature, index) => (
            <div
              key={feature.title}
              className={`rounded-2xl p-6 shadow-[0_12px_24px_rgba(15,23,42,0.16)] ${cardThemes[index % cardThemes.length]}`}
            >
              {(() => {
                const Icon = cardIcons[index % cardIcons.length];

                return (
              <span
                aria-hidden="true"
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-xl ${
                  index % 3 === 2 ? "bg-slate-900/10" : "bg-white/20"
                }`}
              >
                <Icon />
              </span>
                );
              })()}
              <h3 className="mt-4 text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed opacity-90">
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
