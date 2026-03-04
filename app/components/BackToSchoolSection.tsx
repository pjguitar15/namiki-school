'use client';

import Link from "next/link";
import WideContainer from "./WideContainer";
import { useLanguage } from "../providers/LanguageProvider";

const Illustration = () => (
  <svg
    viewBox="0 0 320 180"
    role="img"
    aria-hidden="true"
    className="w-full max-w-2xl drop-shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
  >
    <defs>
      <linearGradient id="bookEdge" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fcd34d" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
      <linearGradient id="lampHead" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fde68a" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
    </defs>

    {/* Desk shadow */}
    <ellipse cx="190" cy="150" rx="110" ry="18" fill="rgba(0,0,0,0.12)" />

    {/* Book */}
    <rect x="120" y="112" width="110" height="28" rx="6" fill="#fcd34d" />
    <rect x="120" y="108" width="110" height="10" rx="6" fill="url(#bookEdge)" />
    <rect x="118" y="102" width="114" height="10" rx="6" fill="#f8fafc" />

    {/* Apple */}
    <circle cx="190" cy="98" r="16" fill="#ef4444" />
    <path d="M189 80c3 6 4 13 2 18" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
    <path d="M190 80c3-4 8-6 12-6" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />

    {/* Globe stand */}
    <path
      d="M64 122c24 0 44-20 44-45S88 32 64 32"
      stroke="#0ea5e9"
      strokeWidth="6"
      fill="none"
    />
    <circle cx="64" cy="77" r="40" fill="#22c55e" />
    <path
      d="M64 37c25 7 25 73 0 80M24 77c45-3 74 6 83 12"
      stroke="#0ea5e9"
      strokeWidth="6"
      fill="none"
      strokeLinecap="round"
    />
    <rect x="48" y="118" width="32" height="8" rx="4" fill="#0f172a" />
    <rect x="52" y="126" width="24" height="10" rx="4" fill="#1e293b" />
    <rect x="42" y="136" width="44" height="8" rx="4" fill="#0f172a" />

    {/* Lamp */}
    <path
      d="M250 52 212 98"
      stroke="#f59e0b"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="244" y="32" width="34" height="24" rx="6" fill="url(#lampHead)" />
    <path
      d="M214 98c8 6 12 16 10 26"
      stroke="#f59e0b"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <circle cx="224" cy="124" r="8" fill="#f59e0b" />

    {/* Light glow */}
    <path
      d="M230 42c30 8 40 26 34 42-8 24-38 26-64 26"
      fill="url(#lampHead)"
      opacity="0.25"
    />
  </svg>
);

const BackToSchoolSection = () => {
  const { content } = useLanguage();
  const copy = content.backToSchool;

  return (
    <section className="py-12 md:py-16">
      <WideContainer className="relative isolate">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-cyan-600 via-teal-500 to-sky-500 text-white shadow-2xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-0 h-full w-[70%]"
            style={{
              clipPath: "ellipse(80% 120% at 18% 50%)",
              backgroundColor: "#ffffff",
              backgroundImage: "radial-gradient(#dbe6f3 1px, transparent 0)",
              backgroundSize: "14px 14px",
            }}
          />
          <div className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute right-10 bottom-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

          <div className="relative grid items-center gap-10 px-8 py-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:px-12 lg:px-16">
            <div className="space-y-4 text-slate-800">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-600">
                {copy.eyebrow}
              </p>
              <h2 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
                {copy.title}
              </h2>
              <p className="text-base leading-relaxed text-slate-700 md:max-w-xl">{copy.body}</p>
              <Link
                href={copy.ctaHref}
                className="inline-flex h-11 items-center justify-center rounded-full border border-teal-500 px-5 text-sm font-semibold text-teal-700 transition hover:-translate-y-0.5 hover:bg-white/80 hover:text-teal-800"
              >
                {copy.ctaLabel}
              </Link>
            </div>

            <div className="flex justify-center md:justify-end">
              <Illustration />
            </div>
          </div>
        </div>
      </WideContainer>
    </section>
  );
};

export default BackToSchoolSection;
