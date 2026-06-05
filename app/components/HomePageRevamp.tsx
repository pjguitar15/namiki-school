'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  LuArrowRight,
  LuBookOpen,
  LuCalendarDays,
  LuCheckCheck,
  LuHeartHandshake,
  LuMessageCircleMore,
  LuSchool,
  LuSparkles,
  LuStar,
} from 'react-icons/lu';
import { useLanguage } from '../providers/LanguageProvider';
import Container from './Container';
import FadeIn from './FadeIn';
import WideContainer from './WideContainer';

const HomePageRevamp = () => {
  const { content, href, language } = useLanguage();

  const trustPoints =
    language === 'ja'
      ? [
          '2歳から始められる英語環境',
          '少人数でしっかり対話',
          'ご家庭とつながる丁寧なフィードバック',
        ]
      : [
          'English support from age 2 and up',
          'Small-group classes with real speaking time',
          'Close communication with families',
        ];

  const proofCards =
    language === 'ja'
      ? [
          {
            label: '対象年齢',
            value: '2歳から',
            detail: '初めての英語でも安心',
          },
          {
            label: 'レッスン設計',
            value: '少人数',
            detail: '会話量と個別サポートを重視',
          },
          {
            label: '学び方',
            value: '実践中心',
            detail: '遊び・会話・表現で自然に定着',
          },
        ]
      : [
          {
            label: 'Starting Age',
            value: '2+ years',
            detail: 'A gentle start for first-time learners',
          },
          {
            label: 'Class Format',
            value: 'Small groups',
            detail: 'Built for speaking time and guidance',
          },
          {
            label: 'Learning Style',
            value: 'Hands-on',
            detail: 'Play, conversation, and expression every week',
          },
        ];

  const approachSteps =
    language === 'ja'
      ? [
          {
            title: '安心して話せる雰囲気づくり',
            body: '子どもたちが間違いを恐れず、英語で反応したくなる空気をつくります。',
          },
          {
            title: '会話とフォニックスを両立',
            body: '話す楽しさだけでなく、聞く・読む・発音する土台も段階的に育てます。',
          },
          {
            title: '保護者と学びをつなぐ',
            body: '教室での様子を共有し、家庭でも続けやすい復習の流れを整えます。',
          },
        ]
      : [
          {
            title: 'A classroom that feels safe to speak in',
            body: 'We create an atmosphere where children respond in English without fear of making mistakes.',
          },
          {
            title: 'Conversation plus phonics foundation',
            body: 'Lessons balance speaking confidence with listening, reading, and pronunciation growth.',
          },
          {
            title: 'Family communication built in',
            body: 'Parents stay informed so classroom progress can continue naturally at home.',
          },
        ];

  const galleryCards =
    language === 'ja'
      ? [
          {
            title: 'デイケア',
            body: '長時間の英語環境で、生活の中から自然に表現を身につけます。',
            image: '/assets/asset-1.jpg',
          },
          {
            title: '英会話',
            body: '会話中心の1時間レッスンで、自信と発音を育てます。',
            image: '/assets/asset-8.jpg',
          },
          {
            title: 'アフタースクール',
            body: '放課後の時間を活かし、宿題サポートと英語学習を両立します。',
            image: '/classoom/1.jpg',
          },
        ]
      : [
          {
            title: 'Daycare',
            body: 'A longer English environment where language grows naturally through the day.',
            image: '/assets/asset-1.jpg',
          },
          {
            title: 'Eikaiwa',
            body: 'Focused one-hour lessons that build confidence, pronunciation, and interaction.',
            image: '/assets/asset-8.jpg',
          },
          {
            title: 'After School',
            body: 'A practical after-school option that supports both English growth and routine.',
            image: '/classoom/1.jpg',
          },
        ];

  const sectionCopy =
    language === 'ja'
      ? {
          heroKicker: 'つくばの少人数インターナショナル英語スクール',
          heroBody:
            '話せる楽しさ、自信、そして毎日の中で使える英語を育てるために、あたたかい教室環境とアクティブな学びを組み合わせています。',
          primaryCta: '体験レッスンを予約',
          secondaryCta: 'プログラムを見る',
          quickLabel: '保護者に選ばれる理由',
          programEyebrow: 'Programs',
          programTitle: '年齢と目的に合わせて選べる3つの学び方',
          programBody:
            'デイケア、英会話、アフタースクールを明確に見せ、どの家庭にも合う入口をつくります。',
          approachEyebrow: 'Our Approach',
          approachTitle: '英語力だけで終わらせない学びの設計',
          approachBody:
            'Namiki English Schoolは、話す力だけでなく、自己表現・習慣・安心感まで含めて設計します。',
          atmosphereEyebrow: 'School Life',
          atmosphereTitle: '教室の空気感が、学びやすさをつくる',
          atmosphereBody:
            '写真と短い説明で、プログラムごとの雰囲気と期待できる体験を直感的に伝えます。',
          testimonialEyebrow: 'Family Voices',
          testimonialTitle: '保護者と生徒からの声',
          ctaTitle: 'まずは体験で、教室の雰囲気を見てください',
          ctaBody:
            '現在のレベルやご希望の通い方に合わせて、最適なクラスをご案内します。',
          ctaPrimary: 'お問い合わせ',
          ctaSecondary: '料金を見る',
        }
      : {
          heroKicker: 'A small-group international English school in Tsukuba',
          heroBody:
            'We combine a warm classroom culture with active learning so children build speaking confidence and practical English they can use every day.',
          primaryCta: 'Book a trial lesson',
          secondaryCta: 'Explore programs',
          quickLabel: 'Why families choose us',
          programEyebrow: 'Programs',
          programTitle: 'Three clear learning paths for different ages and goals',
          programBody:
            'The homepage should make the difference between daycare, Eikaiwa, and after-school obvious at a glance.',
          approachEyebrow: 'Our Approach',
          approachTitle: 'A learning design that goes beyond vocabulary drills',
          approachBody:
            'Namiki English School is built to grow expression, confidence, routine, and communication together.',
          atmosphereEyebrow: 'School Life',
          atmosphereTitle: 'The classroom atmosphere is part of the learning experience',
          atmosphereBody:
            'Each program should feel distinct, approachable, and easy for families to imagine.',
          testimonialEyebrow: 'Family Voices',
          testimonialTitle: 'What parents and students notice most',
          ctaTitle: 'Start with a trial and see how the classroom feels',
          ctaBody:
            'Tell us the learner’s age, current level, and preferred schedule. We’ll point you to the right class.',
          ctaPrimary: 'Contact us',
          ctaSecondary: 'View pricing',
        };

  return (
    <div className="flex flex-col">
      <FadeIn>
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fff8ef_0%,#f5fbff_42%,#eef9f3_100%)] pb-16 pt-8 md:pb-24">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(255,122,26,0.18),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(29,184,228,0.18),transparent_28%),radial-gradient(circle_at_60%_78%,rgba(61,184,90,0.14),transparent_24%)]" />
          <div className="pointer-events-none absolute -left-12 top-28 h-40 w-40 rounded-full bg-[#ffb45f]/25 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-10 h-56 w-56 rounded-full bg-[#78d5f7]/25 blur-3xl" />

          <WideContainer className="relative z-10 grid gap-10 pb-0 pt-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl space-y-8">
              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-700 shadow-sm backdrop-blur">
                  <LuSparkles className="text-[#f97316]" />
                  {sectionCopy.heroKicker}
                </span>

                <div className="space-y-4">
                  <h1 className="max-w-4xl text-4xl font-black leading-[1.02] text-slate-950 sm:text-5xl lg:text-7xl">
                    {content.hero.headline}
                  </h1>
                  <p className="max-w-2xl text-lg leading-relaxed text-slate-700 md:text-xl">
                    {sectionCopy.heroBody}
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={href('/contact')}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#f97316] px-6 text-sm font-bold text-white shadow-[0_18px_35px_rgba(249,115,22,0.28)] transition hover:-translate-y-0.5 hover:bg-[#ea6a08]"
                  >
                    {sectionCopy.primaryCta}
                  </Link>
                  <Link
                    href={href('/programs')}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-white"
                  >
                    {sectionCopy.secondaryCta}
                  </Link>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {proofCards.map((card) => (
                  <article
                    key={card.label}
                    className="rounded-[1.75rem] border border-white/80 bg-white/82 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {card.label}
                    </p>
                    <p className="mt-2 text-2xl font-black text-slate-950">{card.value}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-[0_22px_60px_rgba(15,23,42,0.14)] backdrop-blur md:p-4">
                <div className="grid gap-3 md:grid-cols-[1.15fr_0.85fr]">
                  <div className="relative min-h-[23rem] overflow-hidden rounded-[1.6rem]">
                    <Image
                      src={content.hero.image}
                      alt={content.hero.headline}
                      fill
                      priority
                      className="object-cover"
                      sizes="(min-width: 1024px) 36vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                        {sectionCopy.quickLabel}
                      </p>
                      <div className="mt-3 space-y-2">
                        {trustPoints.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-sm font-medium text-white/95">
                            <LuCheckCheck className="mt-0.5 shrink-0 text-[#fed7aa]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <div className="relative min-h-[11rem] overflow-hidden rounded-[1.5rem] bg-[#0f172a]">
                      <Image
                        src="/classoom/4.jpg"
                        alt="Students presenting in class"
                        fill
                        className="object-cover opacity-85"
                        sizes="(min-width: 1024px) 18vw, 100vw"
                      />
                    </div>
                    <div className="rounded-[1.5rem] bg-[#0f766e] p-5 text-white shadow-inner">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
                        {content.hero.badge}
                      </p>
                      <p className="mt-3 text-xl font-black leading-tight">
                        {content.hero.subheadline}
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] bg-[#fff2e2] p-5 text-slate-900">
                      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#c2410c]">
                        <LuStar />
                        <span>{language === 'ja' ? '無料体験あり' : 'Free trial available'}</span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-700">
                        {language === 'ja'
                          ? '教室の雰囲気や先生との相性を見てから始められます。'
                          : 'Families can experience the classroom before deciding on enrollment.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </WideContainer>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="bg-slate-950 py-5 text-white">
          <WideContainer className="grid gap-4 py-0 md:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white/10 p-2.5">
                <LuMessageCircleMore className="text-lg text-[#7dd3fc]" />
              </div>
              <div>
                <p className="text-sm font-semibold">
                  {language === 'ja' ? '会話量をしっかり確保' : 'Speaking time is built in'}
                </p>
                <p className="text-sm text-white/70">
                  {language === 'ja'
                    ? '小さなクラスで一人ひとりが英語を使う時間を増やします。'
                    : 'Small groups give each learner more chances to use English.'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white/10 p-2.5">
                <LuBookOpen className="text-lg text-[#fdba74]" />
              </div>
              <div>
                <p className="text-sm font-semibold">
                  {language === 'ja' ? '遊びだけで終わらない' : 'More than play-based exposure'}
                </p>
                <p className="text-sm text-white/70">
                  {language === 'ja'
                    ? '会話、フォニックス、読み書きの土台までつなげます。'
                    : 'Conversation connects to phonics, reading, and structured growth.'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white/10 p-2.5">
                <LuHeartHandshake className="text-lg text-[#86efac]" />
              </div>
              <div>
                <p className="text-sm font-semibold">
                  {language === 'ja' ? '家庭との連携を重視' : 'Strong parent communication'}
                </p>
                <p className="text-sm text-white/70">
                  {language === 'ja'
                    ? 'ご家庭でも学びを続けやすいよう、様子を共有します。'
                    : 'Families stay informed so progress keeps moving outside class.'}
                </p>
              </div>
            </div>
          </WideContainer>
        </section>
      </FadeIn>

      <FadeIn>
        <section id="programs" className="bg-white py-16 md:py-24">
          <Container className="space-y-10 py-0">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0284c7]">
                {sectionCopy.programEyebrow}
              </p>
              <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                {sectionCopy.programTitle}
              </h2>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                {sectionCopy.programBody}
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {content.programs.map((program, index) => {
                const accents = [
                  'from-[#e0f2fe] via-white to-[#fff4e8]',
                  'from-[#ecfccb] via-white to-[#eefbf5]',
                  'from-[#fff1f2] via-white to-[#fff7ed]',
                ];
                const iconWraps = ['bg-[#0ea5e9]', 'bg-[#65a30d]', 'bg-[#f97316]'];
                const icons = [LuSchool, LuMessageCircleMore, LuCalendarDays];
                const Icon = icons[index % icons.length];

                return (
                  <article
                    key={program.title}
                    className={`group overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-b ${accents[index % accents.length]} p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(15,23,42,0.11)]`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${iconWraps[index % iconWraps.length]} text-xl text-white shadow-lg`}
                      >
                        <Icon />
                      </span>
                      <span className="rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                        {program.category}
                      </span>
                    </div>

                    <div className="mt-5 space-y-3">
                      <h3 className="text-2xl font-black text-slate-950">{program.title}</h3>
                      <p className="text-sm font-semibold text-slate-600">{program.duration}</p>
                    </div>

                    <ul className="mt-5 space-y-3">
                      {program.bulletPoints.slice(0, 4).map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                          <LuCheckCheck className="mt-0.5 shrink-0 text-slate-900" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex items-center justify-between gap-3">
                      <Link
                        href={href('/programs')}
                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition group-hover:text-[#ea580c]"
                      >
                        <span>{language === 'ja' ? '詳しく見る' : 'Learn more'}</span>
                        <LuArrowRight />
                      </Link>
                      <Link
                        href={href('/pricing')}
                        className="inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        {language === 'ja' ? '料金を見る' : 'See pricing'}
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="overflow-hidden bg-[linear-gradient(180deg,#fffaf3_0%,#ffffff_100%)] py-16 md:py-24">
          <Container className="grid gap-10 py-0 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ea580c]">
                {sectionCopy.approachEyebrow}
              </p>
              <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                {sectionCopy.approachTitle}
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                {sectionCopy.approachBody}
              </p>

              <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-[0_24px_50px_rgba(15,23,42,0.18)]">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/65">
                  {content.about.missionLabel}
                </p>
                <h3 className="mt-3 text-2xl font-black">{content.about.headline}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
                  {content.about.lead}
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {approachSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_16px_30px_rgba(15,23,42,0.06)] md:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eff6ff] text-lg font-black text-[#0f172a]">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-950">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="bg-slate-50 py-16 md:py-24">
          <Container className="space-y-8 py-0">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f766e]">
                {sectionCopy.atmosphereEyebrow}
              </p>
              <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                {sectionCopy.atmosphereTitle}
              </h2>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                {sectionCopy.atmosphereBody}
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
              <article className="relative min-h-[27rem] overflow-hidden rounded-[2rem] lg:row-span-2">
                <Image
                  src="/classoom/2.jpg"
                  alt="Children learning together in class"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/75">
                    {sectionCopy.testimonialEyebrow}
                  </p>
                  <h3 className="mt-2 text-2xl font-black">{sectionCopy.testimonialTitle}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
                    {language === 'ja'
                      ? '教室の魅力は、内容だけでなく、子どもたちが安心して参加できる空気感にあります。'
                      : 'What families feel first is not only the curriculum, but the warmth and confidence of the room.'}
                  </p>
                </div>
              </article>

              {galleryCards.map((card) => (
                <article
                  key={card.title}
                  className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_16px_34px_rgba(15,23,42,0.07)]"
                >
                  <div className="relative h-52">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 22vw, 100vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-black text-slate-950">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="bg-white py-16 md:py-24">
          <Container className="space-y-8 py-0">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7c3aed]">
                {sectionCopy.testimonialEyebrow}
              </p>
              <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                {sectionCopy.testimonialTitle}
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {content.testimonials.map((testimonial, index) => (
                <article
                  key={`${testimonial.name}-${index}`}
                  className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fafafc_100%)] p-6 shadow-[0_18px_36px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex items-center gap-2 text-[#f97316]">
                    <LuStar className="fill-current" />
                    <LuStar className="fill-current" />
                    <LuStar className="fill-current" />
                    <LuStar className="fill-current" />
                    <LuStar className="fill-current" />
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-slate-700">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-5 border-t border-slate-200 pt-4">
                    <p className="font-bold text-slate-950">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="bg-[linear-gradient(135deg,#0f766e_0%,#0f172a_100%)] py-16 text-white md:py-20">
          <Container className="grid gap-8 py-0 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/65">
                Contact
              </p>
              <h2 className="text-3xl font-black leading-tight md:text-5xl">
                {sectionCopy.ctaTitle}
              </h2>
              <p className="text-base leading-relaxed text-white/80 md:text-lg">
                {sectionCopy.ctaBody}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href={href('/contact')}
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
              >
                {sectionCopy.ctaPrimary}
              </Link>
              <Link
                href={href('/pricing')}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/35 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {sectionCopy.ctaSecondary}
              </Link>
            </div>
          </Container>
        </section>
      </FadeIn>
    </div>
  );
};

export default HomePageRevamp;
