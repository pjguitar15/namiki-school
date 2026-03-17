"use client";

import Link from "next/link";
import {
  LuBadgeCheck,
  LuBookOpenCheck,
  LuBriefcaseBusiness,
  LuClock3,
  LuFileText,
  LuGraduationCap,
  LuPhoneCall,
  LuUsers,
} from "react-icons/lu";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { useLanguage } from "../providers/LanguageProvider";

const HiringPageContent = () => {
  const { language } = useLanguage();

  const copy =
    language === "ja"
      ? {
          badge: "\u63a1\u7528\u60c5\u5831",
          title: "\u82f1\u8a9e\u6559\u5e2b\u52df\u96c6",
          subtitle:
            "\u5b50\u3069\u3082\u306e\u6210\u9577\u3092\u652f\u3048\u308b\u6559\u5ba4\u904b\u55b6\u306e\u30e1\u30f3\u30d0\u30fc\u3092\u52df\u96c6\u4e2d\u3002\u6559\u80b2\u696d\u754c\u306e\u7d4c\u9a13\u306f\u554f\u3044\u307e\u305b\u3093\u3002",
          quickFacts: [
            { icon: LuBriefcaseBusiness, label: "\u8077\u7a2e", value: "English Teacher / Support Staff" },
            { icon: LuUsers, label: "\u5bfe\u8c61\u5e74\u9f62", value: "2\u6b73\u301c\u5c0f\u5b66\u751f" },
            { icon: LuGraduationCap, label: "\u5fdc\u52df\u6761\u4ef6", value: "\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u529b\u3068\u8cac\u4efb\u611f" },
            { icon: LuBadgeCheck, label: "\u7d4c\u9a13", value: "\u672a\u7d4c\u9a13\u53ef" },
          ],
          sections: [
            {
              icon: LuBookOpenCheck,
              title: "\u4e3b\u306a\u696d\u52d9\u5185\u5bb9",
              items: [
                "\u82f1\u8a9e\u30ec\u30c3\u30b9\u30f3\u306e\u6e96\u5099\u30fb\u9032\u884c\u30fb\u632f\u308a\u8fd4\u308a",
                "\u5b50\u3069\u3082\u306e\u5b66\u7fd2\u72b6\u6cc1\u3068\u751f\u6d3b\u9762\u306e\u898b\u5b88\u308a",
                "\u4fdd\u8b77\u8005\u3078\u306e\u9023\u7d61\u3068\u7c21\u5358\u306a\u9032\u6357\u5171\u6709",
                "\u30c1\u30fc\u30e0\u3068\u306e\u6253\u3061\u5408\u308f\u305b\u3001\u6559\u6750\u6574\u5099",
              ],
            },
            {
              icon: LuFileText,
              title: "\u3053\u3093\u306a\u65b9\u3092\u6b53\u8fce",
              items: [
                "\u5b50\u3069\u3082\u3068\u95a2\u308f\u308b\u4ed5\u4e8b\u304c\u597d\u304d\u306a\u65b9",
                "\u660e\u308b\u304f\u524d\u5411\u304d\u306b\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u304d\u308b\u65b9",
                "\u30de\u30cb\u30e5\u30a2\u30eb\u306b\u6cbf\u3063\u3066\u4e01\u5be7\u306b\u5bfe\u5fdc\u3067\u304d\u308b\u65b9",
                "\u6559\u80b2\u30fb\u4fdd\u80b2\u30fb\u30b5\u30fc\u30d3\u30b9\u696d\u306e\u7d4c\u9a13\u8005\u306f\u5c1a\u53ef",
              ],
            },
            {
              icon: LuClock3,
              title: "\u50cd\u304d\u65b9\u30a4\u30e1\u30fc\u30b8",
              items: [
                "\u5e73\u65e5\u4e2d\u5fc3\u306e\u30b7\u30d5\u30c8\u5236\uff08\u5348\u524d\u30fb\u5348\u5f8c\u306e\u8abf\u6574\u53ef\uff09",
                "\u9031\u5358\u4f4d\u3067\u696d\u52d9\u8a08\u753b\u3092\u7acb\u3066\u3066\u30c1\u30fc\u30e0\u3067\u9023\u643a",
                "\u7814\u4fee\u30fbOJT\u3042\u308a\u3001\u6559\u6750\u30b5\u30dd\u30fc\u30c8\u3042\u308a",
                "\u9577\u671f\u7684\u306b\u30b9\u30ad\u30eb\u3092\u7a4d\u307f\u4e0a\u3052\u3089\u308c\u308b\u74b0\u5883",
              ],
            },
          ],
          processTitle: "\u9078\u8003\u30d7\u30ed\u30bb\u30b9",
          process: [
            "\u30b9\u30c6\u30c3\u30d71: \u304a\u554f\u3044\u5408\u308f\u305b\u30fb\u5fdc\u52df",
            "\u30b9\u30c6\u30c3\u30d72: \u7c21\u5358\u306a\u9762\u8ac7\uff08\u5bfe\u9762\u307e\u305f\u306f\u30aa\u30f3\u30e9\u30a4\u30f3\uff09",
            "\u30b9\u30c6\u30c3\u30d73: \u30c8\u30e9\u30a4\u30a2\u30eb\u53c2\u52a0\u307e\u305f\u306f\u898b\u5b66",
            "\u30b9\u30c6\u30c3\u30d74: \u6761\u4ef6\u3059\u308a\u5408\u308f\u305b\u30fb\u958b\u59cb\u65e5\u8abf\u6574",
          ],
          ctaPrimary: "\u5fdc\u52df\u30fb\u304a\u554f\u3044\u5408\u308f\u305b",
          ctaSecondary: "\u96fb\u8a71\u3067\u76f8\u8ac7",
          callLabel: "080-2015-6832",
        }
      : {
          badge: "NOW HIRING",
          title: "Join Our Teaching Team",
          subtitle:
            "We are hiring friendly, reliable educators and classroom support staff. No prior teaching experience is required.",
          quickFacts: [
            { icon: LuBriefcaseBusiness, label: "Role", value: "English Teacher / Support Staff" },
            { icon: LuUsers, label: "Age Group", value: "2 years old to elementary" },
            { icon: LuGraduationCap, label: "Baseline", value: "Communication skills and responsibility" },
            { icon: LuBadgeCheck, label: "Experience", value: "No experience required" },
          ],
          sections: [
            {
              icon: LuBookOpenCheck,
              title: "Core Responsibilities",
              items: [
                "Prepare and lead age-appropriate English activities",
                "Support student learning, behavior, and classroom routines",
                "Share progress updates with families and team members",
                "Coordinate materials and weekly plans with the school team",
              ],
            },
            {
              icon: LuFileText,
              title: "Ideal Candidate Profile",
              items: [
                "Enjoys working with children in a positive environment",
                "Communicates clearly with teammates and families",
                "Can follow lesson frameworks while adapting to learner needs",
                "Background in education, childcare, or customer service is a plus",
              ],
            },
            {
              icon: LuClock3,
              title: "Work Style",
              items: [
                "Weekday-centered scheduling with flexible morning or afternoon shifts",
                "Team-based planning and regular check-ins",
                "Training and onboarding support provided",
                "Clear opportunities to build classroom and communication skills over time",
              ],
            },
          ],
          processTitle: "Hiring Process",
          process: [
            "Step 1: Send an inquiry or application",
            "Step 2: Short interview (in person or online)",
            "Step 3: Trial participation or classroom observation",
            "Step 4: Final fit check and start date alignment",
          ],
          ctaPrimary: "Apply / Inquire",
          ctaSecondary: "Call Us",
          callLabel: "080-2015-6832",
        };

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#fef3c7_0%,_#fff_50%,_#dbeafe_100%)] py-12 md:py-16">
      <div className="pointer-events-none absolute -left-20 top-8 h-56 w-56 rounded-full bg-[#fb7185]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#38bdf8]/20 blur-3xl" />

      <Container className="relative z-10 space-y-7 py-0 md:space-y-10">
        <FadeIn>
          <article className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-7 shadow-[0_24px_55px_rgba(15,23,42,0.12)] backdrop-blur md:p-10">
            <p className="inline-flex rounded-full bg-[#0f172a] px-4 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-white md:text-sm">
              {copy.badge}
            </p>
            <h1 className="mt-4 text-3xl font-black uppercase leading-tight text-slate-900 md:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-3 max-w-3xl text-base font-medium text-slate-700 md:text-lg">
              {copy.subtitle}
            </p>

            <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {copy.quickFacts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <article
                    key={`${fact.label}-${fact.value}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4"
                  >
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                      <Icon className="text-base text-slate-700" />
                      {fact.label}
                    </p>
                    <p className="mt-2 text-base font-extrabold text-slate-900">{fact.value}</p>
                  </article>
                );
              })}
            </div>
          </article>
        </FadeIn>

        <div className="grid gap-5 lg:grid-cols-3">
          {copy.sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <FadeIn key={section.title} delay={index * 0.06}>
                <article className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
                  <p className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-700">
                    <Icon />
                    {section.title}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm font-medium text-slate-700">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0f172a]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.14}>
          <article className="rounded-3xl border border-[#f0d4a9] bg-[#fff8ed] p-6 md:p-8">
            <h2 className="text-2xl font-extrabold text-slate-900">{copy.processTitle}</h2>
            <ol className="mt-4 grid gap-3 text-sm font-medium text-slate-700 md:grid-cols-2">
              {copy.process.map((step) => (
                <li key={step} className="rounded-xl border border-[#eed9b5] bg-white px-4 py-3">
                  {step}
                </li>
              ))}
            </ol>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#0f172a] px-6 text-sm font-bold text-white transition hover:bg-[#020617]"
              >
                {copy.ctaPrimary}
              </Link>
              <Link
                href={`tel:${copy.callLabel.replace(/-/g, "")}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-[#0f172a] bg-white px-6 text-sm font-bold text-[#0f172a] transition hover:bg-slate-100"
              >
                <LuPhoneCall />
                {copy.ctaSecondary}
              </Link>
            </div>
          </article>
        </FadeIn>
      </Container>
    </section>
  );
};

export default HiringPageContent;
