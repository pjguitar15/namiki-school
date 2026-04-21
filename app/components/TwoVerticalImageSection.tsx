'use client'

import Image from 'next/image'
import Container from './Container'
import FadeIn from './FadeIn'
import { useLanguage } from '../providers/LanguageProvider'

const TwoVerticalImageSection = () => {
  const { language } = useLanguage()

  const copy =
    language === 'ja'
      ? {
          eyebrow: 'ギャラリー',
          title: '私たちの教室',
          description:
            '明るく落ち着いた学びの空間で、子どもたちが安心して英語にふれられる教室の雰囲気をご紹介します。',
          cards: [
            {
              src: '/assets/classroom-1.jpg',
              alt: 'カラフルなラグと小さな椅子がある教室',
              title: '明るく楽しい学びの空間',
              description:
                '歌や会話、アクティビティを通して、子どもたちが自然に英語に親しめる教室です。',
            },
            {
              src: '/assets/classroom-2.jpg',
              alt: '収納棚と学習スペースが整った教室',
              title: '落ち着いて過ごせるクラスルーム',
              description:
                '整理された環境の中で、一人ひとりが安心して学び、のびのび過ごせるように整えています。',
            },
          ],
        }
      : {
          eyebrow: 'Gallery',
          title: 'Our Classrooms',
          description:
            'Take a glimpse into the bright, welcoming spaces where children learn, explore, and build confidence in English.',
          cards: [
            {
              src: '/assets/classroom-1.jpg',
              alt: 'Colorful classroom with children’s chairs and learning rug',
              title: 'Bright spaces for joyful learning',
              description:
                'Each classroom is designed to help children feel comfortable, curious, and ready to use English naturally.',
            },
            {
              src: '/assets/classroom-2.jpg',
              alt: 'Organized classroom with shelves and learning area',
              title: 'Calm rooms that support focus',
              description:
                'Clear layouts and child-friendly materials create a warm environment for play, routine, and steady growth.',
            },
          ],
        }

  return (
    <FadeIn>
      <section className='bg-white py-12 md:py-16'>
        <Container className='space-y-8 py-0 md:space-y-10'>
          <div className='mx-auto max-w-3xl space-y-3 text-center'>
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-sky-700'>
              {copy.eyebrow}
            </p>
            <h2 className='text-3xl font-bold leading-tight text-slate-900 md:text-4xl'>
              {copy.title}
            </h2>
            <p className='text-base leading-relaxed text-slate-600 md:text-lg'>
              {copy.description}
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-2 md:gap-8'>
            {copy.cards.map((card) => {
              return (
                <article
                  key={card.title}
                  className='overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_16px_34px_rgba(15,23,42,0.08)]'
                >
                  <div className='relative aspect-[4/5] overflow-hidden bg-slate-100'>
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      className='object-cover object-center'
                      sizes='(min-width: 768px) 50vw, 100vw'
                    />
                  </div>

                  <div className='space-y-2 p-6'>
                    <h3 className='text-xl font-semibold text-slate-900 md:text-2xl'>
                      {card.title}
                    </h3>
                    <p className='text-sm leading-relaxed text-slate-600 md:text-base'>
                      {card.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </Container>
      </section>
    </FadeIn>
  )
}

export default TwoVerticalImageSection
