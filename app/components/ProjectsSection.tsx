'use client'

import Image from 'next/image'
import Container from './Container'
import { useLanguage } from '../providers/LanguageProvider'
import FadeIn from './FadeIn'

const ClassroomMomentsSection = () => {
  const { content, language } = useLanguage()

  return (
    <FadeIn>
      <Container id='classroom' className='space-y-8 py-16 md:py-20'>
        <div className='space-y-2 text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-teal-600'>
            {language === 'ja' ? 'レッスンの様子' : 'Classroom Moments'}
          </p>

          <h2 className='text-3xl font-bold text-slate-900 md:text-4xl'>
            {language === 'ja'
              ? '教室での学びをのぞいてみよう'
              : 'Inside Our English Classes'}
          </h2>

          <p className='text-base text-slate-600'>
            {language === 'ja'
              ? '少人数だからこそ、話す時間がたっぷり。楽しく学びながら、自然に英語が身につきます。'
              : 'Small groups, lots of speaking time, and hands-on activities that help learners feel confident.'}
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2'>
          {content.projects.map((moment) => (
            <div
              key={moment.title}
              className='flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg shadow-slate-100'
            >
              <div className='relative h-52 w-full'>
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  sizes='(min-width: 1024px) 50vw, 100vw'
                  className='object-cover'
                />
              </div>

              <div className='space-y-3 p-6'>
                <div className='inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700'>
                  {moment.tag}
                </div>

                <h3 className='text-xl font-semibold text-slate-900'>
                  {moment.title}
                </h3>

                <p className='text-sm leading-relaxed text-slate-700'>
                  {moment.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </FadeIn>
  )
}

export default ClassroomMomentsSection
