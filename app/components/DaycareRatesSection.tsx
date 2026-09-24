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
  notes: string[];
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
  const trialLabel = isJa ? "無料体験" : "Trial";

  const copy = isJa
    ? {
        eyebrow: 'デイケア料金',
        title: 'English Daycare Program',
        subtitle:
          '通常デイケア、10:00〜15:00デイケア、短時間デイケアの違いを分かりやすく確認できます。',
        variants: [
          {
            id: 'full-day',
            title: 'デイケア（通常）',
            subtitle: 'English Daycare Program',
            schedule: '月〜金 8:00〜17:00',
            intro:
              '英語デイケアでは、遊びや歌、アクティビティ、日常会話を通して自然に英語を学びます。安心で楽しい環境の中で、英語を聞く力・話す力を育てます。',
            tuitionTitle: '月謝',
            otherFeesTitle: 'その他の費用',
            trialTitle: '無料体験レッスン',
            trialBody:
              'ご入会前に英語デイケアを体験できる無料体験レッスンをご用意しています。',
            tuition: [
              { label: '週1回', amount: '¥18,000' },
              { label: '週2回', amount: '¥30,000' },
              { label: '週3回', amount: '¥42,000' },
              { label: '週4回', amount: '¥52,000' },
              { label: '週5回（月〜金）', amount: '¥70,000' },
            ],
            otherFees: [
              { label: '入会金（初回のみ）', amount: '¥50,000' },
              { label: '教材費（6ヶ月ごと）', amount: '¥8,000' },
              { label: '施設費（6ヶ月ごと）', amount: '¥12,000' },
              { label: '保険料（年額）', amount: '¥5,000' },
              { label: '延長保育（30分ごと）', amount: '¥700' },
            ],
            notes: [
              '保育時間：月曜日から金曜日、午前8:00から午後5:00までです。',
              '保険料には、園児の傷害保険およびスクール安全保険が含まれます。',
              '昼食サービスを別途ご利用の場合を除き、お弁当をご持参ください。',
              '空き状況、見学、無料体験レッスンについてはお問い合わせください。',
            ],
            ctaLabel: '体験レッスンを予約',
          },
          {
            id: 'mid-day',
            title: 'デイケア（10:00〜15:00）',
            subtitle: 'English Daycare Program',
            schedule: '月〜金 10:00〜15:00',
            intro:
              '英語デイケアプログラムでは、ゲームや歌、アクティビティ、日常会話を通して、子どもたちが自然に英語を学べる環境を提供しています。',
            tuitionTitle: '月謝',
            otherFeesTitle: 'その他の費用',
            trialTitle: '無料体験レッスン',
            trialBody:
              'ご入会前に英語デイケアを体験できる無料体験レッスンをご用意しています。',
            tuition: [
              { label: '週1回', amount: '¥20,000' },
              { label: '週2回', amount: '¥34,000' },
              { label: '週3回', amount: '¥46,000' },
              { label: '週4回', amount: '¥56,000' },
              { label: '週5回', amount: '¥65,000' },
            ],
            otherFees: [
              { label: '入会金（初回のみ）', amount: '¥50,000' },
              { label: '教材費（6ヶ月ごと）', amount: '¥8,000' },
              { label: '施設費（6ヶ月ごと）', amount: '¥12,000' },
              { label: '保険料（年額）', amount: '¥5,000' },
              { label: '延長保育（30分ごと）', amount: '¥700' },
            ],
            notes: [
              '遊び・歌・ストーリー・アクティビティ・日常会話を通して、子どもたちは自然に英語を学びます。',
              'お弁当、水筒、着替え、室内履きをご用意ください。',
              '延長保育は事前予約でご利用いただけます。',
            ],
            ctaLabel: '体験レッスンを予約',
          },
          {
            id: 'short-hour',
            title: '短時間デイケア',
            subtitle: 'Short-Hour English Daycare',
            schedule: '月〜金',
            intro:
              '短時間の英語デイケアプログラムでは、安全で楽しい英語環境の中で子どもたちが自然に英語を学びます。遊び・歌・アクティビティ・コミュニケーションを通して英語力を育てます。',
            tuitionTitle: '月謝',
            otherFeesTitle: 'その他の費用',
            trialTitle: '無料体験レッスン',
            trialBody:
              'ご入会前に英語デイケアを体験できる無料体験レッスンをご用意しています。',
            recommendedLabel: 'おすすめ',
            optionsTitle: 'プログラム時間',
            options: [
              { label: 'オプション1', time: '月〜金 9:00〜13:00' },
              { label: 'オプション2', time: '月〜金 10:00〜14:00' },
            ],
            tuition: [
              { label: '週1回', amount: '¥14,000' },
              { label: '週2回', amount: '¥24,000' },
              { label: '週3回', amount: '¥33,000' },
              { label: '週4回', amount: '¥41,000' },
              { label: '週5回', amount: '¥48,000' },
            ],
            otherFees: [
              { label: '入会金（初回のみ）', amount: '¥50,000' },
              { label: '教材費（6ヶ月ごと）', amount: '¥8,000' },
              { label: '施設費（6ヶ月ごと）', amount: '¥12,000' },
              { label: '保険料（年額）', amount: '¥5,000' },
              { label: '延長保育（30分ごと）', amount: '¥700' },
            ],
            contactTitle: 'お問い合わせ',
            contactLine: 'Namiki English School / 080-2015-6832',
            notes: [
              '遊び・歌・ストーリー・アクティビティ・日常会話を通して、自然に英語を学びます。',
              'お弁当、水筒、着替え、室内履きをご用意ください。',
              '保険料は、生徒のけがに備える保険および学校安全補償に充てられます。',
              '延長保育は事前予約でご利用いただけます。',
            ],
            ctaLabel: '体験レッスンを予約',
          },
        ] as Variant[],
      }
    : {
        eyebrow: 'Daycare Pricing',
        title: 'English Daycare Program',
        subtitle:
          'Compare full-day daycare, 10:00-15:00 daycare, and short-hour daycare in one section.',
        variants: [
          {
            id: 'full-day',
            title: 'Daycare (Full Day)',
            subtitle: 'English Daycare Program',
            schedule: 'Monday-Friday 8:00-17:00',
            intro:
              'Our English daycare provides a full-day environment where children learn English naturally through play, songs, activities, and daily communication.',
            tuitionTitle: 'Monthly Tuition Fees',
            otherFeesTitle: 'Other Fees',
            trialTitle: 'Free Trial Lesson',
            trialBody:
              'We offer a free trial lesson so families can experience our English daycare before enrollment.',
            tuition: [
              { label: '1 day per week', amount: '¥18,000' },
              { label: '2 days per week', amount: '¥30,000' },
              { label: '3 days per week', amount: '¥42,000' },
              { label: '4 days per week', amount: '¥52,000' },
              { label: '5 days per week', amount: '¥70,000' },
            ],
            otherFees: [
              { label: 'Admission fee (one-time)', amount: '¥50,000' },
              { label: 'Materials fee (every 6 months)', amount: '¥8,000' },
              { label: 'Facility fee (every 6 months)', amount: '¥12,000' },
              { label: 'Insurance fee (annual)', amount: '¥5,000' },
              {
                label: 'Extended care / 30 minutes',
                amount: '¥700',
              },
            ],
            notes: [
              'Daycare hours: Monday to Friday, 8:00 AM - 5:00 PM.',
              'The insurance fee supports student accident and school safety coverage.',
              'Parents may bring a packed lunch unless lunch service is arranged separately.',
              'Please contact us for availability, a school visit, or a free trial lesson.',
            ],
            ctaLabel: 'Book Trial',
          },
          {
            id: 'mid-day',
            title: 'Daycare (10:00-15:00)',
            subtitle: 'English Daycare Program',
            schedule: 'Monday-Friday 10:00-15:00',
            intro:
              'Our English daycare program provides a friendly environment where children can learn English naturally through games, songs, activities, and daily communication.',
            tuitionTitle: 'Monthly Tuition Fees',
            otherFeesTitle: 'Other Fees',
            trialTitle: 'Free Trial Lesson',
            trialBody:
              'We offer a free trial lesson so families can experience our English daycare before enrollment.',
            tuition: [
              { label: '1 day per week', amount: '¥20,000' },
              { label: '2 days per week', amount: '¥34,000' },
              { label: '3 days per week', amount: '¥46,000' },
              { label: '4 days per week', amount: '¥56,000' },
              { label: '5 days per week', amount: '¥65,000' },
            ],
            otherFees: [
              { label: 'Admission fee (one-time)', amount: '¥50,000' },
              { label: 'Materials fee (every 6 months)', amount: '¥8,000' },
              { label: 'Facility fee (every 6 months)', amount: '¥12,000' },
              { label: 'Insurance fee (annual)', amount: '¥5,000' },
              { label: 'Extended care / 30 minutes', amount: '¥700' },
            ],
            notes: [
              'Children learn English naturally through play, songs, stories, activities, and daily conversation.',
              'Please bring a packed lunch, water bottle, spare clothes, and indoor shoes.',
              'Extended care is available by advance reservation.',
            ],
            ctaLabel: 'Book Trial',
          },
          {
            id: 'short-hour',
            title: 'Daycare (Short-Hour)',
            subtitle: 'Short-Hour English Daycare',
            schedule: 'Monday-Friday',
            intro:
              'Our short-hour daycare program provides a fun and safe English immersion environment where children learn naturally through play, songs, activities, and communication.',
            tuitionTitle: 'Monthly Tuition Fees',
            otherFeesTitle: 'Other Fees',
            trialTitle: 'Free Trial Lesson',
            trialBody:
              'We offer a free trial lesson so families can experience our English daycare before enrollment.',
            recommendedLabel: 'Recommended',
            optionsTitle: 'Program Hours',
            options: [
              { label: 'Option 1', time: 'Monday-Friday 9:00-13:00' },
              { label: 'Option 2', time: 'Monday-Friday 10:00-14:00' },
            ],
            tuition: [
              { label: '1 day per week', amount: '¥14,000' },
              { label: '2 days per week', amount: '¥24,000' },
              { label: '3 days per week', amount: '¥33,000' },
              { label: '4 days per week', amount: '¥41,000' },
              { label: '5 days per week', amount: '¥48,000' },
            ],
            otherFees: [
              { label: 'Admission fee (one-time)', amount: '¥50,000' },
              { label: 'Materials fee (every 6 months)', amount: '¥8,000' },
              { label: 'Facility fee (every 6 months)', amount: '¥12,000' },
              { label: 'Insurance fee (annual)', amount: '¥5,000' },
              { label: 'Extended care / 30 minutes', amount: '¥700' },
            ],
            contactTitle: 'Contact',
            contactLine: 'Namiki English School / 080-2015-6832',
            notes: [
              'Children learn English through play, songs, stories, activities, and daily conversation.',
              'Please bring a packed lunch, water bottle, spare clothes, and indoor shoes.',
              'Insurance fee supports student accident and school safety coverage.',
              'Extended care is available by advance reservation.',
            ],
            ctaLabel: 'Book Trial',
          },
        ] as Variant[],
      }

  return (
    <FadeIn viewportAmount={0.05}>
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
                            className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-white px-2.5 py-2 text-xs font-semibold text-slate-700"
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
                          className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2 text-sm"
                        >
                          <span className="text-slate-700">{item.label}</span>
                          <span className="shrink-0 font-extrabold text-slate-900">{item.amount}</span>
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
                          className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2 text-sm"
                        >
                          <span className="text-slate-700">{item.label}</span>
                          <span className="shrink-0 font-extrabold text-slate-900">{item.amount}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-cyan-50/50 p-4">
                    <h4 className="text-sm font-bold text-slate-900">
                      {isJa ? "プログラムについて" : "Program Notes"}
                    </h4>
                    <ul className="mt-2 list-disc space-y-2 pl-4 text-sm leading-relaxed text-slate-700">
                      {variant.notes.map((note) => <li key={note}>{note}</li>)}
                    </ul>
                    <p className="mt-3 text-sm font-bold text-cyan-800">
                      {variant.id === "full-day"
                        ? (isJa ? "英語で広がる、お子さまのグローバルな未来！" : "Give Your Child a Global Future Through English!")
                        : (isJa ? "楽しく・安心・英語環境" : "Fun · Safe · English Immersion")}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-500 to-teal-500 p-4 text-white">
                      <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/90">
                        <LuGift />
                        {trialLabel}
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
