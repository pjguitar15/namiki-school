'use client';

import Link from "next/link";
import Container from "./Container";
import { useLanguage } from "../providers/LanguageProvider";
import FadeIn from "./FadeIn";

const ContactSection = () => {
  const { content, language } = useLanguage();
  const mapUrl = "https://maps.app.goo.gl/YMADehE4bSCPtSHL9";
  const mapLabel = language === "ja" ? "Open in Google Maps" : "Open in Google Maps";
  const flyerCopy =
    language === "ja"
      ? {
          programs: "デイケア・英会話・アフタースクール",
          schedule: "月曜日〜金曜日 | 8:00〜17:00",
          ages: "2歳から対象",
          trial: "無料体験レッスン実施中！",
          callout: "お電話でお気軽にお問い合わせください！",
        }
      : {
          programs: "Daycare • Eikaiwa • After School",
          schedule: "Monday-Friday | 8:00-17:00",
          ages: "Ages 2 Years Old and Up",
          trial: "Free Trial Lesson Available!",
          callout: "Call us today to reserve your spot!",
        };

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
                className="inline-flex w-full max-w-full items-center justify-center rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-emerald-700 shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:shadow-xl md:w-auto md:max-w-none whitespace-normal break-all"
              >
                {content.contact.emailLabel}
              </Link>
              <Link
                href={`tel:${content.contact.phone}`}
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {content.contact.phoneLabel}
              </Link>
              <Link
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {mapLabel}
              </Link>
              <p className="text-xs text-white/80">
                {content.contact.note}
              </p>
              <p className="text-xs font-semibold text-white">
                {content.contact.hours}
              </p>
              <div className="mt-2 w-full rounded-2xl border border-white/35 bg-white/10 p-4 text-left md:max-w-md">
                <p className="text-sm font-semibold text-white">{flyerCopy.programs}</p>
                <p className="mt-1 text-xs text-white/90">{flyerCopy.schedule}</p>
                <p className="mt-1 text-xs text-white/90">{flyerCopy.ages}</p>
                <p className="mt-3 text-base font-extrabold text-white">{flyerCopy.trial}</p>
                <p className="mt-1 text-sm text-white/95">{flyerCopy.callout}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </FadeIn>
  );
};

export default ContactSection;
