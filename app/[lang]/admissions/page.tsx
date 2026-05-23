import type { Metadata } from "next";

import AdmissionsPageView from "../../views/AdmissionsPageView";
import type { LanguageCode } from "../../constants/content";
import { createPageMetadata } from "../../constants/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LanguageCode }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return createPageMetadata({
    title: "Admissions and Enrollment",
    description:
      "Follow Namiki English School's admissions process from trial lesson to enrollment for daycare, Eikaiwa, and after-school classes.",
    path: "/admissions",
    locale: lang,
    keywords: [
      "Namiki English School admissions",
      "Tsukuba English school enrollment",
      "Trial lesson booking Tsukuba",
      "English class admissions Japan",
    ],
    image: "/assets/asset-7.jpg",
  });
}

export default AdmissionsPageView;
