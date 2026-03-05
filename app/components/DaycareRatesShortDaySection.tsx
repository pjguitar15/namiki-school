"use client";

import { LuBadgeDollarSign, LuCalendarDays, LuClock3 } from "react-icons/lu";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { useLanguage } from "../providers/LanguageProvider";

type FeeLine = {
  label: string;
  amount: string;
};

const DaycareRatesShortDaySection = () => {
  const { language } = useLanguage();

  const copy =
    language === "ja"
      ? {
          eyebrow: "\u30c7\u30a4\u30b1\u30a2\u6599\u91d1\uff08\u77ed\u6642\u9593\uff09",
          title: "Daycare Courses & Rates",
          subtitle: "\u30c7\u30a4\u30b1\u30a2 \u30b3\u30fc\u30b9\u30fb\u6599\u91d1\u6848\u5185",
          schedule: "\u6708\u301c\u91d1 10:00\u301c15:00",
          tuitionTitle: "\u6708\u984d\u6388\u696d\u6599",
          otherFeesTitle: "\u305d\u306e\u4ed6\u8cbb\u7528",
          tuition: [
            { label: "\u90311\u56de", amount: "\u00a515,000" },
            { label: "\u90312\u56de", amount: "\u00a525,000" },
            { label: "\u90313\u56de", amount: "\u00a535,000" },
            { label: "\u90314\u56de", amount: "\u00a544,000" },
            { label: "\u90315\u65e5\uff08\u6708\u301c\u91d1\uff09", amount: "\u00a552,000" },
          ] as FeeLine[],
          otherFees: [
            { label: "\u5165\u4f1a\u91d1\uff08\u521d\u56de\u306e\u307f\uff09", amount: "\u00a530,000" },
            { label: "\u6559\u6750\u8cbb\uff086\u30f6\u6708\u3054\u3068\uff09", amount: "\u00a58,000" },
            { label: "\u65bd\u8a2d\u8cbb\uff086\u30f6\u6708\u3054\u3068\uff09", amount: "\u00a58,000" },
            { label: "\u5ef6\u9577\u6599\u91d1\uff0815:00\u4ee5\u964d\uff0930\u5206", amount: "\u00a5700" },
          ] as FeeLine[],
        }
      : {
          eyebrow: "Daycare Pricing (Short Day)",
          title: "Daycare Courses & Rates",
          subtitle: "Daycare Course & Fee Guide",
          schedule: "Mon-Fri 10:00-15:00",
          tuitionTitle: "Tuition Fees (Monthly)",
          otherFeesTitle: "Other Fees",
          tuition: [
            { label: "Once a week", amount: "JPY 15,000" },
            { label: "Twice a week", amount: "JPY 25,000" },
            { label: "Three times a week", amount: "JPY 35,000" },
            { label: "Four times a week", amount: "JPY 44,000" },
            { label: "Five times a week (Mon-Fri)", amount: "JPY 52,000" },
          ] as FeeLine[],
          otherFees: [
            { label: "Admission fee (one-time)", amount: "JPY 30,000" },
            { label: "Materials fee (every 6 months)", amount: "JPY 8,000" },
            { label: "Facility fee (every 6 months)", amount: "JPY 8,000" },
            { label: "Extension fee (after 15:00) / 30 mins", amount: "JPY 700" },
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
        </Container>
      </section>
    </FadeIn>
  );
};

export default DaycareRatesShortDaySection;
