import type { Metadata } from "next";

import { HomePageView } from "../page";
import type { LanguageCode } from "../constants/content";
import { createPageMetadata } from "../constants/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LanguageCode }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return createPageMetadata({
    title: "English Daycare and Eikaiwa in Tsukuba",
    description:
      "Namiki English School offers daycare, Eikaiwa, and after-school English programs in Tsukuba for ages 2 and up.",
    path: "/",
    locale: lang,
    keywords: [
      "English school Tsukuba",
      "Tsukuba daycare English",
      "Eikaiwa for kids Tsukuba",
      "After-school English Tsukuba",
    ],
    image: "/og-thumbnail.png",
  });
}

export default HomePageView;
