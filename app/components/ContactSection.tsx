'use client';

import Link from "next/link";
import Container from "./Container";
import { useLanguage } from "../providers/LanguageProvider";
import FadeIn from "./FadeIn";

type ContactSectionProps = {
  variant?: "compact" | "page";
};

const ContactSection = ({ variant = "compact" }: ContactSectionProps) => {
  const { content, language } = useLanguage();
  const isPage = variant === "page";
  const mapUrl =
    "https://www.google.com/maps?q=1193-1%20Sasagi%20Tsukuba-shi%20Ibaraki-ken%20Japan%20305-0043";
  const mapEmbedUrl =
    "https://www.google.com/maps?q=1193-1%20Sasagi%20Tsukuba-shi%20Ibaraki-ken%20Japan%20305-0043&output=embed";
  const mapLabel = language === "ja" ? "Open in Google Maps" : "Open in Google Maps";
  const mapTitle = language === "ja" ? "Google Map" : "Google Map";

  const flyerCopy =
    language === "ja"
      ? {
          programs: "Daycare / Eikaiwa / After School",
          schedule: "Monday-Friday | 8:00-17:00",
          ages: "Ages 2 and up",
          trial: "Free Trial Lesson Available!",
          callout: "Call us today to reserve your spot!",
          location: "Location",
          quickContact: "Quick Contact",
        }
      : {
          programs: "Daycare / Eikaiwa / After School",
          schedule: "Monday-Friday | 8:00-17:00",
          ages: "Ages 2 and up",
          trial: "Free Trial Lesson Available!",
          callout: "Call us today to reserve your spot!",
          location: "Location",
          quickContact: "Quick Contact",
        };

  if (isPage) {
    return (
      <FadeIn>
        <Container id="contact" className="py-10 md:py-14">
          <section className="relative overflow-hidden rounded-[2rem] border border-cyan-200/70 bg-gradient-to-br from-cyan-50 via-white to-emerald-50 shadow-[0_18px_40px_rgba(14,116,144,0.14)]">
            <div className="pointer-events-none absolute -left-12 -top-12 h-52 w-52 rounded-full bg-cyan-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 right-0 h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl" />

            <div className="relative grid gap-8 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Contact</p>
                <h1 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
                  {content.contact.title}
                </h1>
                <p className="max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
                  {content.contact.description}
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                      Email
                    </p>
                    <Link
                      href={`mailto:${content.contact.email}`}
                      className="mt-2 block break-all text-sm font-semibold text-cyan-700 hover:text-cyan-800"
                    >
                      {content.contact.emailLabel}
                    </Link>
                  </article>
                  <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                      Phone
                    </p>
                    <Link
                      href={`tel:${content.contact.phone}`}
                      className="mt-2 block text-sm font-semibold text-cyan-700 hover:text-cyan-800"
                    >
                      {content.contact.phoneLabel}
                    </Link>
                  </article>
                  <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                      Hours
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-800">{content.contact.hours}</p>
                  </article>
                  <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                      {flyerCopy.location}
                    </p>
                    <p className="mt-2 text-sm text-slate-700">
                      1193-1 Sasagi, Tsukuba-shi, Ibaraki-ken, Japan 305-0043
                    </p>
                  </article>
                </div>

                <div className="rounded-2xl border border-cyan-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
                    {flyerCopy.quickContact}
                  </p>
                  <p className="mt-2 text-sm text-slate-700">{content.contact.note}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Link
                      href={`mailto:${content.contact.email}`}
                      className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700"
                    >
                      Send Email
                    </Link>
                    <Link
                      href={`tel:${content.contact.phone}`}
                      className="inline-flex items-center justify-center rounded-full border border-cyan-300 bg-white px-4 py-2 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-50"
                    >
                      Call Now
                    </Link>
                    <Link
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-cyan-300 bg-white px-4 py-2 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-50"
                    >
                      {mapLabel}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-cyan-200 bg-gradient-to-r from-cyan-500 to-emerald-500 p-4 text-white shadow-md">
                  <p className="text-sm font-semibold">{flyerCopy.programs}</p>
                  <p className="mt-1 text-xs text-white/90">{flyerCopy.schedule}</p>
                  <p className="mt-1 text-xs text-white/90">{flyerCopy.ages}</p>
                  <p className="mt-3 text-lg font-extrabold">{flyerCopy.trial}</p>
                  <p className="mt-1 text-sm text-white/95">{flyerCopy.callout}</p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-cyan-200 bg-white shadow-lg">
                  <iframe
                    src={mapEmbedUrl}
                    title={mapTitle}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[420px] w-full border-0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>
        </Container>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <Container id="contact" className="py-16 md:py-20">
        <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500 to-sky-500 p-7 text-white shadow-2xl shadow-emerald-200 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">Contact</p>
              <h3 className="max-w-xl text-3xl font-extrabold leading-tight md:text-4xl">
                {content.contact.title}
              </h3>
              <p className="max-w-xl text-base leading-relaxed text-white/90">
                {content.contact.description}
              </p>

              <div className="flex flex-wrap gap-2">
                <Link
                  href={`mailto:${content.contact.email}`}
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Email Us
                </Link>
                <Link
                  href={`tel:${content.contact.phone}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Call Us
                </Link>
                <Link
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {mapLabel}
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/35 bg-white/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">Email</p>
                  <p className="mt-2 break-all text-sm font-semibold text-white">
                    {content.contact.emailLabel}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/35 bg-white/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">Phone</p>
                  <p className="mt-2 text-sm font-semibold text-white">{content.contact.phoneLabel}</p>
                </div>
                <div className="rounded-2xl border border-white/35 bg-white/10 p-4 sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">Hours</p>
                  <p className="mt-2 text-sm text-white/95">{content.contact.hours}</p>
                  <p className="mt-1 text-xs text-white/80">{content.contact.note}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/35 bg-white/10 p-4">
                <p className="text-sm font-semibold text-white">{flyerCopy.programs}</p>
                <p className="mt-1 text-xs text-white/90">{flyerCopy.schedule}</p>
                <p className="mt-1 text-xs text-white/90">{flyerCopy.ages}</p>
                <p className="mt-3 text-base font-extrabold text-white">{flyerCopy.trial}</p>
                <p className="mt-1 text-sm text-white/95">{flyerCopy.callout}</p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/35 bg-white/10 shadow-lg">
                <iframe
                  src={mapEmbedUrl}
                  title={mapTitle}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full border-0 md:h-72"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </FadeIn>
  );
};

export default ContactSection;
