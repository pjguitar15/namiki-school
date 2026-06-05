'use client'

import {
  FaAppleWhole,
  FaBookOpen,
  FaCalendarDays,
  FaCarSide,
  FaCertificate,
  FaChildren,
  FaClipboardList,
  FaDroplet,
  FaFlask,
  FaGear,
  FaGift,
  FaGlobe,
  FaLocationDot,
  FaMasksTheater,
  FaMoneyBillWave,
  FaMusic,
  FaPalette,
  FaStar,
  FaUtensils,
} from 'react-icons/fa6'
import {
  GiChefToque,
  GiPartyPopper,
  GiSoccerBall,
  GiWaterSplash,
} from 'react-icons/gi'
import { MdGroups, MdTranslate } from 'react-icons/md'
import AnnouncementBar from './AnnouncementBar'
import Footer from './Footer'
import Navbar from './Navbar'
import { useLanguage } from '../providers/LanguageProvider'

const summerImageSrc = '/assets/summer-school-2026-main.jpg'

const themeStyles = [
  {
    color: '#3b2495',
    border: '#b99cf1',
    bg: 'from-[#fbf9ff] to-[#f7f3ff]',
    icon: <FaGlobe />,
  },
  {
    color: '#5b9627',
    border: '#94c45f',
    bg: 'from-[#fbfff4] to-[#f6fbec]',
    icon: <FaFlask />,
  },
  {
    color: '#0084d3',
    border: '#82c6f1',
    bg: 'from-[#f4fbff] to-[#edf8ff]',
    icon: <GiWaterSplash />,
  },
  {
    color: '#f03268',
    border: '#f6a3b5',
    bg: 'from-[#fff8f8] to-[#fff1f3]',
    icon: <FaMasksTheater />,
  },
  {
    color: '#4f9228',
    border: '#a8d070',
    bg: 'from-[#fbfff5] to-[#f3faeb]',
    icon: <FaAppleWhole />,
  },
  {
    color: '#ff6419',
    border: '#fac25f',
    bg: 'from-[#fffaf1] to-[#fff3df]',
    icon: <GiPartyPopper />,
  },
]

const scheduleIcons = [
  <FaClipboardList key='icon' />,
  <MdGroups key='icon' />,
  <MdTranslate key='icon' />,
  <FaPalette key='icon' />,
  <FaUtensils key='icon' />,
  <FaBookOpen key='icon' />,
  <FaPalette key='icon' />,
  <GiSoccerBall key='icon' />,
  <FaAppleWhole key='icon' />,
  <FaCarSide key='icon' />,
] as const

const activityIcons = [
  <MdTranslate key='icon' />,
  <FaPalette key='icon' />,
  <FaFlask key='icon' />,
  <GiChefToque key='icon' />,
  <GiSoccerBall key='icon' />,
  <FaDroplet key='icon' />,
  <FaMusic key='icon' />,
  <FaBookOpen key='icon' />,
  <FaGear key='icon' />,
  <FaChildren key='icon' />,
  <FaGlobe key='icon' />,
  <GiPartyPopper key='icon' />,
] as const

const benefitIcons = [
  <FaCertificate key='icon' />,
  <FaStar key='icon' />,
  <GiPartyPopper key='icon' />,
] as const

const scheduleColors = [
  '#8e61da',
  '#5b7df4',
  '#49bfd0',
  '#8dc63f',
  '#ffc20f',
  '#ff991a',
  '#ff6530',
  '#ee4470',
  '#f0478e',
  '#b16acb',
]

const hoverLift =
  'transition duration-200 ease-out hover:-translate-y-1 hover:scale-[1.025] hover:shadow-[0_16px_34px_rgba(58,29,148,0.14)]'

export function SummerClassPageView() {
  const { content } = useLanguage()
  const copy = content.summerSchool
  const page = copy.page

  return (
    <div className='flex min-h-screen flex-col bg-white'>
      <AnnouncementBar />
      <Navbar />
      <main className='flex-1 bg-white'>
        <section className='relative isolate overflow-hidden border-b border-[#eadcfb] bg-white'>
          <div className='absolute left-[7%] top-8 h-8 w-8 rotate-12 rounded-lg border-[3px] border-[#b47bf0]' />
          <div className='absolute right-[10%] top-10 h-14 w-14 rounded-full bg-[#ffcf35] shadow-[0_0_0_10px_rgba(255,207,53,0.16)]' />
          <div className='absolute right-[23%] top-20 hidden h-12 w-28 rounded-full border-b-2 border-dashed border-[#62c8ee] sm:block' />
          <div className='mx-auto max-w-[80rem] px-4 pb-16 pt-10 sm:px-8 sm:pt-14'>
            <div className='relative z-10 max-w-[64rem]'>
              <h1 className='font-(family-name:--font-nunito) text-[3.35rem] font-black leading-[0.88] tracking-normal sm:text-[5rem] lg:text-[6.2rem]'>
                <span className='text-[#3a1d94]'>{copy.titlePrimary} </span>
                <span className='text-[#ffc20f]'>{copy.titleSecondary} </span>
                <span className='text-[#ef3f6d]'>{copy.year}</span>
              </h1>
              <p className='mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-(family-name:--font-nunito) text-xl font-black sm:text-2xl'>
                <span className='text-[#ef3f6d]'>{copy.keywords[0]}</span>
                <span className='h-2 w-2 rounded-full bg-[#3b1f93]' />
                <span className='text-[#19aee2]'>{copy.keywords[1]}</span>
                <span className='h-2 w-2 rounded-full bg-[#49a23a]' />
                <span className='text-[#5da63f]'>{copy.keywords[2]}</span>
                <span className='h-2 w-2 rounded-full bg-[#3b1f93]' />
                <span className='text-[#39208d]'>{copy.keywords[3]}</span>
              </p>
            </div>
          </div>
          <div className='absolute inset-x-0 bottom-0 h-12 bg-[#ffe070] [clip-path:polygon(0_66%,12%_36%,28%_42%,43%_70%,61%_74%,78%_39%,100%_56%,100%_100%,0_100%)]' />
        </section>

        <section className='mx-auto max-w-[80rem] px-4 py-6 sm:px-8'>
          <div className='grid gap-7 lg:grid-cols-[1fr_26rem]'>
            <div>
              <h2 className='mb-5 flex items-center gap-3 font-(family-name:--font-nunito) text-3xl font-black text-[#3a1d94]'>
                <FaStar className='text-[#ef3f6d]' /> {page.weeklyThemesTitle}
              </h2>
              <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-3'>
                {page.themes.map((theme, index) => {
                  const themeStyle = themeStyles[index]

                  return (
                  <article
                    key={theme.week}
                    className={`min-h-[15.5rem] rounded-xl border bg-gradient-to-br ${themeStyle.bg} p-5 ${hoverLift}`}
                    style={{ borderColor: themeStyle.border }}
                  >
                    <div className='mb-4 flex items-start justify-between gap-3'>
                      <h3 className='font-(family-name:--font-nunito) text-xl font-black leading-tight' style={{ color: themeStyle.color }}>
                        {theme.week}
                        <br />
                        {theme.title}
                      </h3>
                      <span className='text-5xl transition duration-200 group-hover:rotate-6' style={{ color: themeStyle.color }}>
                        {themeStyle.icon}
                      </span>
                    </div>
                    <ul className='space-y-2 text-[0.98rem] leading-snug text-slate-900'>
                      {theme.bullets.map((bullet) => (
                        <li key={bullet}>- {bullet}</li>
                      ))}
                    </ul>
                  </article>
                  )
                })}
              </div>
            </div>

            <aside className={`rounded-2xl border border-[#ddd4f5] bg-white p-5 shadow-[0_10px_32px_rgba(58,29,148,0.08)] ${hoverLift}`}>
              <h2 className='mb-5 flex items-center gap-3 font-(family-name:--font-nunito) text-2xl font-black text-[#3a1d94]'>
                <FaCalendarDays className='text-[#7d57d9]' /> {page.dailyScheduleTitle}
              </h2>
              <div className='space-y-3'>
                {page.schedule.map((item, index) => (
                  <div key={item.time} className='grid grid-cols-[8.6rem_2.2rem_1fr] items-center gap-3 rounded-xl p-1 text-slate-900 transition duration-200 hover:scale-[1.025] hover:bg-[#f9f6ff]'>
                    <span
                      className='rounded-lg px-3 py-2 text-center font-(family-name:--font-nunito) text-lg font-black text-white shadow-sm'
                      style={{ backgroundColor: scheduleColors[index] }}
                    >
                      {item.time}
                    </span>
                    <span className='text-2xl text-[#3a1d94]'>{scheduleIcons[index]}</span>
                    <span className='text-base font-medium leading-tight'>{item.label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className={`mt-8 rounded-2xl border border-[#d9c7f1] bg-[#fffafd] px-5 py-4 ${hoverLift}`}>
            <h2 className='mb-4 flex items-center gap-3 font-(family-name:--font-nunito) text-2xl font-black text-[#3a1d94]'>
              <FaPalette className='text-[#ff8b21]' /> {page.activitiesTitle}
            </h2>
            <div className='grid grid-cols-2 gap-y-4 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12'>
              {page.activities.map((label, index) => (
                <div key={label} className='flex min-h-[5.8rem] flex-col items-center justify-start gap-2 border-dashed border-[#d3bfec] px-2 text-center text-sm font-medium leading-tight text-slate-900 transition duration-200 hover:scale-110 sm:border-r last:border-r-0'>
                  <span className='text-4xl text-[#2b92d5]'>{activityIcons[index]}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-8 grid gap-7 lg:grid-cols-3'>
            <article className={`rounded-2xl border border-[#d9c7f1] bg-gradient-to-br from-[#fbfaff] to-white p-5 ${hoverLift}`}>
              <h2 className='mb-4 flex items-center gap-3 font-(family-name:--font-nunito) text-2xl font-black text-[#3a1d94]'>
                <FaMoneyBillWave className='text-[#e6a91a]' /> {page.tuitionTitle}
              </h2>
              <table className='w-full overflow-hidden rounded-lg text-center text-lg'>
                <thead className='bg-[#3a1d94] text-white'>
                  <tr>
                    <th className='border border-[#d8d8e6] py-2 font-bold'>{page.tableHeaders.program}</th>
                    <th className='border border-[#d8d8e6] py-2 font-bold'>{page.tableHeaders.fee}</th>
                  </tr>
                </thead>
                <tbody>
                  {page.fees.map((item) => (
                    <tr key={item.program}>
                      <td className='border border-[#d8d8e6] bg-white/80 py-2 font-semibold'>{item.program}</td>
                      <td className='border border-[#d8d8e6] bg-white/80 py-2 font-semibold'>{item.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>

            <article className={`rounded-2xl border border-[#b8dfcf] bg-gradient-to-br from-[#f7fffb] to-white p-5 ${hoverLift}`}>
              <h2 className='mb-4 flex items-center gap-3 font-(family-name:--font-nunito) text-2xl font-black text-[#3a1d94]'>
                <FaClipboardList className='text-[#49b9a6]' /> {page.registrationTitle}
              </h2>
              <ul className='mb-6 space-y-2 text-lg leading-snug text-slate-900'>
                {page.registrationItems.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              <div
                className='h-32 rounded-xl border border-[#b8dfcf] bg-sky-100 bg-cover bg-center'
                style={{ backgroundImage: `url(${summerImageSrc})` }}
                aria-label={page.activityImageAlt}
              />
            </article>

            <article className={`rounded-2xl border border-[#f2d387] bg-gradient-to-br from-[#fffaf0] to-white p-5 ${hoverLift}`}>
              <h2 className='mb-4 flex items-center gap-3 font-(family-name:--font-nunito) text-2xl font-black text-[#3a1d94]'>
                <FaGift className='text-[#f03b67]' /> {page.benefitsTitle}
              </h2>
              <div className='space-y-3'>
                {page.benefits.map((label, index) => (
                  <div key={label} className='flex items-center gap-4 rounded-lg border border-[#f3d287] bg-[#fff7df] px-4 py-3 text-lg font-medium text-slate-900 transition duration-200 hover:scale-[1.03] hover:bg-[#fff0bf]'>
                    <span className='text-2xl text-[#f7a71a]'>{benefitIcons[index]}</span>
                    {label}
                  </div>
                ))}
              </div>
              <div
                className='mt-4 h-24 rounded-xl border border-[#f2d387] bg-amber-100 bg-cover bg-center'
                style={{ backgroundImage: `url(${summerImageSrc})` }}
                aria-label={page.celebrationImageAlt}
              />
            </article>
          </div>

          <div className={`mt-8 grid gap-5 rounded-2xl border border-[#d9c7f1] bg-white px-6 py-5 md:grid-cols-[1fr_0.65fr_1fr] md:items-center ${hoverLift}`}>
            <div className='flex items-center gap-4 border-[#d8d2ef] md:border-r'>
              <FaLocationDot className='text-5xl text-[#3a1d94]' />
              <div>
                <h2 className='font-(family-name:--font-nunito) text-xl font-black text-[#3a1d94]'>{page.locationTitle}</h2>
                <p className='text-base text-slate-900'>{page.locationText}</p>
              </div>
            </div>
            <div className='flex items-center gap-4 md:pl-6'>
              <MdGroups className='text-5xl text-[#3a1d94]' />
              <div>
                <h2 className='font-(family-name:--font-nunito) text-xl font-black text-[#3a1d94]'>{page.agesTitle}</h2>
                <p className='text-base text-slate-900'>{page.agesText}</p>
              </div>
            </div>
            <div className='text-right font-(family-name:--font-nunito) text-2xl font-black leading-tight'>
              <p className='text-[#ef3f6d]'>{page.taglinePrimary}</p>
              <p className='text-[#3a1d94]'>{page.taglineSecondary}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
