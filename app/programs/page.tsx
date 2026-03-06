'use client';

import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "../components/AnnouncementBar";
import Container from "../components/Container";
import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProgramCard from "../components/ProgramCard";
import { useLanguage } from "../providers/LanguageProvider";

const ProgramsPage = () => {
  const { content, language } = useLanguage();
  const isJa = language === "ja";

  const hero = {
    badge: isJa ? "保護者の方へ" : "For Parents",
    title: isJa
      ? "英語が好きになる、未来につながるプログラム"
      : "Modern English Programs Kids Actually Love",
    description: isJa
      ? "少人数クラスと実践型レッスンで、話す・読む・書く・聞くをバランスよく育成。忙しいご家庭でも続けやすい学習設計です。"
      : "Small-group, hands-on classes that build speaking, reading, writing, and listening skills. Structured for busy families and measurable growth.",
    ctaPrimary: isJa ? "無料体験を予約" : "Book a Free Trial",
    ctaSecondary: isJa ? "入学の流れを見る" : "View Admissions",
    quickStats: [
      {
        label: isJa ? "少人数制" : "Small Groups",
        value: isJa ? "最大8名" : "Up to 8 students",
      },
      {
        label: isJa ? "対象年齢" : "Age Range",
        value: isJa ? "2歳〜中学生" : "Ages 2 to Jr. High",
      },
      {
        label: isJa ? "保護者サポート" : "Parent Updates",
        value: isJa ? "毎回フィードバック" : "After every class",
      },
    ],
  };

  const parentPromises = [
    {
      title: isJa ? "送り迎えしやすい時間設計" : "Family-Friendly Scheduling",
      body: isJa
        ? "平日中心の時間割で、保育園・学校との両立をサポート。"
        : "Weekday-centered schedules that fit daycare and school routines.",
    },
    {
      title: isJa ? "毎回の成長が見える" : "Visible Weekly Progress",
      body: isJa
        ? "レッスンごとに学習ポイントを共有。家庭学習のヒントもお渡しします。"
        : "Quick post-class feedback with practical tips for home practice.",
    },
    {
      title: isJa ? "英語が苦手でも安心" : "Beginner-Safe by Design",
      body: isJa
        ? "初めてでも無理なくスタート。年齢とレベルに合わせて段階的に上達します。"
        : "Beginner-friendly pathways with level-based pacing for steady confidence.",
    },
  ];

  const pathways = [
    {
      title: isJa ? "2〜6歳" : "Ages 2-6",
      subtitle: isJa ? "Daycare / Early Years" : "Daycare / Early Years",
      body: isJa
        ? "歌・遊び・フォニックスで英語の音に自然に親しみ、話す土台を作ります。"
        : "Songs, play, and phonics build a natural ear for English and early speaking confidence.",
      image: "/assets/asset-1.jpg",
    },
    {
      title: isJa ? "小学生" : "Elementary",
      subtitle: isJa ? "After School / Eikaiwa" : "After School / Eikaiwa",
      body: isJa
        ? "会話に加えて読解・語彙・ライティングを強化。学校英語との相乗効果を高めます。"
        : "Strengthens conversation, reading, vocabulary, and writing with school-aligned support.",
      image: "/assets/asset-4.jpg",
    },
    {
      title: isJa ? "中学生" : "Junior High",
      subtitle: isJa ? "Practical Communication" : "Practical Communication",
      body: isJa
        ? "ディスカッションや発表で、自分の考えを英語で伝える力を育てます。"
        : "Discussion and presentation-focused classes to communicate ideas clearly in English.",
      image: "/assets/asset-8.jpg",
    },
  ];

  const learningFlow = [
    {
      step: isJa ? "Step 1" : "Step 1",
      title: isJa ? "ウォームアップ会話" : "Warm-Up Conversation",
      detail: isJa
        ? "前回の復習とスピーキングで、英語モードに切り替えます。"
        : "Short review + guided speaking to switch into English mode.",
    },
    {
      step: isJa ? "Step 2" : "Step 2",
      title: isJa ? "フォニックス・語彙" : "Phonics and Vocabulary",
      detail: isJa
        ? "正しい音・アクセントを身につけ、使える語彙を増やします。"
        : "Builds sound accuracy and practical word bank.",
    },
    {
      step: isJa ? "Step 3" : "Step 3",
      title: isJa ? "読解・表現活動" : "Reading and Expression",
      detail: isJa
        ? "年齢別テキストとアクティビティで理解力と表現力を伸ばします。"
        : "Age-level texts and activities grow comprehension and expression.",
    },
    {
      step: isJa ? "Step 4" : "Step 4",
      title: isJa ? "アウトプットと振り返り" : "Output and Feedback",
      detail: isJa
        ? "発表やロールプレイで定着。保護者向けフィードバックも実施。"
        : "Presentation/roleplay for retention, plus parent-facing progress feedback.",
    },
  ];

  const outcomes = isJa
    ? [
        "英語を話すことへの抵抗感が減り、発話量が増える",
        "フォニックスの定着で、読む力と発音が安定する",
        "語彙が増え、自分の言葉で説明できるようになる",
        "学校英語への理解が進み、学習への自信につながる",
      ]
    : [
        "Higher speaking confidence and more spontaneous output",
        "Stronger pronunciation and reading through phonics mastery",
        "Bigger vocabulary with clearer sentence-building",
        "Better school performance and stronger self-confidence",
      ];

  const faqs = [
    {
      q: isJa
        ? "英語が初めてでもついていけますか？"
        : "Can my child join as a complete beginner?",
      a: isJa
        ? "はい。体験時にレベル確認を行い、無理のないクラスからスタートします。"
        : "Yes. We assess level during the trial and place each child in a suitable class.",
    },
    {
      q: isJa
        ? "どのくらいで変化を感じられますか？"
        : "How quickly can we expect progress?",
      a: isJa
        ? "多くのお子さまで8〜12週間ほどで、発話量や理解面の変化が見え始めます。"
        : "Most families notice clearer speaking confidence and comprehension in about 8-12 weeks.",
    },
    {
      q: isJa
        ? "宿題はありますか？"
        : "Is there homework?",
      a: isJa
        ? "短時間でできる復習課題をご案内します。家庭での負担は最小限です。"
        : "Yes, short review tasks only. Designed to reinforce learning without overloading families.",
    },
    {
      q: isJa
        ? "保護者への報告はありますか？"
        : "Do parents receive updates?",
      a: isJa
        ? "毎回のレッスン後に、学習内容と次回のポイントを共有します。"
        : "Yes. We share lesson highlights and next-step focus after each class.",
    },
  ];

  const promiseStyles = [
    "border-cyan-200 bg-gradient-to-br from-cyan-50 to-sky-100/70",
    "border-emerald-200 bg-gradient-to-br from-emerald-50 to-lime-100/70",
    "border-orange-200 bg-gradient-to-br from-orange-50 to-amber-100/70",
  ];

  const pathwayStyles = [
    "border-sky-200 bg-gradient-to-b from-white to-sky-50/80",
    "border-emerald-200 bg-gradient-to-b from-white to-emerald-50/80",
    "border-orange-200 bg-gradient-to-b from-white to-amber-50/80",
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex flex-1 flex-col bg-slate-50">
        <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-amber-50">
          <div className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full bg-cyan-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 right-0 h-52 w-52 rounded-full bg-orange-200/50 blur-3xl" />
          <Container className="relative grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr] md:py-20">
            <FadeIn>
              <div className="space-y-6">
                <p className="inline-flex rounded-full bg-slate-900 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
                  {hero.badge}
                </p>
                <h1 className="max-w-2xl text-4xl leading-tight text-slate-900 md:text-5xl">
                  {hero.title}
                </h1>
                <p className="max-w-xl text-base text-slate-700 md:text-lg">{hero.description}</p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    {hero.ctaPrimary}
                  </Link>
                  <Link
                    href="/admissions"
                    className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                  >
                    {hero.ctaSecondary}
                  </Link>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {hero.quickStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-sm font-bold text-slate-900">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200">
                <div className="relative h-64 md:h-full md:min-h-[420px]">
                  <Image
                    src="/assets/asset-7.jpg"
                    alt={isJa ? "英語クラスの子どもたち" : "Kids in English class"}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        <Container className="space-y-14 py-12 md:space-y-16 md:py-16">
          <FadeIn>
            <section className="grid gap-4 md:grid-cols-3">
              {parentPromises.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-3xl border p-6 shadow-sm ${promiseStyles[index % promiseStyles.length]}`}
                >
                  <h2 className="text-xl text-slate-900">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.body}</p>
                </article>
              ))}
            </section>
          </FadeIn>

          <section className="space-y-5">
            <FadeIn>
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                  {isJa ? "年齢別ガイド" : "Age Pathways"}
                </p>
                <h2 className="text-3xl text-slate-900">
                  {isJa
                    ? "お子さまの成長段階に合わせた学習ロードマップ"
                    : "A clear pathway for each growth stage"}
                </h2>
              </div>
            </FadeIn>
            <div className="grid gap-5 md:grid-cols-3">
              {pathways.map((path, index) => (
                <FadeIn key={path.title} delay={index * 0.06}>
                  <article
                    className={`overflow-hidden rounded-3xl border shadow-sm ${pathwayStyles[index % pathwayStyles.length]}`}
                  >
                    <div className="relative h-44">
                      <Image
                        src={path.image}
                        alt={path.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-3 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                        {path.subtitle}
                      </p>
                      <h3 className="text-xl text-slate-900">{path.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-700">{path.body}</p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </section>

          <section className="space-y-5">
            <FadeIn>
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                  {isJa ? "コース一覧" : "Programs"}
                </p>
                <h2 className="text-3xl text-slate-900">
                  {isJa ? "目的に合わせて選べる3つの主力プログラム" : "Three core programs for different goals"}
                </h2>
              </div>
            </FadeIn>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {content.programs.map((program, index) => (
                <FadeIn key={program.title} delay={index * 0.05}>
                  <ProgramCard program={program} />
                </FadeIn>
              ))}
            </div>
          </section>

          <section className="grid gap-8 rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-sky-50 p-6 md:grid-cols-2 md:p-10">
            <FadeIn>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                  {isJa ? "レッスン設計" : "Weekly Learning Flow"}
                </p>
                <h2 className="text-3xl text-slate-900">
                  {isJa ? "成果が出る、1回の授業の進め方" : "How each lesson creates measurable progress"}
                </h2>
                <p className="text-sm leading-relaxed text-slate-700">
                  {isJa
                    ? "「楽しい」だけで終わらず、入力と出力をバランスよく設計。毎回の積み上げで着実に伸ばします。"
                    : "Designed to balance input and output so every class contributes to real language gains."}
                </p>
              </div>
            </FadeIn>
            <div className="space-y-4">
              {learningFlow.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.05}>
                  <div className="rounded-2xl bg-white/80 p-4 ring-1 ring-cyan-100">
                    <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
                      {item.step}
                    </p>
                    <h3 className="mt-1 text-lg text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-700">{item.detail}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <FadeIn>
              <article className="rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-100/70 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                  {isJa ? "期待できる変化" : "Typical Outcomes"}
                </p>
                <h2 className="mt-2 text-3xl text-slate-900">
                  {isJa ? "約3か月で見え始める成長" : "Progress many parents see in 90 days"}
                </h2>
                <ul className="mt-5 space-y-3 text-sm text-slate-700">
                  {outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-cyan-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
            <FadeIn delay={0.08}>
              <article className="rounded-3xl border border-fuchsia-200 bg-gradient-to-br from-rose-50 to-fuchsia-100/60 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                  {isJa ? "よくある質問" : "Parent FAQs"}
                </p>
                <div className="mt-4 space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.q} className="rounded-2xl bg-white/85 p-4 ring-1 ring-fuchsia-100">
                      <h3 className="text-sm font-semibold text-slate-900">{faq.q}</h3>
                      <p className="mt-1 text-sm text-slate-700">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </article>
            </FadeIn>
          </section>

          <FadeIn>
            <section className="rounded-[2rem] bg-slate-900 p-7 text-white md:p-10">
              <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr] md:items-end">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    {isJa ? "次のステップ" : "Next Step"}
                  </p>
                  <h2 className="text-3xl text-white">
                    {isJa
                      ? "まずは体験レッスンで、お子さまとの相性を確認しませんか？"
                      : "Book a trial lesson and see the class fit before enrolling."}
                  </h2>
                  <p className="text-sm text-slate-200">
                    {isJa
                      ? `お問い合わせ: ${content.contact.email} / ${content.contact.phoneLabel}`
                      : `Contact: ${content.contact.email} / ${content.contact.phoneLabel}`}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Link
                    href="/contact"
                    className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
                  >
                    {isJa ? "体験レッスンを申し込む" : "Request a Trial"}
                  </Link>
                  <Link
                    href="/pricing"
                    className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50"
                  >
                    {isJa ? "料金を見る" : "View Pricing"}
                  </Link>
                </div>
              </div>
            </section>
          </FadeIn>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramsPage;
