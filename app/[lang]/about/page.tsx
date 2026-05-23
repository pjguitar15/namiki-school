import type { Metadata } from "next";

import { AboutPageView } from "../../about/page";
import { LANGUAGE_CONTENT, type LanguageCode } from "../../constants/content";
import { createPageMetadata } from "../../constants/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LanguageCode }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return createPageMetadata({
    title: "About Namiki English School",
    description:
      "Learn about Namiki English School's vision, teaching approach, values, and family-centered English education in Tsukuba.",
    path: "/about",
    locale: lang,
    keywords: [
      "About Namiki English School",
      "Tsukuba English school philosophy",
      "English education values",
      "Family style English school Japan",
    ],
    image: "/classoom/4.jpg",
  });
}

export default async function LocalizedAboutPage({
  params,
}: {
  params: Promise<{ lang: LanguageCode }>;
}) {
  const { lang } = await params;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: LANGUAGE_CONTENT[lang].aboutPage.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <AboutPageView faqJsonLd={faqJsonLd} />;
}
