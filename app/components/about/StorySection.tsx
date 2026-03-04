'use client';

import Image from "next/image";
import { useLanguage } from "../../providers/LanguageProvider";
import FadeIn from "../FadeIn";

const StorySection = () => {
  const { content } = useLanguage();
  const story = content.aboutPage.story;

  return (
    <FadeIn>
      <section className="grid gap-10 rounded-[2rem] bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_14px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-100 md:grid-cols-2 md:p-10">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Our Story</p>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{story.title}</h2>
          {story.paragraphs.map((para) => (
            <p key={para} className="text-base leading-relaxed text-slate-700 md:text-lg">
              {para}
            </p>
          ))}
        </div>
        <div className="relative h-72 overflow-hidden rounded-3xl shadow-xl shadow-cyan-200/70 md:h-auto">
          <Image
            src={story.image}
            alt="School story"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </section>
    </FadeIn>
  );
};

export default StorySection;
