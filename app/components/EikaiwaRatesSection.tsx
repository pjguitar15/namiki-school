"use client";

import { LuBadgeDollarSign, LuBookText, LuGift } from "react-icons/lu";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { useLanguage } from "../providers/LanguageProvider";

type FeeLine = {
  label: string;
  amount: string;
};

const tuition = [
  { days: 1, oneHour: "¥11,000", twoHours: "¥19,000" },
  { days: 2, oneHour: "¥20,000", twoHours: "¥34,000" },
  { days: 3, oneHour: "¥28,000", twoHours: "¥47,000" },
  { days: 4, oneHour: "¥35,000", twoHours: "¥58,000" },
  { days: 5, oneHour: "¥41,000", twoHours: "¥68,000" },
];

const EikaiwaRatesSection = () => {
  const { language } = useLanguage();
  const trialLabel = language === "ja" ? "無料体験" : "Trial";

  const copy =
    language === "ja"
      ? {
          eyebrow: "英会話料金",
          title: "Eikaiwa Program (1 or 2 Hour Lessons)",
          subtitle: "英会話プログラム（1時間・2時間レッスン）",
          tuitionTitle: "月額授業料",
          daysHeading: "週の通学日数",
          oneHourHeading: "1時間",
          twoHoursHeading: "2時間",
          tuitionNote: "月謝は週の通学日数に基づきます。レッスン時間は1日1時間または2時間です。",
          otherFeesTitle: "その他費用",
          trialTitle: "無料体験レッスン実施中",
          trialBody:
            "ご入会前に英会話レッスンを体験できる無料体験レッスンを実施しています。",
          otherFees: [
            { label: "入会金（初回のみ）", amount: "¥40,000" },
            { label: "教材費（6ヶ月ごと）", amount: "¥8,000" },
            { label: "施設費（6ヶ月ごと）", amount: "¥8,000" },
            { label: "延長料金（30分ごと）", amount: "¥700" },
          ] as FeeLine[],
        }
      : {
          eyebrow: "Eikaiwa Pricing",
          title: "Eikaiwa Program (1 or 2 Hour Lessons)",
          subtitle: "One- or two-hour conversation lessons",
          tuitionTitle: "Tuition Fees (Monthly)",
          daysHeading: "Days per Week",
          oneHourHeading: "1 Hour",
          twoHoursHeading: "2 Hours",
          tuitionNote: "Monthly tuition is based on the number of days attended each week. Lesson options: 1 hour or 2 hours per day.",
          otherFeesTitle: "Other Fees",
          trialTitle: "Free Trial Available",
          trialBody:
            "We offer a free trial lesson so students can experience our Eikaiwa classes before enrollment.",
          otherFees: [
            { label: "Admission fee (one-time)", amount: "¥40,000" },
            { label: "Materials fee (every 6 months)", amount: "¥8,000" },
            { label: "Facility fee (every 6 months)", amount: "¥8,000" },
            { label: "Extension fee / 30 minutes", amount: "¥700" },
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

              <table className="w-full table-fixed text-left text-xs sm:text-sm">
                <caption className="sr-only">{copy.tuitionTitle}</caption>
                <thead>
                  <tr className="border-b border-amber-200 text-slate-700">
                    <th scope="col" className="w-[40%] px-2 py-3 font-semibold">{copy.daysHeading}</th>
                    <th scope="col" className="px-2 py-3 text-right font-semibold">{copy.oneHourHeading}</th>
                    <th scope="col" className="px-2 py-3 text-right font-semibold">{copy.twoHoursHeading}</th>
                  </tr>
                </thead>
                <tbody>
                  {tuition.map((row) => (
                    <tr key={row.days} className="border-b border-amber-100 odd:bg-amber-50">
                      <th scope="row" className="px-2 py-4 font-semibold text-slate-700">
                        {language === "ja" ? `週${row.days}日` : `${row.days} ${row.days === 1 ? "day" : "days"}`}
                      </th>
                      <td className="whitespace-nowrap px-2 py-4 text-right font-extrabold text-amber-700">{row.oneHour}</td>
                      <td className="whitespace-nowrap px-2 py-4 text-right font-extrabold text-amber-700">{row.twoHours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{copy.tuitionNote}</p>
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
                    <span className="shrink-0 text-base font-extrabold text-rose-700 md:text-lg">{item.amount}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="rounded-3xl border border-violet-200 bg-gradient-to-r from-violet-500 to-fuchsia-500 p-6 text-white shadow-[0_14px_30px_rgba(124,58,237,0.28)] md:p-8">
            <div className="space-y-2">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white/90">
                <LuGift />
                {trialLabel}
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
