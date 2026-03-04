"use client";

import { LuBookOpenCheck, LuClock3, LuReceiptText } from "react-icons/lu";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { useLanguage } from "../providers/LanguageProvider";

type TuitionRow = {
  plan: string;
  price: string;
};

type FeeLine = {
  label: string;
  amount: string;
};

const AfterSchoolRatesSection = () => {
  const { language } = useLanguage();

  const copy =
    language === "ja"
      ? {
          eyebrow: "アフタースクール料金",
          title: "After School Program",
          subtitle: "ナミキイングリッシュスクール アフタースクールプログラム",
          schedule: "月〜金 15:00〜18:00",
          tuitionTitle: "月謝",
          otherFeesTitle: "その他の費用",
          tablePlan: "プラン",
          tablePrice: "月謝",
          tuition: [
            { plan: "週1回", price: "¥12,000" },
            { plan: "週2回", price: "¥22,000" },
            { plan: "週3回", price: "¥30,000" },
            { plan: "週4回", price: "¥36,000" },
            { plan: "週5回", price: "¥40,000" },
          ] as TuitionRow[],
          fees: [
            { label: "入会金（初回のみ）", amount: "¥10,000" },
            { label: "年間運営管理費", amount: "¥12,000" },
            { label: "年間教材費", amount: "¥8,000" },
            { label: "施設費", amount: "¥6,000" },
            { label: "おやつ代（学校お迎え込み・月額）", amount: "¥3,000" },
          ] as FeeLine[],
        }
      : {
          eyebrow: "After School Pricing",
          title: "After School Program",
          subtitle: "Namiki English School After School Program",
          schedule: "Monday-Friday 3:00 PM-6:00 PM",
          tuitionTitle: "Tuition Fees",
          otherFeesTitle: "Other Fees",
          tablePlan: "Plan",
          tablePrice: "Monthly Tuition",
          tuition: [
            { plan: "1 day per week", price: "JPY 12,000" },
            { plan: "2 days per week", price: "JPY 22,000" },
            { plan: "3 days per week", price: "JPY 30,000" },
            { plan: "4 days per week", price: "JPY 36,000" },
            { plan: "5 days per week", price: "JPY 40,000" },
          ] as TuitionRow[],
          fees: [
            { label: "Admission fee (one-time)", amount: "JPY 10,000" },
            { label: "Annual tuition administrative fee", amount: "JPY 12,000" },
            { label: "Annual materials fee", amount: "JPY 8,000" },
            { label: "Facility fee", amount: "JPY 6,000" },
            { label: "Snack fee (with school pick-up, monthly)", amount: "JPY 3,000" },
          ] as FeeLine[],
        };

  return (
    <FadeIn>
      <section className="relative overflow-hidden bg-[#f7f7ff] py-16 md:py-20">
        <div className="pointer-events-none absolute -left-12 top-12 h-48 w-48 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-12 bottom-12 h-48 w-48 rounded-full bg-cyan-200/40 blur-3xl" />

        <Container className="relative z-10 space-y-8 py-0">
          <div className="mx-auto max-w-4xl space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
              {copy.eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{copy.title}</h2>
            <p className="text-base text-slate-600 md:text-lg">{copy.subtitle}</p>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
              <LuClock3 className="text-indigo-600" />
              <span>{copy.schedule}</span>
            </div>
          </div>

          <article className="overflow-hidden rounded-3xl border-2 border-indigo-200 bg-white shadow-[0_12px_26px_rgba(15,23,42,0.08)]">
            <div className="flex items-center gap-3 border-b border-indigo-100 bg-indigo-50 px-6 py-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-xl text-white">
                <LuBookOpenCheck />
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">{copy.tuitionTitle}</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[540px] border-collapse">
                <thead>
                  <tr className="bg-indigo-100/70 text-left">
                    <th className="px-5 py-3 text-sm font-bold text-slate-800">{copy.tablePlan}</th>
                    <th className="px-5 py-3 text-sm font-bold text-slate-800">{copy.tablePrice}</th>
                  </tr>
                </thead>
                <tbody>
                  {copy.tuition.map((row, index) => (
                    <tr key={row.plan} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-3 text-sm font-semibold text-slate-700 md:text-base">
                        {row.plan}
                      </td>
                      <td className="px-5 py-3 text-sm font-extrabold text-indigo-700 md:text-base">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="rounded-3xl border-2 border-cyan-200 bg-white p-6 shadow-[0_12px_26px_rgba(15,23,42,0.08)] md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-xl text-white">
                <LuReceiptText />
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">{copy.otherFeesTitle}</h3>
            </div>
            <ul className="space-y-3">
              {copy.fees.map((item) => (
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
        </Container>
      </section>
    </FadeIn>
  );
};

export default AfterSchoolRatesSection;
