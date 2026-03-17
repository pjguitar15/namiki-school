"use client";

import Link from "next/link";
import { LuBadgeCheck, LuBriefcaseBusiness, LuGraduationCap, LuPhoneCall, LuUsers } from "react-icons/lu";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { useLanguage } from "../providers/LanguageProvider";

const HiringSpotlightSection = () => {
  const { language } = useLanguage();

  const copy =
    language === "ja"
      ? {
          hiring: "NOW HIRING",
          title: "英語教師募集中",
          subtitle: "子どもが好きで、英語教育に情熱のある先生を募集しています。",
          quickFacts: [
            { icon: LuBriefcaseBusiness, label: "募集職種", value: "English Teacher" },
            { icon: LuUsers, label: "対象", value: "Preschool・Kindergarten・Elementary" },
            { icon: LuGraduationCap, label: "応募条件", value: "学士以上（学部生相談可）" },
  { icon: LuBadgeCheck, label: "経験", value: "未経験可" },
          ],
          qualificationsTitle: "主な応募資格",
          qualifications: [
            "英語での指導に意欲がある方",
            "子どもと関わることが好きな方",
            "明るく責任感を持って働ける方",
          ],
          offerTitle: "待遇・環境",
          offer: [
            "フレンドリーな国際的環境",
            "少人数クラス",
            "研修・教材サポートあり",
          ],
          ctaPrimary: "応募・お問い合わせ",
          ctaSecondary: "電話で問い合わせ",
          callLabel: "080-2015-6832",
        }
      : {
          hiring: "NOW HIRING",
          title: "English Teacher Wanted",
          subtitle: "We are looking for passionate teachers who love working with children.",
          quickFacts: [
            { icon: LuBriefcaseBusiness, label: "Position", value: "English Teacher" },
            { icon: LuUsers, label: "Students", value: "Preschool, Kindergarten, Elementary" },
            { icon: LuGraduationCap, label: "Qualification", value: "Bachelor's degree or undergraduate" },
  { icon: LuBadgeCheck, label: "Experience", value: "No experience required" },
          ],
          qualificationsTitle: "Key Qualifications",
          qualifications: [
            "Passion for teaching in English",
            "Enjoys working with children",
            "Energetic, friendly, and responsible",
          ],
          offerTitle: "What We Offer",
          offer: [
            "Friendly international environment",
            "Small class sizes",
            "Training and materials provided",
          ],
          ctaPrimary: "Apply / Inquire",
          ctaSecondary: "Call Us",
          callLabel: "080-2015-6832",
        };

  return (
    <FadeIn>
      <section className="relative overflow-hidden bg-[#fff7d6] py-14 md:py-16">
        <div className="pointer-events-none absolute -left-10 top-8 h-32 w-32 rounded-full bg-[#ff5858]/30 blur-2xl" />
        <div className="pointer-events-none absolute -right-12 bottom-6 h-40 w-40 rounded-full bg-[#ffb937]/35 blur-2xl" />

        <Container className="relative z-10 py-0">
          <div className="rounded-[2rem] border-[3px] border-[#1d3557] bg-white p-6 shadow-[0_14px_35px_rgba(17,24,39,0.18)] md:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl space-y-3">
                <p className="inline-flex rounded-full bg-[#e63946] px-4 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-white md:text-sm">
                  {copy.hiring}
                </p>
                <h2 className="text-3xl font-black uppercase leading-tight text-slate-900 md:text-5xl">
                  {copy.title}
                </h2>
                <p className="max-w-2xl text-base font-medium text-slate-700 md:text-lg">
                  {copy.subtitle}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#1d3557] px-6 text-sm font-bold text-white transition hover:bg-[#14263f]"
                >
                  {copy.ctaPrimary}
                </Link>
                <Link
                  href={`tel:${copy.callLabel.replace(/-/g, "")}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-[#1d3557] bg-white px-6 text-sm font-bold text-[#1d3557] transition hover:bg-[#f1f6ff]"
                >
                  <LuPhoneCall />
                  {copy.ctaSecondary}
                </Link>
              </div>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {copy.quickFacts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <article
                    key={`${fact.label}-${fact.value}`}
                    className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4"
                  >
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      <Icon className="text-base text-slate-700" />
                      {fact.label}
                    </p>
                    <p className="mt-2 text-lg font-extrabold text-slate-900">{fact.value}</p>
                  </article>
                );
              })}
            </div>

            <div className="mt-7 grid gap-5 lg:grid-cols-2">
              <article className="rounded-2xl border border-[#c9defa] bg-[#eef6ff] p-5">
                <h3 className="text-lg font-extrabold text-slate-900">{copy.qualificationsTitle}</h3>
                <ul className="mt-3 space-y-2">
                  {copy.qualifications.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-medium text-slate-700">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#1d3557]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-[#f3d598] bg-[#fff4dc] p-5">
                <h3 className="text-lg font-extrabold text-slate-900">{copy.offerTitle}</h3>
                <ul className="mt-3 space-y-2">
                  {copy.offer.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-medium text-slate-700">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#d97706]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </Container>
      </section>
    </FadeIn>
  );
};

export default HiringSpotlightSection;
