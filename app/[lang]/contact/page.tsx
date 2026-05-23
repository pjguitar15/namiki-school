import type { Metadata } from "next";

import { ContactPageView } from "../../contact/page";
import type { LanguageCode } from "../../constants/content";
import { createPageMetadata } from "../../constants/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LanguageCode }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return createPageMetadata({
    title: "Contact Namiki English School",
    description:
      "Book a trial lesson, ask about class availability, and contact Namiki English School in Tsukuba by phone, email, or map location.",
    path: "/contact",
    locale: lang,
    keywords: [
      "Contact Namiki English School",
      "Book trial lesson Tsukuba",
      "Tsukuba English school contact",
      "English class inquiry Japan",
    ],
    image: "/assets/asset-8.jpg",
  });
}

export default ContactPageView;
