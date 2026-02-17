'use client';

import Link from "next/link";
import Container from "./Container";
import { useLanguage } from "../providers/LanguageProvider";
import FadeIn from "./FadeIn";

const ContactSection = () => {
  const { content } = useLanguage();

  return (
    <FadeIn>
      <Container id="contact" className="py-16 md:py-20">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500 to-sky-500 p-8 text-white shadow-2xl shadow-emerald-200 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                Contact
              </p>
              <h3 className="text-3xl font-bold leading-tight">
                {content.contact.title}
              </h3>
              <p className="text-base text-white/90">
                {content.contact.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link
                href={`mailto:${content.contact.email}`}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                {content.contact.emailLabel}
              </Link>
              <Link
                href={`tel:${content.contact.phone}`}
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {content.contact.phoneLabel}
              </Link>
              <p className="text-xs text-white/80">
                {content.contact.note}
              </p>
              <p className="text-xs font-semibold text-white">
                {content.contact.hours}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </FadeIn>
  );
};

export default ContactSection;
