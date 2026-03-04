import AboutSection from "./components/AboutSection";
import AnnouncementBar from "./components/AnnouncementBar";
import ClassesOverviewSection from './components/ClassesOverviewSection'
import ColorfulSchoolSectionLocalized from "./components/ColorfulSchoolSectionLocalized";
import ColorSquaresSectionLocalized from "./components/ColorSquaresSectionLocalized";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HomeActionCtaSection from './components/HomeActionCtaSection'
import Hero from "./components/Hero";
import MontessoriFeatureSection from "./components/MontessoriFeatureSection";
import Navbar from './components/Navbar'
import PricingTeaserSection from './components/PricingTeaserSection'
import ProjectsSection from './components/ProjectsSection'
import TestimonialsSection from "./components/TestimonialsSection";

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
            ja: '2歳からのお子さまを対象に、歌・遊び・日常活動を通して英語に触れる時間をしっかり確保。温かい保育と英語イマージョンを両立した学びを提供します。',
            en: 'For children ages 2 and up, we combine songs, play, and daily routines with consistent English exposure in a warm and nurturing daycare environment.',
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
          imageSrc='/student-class/young-learner.jpg'
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
            ja: 'Namiki English School\u306f2\u6b73\u4ee5\u4e0a\u3092\u5bfe\u8c61\u3068\u3057\u3001\u6e29\u304b\u304f\u5b89\u5168\u306a\u82f1\u8a9e\u30a4\u30de\u30fc\u30b8\u30e7\u30f3\u74b0\u5883\u3092\u63d0\u4f9b\u3059\u308b\u30d5\u30a1\u30df\u30ea\u30fc\u30b9\u30bf\u30a4\u30eb\u306e\u30d0\u30a4\u30ea\u30f3\u30ac\u30eb\u82f1\u8a9e\u30b9\u30af\u30fc\u30eb\u3067\u3059\u3002\u30c7\u30a4\u30b1\u30a2\u30fb\u82f1\u4f1a\u8a71\u30fb\u30a2\u30d5\u30bf\u30fc\u30b9\u30af\u30fc\u30eb\u3092\u7d44\u307f\u5408\u308f\u305b\u3001\u5b50\u3069\u3082\u305f\u3061\u306e\u81ea\u4fe1\u3068\u56fd\u969b\u7684\u306a\u8996\u91ce\u3092\u80b2\u3066\u307e\u3059\u3002',
            en: 'Namiki English School is a family-style bilingual English school for children aged 2 and up, providing a warm, safe, and immersive environment. We combine daycare, eikaiwa, and after-school support to build confidence, communication skills, and global awareness.',
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
          imageSrc='/student-class/workshops.jpg'
          reverse={true}
        />
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
          imageSrc='/student-class/student-class-1.jpg'
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
            ja: '1時間の集中レッスンで、発音・語彙・実践会話を強化。楽しく自然に話せる力を育て、自己表現の幅を広げます。',
            en: 'In focused one-hour lessons, students strengthen pronunciation, vocabulary, and practical communication while gaining confidence to express themselves.',
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
          imageSrc='/student-class/workshops.jpg'
          reverse={false}
        />
        <ColorfulSchoolSectionLocalized />
        <AboutSection />
        <ColorSquaresSectionLocalized />
        <ClassesOverviewSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
