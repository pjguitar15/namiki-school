'use client'

import Image from 'next/image'
import Link from 'next/link'
import Container from './Container'
import { useLanguage } from '../providers/LanguageProvider'
import FadeIn from './FadeIn'

const Hero = () => {
  const { content } = useLanguage()
  const hero = content.hero

  return (
    <FadeIn>
      <div className='relative isolate overflow-hidden bg-gradient-to-r from-emerald-500 to-sky-500 text-slate-900'>
        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_40%_70%,rgba(255,255,255,0.18),transparent_30%)]' />
        <div
          id='home'
          className='flex flex-col gap-12 md:flex-row md:items-stretch max-w-3/5 mx-auto'
        >
          {/* LEFT */}
          <div className='flex-1'>
            <div className='space-y-6 text-left text-white pt-10 pb-24'>
              <span className='inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-wide backdrop-blur'>
                <span className='h-2 w-2 rounded-full bg-orange-300' />
                {hero.badge}
              </span>

              <h1 className='text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl'>
                {hero.headline}
              </h1>

              <p className='max-w-xl text-lg font-medium text-white/90'>
                {hero.subheadline}
              </p>

              <div className='flex flex-col gap-3 sm:flex-row'>
                <Link
                  href='#contact'
                  className='inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-emerald-700 shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:shadow-xl'
                >
                  {hero.ctaPrimary}
                </Link>

                <Link
                  href='#programs'
                  className='inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10'
                >
                  {hero.ctaSecondary}
                </Link>
              </div>

              {/* <div className='grid gap-4 text-sm text-white/80 sm:grid-cols-3'>
                {hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className='text-2xl font-bold text-white'>
                      {stat.value}
                    </p>
                    <p>{stat.description}</p>
                  </div>
                ))}
              </div> */}
            </div>
          </div>

          {/* RIGHT */}
          <div className='relative flex-1 min-h-[26rem] md:min-h-[34rem]'>
            <Image
              src='/student-models/landing-model.png'
              alt='Student'
              width={520}
              height={840}
              priority
              className='
        pointer-events-none
        absolute bottom-0 right-0
        w-auto
        h-[22rem] sm:h-[26rem] md:h-[32rem] lg:h-[36rem]
        drop-shadow-2xl
      '
            />
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default Hero
