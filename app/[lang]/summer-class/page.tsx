import type { Metadata } from "next";

import { SummerClassPageView } from "../../components/SummerClassPageContent";
import { LANGUAGE_CONTENT, type LanguageCode } from "../../constants/content";
import { createPageMetadata } from "../../constants/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LanguageCode }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const copy = LANGUAGE_CONTENT[lang].summerSchool;
  const isJapanese = lang === "ja";

  return createPageMetadata({
    title: `${copy.titlePrimary}${isJapanese ? "" : " "}${copy.titleSecondary} ${copy.year}`,
    description: isJapanese
      ? "Namiki English Schoolのサマースクール2026。週間テーマ、1日のスケジュール、英語イマージョン、アクティビティ、料金をご案内します。"
      : "Summer School 2026 at Namiki English School in Tsukuba with weekly themes, daily English immersion, activities, fees, and schedule details.",
    path: "/summer-class",
    locale: lang,
    keywords: isJapanese
      ? [
          "Namiki サマースクール 2026",
          "つくば サマークラス",
          "つくば 英語 サマースクール",
          "茨城 子ども 夏休み プログラム",
        ]
      : [
          "Namiki Summer School 2026",
          "Tsukuba summer class",
          "English summer school Tsukuba",
          "Kids summer program Ibaraki",
        ],
    image: "/assets/summer-school-2026-main.jpg",
  });
}

export default function LocalizedSummerClassPage() {
  return <SummerClassPageView />;
}
