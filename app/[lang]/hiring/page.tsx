import type { Metadata } from "next";

import { HiringPageView } from "../../hiring/page";
import type { LanguageCode } from "../../constants/content";
import { createPageMetadata } from "../../constants/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LanguageCode }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return createPageMetadata({
    title: "Hiring | Namiki English School",
    description:
      "Explore generic teaching and support staff opportunities, role expectations, and the hiring process at Namiki English School in Tsukuba.",
    path: "/hiring",
    locale: lang,
    keywords: [
      "Namiki English School hiring",
      "English teacher jobs Tsukuba",
      "School support staff jobs Japan",
      "No experience required teaching job",
    ],
    image: "/classoom/2.jpg",
  });
}

export default HiringPageView;
