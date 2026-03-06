"use client";

import Link from "next/link";
import { LuCalendarCheck2, LuFilePenLine, LuJapaneseYen } from "react-icons/lu";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { useLanguage } from "../providers/LanguageProvider";

const HomeActionCtaSection = () => {
  const { language } = useLanguage();

  const copy =
    language === "ja"
      ? {
          eyebrow: "はじめの一歩",
          title: "気になる方はこちらから",
          actions: [
            {
              title: "料金を確認",
              body: "デイケア・英会話・アフタースクールの最新料金を一覧でチェック。",
              href: "/pricing",
              cta: "料金ページへ",
              icon: LuJapaneseYen,
              tone: "bg-[#ffe8ef] border-[#ffbfd0]",
              button: "bg-[#ff5f91] hover:bg-[#ec4a81]",
            },
            {
              title: "無料体験を予約",
              body: "初めてでも安心。教室の雰囲気とレッスンを体験できます。",
              href: "/contact",
              cta: "体験を申し込む",
              icon: LuCalendarCheck2,
              tone: "bg-[#e8f7ff] border-[#b9e6fb]",
              button: "bg-[#1ca8e8] hover:bg-[#0f98d8]",
            },
            {
              title: "入学手順を見る",
              body: "体験から入会までの流れをわかりやすくご案内しています。",
              href: "/admissions",
              cta: "入学案内へ",
              icon: LuFilePenLine,
              tone: "bg-[#edfbe7] border-[#c8efba]",
              button: "bg-[#3db85a] hover:bg-[#2fa04a]",
            },
          ],
        }
      : {
          eyebrow: "Start Here",
          title: "Choose your next step",
          actions: [
            {
              title: "Check pricing",
              body: "View daycare, Eikaiwa, and after-school rates in one place.",
              href: "/pricing",
              cta: "Open pricing",
              icon: LuJapaneseYen,
              tone: "bg-[#ffe8ef] border-[#ffbfd0]",
              button: "bg-[#ff5f91] hover:bg-[#ec4a81]",
            },
            {
              title: "Book a free trial",
              body: "Try a class first and feel the classroom atmosphere.",
              href: "/contact",
              cta: "Book trial",
              icon: LuCalendarCheck2,
              tone: "bg-[#e8f7ff] border-[#b9e6fb]",
              button: "bg-[#1ca8e8] hover:bg-[#0f98d8]",
            },
            {
              title: "See admissions",
              body: "Follow the enrollment steps from trial to class start.",
              href: "/admissions",
              cta: "Admissions guide",
              icon: LuFilePenLine,
              tone: "bg-[#edfbe7] border-[#c8efba]",
              button: "bg-[#3db85a] hover:bg-[#2fa04a]",
            },
          ],
        };

  return (
    <FadeIn>
      <section className="bg-white py-12 md:py-16">
        <Container className="space-y-7 py-0">
          <div className="space-y-2 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              {copy.eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{copy.title}</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {copy.actions.map((action) => {
              const Icon = action.icon;
              return (
                <article
                  key={action.title}
                  className={`rounded-3xl border-2 p-6 shadow-[0_10px_22px_rgba(15,23,42,0.08)] ${action.tone}`}
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-slate-800 shadow-sm">
                    <Icon />
                  </span>
                  <h3 className="mt-4 text-2xl font-extrabold text-slate-900">{action.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">{action.body}</p>
                  <Link
                    href={action.href}
                    className={`mt-5 inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-bold text-white transition ${action.button}`}
                  >
                    {action.cta}
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </FadeIn>
  );
};

export default HomeActionCtaSection;
