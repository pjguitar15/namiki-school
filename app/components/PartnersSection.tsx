'use client';

import Image from "next/image";
import Container from "./Container";
import { useLanguage } from "../providers/LanguageProvider";
import FadeIn from "./FadeIn";

const PartnersSection = () => {
  const { content } = useLanguage();

  return (
    <FadeIn>
      <Container className="space-y-6 py-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            Trusted By
          </p>
          <p className="text-base text-slate-600">
            地域の学校・団体と連携しながら学びの機会を広げています。
          </p>
        </div>
        <div className="grid items-center justify-center gap-6 sm:grid-cols-2 md:grid-cols-4">
          {content.partners.map((logo, index) => (
            <div
              key={logo}
              className="flex h-16 items-center justify-center rounded-2xl border border-slate-100 bg-white px-4 shadow-sm"
            >
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                width={160}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </FadeIn>
  );
};

export default PartnersSection;
