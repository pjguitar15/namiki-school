'use client';

import Container from "./Container";
import ProgramCard from "./ProgramCard";
import { useLanguage } from "../providers/LanguageProvider";
import FadeIn from "./FadeIn";

const ProgramsSection = () => {
  const { content, language } = useLanguage();
  const overviewItems =
    language === 'ja'
      ? [
          '\u6708\u66dc\u65e5\u301c\u91d1\u66dc\u65e5',
          '\u5348\u524d8\u6642\u301c\u5348\u5f8c6\u6642',
          '3\u6b73\u4ee5\u4e0a\u5bfe\u8c61',
          '\u30d0\u30a4\u30ea\u30f3\u30ac\u30eb\u82f1\u8a9e\u74b0\u5883',
        ]
      : [
          'Monday to Friday',
          '8:00 AM to 6:00 PM',
          'Ages 3 and up',
          'Bilingual English environment',
        ]

  return (
    <FadeIn>
      <Container id='programs' className='space-y-10 py-16 md:py-20'>
        <div className='space-y-3 text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-teal-600'>
            {language === 'ja'
              ? '\u30d7\u30ed\u30b0\u30e9\u30e0\u6982\u8981'
              : 'Program Overview'}
          </p>
          <h2 className='text-3xl font-bold text-slate-900 md:text-4xl'>
            {language === 'ja'
              ? '\u82f1\u4f1a\u8a71\u30fb\u30a2\u30d5\u30bf\u30fc\u30b9\u30af\u30fc\u30eb'
              : 'Eikaiwa • After School Program'}
          </h2>
          <p className='text-base text-slate-600'>
            {language === 'ja'
              ? '幼児から小中学生まで、英会話と放課後の英語クラスを提供しています。'
              : 'English conversation and after-school classes for young and school-age learners.'}
          </p>
          <ul className='mx-auto mt-4 grid max-w-3xl gap-2 text-sm text-slate-700 sm:grid-cols-2'>
            {overviewItems.map((item) => (
              <li key={item} className='rounded-full bg-slate-100 px-4 py-2'>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {content.programs.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </Container>
    </FadeIn>
  )
};

export default ProgramsSection;
