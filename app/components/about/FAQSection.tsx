'use client';

import { useLanguage } from "../../providers/LanguageProvider";
import FadeIn from "../FadeIn";

const FAQSection = () => {
  const { content, language } = useLanguage();
  const faqs = content.aboutPage.faqs;

  return (
    <FadeIn>
      <section className="space-y-5">
        <div className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">FAQ</p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {language === "ja" ? "よくあるご質問" : "Common questions"}
          </h2>
          <p className="text-base text-slate-600">
            {language === "ja"
              ? "体験レッスン・レベル・サポート体制について多いご質問をまとめました。"
              : "Quick answers about trials, placement, and support systems."}
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition open:shadow-md"
            >
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900 md:text-base">
                <span>{faq.question}</span>
                <span className="ml-4 text-lg text-cyan-600 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </FadeIn>
  );
};

export default FAQSection;
