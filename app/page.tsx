import type { Metadata } from "next";
import AboutSection from "./components/AboutSection";
import AnnouncementBar from "./components/AnnouncementBar";
import ClassesOverviewSection from './components/ClassesOverviewSection'
import ColorfulSchoolSectionLocalized from "./components/ColorfulSchoolSectionLocalized";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HomeActionCtaSection from './components/HomeActionCtaSection'
import Hero from "./components/Hero";
import HiringSpotlightSection from './components/HiringSpotlightSection'
import MontessoriFeatureSection from './components/MontessoriFeatureSection'
import Navbar from './components/Navbar'
import PricingTeaserSection from './components/PricingTeaserSection'
import TestimonialsSection from './components/TestimonialsSection'
import { createPageMetadata } from './constants/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'English Daycare and Eikaiwa in Tsukuba',
  description:
    'Namiki English School offers daycare, Eikaiwa, and after-school English programs in Tsukuba for ages 2 and up.',
  path: '/',
  keywords: [
    'English school Tsukuba',
    'Tsukuba daycare English',
    'Eikaiwa for kids Tsukuba',
    'After-school English Tsukuba',
  ],
  image: '/og-thumbnail.png',
})

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <AnnouncementBar />
      <Navbar />
      <main className='flex flex-1 flex-col gap-2'>
        <Hero />
        <HomeActionCtaSection />
        <PricingTeaserSection />
        <MontessoriFeatureSection
          eyebrow={{
            ja: 'デイケアプログラム',
            en: 'Daycare Program',
          }}
          title={{
            ja: '安心の環境で英語を自然に身につける',
            en: 'Natural English growth in a safe daycare setting',
          }}
          description={{
            ja: '2歳以上のお子さまを対象に、安全で温かく、英語に触れる豊かな環境を提供します。月曜日から金曜日、午前8時から午後6時まで開校し、遊びを通した英語イマージョン、歌・フォニックス・絵本活動、日常生活習慣と社会性の育成、創造活動と身体活動を通して、自然に英語コミュニケーション力を身につける、自信に満ちた子どもたちを育てます。',
            en: 'Our Day Care Program provides a safe, warm, and English-rich environment for children aged 2 years old and up. Operating Monday to Friday from 8:00 AM to 6:00 PM, we focus on play-based English immersion, songs/phonics/storytelling, daily routines and social skill development, and creative arts and physical activities to nurture confident, happy learners who naturally acquire English communication skills.',
          }}
          ctaLabel={{
            ja: 'デイケア料金を見る',
            en: 'See daycare rates',
          }}
          ctaHref='/pricing'
          imageAlt={{
            ja: 'デイケアクラスで学ぶ子どもたち',
            en: 'Children learning in daycare class',
          }}
          imageSrc='/assets/asset-1.jpg'
          reverse={false}
        />
        <MontessoriFeatureSection
          eyebrow={{
            ja: '\u30b9\u30af\u30fc\u30eb\u30b3\u30f3\u30bb\u30d7\u30c8',
            en: 'School Concept',
          }}
          title={{
            ja: '\u79c1\u305f\u3061\u306e\u30b3\u30f3\u30bb\u30d7\u30c8',
            en: 'Our Concept',
          }}
          description={{
            ja: '私たちのコンセプトは、英語力だけでなく、人間性と自信を育てることです。少人数で一人ひとりに寄り添い、フォニックス・会話・リーディング・ライティング・創造活動をバランスよく組み合わせ、年齢に合わせて段階的に伸ばします。ご家庭との連携を大切にし、英語を「学ぶ教科」ではなく「日常で使う生きた言語」として自然に身につけられる学びを目指しています。',
            en: 'Our concept goes beyond language lessons. We aim to develop confidence, character, and communication through a balanced approach to phonics, conversation, reading, writing, and creative activities. In small classes, each learner is guided at the right pace for their age and stage. We also work closely with families so English becomes a living language children can use naturally in daily life.',
          }}
          ctaLabel={{
            ja: '\u8a73\u3057\u304f\u898b\u308b',
            en: 'Learn More',
          }}
          ctaHref='/about'
          imageAlt={{
            ja: '\u6559\u5ba4\u3067\u5b66\u3076\u5b50\u3069\u3082\u305f\u3061',
            en: 'Students learning in class',
          }}
          imageSrc='/classoom/1.jpg'
          reverse={true}
        />
        <HiringSpotlightSection />

        {/* <MontessoriFeatureSection
          eyebrow={{
            ja: 'アフタースクール',
            en: 'After School Program',
          }}
          title={{
            ja: '放課後を学びのゴールデンタイムに',
            en: 'Turn after-school hours into growth time',
          }}
          description={{
            ja: '学校後の時間を活かして、英語学習と宿題サポートをバランスよく実施。フォニックス・リーディング・ライティング・会話力を段階的に伸ばします。',
            en: 'We blend English immersion with homework support after school, helping learners build phonics, reading, writing, and conversation skills step by step.',
          }}
          ctaLabel={{
            ja: 'アフタースクール料金',
            en: 'View after-school rates',
          }}
          ctaHref='/pricing'
          imageAlt={{
            ja: '放課後プログラムに参加する子どもたち',
            en: 'Students in after-school program',
          }}
          imageSrc='/assets/asset-7.jpg'
          reverse={true}
        /> */}
        <MontessoriFeatureSection
          eyebrow={{
            ja: '1時間英会話レッスン',
            en: '1-Hour Eikaiwa Lessons',
          }}
          title={{
            ja: '会話中心で自信がつく英会話クラス',
            en: 'Conversation-first Eikaiwa that builds confidence',
          }}
          description={{
            ja: '2歳以上のお子さまを対象に、参加型の英会話レッスンを提供しています。自信・発音・語彙力・自然なコミュニケーション力を育て、スピーキングとリスニング練習、フォニックスと発音強化、語彙力と文章作り、ロールプレイと参加型アクティビティを通して、自然で効果的に英語で自己表現ができる、自信あるコミュニケーターを育てます。',
            en: 'Our Eikaiwa Program provides interactive English conversation lessons for children aged 2 years old and up. Classes focus on building confidence, pronunciation, vocabulary, and natural communication skills. Through speaking and listening practice, phonics and pronunciation, vocabulary and sentence building, and role play with interactive activities, we develop confident English communicators who can express themselves naturally and effectively.',
          }}
          ctaLabel={{
            ja: '英会話料金を見る',
            en: 'See Eikaiwa rates',
          }}
          ctaHref='/pricing'
          imageAlt={{
            ja: '英会話レッスンで学ぶ生徒',
            en: 'Students in Eikaiwa lesson',
          }}
          imageSrc='/assets/asset-8.jpg'
          reverse={false}
        />
        <ColorfulSchoolSectionLocalized />
        <AboutSection />
        <ClassesOverviewSection />
        {/* <ProjectsSection /> */}
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
