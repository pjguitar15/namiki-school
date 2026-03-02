'use client'

import Image from 'next/image'
import { useLanguage } from '../../providers/LanguageProvider'
import FadeIn from '../FadeIn'
import WideContainer from '../WideContainer'

const AboutHero = () => {
  const { content } = useLanguage()
  const hero = content.aboutPage.hero

  return (
    <FadeIn>
      <div className='relative isolate overflow-hidden bg-gradient-to-r from-emerald-500 to-sky-500 pb-16 pt-12 text-white'>
        {/* Background glow */}
        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_35%),radial-gradient(circle_at_70%_10%,rgba(255,255,255,0.15),transparent_30%)]' />

        {/* CONTENT WRAPPER */}
        <WideContainer id='home' className='relative space-y-8'>
          {/* TEXT CONTENT */}
          <div className='relative z-10 space-y-3 max-w-2xl'>
            <p className='inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]'>
              {hero.eyebrow}
            </p>

            <h1 className='text-4xl font-bold leading-tight md:text-5xl'>
              {hero.title}
            </h1>

            <p className='text-lg text-white/90'>{hero.description}</p>
          </div>

          {/* STATS */}
          <div className='relative z-10 grid gap-4 sm:grid-cols-3 max-w-3xl'>
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

        {/* ABSOLUTE IMAGE */}
        <Image
          src='/student-models/jap-model-text.png'
          alt='Happy student'
          width={520}
          height={840}
          priority
          className='
            pointer-events-none
            absolute bottom-0 right-[8%]
            w-auto
            h-[22rem] sm:h-[26rem] md:h-[30rem] lg:h-[34rem]
            drop-shadow-2xl
          '
        />
      </div>
    </FadeIn>
  )
}

export default AboutHero
