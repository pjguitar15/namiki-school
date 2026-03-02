'use client';

import { useLanguage } from "../../providers/LanguageProvider";
import FadeIn from "../FadeIn";

const ValuesSection = () => {
  const { content } = useLanguage();
  const values = content.aboutPage.values;

  return (
    <FadeIn>
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            Values
          </p>
          <h2 className="text-3xl font-bold text-slate-900">大切にしていること</h2>
          <p className="text-base text-slate-600">
            学びを支える3つの柱で、長く続く英語力を育てます。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">
                {value.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{value.body}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default ValuesSection;
