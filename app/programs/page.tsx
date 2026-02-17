'use client';

import Image from "next/image";
import AnnouncementBar from "../components/AnnouncementBar";
import Container from "../components/Container";
import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProgramCard from "../components/ProgramCard";
import { useLanguage } from "../providers/LanguageProvider";

const ProgramsPage = () => {
  const { content, language } = useLanguage();
  const programs = content.programs;
  const copy = content.programsPage;

  const tracks = [
    {
      title: language === "ja" ? "3-6歳：プレイ＆フォニックス" : "Ages 3-6: Play & Phonics",
      body:
        language === "ja"
          ? "歌とリズムで英語に親しみ、フォニックスで音と文字のつながりを学びます。"
          : "Songs, rhythm, and phonics basics to connect sounds to letters.",
      image: "https://placehold.co/600x400/png?text=Early+Years",
    },
    {
      title: language === "ja" ? "小学生：読み書き強化" : "Elementary: Reading & Writing",
      body:
        language === "ja"
          ? "リーディング・ライティングを強化し、会話と発表でアウトプットを増やします。"
          : "Stronger reading/writing paired with conversation and presentations.",
      image: "https://placehold.co/600x400/png?text=Elementary",
    },
    {
      title: language === "ja" ? "中高生・大人：実践英会話" : "Teens & Adults: Practical English",
      body:
        language === "ja"
          ? "ディスカッションやロールプレイで実践力を養い、目標に合わせた英語力を伸ばします。"
          : "Discussions and role-plays to build practical fluency toward your goals.",
      image: "https://placehold.co/600x400/png?text=Teens+%26+Adults",
    },
  ];

  const learnList =
    language === "ja"
      ? [
          "フォニックスと発音で土台づくり",
          "リーディングと語彙強化",
          "会話とスピーキング練習",
          "ライティングと表現力アップ",
          "ミニプロジェクトと発表",
        ]
      : [
          "Phonics and pronunciation foundation",
          "Reading practice and vocabulary growth",
          "Conversation drills and speaking confidence",
          "Writing for clarity and expression",
          "Mini projects and presentations",
        ];

  const gallery = [
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80",
    "https://placehold.co/800x600/png?text=Project+Day",
    "https://placehold.co/800x600/png?text=Presentation",
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex flex-1 flex-col bg-slate-50">
        <div className="bg-white py-12 shadow-sm">
          <Container className="space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
              Programs
            </p>
            <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
              {copy.heroTitle}
            </h1>
            <p className="text-base text-slate-600">{copy.heroDescription}</p>
          </Container>
        </div>

        <Container className="space-y-12 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {tracks.map((track, index) => (
              <FadeIn key={track.title} delay={index * 0.05}>
                <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
                  <div className="relative h-40 w-full">
                    <Image
                      src={track.image}
                      alt={track.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 p-5">
                    <h3 className="text-lg font-semibold text-slate-900">{track.title}</h3>
                    <p className="text-sm text-slate-700">{track.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <FadeIn key={program.title} delay={index * 0.05}>
                <ProgramCard program={program} />
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="grid gap-6 rounded-3xl bg-white p-6 shadow-lg shadow-slate-100 ring-1 ring-slate-100 md:grid-cols-2 md:p-10">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
                  {language === "ja" ? "レッスン内容" : "What you’ll learn"}
                </p>
                <h2 className="text-2xl font-bold text-slate-900">
                  {language === "ja"
                    ? "読む・書く・話す・聞く・フォニックスをバランスよく"
                    : "Balanced focus on reading, writing, speaking, listening, and phonics"}
                </h2>
                <ul className="space-y-2 text-sm text-slate-700">
                  {learnList.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {gallery.map((src) => (
                  <div key={src} className="relative h-32 overflow-hidden rounded-2xl shadow-md">
                    <Image
                      src={src}
                      alt="Program highlight"
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramsPage;
