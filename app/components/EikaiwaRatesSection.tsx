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
          eyebrow: "英会話料金",
          title: "Eikaiwa Program (1 Hour Lessons)",
          subtitle: "英会話プログラム（1時間レッスン）",
          tuitionTitle: "月額授業料",
          otherFeesTitle: "その他費用",
          trialTitle: "無料体験レッスン実施中",
          trialBody:
            "ご入会前に1時間英会話レッスンを体験できる無料体験レッスンを実施しております。",
          tuition: [
            { label: "1時間 週1回", amount: "¥11,000" },
            { label: "1時間 週2回", amount: "¥20,000" },
            { label: "1時間 週3回", amount: "¥28,000" },
            { label: "1時間 週4回", amount: "¥35,000" },
            { label: "1時間 週5回", amount: "¥40,000" },
          ] as FeeLine[],
          otherFees: [
            { label: "入会金（初回のみ）", amount: "¥15,000" },
            { label: "年間教材費", amount: "¥9,000" },
            { label: "施設費（年1回）", amount: "¥7,000" },
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
            { label: "1 hour / once a week", amount: "JPY 11,000" },
            { label: "1 hour / twice a week", amount: "JPY 20,000" },
            { label: "1 hour / three times a week", amount: "JPY 28,000" },
            { label: "1 hour / four times a week", amount: "JPY 35,000" },
            { label: "1 hour / five times a week", amount: "JPY 40,000" },
          ] as FeeLine[],
          otherFees: [
            { label: "Admission fee (one-time)", amount: "JPY 15,000" },
            { label: "Annual materials fee", amount: "JPY 9,000" },
            { label: "Facility fee (annual)", amount: "JPY 7,000" },
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
