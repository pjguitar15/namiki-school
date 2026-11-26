import type { Metadata } from "next";

import { PricingPageView } from "../../pricing/page";
import type { LanguageCode } from "../../constants/content";
import { createPageMetadata } from "../../constants/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LanguageCode }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return createPageMetadata({
    title: "Pricing for Eikaiwa and After-School",
    description:
      "View tuition and fees for Eikaiwa and after-school English programs at Namiki English School.",
    path: "/pricing",
    locale: lang,
    keywords: [
      "Namiki English School pricing",
      "Tsukuba English school tuition",
      "Eikaiwa rates Tsukuba",
    ],
    image: "/assets/asset-5.jpg",
  });
}

export default PricingPageView;
