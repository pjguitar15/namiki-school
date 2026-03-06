'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../../providers/LanguageProvider'
import FadeIn from '../FadeIn'
import WideContainer from '../WideContainer'

const AboutHero = () => {
  const { content } = useLanguage()
  const hero = content.aboutPage.hero

  return (
    <FadeIn>
      <section className='relative isolate overflow-hidden pb-16 pt-10 text-white md:pb-20 md:pt-14'>
        <Image
          src='/assets/asset-7.jpg'
          alt='Students smiling and raising hands in class'
          fill
          priority
          className='object-cover object-center'
          sizes='100vw'
        />
        <div className='pointer-events-none absolute inset-0 bg-slate-900/45' />
        <div className='pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-700/85 via-cyan-600/55 to-sky-500/35' />
        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.16),transparent_35%)]' />

        <WideContainer id='about' className='relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end'>
          <div className='space-y-5 max-w-3xl'>
            <p className='inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur'>
              {hero.eyebrow}
            </p>

            <h1 className='text-4xl font-bold leading-tight md:text-5xl lg:text-6xl'>
              {hero.title}
            </h1>

            <p className='max-w-2xl text-lg text-white/90'>{hero.description}</p>
            <div className='flex flex-wrap gap-3 pt-2'>
              <Link
                href='/admissions'
                className='inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-cyan-700 shadow-md transition hover:bg-cyan-50'
              >
                Admissions
              </Link>
              <Link
                href='/pricing'
                className='inline-flex h-11 items-center justify-center rounded-full border border-white/70 px-6 text-sm font-bold text-white transition hover:bg-white/10'
              >
                View Pricing
              </Link>
            </div>
          </div>

          <div className='grid gap-3 sm:grid-cols-3 lg:grid-cols-1'>
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className='rounded-2xl bg-white/15 px-4 py-3 text-sm shadow-lg backdrop-blur'
              >
                <p className='text-2xl font-bold text-white'>{stat.value}</p>
                <p className='text-white/80'>{stat.label}</p>
              </div>
            ))}
          </div>
        </WideContainer>

        <div className='pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[74px] md:h-[96px]'>
          <svg viewBox='0 0 1440 160' preserveAspectRatio='none' className='h-full w-full' aria-hidden='true'>
            <path
              d='M0,90 C250,28 540,20 760,74 C980,128 1220,130 1440,84 L1440,160 L0,160 Z'
              fill='#ffffff'
            />
          </svg>
        </div>
      </section>
    </FadeIn>
  )
}

export default AboutHero
