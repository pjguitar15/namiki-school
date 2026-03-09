"use client";

import Link from "next/link";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { useLanguage } from "../providers/LanguageProvider";

type Plan = {
  name: string;
  price: string;
  meta: string;
  features: string[];
  featured?: boolean;
};

const cardThemes = [
  {
    wrapper: "bg-[#ffe3ea] border-[#ff7fa0]",
    price: "text-[#c2175b]",
    bullet: "bg-[#ff4f82]",
  },
  {
    wrapper: "bg-[#dcf7ff] border-[#47b8d9]",
    price: "text-[#0d728f]",
    bullet: "bg-[#00a7d1]",
  },
  {
    wrapper: "bg-[#fff3cf] border-[#ffc146]",
    price: "text-[#bb6c00]",
    bullet: "bg-[#ff9800]",
  },
] as const;

const PricingSection = () => {
  const { language } = useLanguage();

  const copy =
    language === "ja"
      ? {
          label: "料金プラン",
          title: "最新の料金一覧",
          subtitle:
            "デイケア（通常・短時間）、アフタースクール、英会話の月謝をまとめて確認できます。",
          cta: "体験・相談はこちら",
          featuredLabel: "おすすめ",
          note:
            "入会金はプログラムによって異なります。デイケア通常・アフタースクールは ¥30,000、短時間デイケアは ¥40,000、英会話は ¥15,000（いずれも初回のみ）です。",
          plans: [
            {
              name: "デイケア（通常・短時間）",
              price: "¥12,000〜¥62,000 / 月",
              meta: "月〜金（8:00〜17:00 / 9:00〜12:00・10:00〜14:00）",
              features: ["週1〜5回", "通常デイケア: おやつ代 月額 ¥3,000", "延長: 30分 ¥600〜¥700（コースにより異なります）"],
            },
            {
              name: "アフタースクール（14:00〜18:00）",
              price: "¥14,000〜¥46,000 / 月",
              meta: "月〜金",
              features: ["週1〜5回", "おやつ代 月額 ¥3,000", "教材費・施設費: 各¥8,000（6ヶ月ごと）"],
              featured: true,
            },
            {
              name: "英会話（1時間レッスン）",
              price: "¥11,000〜¥40,000 / 月",
              meta: "週1〜5回",
              features: ["入会金 ¥15,000（初回のみ）", "年間教材費 ¥9,000", "施設費（年1回）¥7,000"],
            },
          ] as Plan[],
        }
      : {
          label: "Pricing",
          title: "Updated Tuition Overview",
          subtitle:
            "See monthly tuition for daycare (full/short day), after-school, and one-hour Eikaiwa programs.",
          cta: "Book trial / consult",
          featuredLabel: "Recommended",
          note:
            "Admission fees vary by program: full-day daycare and after-school are ¥30,000, short-hour daycare is ¥40,000, and Eikaiwa is ¥15,000 (all one-time).",
          plans: [
            {
              name: "Daycare (full & short day)",
              price: "¥12,000-62,000 / month",
              meta: "Monday-Friday (8:00-17:00 / 9:00-12:00 or 10:00-14:00)",
              features: [
                "1 to 5 days per week",
                "Full-day daycare snack fee: ¥3,000 monthly",
                "Extension: ¥600-¥700 / 30 mins (varies by course)",
              ],
            },
            {
              name: "After-School (14:00-18:00)",
              price: "¥14,000-46,000 / month",
              meta: "Monday-Friday",
              features: [
                "1 to 5 days per week",
                "Snack fee: ¥3,000 monthly",
                "Materials and facility: ¥8,000 each (every 6 months)",
              ],
              featured: true,
            },
            {
              name: "Eikaiwa (1-hour lessons)",
              price: "¥11,000-40,000 / month",
              meta: "1 to 5 lessons per week",
              features: [
                "Admission fee: ¥15,000 (one-time)",
                "Annual materials fee: ¥9,000",
                "Facility fee: ¥7,000 (annual)",
              ],
            },
          ] as Plan[],
        };

  return (
    <FadeIn>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eefcff] via-white to-[#fff7ed] py-16 md:py-20">
        <div className="pointer-events-none absolute -left-12 top-8 h-36 w-36 rounded-full bg-[#ffd9e6]/70 blur-2xl" />
        <div className="pointer-events-none absolute -right-8 bottom-10 h-44 w-44 rounded-full bg-[#c9f7ff]/75 blur-2xl" />
        <Container className="relative z-10 space-y-9 py-0">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">
              {copy.label}
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{copy.title}</h2>
            <p className="text-base text-slate-600">{copy.subtitle}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {copy.plans.map((plan, index) => {
              const theme = cardThemes[index % cardThemes.length];

              return (
                <article
                  key={plan.name}
                  className={`relative rounded-[2rem] border-2 p-6 shadow-[0_10px_24px_rgba(15,23,42,0.08)] ${theme.wrapper} ${
                    plan.featured ? "md:-translate-y-2" : ""
                  }`}
                >
                  {plan.featured ? (
                    <span className="absolute -top-3 right-5 rounded-full bg-[#ff6d2d] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      {copy.featuredLabel}
                    </span>
                  ) : null}
                  <p className="text-lg font-extrabold text-slate-900">{plan.name}</p>
                  <p className={`mt-3 text-3xl font-black ${theme.price}`}>{plan.price}</p>
                  <p className="mt-1 text-sm text-slate-600">{plan.meta}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span
                          className={`mt-[6px] inline-block h-2.5 w-2.5 rounded-full ${theme.bullet}`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <div className="space-y-4 text-center">
            <p className="text-sm text-slate-500">{copy.note}</p>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#ff7a1a] px-6 text-sm font-bold text-white shadow-[0_8px_18px_rgba(249,115,22,0.35)] transition hover:bg-[#ef6c00]"
            >
              {copy.cta}
            </Link>
          </div>
        </Container>
      </section>
    </FadeIn>
  );
};

export default PricingSection;

