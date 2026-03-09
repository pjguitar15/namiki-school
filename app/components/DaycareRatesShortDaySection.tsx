"use client";

import { LuBadgeDollarSign, LuCalendarDays, LuClock3, LuGift } from "react-icons/lu";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { useLanguage } from "../providers/LanguageProvider";

type FeeLine = {
  label: string;
  amount: string;
};

type HourLine = {
  label: string;
  time: string;
};

const DaycareRatesShortDaySection = () => {
  const { language } = useLanguage();

  const copy =
    language === "ja"
      ? {
          eyebrow: "\u30c7\u30a4\u30b1\u30a2\u6599\u91d1\uff08\u77ed\u6642\u9593\uff09",
          title: "Short-Hour English Daycare",
          subtitle: "\u77ed\u6642\u9593\u82f1\u8a9e\u30c7\u30a4\u30b1\u30a2 \u30b3\u30fc\u30b9\u30fb\u6599\u91d1",
          schedule: "\u6708\u301c\u91d1\u958b\u8b1b",
          programHoursTitle: "\u30d7\u30ed\u30b0\u30e9\u30e0\u6642\u9593",
          programHours: [
            { label: "\u30aa\u30d7\u30b7\u30e7\u30f31", time: "\u6708\u301c\u91d1 9:00\u301c12:00" },
            { label: "\u30aa\u30d7\u30b7\u30e7\u30f32", time: "\u6708\u301c\u91d1 10:00\u301c14:00" },
          ] as HourLine[],
          intro:
            "\u77ed\u6642\u9593\u82f1\u8a9e\u30c7\u30a4\u30b1\u30a2\u3067\u306f\u3001\u904a\u3073\u30fb\u6b4c\u30fb\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30fb\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u901a\u3057\u3066\u3001\u5b50\u3069\u3082\u305f\u3061\u304c\u81ea\u7136\u306b\u82f1\u8a9e\u3092\u5b66\u3079\u308b\u74b0\u5883\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002",
          tuitionTitle: "\u6708\u984d\u6388\u696d\u6599",
          otherFeesTitle: "\u305d\u306e\u4ed6\u8cbb\u7528",
          trialTitle: "無料体験レッスン",
          trialBody:
            "ご入会前に英語デイケアを体験できる無料体験レッスンをご用意しています。",
          tuition: [
            { label: "\u90311\u56de", amount: "\u00a512,000" },
            { label: "\u90312\u56de", amount: "\u00a520,000" },
            { label: "\u90313\u56de", amount: "\u00a528,000" },
            { label: "\u90314\u56de", amount: "\u00a535,000" },
            { label: "\u90315\u56de", amount: "\u00a542,000" },
          ] as FeeLine[],
          otherFees: [
            { label: "\u5165\u4f1a\u91d1\uff08\u521d\u56de\u306e\u307f\uff09", amount: "\u00a540,000" },
            { label: "\u6559\u6750\u8cbb\uff086\u30f6\u6708\u3054\u3068\uff09", amount: "\u00a58,000" },
            { label: "\u65bd\u8a2d\u8cbb\uff086\u30f6\u6708\u3054\u3068\uff09", amount: "\u00a57,000" },
            { label: "\u5ef6\u9577\u6599\u91d1 30\u5206", amount: "\u00a5600" },
          ] as FeeLine[],
        }
      : {
          eyebrow: "Daycare Pricing (Short Hour)",
          title: "Short-Hour English Daycare",
          subtitle: "Courses & Rates",
          schedule: "Monday-Friday",
          programHoursTitle: "Program Hours",
          programHours: [
            { label: "Option 1", time: "Monday-Friday, 9:00-12:00" },
            { label: "Option 2", time: "Monday-Friday, 10:00-14:00" },
          ] as HourLine[],
          intro:
            "Our short-hour daycare program provides a fun and safe English immersion environment where children learn naturally through play, songs, activities, and communication.",
          tuitionTitle: "Tuition Fees (Monthly)",
          otherFeesTitle: "Other Fees",
          trialTitle: "Free Trial Lesson",
          trialBody:
            "We offer a free trial lesson so families can experience our English daycare before enrollment.",
          tuition: [
            { label: "1 day per week", amount: "¥12,000" },
            { label: "2 days per week", amount: "¥20,000" },
            { label: "3 days per week", amount: "¥28,000" },
            { label: "4 days per week", amount: "¥35,000" },
            { label: "5 days per week", amount: "¥42,000" },
          ] as FeeLine[],
          otherFees: [
            { label: "Admission fee (one-time)", amount: "¥40,000" },
            { label: "Materials fee (every 6 months)", amount: "¥8,000" },
            { label: "Facility fee (every 6 months)", amount: "¥7,000" },
            { label: "Extension fee / 30 minutes", amount: "¥600" },
          ] as FeeLine[],
        };

  return (
    <FadeIn>
      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        <div className="pointer-events-none absolute -left-10 top-0 h-52 w-52 rounded-full bg-rose-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-52 w-52 rounded-full bg-sky-100/60 blur-3xl" />

        <Container className="relative z-10 space-y-8 py-0">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">
              {copy.eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{copy.title}</h2>
            <p className="text-base text-slate-600 md:text-lg">{copy.subtitle}</p>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
              <LuCalendarDays className="text-rose-500" />
              <span>{copy.schedule}</span>
            </div>
            <div className="mx-auto w-full max-w-xl rounded-2xl border border-rose-100 bg-white p-4 text-left shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rose-600">
                {copy.programHoursTitle}
              </p>
              <ul className="mt-3 space-y-2">
                {copy.programHours.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between gap-2 rounded-xl bg-rose-50 px-3 py-2"
                  >
                    <span className="text-sm font-semibold text-slate-700">{item.label}</span>
                    <span className="text-sm font-semibold text-slate-700">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">{copy.intro}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border-2 border-rose-200 bg-white p-6 shadow-[0_12px_26px_rgba(15,23,42,0.08)] md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500 text-xl text-white">
                  <LuBadgeDollarSign />
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">{copy.tuitionTitle}</h3>
              </div>
              <ul className="space-y-3">
                {copy.tuition.map((item) => (
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

            <article className="rounded-3xl border-2 border-sky-200 bg-white p-6 shadow-[0_12px_26px_rgba(15,23,42,0.08)] md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-xl text-white">
                  <LuClock3 />
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">{copy.otherFeesTitle}</h3>
              </div>
              <ul className="space-y-3">
                {copy.otherFees.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-sky-50 px-4 py-3"
                  >
                    <span className="text-sm font-semibold text-slate-700 md:text-base">{item.label}</span>
                    <span className="text-base font-extrabold text-sky-700 md:text-lg">{item.amount}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white shadow-[0_14px_30px_rgba(16,185,129,0.28)] md:p-8">
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

export default DaycareRatesShortDaySection;

