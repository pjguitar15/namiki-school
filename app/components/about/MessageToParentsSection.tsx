'use client';

import { useLanguage } from "../../providers/LanguageProvider";
import FadeIn from "../FadeIn";

const MessageToParentsSection = () => {
  const { content } = useLanguage();
  const message = content.aboutPage.messageToParents;

  return (
    <FadeIn>
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_14px_30px_rgba(15,23,42,0.08)] md:p-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{message.title}</h2>
          <p className="text-lg font-semibold text-slate-700">{message.subtitle}</p>
          <p className="text-base leading-relaxed text-slate-700 md:text-lg">{message.greeting}</p>
          {message.body.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-slate-700 md:text-lg">
              {paragraph}
            </p>
          ))}
          <div className="pt-2">
            <p className="text-base font-semibold text-slate-800">{message.signoff}</p>
            <p className="text-base text-slate-700">{message.signerTitle}</p>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default MessageToParentsSection;
