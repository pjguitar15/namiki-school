'use client';

import Image from "next/image";
import { useLanguage } from "../../providers/LanguageProvider";
import FadeIn from "../FadeIn";

const StorySection = () => {
  const { content } = useLanguage();
  const story = content.aboutPage.story;

  return (
    <FadeIn>
      <div className="grid gap-10 rounded-3xl bg-white p-6 shadow-lg shadow-slate-100 ring-1 ring-slate-100 md:grid-cols-2 md:p-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            {story.title}
          </p>
          {story.paragraphs.map((para) => (
            <p key={para} className="text-base leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
        </div>
        <div className="relative h-64 overflow-hidden rounded-3xl shadow-xl shadow-emerald-200 md:h-auto">
          <Image
            src={story.image}
            alt="School story"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </FadeIn>
  );
};

export default StorySection;
