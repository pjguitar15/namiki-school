"use client";

import { LuBadgeDollarSign, LuCalendarDays, LuClock3, LuGift } from "react-icons/lu";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { useLanguage } from "../providers/LanguageProvider";

type FeeLine = {
  label: string;
  amount: string;
};

const DaycareRatesSection = () => {
  const { language } = useLanguage();

  const copy =
    language === "ja"
      ? {
          eyebrow: "\u30c7\u30a4\u30b1\u30a2\u6599\u91d1",
          title: "English Daycare Program",
          schedule: "\u6708\u301c\u91d1 8:00\u301c17:00",
          intro:
            "英語デイケアでは、遊びや歌、アクティビティ、日常会話を通して自然に英語を学びます。安心で楽しい環境の中で、英語を聞く力・話す力を育てます。",
          tuitionTitle: "\u6708\u984d\u6388\u696d\u6599",
          otherFeesTitle: "\u305d\u306e\u4ed6\u8cbb\u7528",
          trialTitle: "\u7121\u6599\u4f53\u9a13\u30ec\u30c3\u30b9\u30f3\u5b9f\u65bd\u4e2d",
          trialBody:
            "\u3054\u5165\u4f1a\u524d\u306b\u30b9\u30af\u30fc\u30eb\u306e\u96f0\u56f2\u6c17\u3092\u4f53\u9a13\u3067\u304d\u308b\u3001\u7121\u6599\u4f53\u9a13\u30ec\u30c3\u30b9\u30f3\u3092\u5b9f\u65bd\u3057\u3066\u3044\u307e\u3059\u3002",
          tuition: [
            { label: "\u90311\u56de", amount: "\u00a519,000" },
            { label: "\u90312\u56de", amount: "\u00a532,500" },
            { label: "\u90313\u56de", amount: "\u00a544,000" },
            { label: "\u90314\u56de", amount: "\u00a553,000" },
            { label: "\u90315\u65e5\uff08\u6708\u301c\u91d1\uff09", amount: "\u00a562,000" },
          ] as FeeLine[],
          otherFees: [
            { label: "\u5165\u4f1a\u91d1\uff08\u521d\u56de\u306e\u307f\uff09", amount: "\u00a530,000" },
            { label: "\u6559\u6750\u8cbb\uff086\u30f6\u6708\u3054\u3068\uff09", amount: "\u00a58,000" },
            { label: "\u65bd\u8a2d\u8cbb\uff086\u30f6\u6708\u3054\u3068\uff09", amount: "\u00a58,000" },
            { label: "\u304a\u3084\u3064\u4ee3\uff08\u6708\u984d\uff09", amount: "\u00a53,000" },
            { label: "\u5ef6\u9577\u6599\u91d1\uff0817:00\u4ee5\u964d\uff0930\u5206", amount: "\u00a5700" },
          ] as FeeLine[],
        }
      : {
          eyebrow: "Daycare Pricing",
          title: "English Daycare Program",
          schedule: "Mon-Fri 8:00-17:00",
          intro:
            "Our English daycare provides a full-day environment where children learn English naturally through play, songs, activities, and daily communication.",
          tuitionTitle: "Tuition Fees (Monthly)",
          otherFeesTitle: "Other Fees",
          trialTitle: "Free Trial Available",
          trialBody:
            "We offer a free trial lesson so families can experience our English daycare before enrollment.",
          tuition: [
            { label: "Once a week", amount: "¥19,000" },
            { label: "Twice a week", amount: "¥32,500" },
            { label: "Three times a week", amount: "¥44,000" },
            { label: "Four times a week", amount: "¥53,000" },
            { label: "Five times a week (Mon-Fri)", amount: "¥62,000" },
          ] as FeeLine[],
          otherFees: [
            { label: "Admission fee (one-time)", amount: "¥30,000" },
            { label: "Materials fee (every 6 months)", amount: "¥8,000" },
            { label: "Facility fee (every 6 months)", amount: "¥8,000" },
            { label: "Snacks fee (monthly)", amount: "¥3,000" },
            { label: "Extension fee (after 17:00) / 30 mins", amount: "¥700" },
          ] as FeeLine[],
        };

  return (
    <FadeIn>
      <section className="relative overflow-hidden bg-[#f8fbff] py-16 md:py-20">
        <div className="pointer-events-none absolute -top-16 right-0 h-44 w-44 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-0 h-52 w-52 rounded-full bg-orange-200/45 blur-3xl" />

        <Container className="relative z-10 space-y-8 py-0">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              {copy.eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{copy.title}</h2>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
              <LuCalendarDays className="text-cyan-600" />
              <span>{copy.schedule}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">{copy.intro}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border-2 border-[#8fd3ff] bg-white p-6 shadow-[0_12px_26px_rgba(15,23,42,0.08)] md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-xl text-white">
                  <LuBadgeDollarSign />
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">{copy.tuitionTitle}</h3>
              </div>

              <ul className="space-y-3">
                {copy.tuition.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-cyan-50 px-4 py-3"
                  >
                    <span className="text-sm font-semibold text-slate-700 md:text-base">{item.label}</span>
                    <span className="text-base font-extrabold text-cyan-700 md:text-lg">{item.amount}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border-2 border-[#ffd487] bg-white p-6 shadow-[0_12px_26px_rgba(15,23,42,0.08)] md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-xl text-white">
                  <LuClock3 />
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">{copy.otherFeesTitle}</h3>
              </div>

              <ul className="space-y-3">
                {copy.otherFees.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-orange-50 px-4 py-3"
                  >
                    <span className="text-sm font-semibold text-slate-700 md:text-base">{item.label}</span>
                    <span className="text-base font-extrabold text-orange-700 md:text-lg">{item.amount}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white shadow-[0_14px_30px_rgba(16,185,129,0.28)] md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white/90">
                  <LuGift />
                  Trial
                </p>
                <h3 className="text-2xl font-extrabold md:text-3xl">{copy.trialTitle}</h3>
                <p className="text-sm text-white/90 md:text-base">{copy.trialBody}</p>
              </div>
            </div>
          </article>
        </Container>
      </section>
    </FadeIn>
  );
};

export default DaycareRatesSection;

