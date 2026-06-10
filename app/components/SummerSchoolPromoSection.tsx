'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaCheck } from 'react-icons/fa6'
import { HiArrowRight } from 'react-icons/hi2'
import { GiPartyPopper } from 'react-icons/gi'
import { useLanguage } from '../providers/LanguageProvider'
import WideContainer from './WideContainer'

const summerImageSrc = '/assets/summer-school-2026-main.jpg'

const KeywordLine = ({ keywords }: { keywords: string[] }) => (
  <p className='flex flex-wrap items-center gap-x-2.5 gap-y-2 font-(family-name:--font-nunito) text-[1.15rem] font-black leading-none sm:text-[1.45rem] lg:text-[1.7rem]'>
    <span className='text-[#ef3f6d]'>{keywords[0]}</span>
    <span className='h-1.5 w-1.5 rounded-full bg-[#3b1f93]' />
    <span className='text-[#18aee0]'>{keywords[1]}</span>
    <span className='h-1.5 w-1.5 rounded-full bg-[#2aa7a7]' />
    <span className='text-[#5da63f]'>{keywords[2]}</span>
    <span className='h-1.5 w-1.5 rounded-full bg-[#3b1f93]' />
    <span className='text-[#39208d]'>{keywords[3]}</span>
  </p>
)

const PaperPlane = () => (
  <svg
    viewBox='0 0 84 84'
    aria-hidden='true'
    className='h-full w-full overflow-visible'
  >
    <path
      d='M8 28 74 8 49 74 37 46 8 28Z'
      fill='#8fdfff'
      stroke='#35b9ee'
      strokeWidth='3'
      strokeLinejoin='round'
    />
    <path
      d='M37 46 74 8 30 38'
      fill='none'
      stroke='#35b9ee'
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const SunMark = () => (
  <div className='relative h-16 w-16 rounded-full bg-[#ffcf35] shadow-[inset_0_-5px_0_rgba(238,160,24,0.18)] lg:h-20 lg:w-20'>
    <span className='absolute left-5 top-7 h-2 w-2 rounded-full bg-[#3a1d94] lg:left-7 lg:top-8' />
    <span className='absolute right-5 top-7 h-2 w-2 rounded-full bg-[#3a1d94] lg:right-7 lg:top-8' />
    <span className='absolute bottom-6 left-1/2 h-3 w-8 -translate-x-1/2 rounded-b-full border-b-[3px] border-[#3a1d94]' />
    <span className='absolute left-5 top-10 h-3 w-3 rounded-full bg-[#ff8da0]/70' />
    <span className='absolute right-5 top-10 h-3 w-3 rounded-full bg-[#ff8da0]/70' />
    {[
      'left-1/2 top-[-1.4rem] h-5 w-1 -translate-x-1/2',
      'left-1/2 bottom-[-1.4rem] h-5 w-1 -translate-x-1/2',
      'left-[-1.4rem] top-1/2 h-1 w-5 -translate-y-1/2',
      'right-[-1.4rem] top-1/2 h-1 w-5 -translate-y-1/2',
      'right-[-0.85rem] top-[-0.85rem] h-1 w-5 rotate-45',
      'left-[-0.85rem] top-[-0.85rem] h-1 w-5 -rotate-45',
      'bottom-[-0.85rem] right-[-0.85rem] h-1 w-5 -rotate-45',
      'bottom-[-0.85rem] left-[-0.85rem] h-1 w-5 rotate-45',
    ].map((className) => (
      <span
        key={className}
        className={`absolute rounded-full bg-[#ffcf35] ${className}`}
      />
    ))}
  </div>
)

const SummerSchoolPromoSection = () => {
  const { content, href } = useLanguage()
  const copy = content.summerSchool

  return (
    <WideContainer as='section' className='py-6 sm:py-8 lg:py-10'>
      <div className='relative isolate mx-auto max-w-[92rem] overflow-hidden rounded-[1.25rem] border border-[#eee7f7] bg-white shadow-[0_16px_40px_rgba(40,28,92,0.13)]'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_0%_33%,rgba(127,95,217,0.12)_0_3.8rem,transparent_3.9rem),radial-gradient(circle_at_5%_90%,rgba(171,92,228,0.13)_0_9rem,transparent_9.1rem),linear-gradient(90deg,#ffffff_0%,#fffdf9_61%,#f4fbff_100%)]' />

        <div className='grid min-h-[29rem] grid-rows-[12rem_auto] md:min-h-[31rem] md:grid-cols-[minmax(0,1.04fr)_minmax(19rem,0.96fr)] md:grid-rows-1 lg:min-h-[35rem]'>
          <div className='relative z-10 flex min-w-0 flex-col justify-center px-5 pb-20 pt-7 sm:px-8 md:px-10 md:pb-16 md:pt-8 lg:px-[3.25rem] xl:px-14'>
            <Image
              src='/namiki-logo.png'
              alt='Namiki English School logo'
              width={310}
              height={112}
              className='mb-6 h-auto w-28 object-contain sm:w-32 md:mb-8 lg:mb-9 lg:w-36'
              priority={false}
            />

            <div className='relative max-w-[38rem]'>
              <div className='absolute -right-5 -top-12 hidden h-24 w-44 md:block lg:right-0'>
                <div className='absolute left-0 top-8 h-6 w-6 rotate-12 border-[3px] border-[#ad78ee]' />
                <div className='absolute left-[4.25rem] top-3'>
                  <SunMark />
                </div>
                <div className='absolute right-0 top-1 h-[3.25rem] w-[3.25rem] rotate-12'>
                  <PaperPlane />
                </div>
                <div className='absolute right-7 top-16 h-10 w-20 rounded-full border-b-2 border-dashed border-[#62c8ee]' />
              </div>

              <h2 className='font-(family-name:--font-nunito) text-[3rem] font-black leading-[0.84] tracking-normal text-[#3a1d94] sm:text-[4.2rem] md:text-[4.8rem] lg:text-[5.9rem] xl:text-[6.55rem]'>
                {copy.titlePrimary}
              </h2>
              <div className='mt-1.5 flex flex-wrap items-end gap-x-4 gap-y-1 sm:gap-x-6 lg:gap-x-7'>
                <span className='font-(family-name:--font-nunito) text-[2.5rem] font-black leading-[0.86] tracking-normal text-[#ffc20f] sm:text-[3.55rem] md:text-[4.1rem] lg:text-[5.05rem] xl:text-[5.65rem]'>
                  {copy.titleSecondary}
                </span>
                <span className='font-(family-name:--font-nunito) text-[2.35rem] font-black leading-[0.86] tracking-normal text-[#ef3f6d] sm:text-[3.25rem] md:text-[3.75rem] lg:text-[4.7rem] xl:text-[5.2rem]'>
                  {copy.year}
                </span>
              </div>
            </div>

            <div className='mt-5 sm:mt-6'>
              <KeywordLine keywords={copy.keywords} />
            </div>

            <div className='mt-6 max-w-[35rem] rounded-2xl border border-[#8fdfff] bg-[#0968f4] p-3 text-white shadow-[0_10px_24px_rgba(9,104,244,0.18)] sm:p-4'>
              <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
                <div className='min-w-0'>
                  <p className='flex items-center gap-2 font-(family-name:--font-nunito) text-base font-black leading-tight sm:text-lg'>
                    <GiPartyPopper className='shrink-0 text-[#ffc20f]' />
                    <span>{copy.page.earlyBird.title}</span>
                  </p>
                  <p className='mt-1 font-(family-name:--font-nunito) text-xl font-black leading-tight sm:text-2xl'>
                    {copy.page.earlyBird.deadline}
                  </p>
                </div>
                <div className='grid gap-2 text-sm font-bold leading-tight text-white sm:min-w-[11rem]'>
                  {copy.page.earlyBird.perks.map((perk) => (
                    <span key={perk} className='flex items-center gap-2'>
                      <span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ffc20f] text-xs text-[#21335f]'>
                        <FaCheck />
                      </span>
                      <span>{perk}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href={href('/summer-class')}
              className='mt-5 inline-flex min-h-12 w-fit min-w-[13.5rem] items-center justify-center gap-3 rounded-xl bg-[#3a1d94] px-6 py-3 font-(family-name:--font-nunito) text-base font-black uppercase tracking-normal text-white shadow-[0_4px_0_rgba(28,15,86,0.2),0_12px_20px_rgba(58,29,148,0.22)] ring-[3px] ring-white transition hover:-translate-y-0.5 hover:bg-[#4725aa] focus:outline-none focus:ring-[#ffcf35] sm:min-w-[16.5rem] sm:text-lg lg:min-h-14 lg:min-w-[20rem] lg:text-xl'
            >
              {copy.ctaLabel}
              <HiArrowRight aria-hidden='true' className='h-7 w-7 lg:h-8 lg:w-8' />
            </Link>
          </div>

          <div className='relative order-first overflow-hidden bg-[#aee7ff] md:order-none md:min-h-full'>
            <div
              className='absolute inset-0 bg-cover bg-center'
              style={{ backgroundImage: `url(${summerImageSrc})` }}
              role='img'
              aria-label={copy.imageAlt}
            />
            <div className='absolute inset-0 bg-[linear-gradient(135deg,rgba(80,192,239,0.26),rgba(255,194,15,0.16)),radial-gradient(circle_at_28%_16%,rgba(255,255,255,0.9)_0_2.4rem,transparent_2.5rem),radial-gradient(circle_at_46%_7%,rgba(255,255,255,0.76)_0_3.1rem,transparent_3.2rem)]' />
            <div className='absolute inset-y-0 left-[-7rem] hidden w-[17rem] bg-white md:block [clip-path:ellipse(62%_72%_at_29%_50%)]' />
          </div>
        </div>

        <div className='pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-[#ffc20f] md:h-20 lg:h-24 [clip-path:polygon(0_57%,12%_80%,28%_88%,43%_73%,58%_78%,72%_53%,87%_64%,100%_45%,100%_100%,0_100%)]' />
        <div className='pointer-events-none absolute inset-x-0 bottom-0 z-30 h-16 bg-[#a35be2] md:h-20 lg:h-24 [clip-path:polygon(0_45%,12%_70%,24%_82%,36%_76%,48%_66%,58%_72%,65%_90%,0_100%)]' />
        <div className='pointer-events-none absolute bottom-7 left-10 z-40 hidden h-14 w-24 rotate-[-8deg] opacity-45 sm:block'>
          <div className='grid grid-cols-7 gap-2'>
            {Array.from({ length: 28 }).map((_, index) => (
              <span key={index} className='h-1.5 w-1.5 rounded-full bg-[#b28df1]' />
            ))}
          </div>
        </div>
        <div className='pointer-events-none absolute bottom-8 left-[46%] z-40 hidden h-16 w-24 rotate-[-21deg] opacity-45 lg:block'>
          <div className='grid grid-cols-6 gap-2'>
            {Array.from({ length: 30 }).map((_, index) => (
              <span key={index} className='h-1.5 w-1.5 rounded-full bg-[#ffc20f]' />
            ))}
          </div>
        </div>
      </div>
    </WideContainer>
  )
}

export default SummerSchoolPromoSection
