"use client";

import Link from "next/link";
import { LuCalendarDays, LuGift } from "react-icons/lu";
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

type Variant = {
  id: string;
  title: string;
  subtitle: string;
  schedule: string;
  intro: string;
  tuitionTitle: string;
  otherFeesTitle: string;
  trialTitle: string;
  trialBody: string;
  tuition: FeeLine[];
  otherFees: FeeLine[];
  options?: HourLine[];
  optionsTitle?: string;
  recommendedLabel?: string;
  contactTitle?: string;
  contactLine?: string;
  ctaLabel: string;
};

const DaycareRatesSection = () => {
  const { language } = useLanguage();

  const isJa = language === "ja";

  const copy = isJa
    ? {
        eyebrow: "デイケア料金",
        title: "English Daycare Program",
        subtitle:
          "通常デイケア、10:00〜15:00デイケア、短時間デイケアの違いを分かりやすく確認できます。",
        variants: [
          {
            id: "full-day",
            title: "デイケア（通常）",
            subtitle: "English Daycare Program",
            schedule: "月〜金 8:00〜17:00",
            intro:
              "英語デイケアでは、遊びや歌、アクティビティ、日常会話を通して自然に英語を学びます。安心で楽しい環境の中で、英語を聞く力・話す力を育てます。",
            tuitionTitle: "月謝",
            otherFeesTitle: "その他の費用",
            trialTitle: "無料体験レッスン",
            trialBody:
              "ご入会前に英語デイケアを体験できる無料体験レッスンをご用意しています。",
            tuition: [
              { label: "週1回", amount: "¥19,000" },
              { label: "週2回", amount: "¥32,500" },
              { label: "週3回", amount: "¥44,000" },
              { label: "週4回", amount: "¥53,000" },
              { label: "週5回（月〜金）", amount: "¥62,000" },
            ],
            otherFees: [
              { label: "入会金（初回のみ）", amount: "¥30,000" },
              { label: "教材費（6ヶ月ごと）", amount: "¥8,000" },
              { label: "施設費（6ヶ月ごと）", amount: "¥8,000" },
              { label: "おやつ代（月額）", amount: "¥3,000" },
              { label: "延長料金（17:00以降）30分", amount: "¥700" },
            ],
          },
          {
            id: "mid-day",
            title: "デイケア（10:00〜15:00）",
            subtitle: "English Daycare Program",
            schedule: "月〜金 10:00〜15:00",
            intro:
              "英語デイケアプログラムでは、ゲームや歌、アクティビティ、日常会話を通して、子どもたちが自然に英語を学べる環境を提供しています。",
            tuitionTitle: "月謝",
            otherFeesTitle: "その他の費用",
            trialTitle: "無料体験レッスン",
            trialBody:
              "ご入会前に英語デイケアを体験できる無料体験レッスンをご用意しています。",
            tuition: [
              { label: "週1回", amount: "¥15,000" },
              { label: "週2回", amount: "¥25,000" },
              { label: "週3回", amount: "¥35,000" },
              { label: "週4回", amount: "¥44,000" },
              { label: "週5回", amount: "¥52,000" },
            ],
            otherFees: [
              { label: "入会金（初回のみ）", amount: "¥30,000" },
              { label: "教材費（6ヶ月ごと）", amount: "¥8,000" },
              { label: "施設費（6ヶ月ごと）", amount: "¥8,000" },
              { label: "延長料金 30分", amount: "¥700" },
            ],
          },
          {
            id: "short-hour",
            title: "短時間デイケア",
            subtitle: "Short-Hour English Daycare",
            schedule: "月〜金",
            intro:
              "短時間の英語デイケアプログラムでは、安全で楽しい英語環境の中で子どもたちが自然に英語を学びます。遊び・歌・アクティビティ・コミュニケーションを通して英語力を育てます。",
            tuitionTitle: "月謝",
            otherFeesTitle: "その他の費用",
            trialTitle: "無料体験レッスン",
            trialBody:
              "ご入会前に英語デイケアを体験できる無料体験レッスンをご用意しています。",
            recommendedLabel: "おすすめ",
            optionsTitle: "プログラム時間",
            options: [
              { label: "オプション1", time: "月〜金 9:00〜12:00" },
              { label: "オプション2", time: "月〜金 10:00〜14:00" },
            ],
            tuition: [
              { label: "週1回", amount: "¥12,000" },
              { label: "週2回", amount: "¥20,000" },
              { label: "週3回", amount: "¥28,000" },
              { label: "週4回", amount: "¥35,000" },
              { label: "週5回", amount: "¥42,000" },
            ],
            otherFees: [
              { label: "入会金（初回のみ）", amount: "¥40,000" },
              { label: "教材費（6ヶ月ごと）", amount: "¥8,000" },
              { label: "施設費（6ヶ月ごと）", amount: "¥7,000" },
              { label: "延長料金 30分", amount: "¥600" },
            ],
            contactTitle: "お問い合わせ",
            contactLine: "Namiki English School / 080-2015-6832",
            ctaLabel: "体験レッスンを予約",
          },
        ] as Variant[],
      }
    : {
        eyebrow: "Daycare Pricing",
        title: "English Daycare Program",
        subtitle:
          "Compare full-day daycare, 10:00-15:00 daycare, and short-hour daycare in one section.",
        variants: [
          {
            id: "full-day",
            title: "Daycare (Full Day)",
            subtitle: "English Daycare Program",
            schedule: "Monday-Friday 8:00-17:00",
            intro:
              "Our English daycare provides a full-day environment where children learn English naturally through play, songs, activities, and daily communication.",
            tuitionTitle: "Monthly Tuition Fees",
            otherFeesTitle: "Other Fees",
            trialTitle: "Free Trial Lesson",
            trialBody:
              "We offer a free trial lesson so families can experience our English daycare before enrollment.",
            tuition: [
              { label: "1 day per week", amount: "¥19,000" },
              { label: "2 days per week", amount: "¥32,500" },
              { label: "3 days per week", amount: "¥44,000" },
              { label: "4 days per week", amount: "¥53,000" },
              { label: "5 days per week", amount: "¥62,000" },
            ],
            otherFees: [
              { label: "Admission fee (one-time)", amount: "¥30,000" },
              { label: "Materials fee (every 6 months)", amount: "¥8,000" },
              { label: "Facility fee (every 6 months)", amount: "¥8,000" },
              { label: "Snack fee (monthly)", amount: "¥3,000" },
              { label: "Extension fee / 30 minutes (after 17:00)", amount: "¥700" },
            ],
            ctaLabel: "Book Trial",
          },
          {
            id: "mid-day",
            title: "Daycare (10:00-15:00)",
            subtitle: "English Daycare Program",
            schedule: "Monday-Friday 10:00-15:00",
            intro:
              "Our English daycare program provides a friendly environment where children can learn English naturally through games, songs, activities, and daily communication.",
            tuitionTitle: "Monthly Tuition Fees",
            otherFeesTitle: "Other Fees",
            trialTitle: "Free Trial Lesson",
            trialBody:
              "We offer a free trial lesson so families can experience our English daycare before enrollment.",
            tuition: [
              { label: "1 day per week", amount: "¥15,000" },
              { label: "2 days per week", amount: "¥25,000" },
              { label: "3 days per week", amount: "¥35,000" },
              { label: "4 days per week", amount: "¥44,000" },
              { label: "5 days per week", amount: "¥52,000" },
            ],
            otherFees: [
              { label: "Admission fee (one-time)", amount: "¥30,000" },
              { label: "Materials fee (every 6 months)", amount: "¥8,000" },
              { label: "Facility fee (every 6 months)", amount: "¥8,000" },
              { label: "Extension fee / 30 minutes", amount: "¥700" },
            ],
            ctaLabel: "Book Trial",
          },
          {
            id: "short-hour",
            title: "Daycare (Short-Hour)",
            subtitle: "Short-Hour English Daycare",
            schedule: "Monday-Friday",
            intro:
              "Our short-hour daycare program provides a fun and safe English immersion environment where children learn naturally through play, songs, activities, and communication.",
            tuitionTitle: "Monthly Tuition Fees",
            otherFeesTitle: "Other Fees",
            trialTitle: "Free Trial Lesson",
            trialBody:
              "We offer a free trial lesson so families can experience our English daycare before enrollment.",
            recommendedLabel: "Recommended",
            optionsTitle: "Program Hours",
            options: [
              { label: "Option 1", time: "Monday-Friday 9:00-12:00" },
              { label: "Option 2", time: "Monday-Friday 10:00-14:00" },
            ],
            tuition: [
              { label: "1 day per week", amount: "¥12,000" },
              { label: "2 days per week", amount: "¥20,000" },
              { label: "3 days per week", amount: "¥28,000" },
              { label: "4 days per week", amount: "¥35,000" },
              { label: "5 days per week", amount: "¥42,000" },
            ],
            otherFees: [
              { label: "Admission fee (one-time)", amount: "¥40,000" },
              { label: "Materials fee (every 6 months)", amount: "¥8,000" },
              { label: "Facility fee (every 6 months)", amount: "¥7,000" },
              { label: "Extension fee / 30 minutes", amount: "¥600" },
            ],
            contactTitle: "Contact",
            contactLine: "Namiki English School / 080-2015-6832",
            ctaLabel: "Book Trial",
          },
        ] as Variant[],
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
            <p className="text-sm text-slate-600 md:text-base">{copy.subtitle}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {copy.variants.map((variant) => (
              <article
                key={variant.id}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_26px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(15,23,42,0.15)] md:p-7"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                      {variant.subtitle}
                    </p>
                    {variant.recommendedLabel ? (
                      <span className="rounded-full bg-[#ff6d2d] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                        {variant.recommendedLabel}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900">{variant.title}</h3>
                  <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-800">
                    <LuCalendarDays />
                    <span>{variant.schedule}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700">{variant.intro}</p>

                  {variant.options && variant.optionsTitle ? (
                    <div className="rounded-2xl border border-cyan-100 bg-cyan-50/50 p-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
                        {variant.optionsTitle}
                      </p>
                      <ul className="mt-2 space-y-2">
                        {variant.options.map((opt) => (
                          <li
                            key={opt.label}
                            className="flex items-center justify-between rounded-lg bg-white px-2.5 py-2 text-xs font-semibold text-slate-700"
                          >
                            <span>{opt.label}</span>
                            <span>{opt.time}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  <div>
                    <p className="text-sm font-bold text-slate-900">{variant.tuitionTitle}</p>
                    <ul className="mt-2 space-y-2">
                      {variant.tuition.map((item) => (
                        <li
                          key={item.label}
                          className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-sm"
                        >
                          <span className="text-slate-700">{item.label}</span>
                          <span className="font-extrabold text-slate-900">{item.amount}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">{variant.otherFeesTitle}</p>
                    <ul className="mt-2 space-y-2">
                      {variant.otherFees.map((item) => (
                        <li
                          key={item.label}
                          className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-sm"
                        >
                          <span className="text-slate-700">{item.label}</span>
                          <span className="font-extrabold text-slate-900">{item.amount}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-500 to-teal-500 p-4 text-white">
                    <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/90">
                      <LuGift />
                      Trial
                    </p>
                    <p className="mt-1 text-base font-extrabold">{variant.trialTitle}</p>
                    <p className="mt-1 text-xs text-white/90">{variant.trialBody}</p>
                  </div>

                  {variant.contactTitle && variant.contactLine ? (
                    <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        {variant.contactTitle}
                      </p>
                      <p className="mt-1 font-semibold text-slate-800">{variant.contactLine}</p>
                    </div>
                  ) : null}

                  <Link
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#ff7a1a] px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#ef6c00]"
                  >
                    {variant.ctaLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </FadeIn>
  );
};

export default DaycareRatesSection;
