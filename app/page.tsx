import { redirect } from "next/navigation";
import AboutSection from "./components/AboutSection";
import AnnouncementBar from "./components/AnnouncementBar";
import ColorfulSchoolSectionLocalized from "./components/ColorfulSchoolSectionLocalized";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HomeActionCtaSection from './components/HomeActionCtaSection'
import Hero from "./components/Hero";
import HiringSpotlightSection from './components/HiringSpotlightSection'
import MontessoriFeatureSection from './components/MontessoriFeatureSection'
import Navbar from './components/Navbar'
import PricingTeaserSection from './components/PricingTeaserSection'
import SummerSchoolPromoSection from './components/SummerSchoolPromoSection'
import TestimonialsSection from './components/TestimonialsSection'
import TwoVerticalImageSection from './components/TwoVerticalImageSection'

export function HomePageView() {
  return (
    <div className='flex min-h-screen flex-col'>
      <AnnouncementBar />
      <Navbar />
      <main className='flex flex-1 flex-col gap-2'>
        <Hero />
        <div id='programs' className='scroll-mt-24'>
          <MontessoriFeatureSection
            eyebrow={{
              ja: '1時間・2時間英会話レッスン',
              en: '1- or 2-Hour Eikaiwa Lessons',
            }}
            title={{
              ja: '会話中心で自信がつく英会話クラス',
              en: 'Conversation-first Eikaiwa that builds confidence',
            }}
            description={{
              ja: '3歳以上のお子さま向けの1時間または2時間のレッスンです。歌や絵本、ゲームを通して、英語を聞いたり話したりする自信を育てます。',
              en: 'One- or two-hour English conversation lessons for children ages 3 and up. Songs, stories and games help children build confidence in listening and speaking.',
            }}
            ctaLabel={{
              ja: '英会話レッスンを見る',
              en: 'Explore Eikaiwa lessons',
            }}
            ctaHref='/programs#lesson-options'
            imageAlt={{
              ja: '英会話レッスンで学ぶ生徒',
              en: 'Students in Eikaiwa lesson',
            }}
            imageSrc='/assets/asset-8.jpg'
            reverse={false}
          />
          <MontessoriFeatureSection
            eyebrow={{
              ja: 'アフタースクール',
              en: 'After School Program',
            }}
            title={{
              ja: '放課後に使える英語を学ぶ',
              en: 'Use English in everyday activities after school',
            }}
            description={{
              ja: '6〜12歳を対象に、月曜日から金曜日まで開講します。工作やグループ活動を通して日常の英語を練習し、宿題もサポートします。',
              en: 'For children ages 6 to 12, Monday to Friday. Children practise everyday English through crafts and group activities, with support for homework.',
            }}
            ctaLabel={{
              ja: '放課後プログラムを見る',
              en: 'Explore After School',
            }}
            ctaHref='/programs#after-school'
            imageAlt={{
              ja: '放課後プログラムに参加する子どもたち',
              en: 'Students in after-school program',
            }}
            imageSrc='/assets/asset-7.jpg'
            reverse={true}
          />
        </div>
        <SummerSchoolPromoSection />
        <TwoVerticalImageSection />
        <HomeActionCtaSection />
        <PricingTeaserSection />
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

        <ColorfulSchoolSectionLocalized />
        <AboutSection />
        {/* <ProjectsSection /> */}
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default function Page() {
  redirect("/ja");
}
