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
          title: "通いやすい月額プラン",
          subtitle:
            "放課後クラスからロングセッションまで。年齢と目標に合わせて選べるプランです。",
          cta: "体験・相談はこちら",
          featuredLabel: "人気プラン",
          note:
            "入会金: ¥11,000 / 教材費: ¥2,200〜 (レベルにより変動)。すべて税込目安です。",
          plans: [
            {
              name: "アフタースクール スターター",
              price: "¥8,800 / 月",
              meta: "週1回・60分",
              features: ["3〜6歳向け", "フォニックス基礎", "月次フィードバック"],
            },
            {
              name: "アフタースクール プラス",
              price: "¥15,800 / 月",
              meta: "週2回・75分",
              features: ["小学生向け", "会話 + 読み書き", "発表アクティビティ"],
              featured: true,
            },
            {
              name: "ロングセッション インテンシブ",
              price: "¥27,500 / 月",
              meta: "週3回・120分",
              features: ["小学生〜中学生", "実践英会話", "プロジェクト学習"],
            },
          ] as Plan[],
        }
      : {
          label: "Pricing",
          title: "Flexible monthly packages",
          subtitle:
            "From after-school classes to long sessions, choose what matches your child’s pace and goals.",
          cta: "Book trial / consult",
          featuredLabel: "Most Popular",
          note:
            "Enrollment fee: ¥11,000 / Materials: from ¥2,200 depending on level. Prices are tax-included estimates.",
          plans: [
            {
              name: "After-School Starter",
              price: "¥8,800 / month",
              meta: "1x week • 60 mins",
              features: [
                "Ages 3-6 friendly",
                "Phonics foundation",
                "Monthly progress feedback",
              ],
            },
            {
              name: "After-School Plus",
              price: "¥15,800 / month",
              meta: "2x week • 75 mins",
              features: [
                "Elementary focused",
                "Speaking + reading/writing",
                "Presentation activities",
              ],
              featured: true,
            },
            {
              name: "Long Session Intensive",
              price: "¥27,500 / month",
              meta: "3x week • 120 mins",
              features: [
                "Elementary to junior high",
                "Practical English communication",
                "Project-based learning",
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
