"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { useLanguage } from "../providers/LanguageProvider";

type LocalizedText = {
  ja: string;
  en: string;
};

type MontessoriFeatureSectionProps = {
  eyebrow?: LocalizedText;
  title?: LocalizedText;
  description?: LocalizedText;
  ctaLabel?: LocalizedText;
  ctaHref?: string;
  imageAlt?: LocalizedText;
  imageSrc?: string;
};

const DEFAULT_COPY: Required<
  Omit<MontessoriFeatureSectionProps, "ctaHref" | "imageSrc">
> = {
  eyebrow: {
    ja: "モンテッソーリ教育",
    en: "Montessori Method",
  },
  title: {
    ja: "プログラムはAMI認定講師が担当します",
    en: "Programs are run by AMI-certified teacher",
  },
  description: {
    ja: "モンテッソーリ教育は1907年、イタリアの医師マリア・モンテッソーリが「子どもの家」を開設したことから始まり、長い歴史と実績があります。",
    en: "Montessori education has a long history and achievements that began in 1907 with the “Children’s House” by the Italian doctor Maria Montessori.",
  },
  ctaLabel: {
    ja: "詳しく見る",
    en: "Read More",
  },
  imageAlt: {
    ja: "教室で学ぶ子どもたち",
    en: "Teacher guiding students in class",
  },
};

const MontessoriFeatureSection = ({
  eyebrow = DEFAULT_COPY.eyebrow,
  title = DEFAULT_COPY.title,
  description = DEFAULT_COPY.description,
  ctaLabel = DEFAULT_COPY.ctaLabel,
  ctaHref = "#programs",
  imageAlt = DEFAULT_COPY.imageAlt,
  imageSrc = "/student-class/workshops.jpg",
}: MontessoriFeatureSectionProps) => {
  const { language } = useLanguage();

  return (
    <FadeIn>
      <section className="bg-white py-16 md:py-24">
        <Container className="py-0">
          <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.45fr] md:gap-12">
            <div className="space-y-6">
              <p className="text-sm font-semibold tracking-[0.06em] text-[#f05b42]">
                {eyebrow[language]}
              </p>
              <h2 className="text-3xl leading-[1.2] font-bold text-[#242f79] md:text-4xl">
                {title[language]}
              </h2>
              <p className="max-w-[510px] text-base leading-[1.7] text-[#616161] md:text-lg">
                {description[language]}
              </p>
              <Link
                href={ctaHref}
                className="inline-flex h-[58px] min-w-[150px] items-center justify-center rounded-full bg-[#f15a42] px-8 text-base font-semibold text-white transition hover:brightness-95 md:h-[64px] md:min-w-[170px] md:text-lg"
              >
                {ctaLabel[language]}
              </Link>
            </div>

            <div className="relative h-[280px] overflow-hidden md:h-[430px] lg:h-[520px]">
              <div
                className="relative h-full w-full overflow-hidden"
                style={{
                  borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%",
                }}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt[language]}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 58vw, (min-width: 768px) 55vw, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </FadeIn>
  );
};

export default MontessoriFeatureSection;
