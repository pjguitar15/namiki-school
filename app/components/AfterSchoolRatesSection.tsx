"use client";

import { LuBookOpenCheck, LuClock3, LuGift, LuReceiptText } from "react-icons/lu";
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
          eyebrow: "ã‚¢ãƒ•ã‚¿ãƒ¼ã‚¹ã‚¯ãƒ¼ãƒ«æ–™é‡‘",
          title: "After-School English Program",
          subtitle: "ã‚¢ãƒ•ã‚¿ãƒ¼ã‚¹ã‚¯ãƒ¼ãƒ«è‹±èªžãƒ—ãƒ­ã‚°ãƒ©ãƒ ï¼ˆæœˆã€œé‡‘ 14:00ã€œ18:00ï¼‰",
          schedule: "æœˆã€œé‡‘ 14:00ã€œ18:00",
          intro:
            "ã‚¢ãƒ•ã‚¿ãƒ¼ã‚¹ã‚¯ãƒ¼ãƒ«ãƒ—ãƒ­ã‚°ãƒ©ãƒ ã§ã¯ã€æ”¾èª²å¾Œã«è‹±èªžã‚’æ¥½ã—ãå­¦ã¹ã‚‹ç’°å¢ƒã‚’æä¾›ã—ã¦ã„ã¾ã™ã€‚ä¼šè©±ã€ãƒ•ã‚©ãƒ‹ãƒƒã‚¯ã‚¹ã€ãƒªãƒ¼ãƒ‡ã‚£ãƒ³ã‚°ã€ãƒ©ã‚¤ãƒ†ã‚£ãƒ³ã‚°ã€ã‚¢ã‚¯ãƒ†ã‚£ãƒ“ãƒ†ã‚£ã‚’é€šã—ã¦è‹±èªžåŠ›ã‚’ä¼¸ã°ã—ã¾ã™ã€‚",
          tuitionTitle: "æœˆè¬",
          otherFeesTitle: "ãã®ä»–ã®è²»ç”¨",
          trialTitle: "ç„¡æ–™ä½“é¨“ãƒ¬ãƒƒã‚¹ãƒ³",
          trialBody:
            "ã”å…¥ä¼šå‰ã«ã‚¢ãƒ•ã‚¿ãƒ¼ã‚¹ã‚¯ãƒ¼ãƒ«è‹±èªžãƒ—ãƒ­ã‚°ãƒ©ãƒ ã®ç„¡æ–™ä½“é¨“ãƒ¬ãƒƒã‚¹ãƒ³ã‚’å—ã‘ã‚‹ã“ã¨ãŒã§ãã¾ã™ã€‚",
          tablePlan: "ãƒ—ãƒ©ãƒ³",
          tablePrice: "æœˆè¬",
          tuition: [
            { plan: "é€±1å›ž", price: "Â¥14,000" },
            { plan: "é€±2å›ž", price: "Â¥24,000" },
            { plan: "é€±3å›ž", price: "Â¥33,000" },
            { plan: "é€±4å›ž", price: "Â¥40,000" },
            { plan: "é€±5å›ž", price: "Â¥46,000" },
          ] as TuitionRow[],
          fees: [
            { label: "å…¥ä¼šé‡‘ï¼ˆåˆå›žã®ã¿ï¼‰", amount: "Â¥30,000" },
            { label: "æ•™æè²»ï¼ˆ6ãƒ¶æœˆã”ã¨ï¼‰", amount: "Â¥8,000" },
            { label: "æ–½è¨­è²»ï¼ˆ6ãƒ¶æœˆã”ã¨ï¼‰", amount: "Â¥8,000" },
            { label: "ãŠã‚„ã¤ä»£ï¼ˆå­¦æ ¡ãŠè¿Žãˆè¾¼ã¿ãƒ»æœˆé¡ï¼‰", amount: "Â¥3,000" },
          ] as FeeLine[],
        }
      : {
          eyebrow: "After School Pricing",
          title: "After-School English Program",
          subtitle: "After-School English Program (Monday-Friday 14:00-18:00)",
          schedule: "Monday-Friday 2:00 PM-6:00 PM",
          intro:
            "Our After-School Program provides a fun and supportive place for children to continue learning English after school. Students practice conversation, phonics, reading, writing, and communication through enjoyable activities.",
          tuitionTitle: "Tuition Fees",
          otherFeesTitle: "Other Fees",
          trialTitle: "Free Trial Lesson",
          trialBody:
            "We offer a free trial lesson so families can experience our After-School English program before enrollment.",
          tablePlan: "Plan",
          tablePrice: "Monthly Tuition",
          tuition: [
            { plan: "1 day per week", price: "¥14,000" },
            { plan: "2 days per week", price: "¥24,000" },
            { plan: "3 days per week", price: "¥33,000" },
            { plan: "4 days per week", price: "¥40,000" },
            { plan: "5 days per week", price: "¥46,000" },
          ] as TuitionRow[],
          fees: [
            { label: "Admission fee (one-time)", amount: "¥30,000" },
            { label: "Materials fee (every 6 months)", amount: "¥8,000" },
            { label: "Facility fee (every 6 months)", amount: "¥8,000" },
            { label: "Snack fee (with school pick-up, monthly)", amount: "¥3,000" },
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
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">{copy.intro}</p>
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

export default AfterSchoolRatesSection;

