'use client';

import { useLanguage } from "../../providers/LanguageProvider";
import FadeIn from "../FadeIn";

const FAQSection = () => {
  const { content, language } = useLanguage();
  const faqs = content.aboutPage.faqs;

  return (
    <FadeIn>
      <div className="space-y-4">
        <div className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            FAQ
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            {language === "ja" ? "よくあるご質問" : "Common questions"}
          </h2>
          <p className="text-base text-slate-600">
            {language === "ja"
              ? "体験やクラスについてのご質問にお答えします。"
              : "Answers about trials, classes, and how we support learners."}
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
                <span>{faq.question}</span>
                <span className="text-lg text-teal-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default FAQSection;
