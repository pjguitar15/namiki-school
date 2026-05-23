import type { Metadata } from "next";

import ProgramsPageView from "../../views/ProgramsPageView";
import type { LanguageCode } from "../../constants/content";
import { createPageMetadata } from "../../constants/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LanguageCode }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return createPageMetadata({
    title: "English Programs for Ages 2+",
    description:
      "Explore age-based English programs at Namiki English School, including daycare, Eikaiwa, and after-school pathways in Tsukuba.",
    path: "/programs",
    locale: lang,
    keywords: [
      "Tsukuba English programs",
      "Kids Eikaiwa programs",
      "After-school English pathway",
      "English curriculum for children Japan",
    ],
    image: "/assets/asset-4.jpg",
  });
}

export default ProgramsPageView;
