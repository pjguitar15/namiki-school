"use client";

import Image from "next/image";
import { LuBaby, LuBookOpenCheck, LuClock3, LuPencilLine } from "react-icons/lu";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { useLanguage } from "../providers/LanguageProvider";

type ClassCard = {
  title: string;
  age: string;
  description: string;
  points: string[];
};

const ClassesOverviewSection = () => {
  const { language } = useLanguage();

  const copy =
    language === "ja"
      ? {
          eyebrow: "クラス概要",
          heading: "Namiki English School クラス案内",
          subheading:
            "年齢と発達に合わせた4つのクラスで、楽しく実践的に英語力を育てます。",
          cards: [
            {
              title: "プリスクール",
              age: "2〜3歳",
              description:
                "安全で温かい環境の中、歌・フォニックス・絵本・日常活動を通して楽しく英語を学びます。",
              points: ["歌・フォニックス・絵本・日常活動", "安全で温かい学習環境"],
            },
            {
              title: "キンダーガーテン",
              age: "4〜6歳",
              description:
                "参加型レッスンと創造的な活動を通して、語彙力・スピーキング力・初期の読み書き力を育てます。",
              points: ["参加型レッスン", "創造的な活動で実践力を育成"],
            },
            {
              title: "エレメンタリー",
              age: "6〜12歳",
              description:
                "フォニックス・文法・リーディング・ライティング・英会話・宿題サポートを含む体系的な英語イマージョンプログラムです。",
              points: ["体系的な英語イマージョン", "宿題サポート対応"],
            },
            {
              title: "アフタースクール",
              age: "月〜金",
              description:
                "月曜日から金曜日まで実施し、学習サポートとコミュニケーション力向上を目指します。",
              points: ["月曜日〜金曜日開講", "学習サポートと表現力向上"],
            },
          ] as ClassCard[],
        }
      : {
          eyebrow: "Classes Overview",
          heading: "Namiki English School Class Guide",
          subheading:
            "Four age-based classes designed to build practical English skills in a joyful way.",
          cards: [
            {
              title: "Preschool Class",
              age: "Ages 2-3",
              description:
                "Play-based English learning through songs, phonics, storytelling, and daily routines in a safe environment.",
              points: ["Songs, phonics, storytelling, and daily routines", "Safe and nurturing environment"],
            },
            {
              title: "Kindergarten Class",
              age: "Ages 4-6",
              description:
                "Interactive lessons and creative activities to develop vocabulary, speaking confidence, and early literacy.",
              points: ["Builds vocabulary and speaking confidence", "Develops early reading and writing skills"],
            },
            {
              title: "Elementary Class",
              age: "Ages 6-12",
              description:
                "Structured immersion covering phonics, grammar, reading, writing, conversation, and homework support.",
              points: ["Phonics, grammar, reading, writing, and conversation", "Homework support included"],
            },
            {
              title: "After School Program",
              age: "Monday-Friday",
              description:
                "Extended English learning program available Monday to Friday, supporting academic growth and communication skills.",
              points: ["Available Monday to Friday", "Supports academic and communication growth"],
            },
          ] as ClassCard[],
        };

  const themes = [
    {
      card: "bg-[#ffe3f1] border-[#ff8ec1]",
      iconWrap: "bg-[#ff4f96] text-white",
      badge: "bg-[#ff4f96] text-white",
      dot: "bg-[#ff4f96]",
    },
    {
      card: "bg-[#dff4ff] border-[#6ecfff]",
      iconWrap: "bg-[#1da5e8] text-white",
      badge: "bg-[#1da5e8] text-white",
      dot: "bg-[#1da5e8]",
    },
    {
      card: "bg-[#fff6d9] border-[#ffd56a]",
      iconWrap: "bg-[#f2a900] text-slate-900",
      badge: "bg-[#f2a900] text-slate-900",
      dot: "bg-[#f2a900]",
    },
    {
      card: "bg-[#e9fbe7] border-[#9cdc8f]",
      iconWrap: "bg-[#32a852] text-white",
      badge: "bg-[#32a852] text-white",
      dot: "bg-[#32a852]",
    },
  ] as const;

  const icons = [LuBaby, LuPencilLine, LuBookOpenCheck, LuClock3];

  return (
    <FadeIn>
      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-50 to-transparent" />
        <Container className="relative space-y-10 py-0">
          <div className="mx-auto max-w-4xl space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              {copy.eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{copy.heading}</h2>
            <p className="text-base text-slate-600 md:text-lg">{copy.subheading}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {copy.cards.map((card, index) => {
              const Icon = icons[index % icons.length];
              const theme = themes[index % themes.length];
              const isFourToSixCard = card.age.includes("4") && card.age.includes("6");
              const isSixToTwelveCard = card.age.includes("6") && card.age.includes("12");

              return (
                <article
                  key={card.title}
                  className={`rounded-3xl border-2 p-6 shadow-[0_14px_28px_rgba(15,23,42,0.08)] ${theme.card}`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-xl ${theme.iconWrap}`}
                    >
                      <Icon />
                    </span>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${theme.badge}`}>
                      {card.age}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold leading-tight text-slate-900">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
                    {card.description}
                  </p>
                  {isFourToSixCard ? (
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="relative h-24 overflow-hidden rounded-xl">
                        <Image
                          src="/assets/asset-4.jpg"
                          alt="Kindergarten activity"
                          fill
                          className="object-cover"
                          sizes="(min-width: 1280px) 140px, 45vw"
                        />
                      </div>
                      <div className="relative h-24 overflow-hidden rounded-xl">
                        <Image
                          src="/assets/asset-5.jpg"
                          alt="Kindergarten classroom"
                          fill
                          className="object-cover"
                          sizes="(min-width: 1280px) 140px, 45vw"
                        />
                      </div>
                    </div>
                  ) : null}
                  {isSixToTwelveCard ? (
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="relative h-24 overflow-hidden rounded-xl">
                        <Image
                          src="/assets/asset-6.jpg"
                          alt="Elementary classroom activity"
                          fill
                          className="object-cover"
                          sizes="(min-width: 1280px) 96px, 30vw"
                        />
                      </div>
                      <div className="relative h-24 overflow-hidden rounded-xl">
                        <Image
                          src="/assets/asset-7.jpg"
                          alt="Elementary lesson in progress"
                          fill
                          className="object-cover"
                          sizes="(min-width: 1280px) 96px, 30vw"
                        />
                      </div>
                      <div className="relative h-24 overflow-hidden rounded-xl">
                        <Image
                          src="/assets/asset-8.jpg"
                          alt="Elementary students in class"
                          fill
                          className="object-cover"
                          sizes="(min-width: 1280px) 96px, 30vw"
                        />
                      </div>
                    </div>
                  ) : null}

                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {card.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className={`mt-[7px] inline-block h-2.5 w-2.5 rounded-full ${theme.dot}`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </FadeIn>
  );
};

export default ClassesOverviewSection;
