"use client";

import { LuBadgeDollarSign, LuBookText, LuGift } from "react-icons/lu";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { useLanguage } from "../providers/LanguageProvider";

type FeeLine = {
  label: string;
  amount: string;
};

const EikaiwaRatesSection = () => {
  const { language } = useLanguage();

  const copy =
    language === "ja"
      ? {
          eyebrow: "è‹±ä¼šè©±æ–™é‡‘",
          title: "Eikaiwa Program (1 Hour Lessons)",
          subtitle: "è‹±ä¼šè©±ãƒ—ãƒ­ã‚°ãƒ©ãƒ ï¼ˆ1æ™‚é–“ãƒ¬ãƒƒã‚¹ãƒ³ï¼‰",
          tuitionTitle: "æœˆé¡æŽˆæ¥­æ–™",
          otherFeesTitle: "ãã®ä»–è²»ç”¨",
          trialTitle: "ç„¡æ–™ä½“é¨“ãƒ¬ãƒƒã‚¹ãƒ³å®Ÿæ–½ä¸­",
          trialBody:
            "ã”å…¥ä¼šå‰ã«1æ™‚é–“è‹±ä¼šè©±ãƒ¬ãƒƒã‚¹ãƒ³ã‚’ä½“é¨“ã§ãã‚‹ç„¡æ–™ä½“é¨“ãƒ¬ãƒƒã‚¹ãƒ³ã‚’å®Ÿæ–½ã—ã¦ãŠã‚Šã¾ã™ã€‚",
          tuition: [
            { label: "1æ™‚é–“ é€±1å›ž", amount: "Â¥11,000" },
            { label: "1æ™‚é–“ é€±2å›ž", amount: "Â¥20,000" },
            { label: "1æ™‚é–“ é€±3å›ž", amount: "Â¥28,000" },
            { label: "1æ™‚é–“ é€±4å›ž", amount: "Â¥35,000" },
            { label: "1æ™‚é–“ é€±5å›ž", amount: "Â¥40,000" },
          ] as FeeLine[],
          otherFees: [
            { label: "å…¥ä¼šé‡‘ï¼ˆåˆå›žã®ã¿ï¼‰", amount: "Â¥15,000" },
            { label: "å¹´é–“æ•™æè²»", amount: "Â¥9,000" },
            { label: "æ–½è¨­è²»ï¼ˆå¹´1å›žï¼‰", amount: "Â¥7,000" },
          ] as FeeLine[],
        }
      : {
          eyebrow: "Eikaiwa Pricing",
          title: "Eikaiwa Program (1 Hour Lessons)",
          subtitle: "One-hour conversation lessons",
          tuitionTitle: "Tuition Fees (Monthly)",
          otherFeesTitle: "Other Fees",
          trialTitle: "Free Trial Available",
          trialBody:
            "We offer a free trial lesson so students can experience our one-hour Eikaiwa class before enrollment.",
          tuition: [
            { label: "1 hour / once a week", amount: "¥11,000" },
            { label: "1 hour / twice a week", amount: "¥20,000" },
            { label: "1 hour / three times a week", amount: "¥28,000" },
            { label: "1 hour / four times a week", amount: "¥35,000" },
            { label: "1 hour / five times a week", amount: "¥40,000" },
          ] as FeeLine[],
          otherFees: [
            { label: "Admission fee (one-time)", amount: "¥15,000" },
            { label: "Annual materials fee", amount: "¥9,000" },
            { label: "Facility fee (annual)", amount: "¥7,000" },
          ] as FeeLine[],
        };

  return (
    <FadeIn>
      <section className="relative overflow-hidden bg-[#fffaf5] py-16 md:py-20">
        <div className="pointer-events-none absolute -top-16 left-10 h-40 w-40 rounded-full bg-amber-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 right-10 h-44 w-44 rounded-full bg-rose-200/45 blur-3xl" />

        <Container className="relative z-10 space-y-8 py-0">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              {copy.eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{copy.title}</h2>
            <p className="text-base text-slate-600 md:text-lg">{copy.subtitle}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border-2 border-amber-200 bg-white p-6 shadow-[0_12px_26px_rgba(15,23,42,0.08)] md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-xl text-white">
                  <LuBadgeDollarSign />
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">{copy.tuitionTitle}</h3>
              </div>

              <ul className="space-y-3">
                {copy.tuition.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-amber-50 px-4 py-3"
                  >
                    <span className="text-sm font-semibold text-slate-700 md:text-base">{item.label}</span>
                    <span className="text-base font-extrabold text-amber-700 md:text-lg">{item.amount}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border-2 border-rose-200 bg-white p-6 shadow-[0_12px_26px_rgba(15,23,42,0.08)] md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500 text-xl text-white">
                  <LuBookText />
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">{copy.otherFeesTitle}</h3>
              </div>

              <ul className="space-y-3">
                {copy.otherFees.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-rose-50 px-4 py-3"
                  >
                    <span className="text-sm font-semibold text-slate-700 md:text-base">{item.label}</span>
                    <span className="text-base font-extrabold text-rose-700 md:text-lg">{item.amount}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="rounded-3xl border border-violet-200 bg-gradient-to-r from-violet-500 to-fuchsia-500 p-6 text-white shadow-[0_14px_30px_rgba(124,58,237,0.28)] md:p-8">
            <div className="space-y-2">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white/90">
                <LuGift />
                Trial
              </p>
              <h3 className="text-2xl font-extrabold md:text-3xl">{copy.trialTitle}</h3>
              <p className="text-sm text-white/90 md:text-base">{copy.trialBody}</p>
            </div>
          </article>
        </Container>
      </section>
    </FadeIn>
  );
};

export default EikaiwaRatesSection;

