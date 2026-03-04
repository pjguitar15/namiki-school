"use client";

import Link from "next/link";
import { LuCalendarDays, LuCoins, LuGift, LuSparkles } from "react-icons/lu";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { useLanguage } from "../providers/LanguageProvider";

const PricingTeaserSection = () => {
  const { language } = useLanguage();

  const copy =
    language === "ja"
      ? {
          eyebrow: "料金のご案内",
          title: "お子さまに合うプランを見つけよう",
          description:
            "デイケア、アフタースクール、英会話の料金をまとめてチェック。回数や時間に合わせて選べます。",
          cta: "料金ページを見る",
          cards: [
            { icon: LuCoins, title: "通いやすい料金", text: "週1回から週5回まで、家庭に合わせて選択可能。" },
            { icon: LuCalendarDays, title: "時間帯いろいろ", text: "8:00〜17:00、10:00〜15:00、放課後の各コースあり。" },
            { icon: LuGift, title: "無料体験あり", text: "はじめてでも安心。入会前に教室の雰囲気を体験できます。" },
          ],
        }
      : {
          eyebrow: "Pricing Guide",
          title: "Find the best plan for your child",
          description:
            "Compare daycare, after-school, and one-hour Eikaiwa plans in one place. Choose by days and schedule.",
          cta: "View Pricing",
          cards: [
            { icon: LuCoins, title: "Flexible tuition", text: "Choose from 1 to 5 days per week based on your needs." },
            { icon: LuCalendarDays, title: "Multiple time slots", text: "Includes 8:00-17:00, 10:00-15:00, and after-school options." },
            { icon: LuGift, title: "Free trial", text: "Try a class first and feel confident before enrollment." },
          ],
        };

  return (
    <FadeIn>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fff7e8] via-[#f5fcff] to-white py-14 md:py-18">
        <div className="pointer-events-none absolute -left-12 top-0 h-44 w-44 rounded-full bg-[#ffd98f]/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-52 w-52 rounded-full bg-[#9ee7ff]/45 blur-3xl" />

        <Container className="relative z-10 py-0">
          <div className="rounded-[2rem] border border-[#ffe3a7] bg-white/95 p-6 shadow-[0_14px_30px_rgba(15,23,42,0.08)] md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl space-y-3">
                <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
                  <LuSparkles />
                  {copy.eyebrow}
                </p>
                <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{copy.title}</h2>
                <p className="text-base text-slate-600 md:text-lg">{copy.description}</p>
              </div>

              <Link
                href="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#ff7a1a] px-6 text-sm font-bold text-white shadow-[0_8px_18px_rgba(249,115,22,0.35)] transition hover:bg-[#ef6c00]"
              >
                {copy.cta}
              </Link>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {copy.cards.map((card, index) => {
                const Icon = card.icon;
                const tones = [
                  "bg-[#ffe7f1] border-[#ffbfdb]",
                  "bg-[#e3f6ff] border-[#b9e7fb]",
                  "bg-[#e9fae6] border-[#c8efbf]",
                ];
                return (
                  <article
                    key={card.title}
                    className={`rounded-2xl border p-5 ${tones[index % tones.length]}`}
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-slate-700 shadow-sm">
                      <Icon />
                    </span>
                    <h3 className="mt-3 text-xl font-extrabold text-slate-900">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">{card.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </FadeIn>
  );
};

export default PricingTeaserSection;
