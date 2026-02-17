'use client';

import AnnouncementBar from "../components/AnnouncementBar";
import Container from "../components/Container";
import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLanguage } from "../providers/LanguageProvider";
import Image from "next/image";

const AdmissionsPage = () => {
  const { content } = useLanguage();
  const admissions = content.admissionsPage;

  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex flex-1 flex-col bg-slate-50">
        <div className="bg-white py-12 shadow-sm">
          <Container className="space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
              Admissions
            </p>
            <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
              {admissions.heroTitle}
            </h1>
            <p className="text-base text-slate-600">{admissions.heroDescription}</p>
          </Container>
        </div>

        <Container className="space-y-10 py-12 md:py-16">
          <FadeIn>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-3xl shadow-xl shadow-emerald-100 md:h-72">
                <Image
                  src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=80"
                  alt="Admissions"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-3xl shadow-xl shadow-sky-100 md:h-72">
                <Image
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80"
                  alt="Enrollment meeting"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {admissions.steps.map((step) => (
              <FadeIn key={step.title}>
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{step.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {admissions.highlights.map((item) => (
              <FadeIn key={item.title}>
                <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-sky-50 p-5 text-left shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-700">{item.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default AdmissionsPage;
