'use client';

import Image from "next/image";
import Link from "next/link";
import { LuCalendarCheck2, LuClipboardCheck, LuCircleDollarSign, LuSchool, LuSparkles } from "react-icons/lu";
import AnnouncementBar from "../components/AnnouncementBar";
import Container from "../components/Container";
import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLanguage } from "../providers/LanguageProvider";

const AdmissionsPage = () => {
  const { content, language } = useLanguage();
  const admissions = content.admissionsPage;

  const labels =
    language === "ja"
      ? {
          eyebrow: "入学・お申込み",
          stepLabel: "3ステップ",
          stepTitle: "ご入学までの流れ",
          highlightTitle: "安心ポイント",
          ctaTitle: "まずは無料体験からはじめましょう",
          ctaBody:
            "ご希望の日時をお知らせいただければ、体験レッスンと個別相談をご案内します。料金・時間帯・クラス選びも丁寧にサポートします。",
          ctaPrimary: "体験を申し込む",
          ctaSecondary: "料金を確認する",
          supportTitle: "入学サポート",
          supportBody:
            "年齢・レベル・スケジュールに合わせて最適な学習プランをご提案します。",
          photoAlt1: "教室で活動する子どもたち",
          photoAlt2: "教材が整った教室の本棚",
        }
      : {
          eyebrow: "Admissions",
          stepLabel: "3 Steps",
          stepTitle: "How enrollment works",
          highlightTitle: "Why families choose us",
          ctaTitle: "Start with a free trial lesson",
          ctaBody:
            "Tell us your preferred schedule and we will arrange a trial plus consultation. We help you choose the right class, time slot, and learning plan.",
          ctaPrimary: "Book a trial",
          ctaSecondary: "View pricing",
          supportTitle: "Enrollment support",
          supportBody:
            "We recommend the best class setup based on age, level, and your weekly schedule.",
          photoAlt1: "Students participating in class",
          photoAlt2: "Classroom shelf with learning materials",
        };

  const stepThemes = [
    "from-[#ffe7f1] to-white border-[#ffc6db]",
    "from-[#e8f7ff] to-white border-[#bfe8fb]",
    "from-[#ecfae8] to-white border-[#cbeec1]",
  ];
  const stepIcons = [LuCalendarCheck2, LuClipboardCheck, LuSchool];
  const highlightTones = [
    "bg-[#fff1f6] border-[#ffd1e3]",
    "bg-[#ecf8ff] border-[#c8ebff]",
    "bg-[#eefbeb] border-[#d0efc8]",
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />

      <main className="flex flex-1 flex-col bg-white">
        <FadeIn>
          <section className="relative isolate overflow-hidden pb-14 pt-10 text-white md:pb-18 md:pt-14">
            <Image
              src="/assets/asset-7.jpg"
              alt="Students in classroom"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-slate-900/50" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-700/85 via-sky-600/60 to-teal-500/35" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(255,255,255,0.22),transparent_35%),radial-gradient(circle_at_78%_15%,rgba(255,255,255,0.16),transparent_35%)]" />

            <Container className="relative z-10 space-y-4 py-0">
              <p className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur">
                {labels.eyebrow}
              </p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
                {admissions.heroTitle}
              </h1>
              <p className="max-w-2xl text-base text-white/90 md:text-lg">{admissions.heroDescription}</p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-cyan-700 shadow-md transition hover:bg-cyan-50"
                >
                  {labels.ctaPrimary}
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/70 px-6 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  {labels.ctaSecondary}
                </Link>
              </div>
            </Container>
          </section>
        </FadeIn>

        <Container className="space-y-14 py-12 md:space-y-16 md:py-16">
          <FadeIn>
            <section className="grid gap-5 md:grid-cols-2">
              <article className="relative h-64 overflow-hidden rounded-3xl shadow-[0_16px_30px_rgba(15,23,42,0.12)] md:h-80">
                <Image
                  src="/assets/asset-4.jpg"
                  alt={labels.photoAlt1}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </article>
              <article className="relative h-64 overflow-hidden rounded-3xl shadow-[0_16px_30px_rgba(15,23,42,0.12)] md:h-80">
                <Image
                  src="/classoom/5.jpg"
                  alt={labels.photoAlt2}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </article>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="space-y-5">
              <div className="space-y-2 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">{labels.stepLabel}</p>
                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{labels.stepTitle}</h2>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {admissions.steps.map((step, index) => {
                  const Icon = stepIcons[index % stepIcons.length];
                  return (
                    <article
                      key={step.title}
                      className={`rounded-3xl border bg-gradient-to-br p-6 shadow-[0_10px_24px_rgba(15,23,42,0.07)] ${stepThemes[index % stepThemes.length]}`}
                    >
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-slate-800 shadow-sm">
                        <Icon />
                      </span>
                      <p className="mt-4 text-lg font-extrabold text-slate-900">{step.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">{step.body}</p>
                    </article>
                  );
                })}
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="space-y-5">
              <div className="space-y-2 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">{labels.highlightTitle}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {admissions.highlights.map((item, index) => (
                  <article
                    key={item.title}
                    className={`rounded-2xl border p-5 shadow-sm ${highlightTones[index % highlightTones.length]}`}
                  >
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.detail}</p>
                  </article>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="rounded-[2rem] border border-cyan-200 bg-gradient-to-r from-cyan-500 to-sky-500 p-7 text-white shadow-[0_16px_30px_rgba(14,165,233,0.28)] md:p-10">
              <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                <div className="space-y-3">
                  <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-white/90">
                    <LuSparkles />
                    {labels.supportTitle}
                  </p>
                  <h3 className="text-3xl font-bold leading-tight md:text-4xl">{labels.ctaTitle}</h3>
                  <p className="text-sm text-white/90 md:text-base">{labels.ctaBody}</p>
                  <p className="text-sm text-white/90">{labels.supportBody}</p>
                </div>
                <div className="flex flex-col gap-3 md:items-end">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-cyan-700 shadow-md transition hover:bg-cyan-50"
                  >
                    {labels.ctaPrimary}
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/70 px-6 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    <LuCircleDollarSign className="mr-2" />
                    {labels.ctaSecondary}
                  </Link>
                </div>
              </div>
            </section>
          </FadeIn>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default AdmissionsPage;
