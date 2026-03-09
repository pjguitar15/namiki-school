export type LanguageCode = "ja" | "en";

export type NavItem = {
  label: string;
  href: string;
};

export type HeroCopy = {
  badge: string;
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: { value: string; label: string; description: string }[];
  image: string;
};

export type Feature = {
  title: string;
  body: string;
};

export type Program = {
  title: string;
  duration: string;
  category: string;
  bulletPoints: string[];
  ctaLabel: string;
  accentColor: string;
  image: string;
};

export type Project = {
  title: string;
  summary: string;
  tag: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type BackToSchoolCopy = {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

export type ContactCopy = {
  title: string;
  description: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  note: string;
  hours: string;
};

export type ColorSquaresSectionCopy = {
  eyebrow: string;
  heading: string;
  description: string;
  columns: 2 | 3 | 4;
  items: {
    id: string;
    title: string;
    lines: string[];
    color: string;
    textColor?: string;
  }[];
};

export type SchoolShowcaseCopy = {
  hero: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    indexLabel: string;
    description: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    imageSrc: string;
    imageAlt: string;
    statValue: string;
    statLabel: string;
    principalName: string;
    principalRole: string;
  };
  mosaicTiles: (
    | {
        id: string;
        type: "image";
        imageSrc: string;
        imageAlt: string;
        colSpan?: 1 | 2;
        rowSpan?: 1 | 2;
      }
    | {
        id: string;
        type: "color";
        title: string;
        description: string;
        eyebrow?: string;
        backgroundColor: string;
        textColor?: string;
        colSpan?: 1 | 2;
        rowSpan?: 1 | 2;
      }
  )[];
};

export type LanguageContent = {
  navItems: NavItem[];
  backToSchool: BackToSchoolCopy;
  hero: HeroCopy;
  about: {
    missionLabel: string;
    headline: string;
    lead: string;
    body: string[];
  };
  features: Feature[];
  programs: Program[];
  projects: Project[];
  testimonials: Testimonial[];
  partners: string[];
  contact: ContactCopy;
  announcement: string;
  footerCredit: string;
  aboutPage: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      stats: { label: string; value: string }[];
    };
    messageToParents: {
      title: string;
      subtitle: string;
      greeting: string;
      body: string[];
      signoff: string;
      signerTitle: string;
    };
    story: {
      title: string;
      paragraphs: string[];
      image: string;
    };
    values: { title: string; body: string }[];
    highlights: { title: string; description: string; icon: string }[];
    faqs: { question: string; answer: string }[];
    colorPaletteSection: ColorSquaresSectionCopy;
  };
  admissionsPage: {
    heroTitle: string;
    heroDescription: string;
    steps: { title: string; body: string }[];
    highlights: { title: string; detail: string }[];
  };
  programsPage: {
    heroTitle: string;
    heroDescription: string;
  };
  colorSquaresSection: ColorSquaresSectionCopy;
  schoolShowcaseSection: SchoolShowcaseCopy;
};

const partners = [
  "/assets/asset-2.jpg",
  "/assets/asset-3.jpg",
  "/classoom/2.jpg",
  "/classoom/5.jpg",
];

export const LANGUAGE_CONTENT: Record<LanguageCode, LanguageContent> = {
  ja: {
    navItems: [
      { label: 'ホーム', href: '/' },
      { label: '学校について', href: '/about' },
      { label: '入学・お申込み', href: '/admissions' },
      { label: '料金', href: '/pricing' },
      { label: 'プログラム', href: '/programs' },
    ],
    backToSchool: {
      eyebrow: '新学期',
      title: 'Back to School!',
      body: '新しい学期が始まります。ストーリー、ゲーム、プロジェクトを通じて、英語を自然に身につけられるクラスを用意しています。',
      ctaLabel: 'プログラムを見る',
      ctaHref: '/programs',
    },
    hero: {
      badge: '明るく、のびのび学ぶ英語教室',
      headline: '英語をもっとやさしくしよう',
      subheadline:
        '2歳から大人まで、自信を持って英語を話せるように。少人数クラスと楽しいアクティビティで、学ぶ喜びを育てます。',
      ctaPrimary: '体験レッスンを予約',
      ctaSecondary: '詳しく見る',
      stats: [
        { value: '60+', label: '在籍生徒', description: 'が通う安心の教室' },
        { value: '12年', label: '歴史', description: '地域に根ざした英語教育' },
        {
          value: '少人数',
          label: '対話重視',
          description: 'のレッスンスタイル',
        },
      ],
      image: '/assets/asset-7.jpg',
    },
    about: {
      missionLabel: 'ビジョン • ミッション • 教育理念',
      headline: '信頼されるファミリースタイルの英語スクールへ',
      lead: '日本において、子どもたちが自信・国際的な視野・高いコミュニケーション力を育む、信頼されるファミリースタイルのインターナショナル英語スクールを目指します。',
      body: [
        'Namiki English Schoolでは、英語学習は楽しく、自然で、意味のあるものであるべきだと考えています。子どもたちは安心し、励まされ、刺激を受ける環境で最もよく学びます。',
        '私たちは英語力だけでなく、人格・思いやり・国際的な考え方も育てます。',
      ],
    },
    features: [
      {
        title: 'ビジョン',
        body: '子どもたちが自信・国際的な視野・高いコミュニケーション力を育む、信頼されるファミリースタイルの英語スクールを目指します。',
      },
      {
        title: 'ミッション',
        body: '安心で温かい環境の中で質の高い英語教育を提供し、2歳から12歳までの子どもたちの自信ある英語力を育てます。さらに一人ひとりの個性と成長を大切にし、ご家庭や地域との強い信頼関係を築きます。',
      },
      {
        title: '教育理念',
        body: '英語学習を楽しく自然で意味のあるものにし、言語力だけでなく人格・思いやり・国際的な考え方を育てます。',
      },
    ],
    programs: [
      {
        title: 'デイケアプログラム',
        duration: '月〜金 / 8:00-18:00',
        category: '2歳以上対象',
        bulletPoints: [
          '遊びを通した英語イマージョン',
          '歌・フォニックス・絵本活動',
          '日常生活習慣と社会性の育成',
          '創造活動と身体活動',
        ],
        ctaLabel: 'お問い合わせ',
        accentColor: 'bg-blue-500',
        image: '/assets/asset-1.jpg',
      },
      {
        title: '英会話クラス',
        duration: '平日開講',
        category: '2歳以上対象の英会話プログラム',
        bulletPoints: [
          'スピーキングとリスニング練習',
          'フォニックスと発音強化',
          '語彙力と文章作り',
          'ロールプレイと参加型アクティビティ',
          '自然で効果的に自己表現できる力を育成',
        ],
        ctaLabel: 'お問い合わせ',
        accentColor: 'bg-green-500',
        image: '/assets/asset-5.jpg',
      },
      {
        title: 'アフタースクール',
        duration: '月〜金（放課後）',
        category: '6歳〜12歳対象',
        bulletPoints: [
          'フォニックスと発音強化',
          'リーディング・ライティング力向上',
          '文法と語彙力の強化',
          '英会話およびプレゼンテーション力',
          '宿題サポートと創造的活動',
        ],
        ctaLabel: 'お問い合わせ',
        accentColor: 'bg-orange-500',
        image: '/assets/asset-1.jpg',
      },
    ],
    projects: [
      {
        title: 'プレゼンテーションデー',
        summary:
          '学んだ表現を使い、チームで短いプレゼンを作成。保護者の前で発表し、達成感を共有します。',
        tag: '発表会',
        image: '/classoom/4.jpg',
      },
      {
        title: 'ストーリーテリング',
        summary:
          '好きな物語を英語で朗読し、絵や小物を使ってシーンを再現。表現の幅を広げる人気の時間です。',
        tag: '表現力',
        image: '/classoom/3.jpg',
      },
    ],
    testimonials: [
      {
        quote:
          '毎週のレッスンが楽しみで仕方ないようです。先生のフィードバックで家でも一緒に復習できています。',
        name: '保護者 A 様',
        role: '小学3年生 保護者',
      },
      {
        quote:
          '人前で話すのが苦手だったのに、発表会でしっかり自分の意見を言えるようになりました。',
        name: '保護者 B 様',
        role: '小学5年生 保護者',
      },
      {
        quote:
          'ただの座学ではなく、英語で考えて作る体験が多いので自然と話せるようになってきました。',
        name: '受講生 C さん',
        role: '中学生',
      },
    ],
    partners,
    contact: {
      title: '体験レッスン・資料請求はこちらから',
      description:
        'ご希望の日時や現在の英語レベルをお知らせください。講師が最適なプランをご提案します。',
      emailLabel: 'tsukubanamikienglishschool@gmail.com',
      email: 'tsukubanamikienglishschool@gmail.com',
      phoneLabel: '080-2015-6832（8:00-18:00）',
      phone: '080-2015-6832',
      note: 'ご返信は通常1営業日以内に差し上げます。',
      hours: 'クラス時間: 8:00-18:00',
    },
    announcement: '新年度クラスの体験レッスン予約を受付中です。',
    footerCredit:
      '© 2026 Namiki English School | Developed by Philcob Suzuki Josol',
    aboutPage: {
      hero: {
        eyebrow: 'About the School',
        title: '英語で伝える力を、2歳から大人まで',
        description:
          'ナミキイングリッシュスクールは、学ぶ楽しさと自信を育むために、少人数と実践的なアクティビティを大切にしています。',
        stats: [
          { label: '開校予定', value: '2026年4月' },
          { label: '年齢層', value: '2歳〜大人' },
          { label: '講師', value: '英語に堪能な講師陣' },
        ],
      },
      messageToParents: {
        title: 'Message to Parents',
        subtitle: '保護者の皆さまへ',
        greeting:
          '平素よりNamiki English Schoolの教育活動にご理解とご協力を賜り、誠にありがとうございます。',
        body: [
          '私たちは、すべての子どもたちがそれぞれの可能性を持っていると信じています。安心で温かく、刺激に満ちた環境の中で、自信を育み、英語によるコミュニケーション力を伸ばしていきます。',
          '英語だけでなく、思いやりや創造力、国際的な視野を育てることを大切にし、一人ひとりの成長を保護者の皆さまと共に支えてまいります。',
          '今後ともどうぞよろしくお願い申し上げます。',
        ],
        signoff: 'Sincerely,',
        signerTitle: 'Namiki English Schoolより',
      },
      story: {
        title: '私たちのストーリー',
        paragraphs: [
          '地域の子どもたちが、英語で自分の気持ちを伝えられるように。そんな思いからスタートしました。',
          '歌やゲームだけで終わらず、リーディング・ライティング・スピーキング・フォニックスをバランスよく学び、アウトプットを重ねることで自信を育てています。',
          '2歳から大人まで、一人ひとりに合わせたサポートで「できた！」を積み重ねます。',
        ],
        image: '/classoom/4.jpg',
      },
      values: [
        {
          title: 'Curiosity',
          body: '好奇心を大切にし、楽しく英語に触れ続ける環境をつくります。',
        },
        {
          title: 'Confidence',
          body: '小さな成功体験を積み重ね、自分の言葉で伝える勇気を育てます。',
        },
        {
          title: 'Community',
          body: '家庭と教室が一緒に成長を見守り、支え合うコミュニティを目指します。',
        },
      ],
      highlights: [
        {
          title: '少人数レッスン',
          description:
            '講師が目が届く人数で、一人ひとりに合わせた声かけを行います。',
          icon: 'users',
        },
        {
          title: '総合スキル',
          description:
            '読む・書く・話す・聞く・フォニックスまで、バランスよく強化します。',
          icon: 'book',
        },
        {
          title: '実践アウトプット',
          description:
            '発表やミニプロジェクトでアウトプットを重ね、自信を定着させます。',
          icon: 'sparkles',
        },
        {
          title: '保護者連携',
          description:
            'フィードバックと振り返りを共有し、ご家庭と学びをつなぎます。',
          icon: 'chat',
        },
      ],
      faqs: [
        {
          question: '英語が初めてでも大丈夫ですか？',
          answer:
            'はい、フォニックスと会話の基礎から丁寧に進めます。年齢やレベルに合わせてクラスを調整します。',
        },
        {
          question: '体験レッスンはありますか？',
          answer: '随時受け付けています。ご希望の日時をお知らせください。',
        },
        {
          question: '保護者はレッスンを見学できますか？',
          answer:
            '初回は見学いただけます。その後もフィードバックでレッスン内容を共有します。',
        },
        {
          question: '宿題はありますか？',
          answer:
            '短時間で取り組める復習タスクをお渡しし、習慣づくりをサポートします。',
        },
      ],
      colorPaletteSection: {
        eyebrow: 'Learning Atmosphere',
        heading: '色でつくる、学びの空気感',
        description:
          '集中・安心・意欲をバランスよく引き出すために、教室運営で意識している色の役割です。',
        columns: 4,
        items: [
          {
            id: 'focus',
            title: '集中',
            color: '#2878d9',
            lines: ['青系ゾーン', '静かな読解時間', '思考の整理を促進'],
          },
          {
            id: 'calm',
            title: '安心',
            color: '#58b25a',
            lines: ['緑系の壁面', '気持ちを落ち着ける', '自分のペースを維持'],
          },
          {
            id: 'energy',
            title: '活力',
            color: '#f07f2f',
            lines: ['オレンジの差し色', '会話練習を後押し', '参加意欲を高める'],
          },
          {
            id: 'clarity',
            title: '明瞭さ',
            color: '#f3f0e7',
            textColor: '#374151',
            lines: ['オフホワイト背景', '視認性を確保', '教材を見やすくする'],
          },
        ],
      },
    },
    admissionsPage: {
      heroTitle: '入学・お申込みの流れ',
      heroDescription: '体験から入学までのステップをご案内します。',
      steps: [
        {
          title: '1. 体験レッスン',
          body: 'ご希望の日時で体験を実施します。レベル確認も行います。',
        },
        {
          title: '2. カウンセリング',
          body: '目標やご希望を伺い、最適なクラスやレベルをご提案します。',
        },
        {
          title: '3. お申込み',
          body: 'スケジュールと料金をご確認いただき、お申込み手続きを完了します。',
        },
      ],
      highlights: [
        {
          title: '柔軟なスケジュール',
          detail: '平日 8:00-18:00 / 週1-3回まで選択可能。',
        },
        {
          title: '少人数クラス',
          detail: '講師が目の届く人数で丁寧にサポート。',
        },
        {
          title: 'レベル調整',
          detail: '年齢・経験に合わせてクラスを調整します。',
        },
      ],
    },
    programsPage: {
      heroTitle: 'プログラム・レベル一覧',
      heroDescription: '年齢や目的に合わせて選べるコースをご用意しています。',
    },
    colorSquaresSection: {
      eyebrow: '教室の心理学',
      heading: '学びを支える色の効果',
      description:
        '教室デザインや教材デザインで活かせる、色ごとの心理的なサポート効果を紹介します。',
      columns: 3,
      items: [
        {
          id: 'red',
          title: '赤',
          color: '#e3192d',
          lines: ['注意喚起', 'わくわく感', '創造性'],
        },
        {
          id: 'yellow',
          title: '黄',
          color: '#f4d61a',
          textColor: '#243047',
          lines: ['前向きさ', '集中の維持', '創造性'],
        },
        {
          id: 'green',
          title: '緑',
          color: '#90c82c',
          lines: ['集中', '安心感', '落ち着き'],
        },
        {
          id: 'blue',
          title: '青',
          color: '#1f9bdb',
          lines: ['静けさ', '思考の整理', '気持ちの安定'],
        },
        {
          id: 'orange',
          title: 'オレンジ',
          color: '#f08a2d',
          lines: ['活力', '高彩度は刺激的', '低彩度は穏やか'],
        },
        {
          id: 'off-white',
          title: 'オフホワイト',
          color: '#f6f3eb',
          textColor: '#3f3f46',
          lines: ['前向きさ', '視認性', '明瞭さ'],
        },
      ],
    },
    schoolShowcaseSection: {
      hero: {
        imageSrc: '/classoom/1.jpg',
        imageAlt: '教室で笑顔の子どもたち',
        title: '小学校コース',
        indexLabel: '01.',
        description:
          '会話の自信を伸ばすアクティビティ中心の授業で、毎日の英語表現を自然に身につけます。',
      },
      intro: {
        eyebrow: '教育プログラム',
        title: '私たちのスクール',
        paragraphs: [
          '身体を動かす活動やストーリー学習、チームゲームを取り入れ、楽しく英語を使う時間を増やします。',
          '講師が一人ひとりの理解を確認しながら、スピーキング・リーディング・創作課題を丁寧に進めます。',
          'ご家庭への共有を重視し、教室外でも自然に学びが続くようにサポートします。',
          '発表やロールプレイを通じて、子どもたちの伝える力と自信を育てます。',
        ],
        imageSrc: '/assets/asset-4.jpg',
        imageAlt: '教室で制作活動をする児童',
        statValue: '毎日',
        statLabel: '英語の時間',
        principalName: 'セリア・メンデス',
        principalRole: 'スクール代表',
      },
      mosaicTiles: [
        {
          id: 'principal-card',
          type: 'color',
          eyebrow: 'スクール代表',
          title: 'セリア・メンデス',
          description:
            '英語を毎日自然に使える、安心感のあるクラス文化づくりを大切にしています。',
          backgroundColor: '#5dc4de',
          colSpan: 1,
        },
        {
          id: 'teacher-photo-1',
          type: 'image',
          imageSrc: '/assets/asset-8.jpg',
          imageAlt: '教室で指導する先生と生徒',
          colSpan: 1,
        },
        {
          id: 'playground-photo',
          type: 'image',
          imageSrc: '/classoom/1.jpg',
          imageAlt: '活動中に笑顔を見せる子どもたち',
          colSpan: 1,
        },
        {
          id: 'students-photo-1',
          type: 'image',
          imageSrc: '/assets/asset-4.jpg',
          imageAlt: '授業で取り組む生徒たち',
          colSpan: 1,
        },
        {
          id: 'students-photo-2',
          type: 'image',
          imageSrc: '/classoom/4.jpg',
          imageAlt: '教材が並ぶ教室スペース',
          colSpan: 1,
        },
        {
          id: 'sports-photo',
          type: 'image',
          imageSrc: '/classoom/2.jpg',
          imageAlt: '教室で遊びに取り組む子どもたち',
          colSpan: 1,
        },
        {
          id: 'teacher-highlight',
          type: 'color',
          eyebrow: '学習ハイライト',
          title: 'プロジェクト学習',
          description:
            '体験型の活動を通して、発音・伝達力・協働スキルをバランスよく伸ばします。',
          backgroundColor: '#e5be45',
          textColor: '#1f2937',
          colSpan: 1,
        },
        {
          id: 'teacher-photo-2',
          type: 'image',
          imageSrc: '/classoom/3.jpg',
          imageAlt: '学習教材のある教室の様子',
          colSpan: 1,
        },
      ],
    },
  },
  en: {
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Admission', href: '/admissions' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Programs', href: '/programs' },
    ],
    backToSchool: {
      eyebrow: 'New Term',
      title: 'Back to School!',
      body: 'Fresh notebooks, bright ideas, and a classroom ready for curious minds. Join our welcoming space where stories, science, and songs make English feel natural.',
      ctaLabel: 'View programs',
      ctaHref: '/programs',
    },
    hero: {
      badge: 'A bright, interactive English classroom',
      headline: 'Let’s Make English Feel Easy',
      subheadline:
        'For learners ages 2 and up. Small classes, friendly teachers, and activity-based lessons that build confidence.',
      ctaPrimary: 'Book a trial lesson',
      ctaSecondary: 'Explore programs',
      stats: [
        {
          value: '60+',
          label: 'Active students',
          description: 'Learning every week',
        },
        {
          value: '12 yrs',
          label: 'Trusted locally',
          description: 'Supporting families',
        },
        {
          value: 'Small groups',
          label: 'Conversation first',
          description: 'More speaking time',
        },
      ],
      image: '/assets/asset-7.jpg',
    },
    about: {
      missionLabel: 'Vision • Mission • Philosophy',
      headline: 'A trusted, family-style international English school',
      lead: 'To become a trusted, family-style international English school in Japan where children grow with confidence, global awareness, and strong communication skills.',
      body: [
        'At Namiki English School, we believe learning English should be joyful, natural, and meaningful. Children learn best when they feel safe, encouraged, and inspired.',
        'We focus not only on language skills, but also on character, kindness, and a global mindset.',
      ],
    },
    features: [
      {
        title: 'Vision',
        body: 'To become a trusted, family-style international English school in Japan where children grow with confidence, global awareness, and strong communication skills.',
      },
      {
        title: 'Mission',
        body: 'To provide high-quality English education in a warm and safe environment, nurture confident speakers from ages 2 to 12, support each child’s unique learning journey, and build strong partnerships with families and the community.',
      },
      {
        title: 'Philosophy',
        body: 'Learning should be joyful, natural, and meaningful, helping children build language skills, character, kindness, and a global mindset.',
      },
    ],
    programs: [
      {
        title: 'Daycare Program',
        duration: 'Mon-Fri / 8:00 AM-6:00 PM',
        category: 'Ages 2 and up',
        bulletPoints: [
          'Play-based English immersion',
          'Songs, phonics, and storytelling',
          'Daily routines and social skill development',
          'Creative arts and physical activities',
        ],
        ctaLabel: 'Contact us',
        accentColor: 'bg-blue-500',
        image: '/assets/asset-1.jpg',
      },
      {
        title: 'Eikaiwa Classes',
        duration: 'Weekday classes',
        category: 'Interactive classes for ages 2 and up',
        bulletPoints: [
          'Speaking and listening practice',
          'Phonics and pronunciation',
          'Vocabulary and sentence building',
          'Role play and interactive activities',
          'Builds confident communicators who express naturally and effectively',
        ],
        ctaLabel: 'Contact us',
        accentColor: 'bg-green-500',
        image: '/assets/asset-4.jpg',
      },
      {
        title: 'After School Program',
        duration: 'Monday-Friday (after school hours)',
        category: 'Ages 6-12',
        bulletPoints: [
          'Phonics and pronunciation development',
          'Reading and writing skills',
          'Grammar and vocabulary building',
          'English conversation and presentation skills',
          'Homework support and creative activities',
        ],
        ctaLabel: 'Contact us',
        accentColor: 'bg-orange-500',
        image: '/assets/asset-8.jpg',
      },
    ],
    projects: [
      {
        title: 'Presentation Day',
        summary:
          'Students build a short team presentation and share it with families, celebrating growth together.',
        tag: 'Showcase',
        image: '/classoom/4.jpg',
      },
      {
        title: 'Storytelling',
        summary:
          'Kids read favorite tales in English, using drawings and props to bring each scene to life.',
        tag: 'Expression',
        image: '/classoom/3.jpg',
      },
    ],
    testimonials: [
      {
        quote:
          'My child can’t wait for each class. The teacher’s feedback makes it easy for us to review at home together.',
        name: 'Parent A',
        role: 'Grade 3 parent',
      },
      {
        quote:
          'Speaking in front of others used to be scary, but now they share opinions confidently during showcases.',
        name: 'Parent B',
        role: 'Grade 5 parent',
      },
      {
        quote:
          'It’s not just drills—there are projects where we create in English, so speaking feels natural now.',
        name: 'Student C',
        role: 'Junior high student',
      },
    ],
    partners,
    contact: {
      title: 'Book a trial lesson or request info',
      description:
        'Share the current level and schedule you prefer. We’ll suggest the best plan for you.',
      emailLabel: 'tsukubanamikienglishschool@gmail.com',
      email: 'tsukubanamikienglishschool@gmail.com',
      phoneLabel: '080-2015-6832 (8:00-18:00)',
      phone: '080-2015-6832',
      note: 'We usually reply within one business day.',
      hours: 'Class hours: 8:00-18:00',
    },
    announcement: 'Now accepting trial bookings for the new school year.',
    footerCredit:
      '© 2026 Namiki English School | Developed by Philcob Suzuki Josol',
    aboutPage: {
      hero: {
        eyebrow: 'About the School',
        title: 'English confidence for ages 2 and up',
        description:
          'We keep classes small and hands-on so learners of any age can enjoy English and speak with confidence.',
        stats: [
          { label: 'Opening', value: 'April 2026' },
          { label: 'Ages', value: '2+ years' },
          { label: 'Teachers', value: 'English-proficient team' },
        ],
      },
      messageToParents: {
        title: '保護者の皆さまへ',
        subtitle: '保護者の皆さまへ',
        greeting: 'Dear Parents,',
        body: [
          'Thank you for trusting Namiki English School with your child’s education. We believe that every child has unique potential, and our mission is to provide a safe, warm, and inspiring environment where children can grow with confidence and develop strong English communication skills.',
          'Our programs are designed to nurture not only language ability, but also character, kindness, creativity, and a global mindset. We are committed to supporting each child’s individual learning journey and building a strong partnership with families.',
          'We sincerely appreciate your continued support and cooperation as we work together for your child’s bright future.',
        ],
        signoff: '敬具',
        signerTitle: 'Namiki English School Team',
      },
      story: {
        title: 'Our Story',
        paragraphs: [
          'We began with a simple goal: help local learners share their own feelings in English.',
          'We balance reading, writing, speaking, listening, and phonics—plus projects and presentations to lock in confidence.',
          'From preschoolers to adults, we tailor support so everyone can stack up “I did it!” moments.',
        ],
        image: '/classoom/4.jpg',
      },
      values: [
        {
          title: '好奇心',
          body: 'We keep English fun and approachable so learners stay curious.',
        },
        {
          title: '自信',
          body: 'Frequent, small wins build the courage to speak in their own words.',
        },
        {
          title: 'つながり',
          body: 'Families and teachers partner to celebrate growth together.',
        },
      ],
      highlights: [
        {
          title: 'Small groups',
          description:
            'Focused attention and tailored feedback for every learner.',
          icon: 'users',
        },
        {
          title: 'Full-skill focus',
          description:
            'Reading, writing, speaking, listening, and phonics—balanced across lessons.',
          icon: 'book',
        },
        {
          title: 'Active output',
          description:
            'Presentations and mini-projects build real-world confidence.',
          icon: 'sparkles',
        },
        {
          title: 'Family partnership',
          description:
            'Regular feedback connects classroom learning with home practice.',
          icon: 'chat',
        },
      ],
      faqs: [
        {
          question: 'Is it okay if I’m a complete beginner?',
          answer:
            'Absolutely. We start with phonics and simple conversations, adjusting pace by age and level.',
        },
        {
          question: 'Do you offer trial lessons?',
          answer:
            'Yes. Tell us your preferred times and we’ll schedule a trial.',
        },
        {
          question: 'Can parents observe?',
          answer:
            'You can observe the first session, and we share feedback after each class.',
        },
        {
          question: 'Is there homework?',
          answer:
            'Short review tasks help build routine and keep progress steady.',
        },
      ],
      colorPaletteSection: {
        eyebrow: 'Learning Atmosphere',
        heading: 'How We Use Color in Classrooms',
        description:
          'These color intentions help us balance focus, calm, and motivation during daily lessons.',
        columns: 4,
        items: [
          {
            id: 'focus',
            title: 'Focus',
            color: '#2878d9',
            lines: [
              'Blue-led corners',
              'Quiet reading periods',
              'Supports organized thinking',
            ],
          },
          {
            id: 'calm',
            title: 'Calm',
            color: '#58b25a',
            lines: [
              'Green visual cues',
              'Reduces tension',
              'Helps steady pacing',
            ],
          },
          {
            id: 'energy',
            title: 'Energy',
            color: '#f07f2f',
            lines: [
              'Orange accents',
              'Encourages speaking',
              'Raises participation',
            ],
          },
          {
            id: 'clarity',
            title: 'Clarity',
            color: '#f3f0e7',
            textColor: '#374151',
            lines: [
              'Off-white base',
              'Improves visibility',
              'Keeps materials easy to read',
            ],
          },
        ],
      },
    },
    admissionsPage: {
      heroTitle: 'Admissions & Enrollment',
      heroDescription: 'Follow these simple steps from trial to enrollment.',
      steps: [
        {
          title: '1. Trial lesson',
          body: 'Join a trial at your preferred time; we’ll check fit and level.',
        },
        {
          title: '2. Consultation',
          body: 'We review goals and recommend the best class and level.',
        },
        {
          title: '3. Enroll',
          body: 'Confirm schedule and tuition, then complete your enrollment.',
        },
      ],
      highlights: [
        {
          title: 'Flexible schedule',
          detail: 'Weekdays 8:00–18:00, choose 1–3 sessions per week.',
        },
        {
          title: 'Small classes',
          detail: 'Focused attention with a teacher who knows each learner.',
        },
        {
          title: 'Level matching',
          detail: 'Placement adjusted by age, experience, and goals.',
        },
      ],
    },
    programsPage: {
      heroTitle: 'Programs & Levels',
      heroDescription:
        'Choose the course that matches your age, pace, and goals.',
    },
    colorSquaresSection: {
      eyebrow: 'Classroom Psychology',
      heading: 'Which Colors Help Learning?',
      description:
        'Use this section to present color meanings, behavior cues, and how each classroom color can support student focus.',
      columns: 3,
      items: [
        {
          id: 'red',
          title: 'Red',
          color: '#e3192d',
          lines: ['Alertness', 'Excitement', 'Creativity'],
        },
        {
          id: 'yellow',
          title: 'Yellow',
          color: '#f4d61a',
          textColor: '#243047',
          lines: ['Positivity', 'Attention', 'Creativity'],
        },
        {
          id: 'green',
          title: 'Green',
          color: '#90c82c',
          lines: ['Focus', 'Restfulness', 'Calm'],
        },
        {
          id: 'blue',
          title: 'Blue',
          color: '#1f9bdb',
          lines: ['Tranquility', 'Creativity', 'Soothing'],
        },
        {
          id: 'orange',
          title: 'Orange',
          color: '#f08a2d',
          lines: [
            'Invigoration',
            'High saturation = stimulation',
            'Low saturation = calming',
          ],
        },
        {
          id: 'off-white',
          title: 'Off White',
          color: '#f6f3eb',
          textColor: '#3f3f46',
          lines: ['Positivity', 'Attention', 'Clarity'],
        },
      ],
    },
    schoolShowcaseSection: {
      hero: {
        imageSrc: '/classoom/1.jpg',
        imageAlt: 'Smiling students in a classroom',
        title: 'Primary School',
        indexLabel: '01.',
        description:
          'Interactive classes built around speaking confidence, playful projects, and daily communication practice.',
      },
      intro: {
        eyebrow: 'Didactic Proposals',
        title: 'Our School',
        paragraphs: [
          'We design lessons with movement, stories, and team games so students stay active while practicing language.',
          'Teachers guide each student through speaking tasks, reading support, and short creative projects each week.',
          'Family communication is built in, with regular updates so learning continues naturally at home.',
          'Students gain confidence through presentations, roleplay, and collaborative classroom activities.',
        ],
        imageSrc: '/assets/asset-4.jpg',
        imageAlt: 'Young learner drawing in class',
        statValue: 'Every Day',
        statLabel: 'English Practice',
        principalName: 'Celia Mendez',
        principalRole: 'School Owner',
      },
      mosaicTiles: [
        {
          id: 'principal-card',
          type: 'color',
          eyebrow: 'School Principal',
          title: 'Celia Mendez',
          description:
            'Builds a positive classroom culture where learners practice English naturally every day.',
          backgroundColor: '#5dc4de',
          colSpan: 1,
        },
        {
          id: 'teacher-photo-1',
          type: 'image',
          imageSrc: '/assets/asset-8.jpg',
          imageAlt: 'Teacher with students in workshop class',
          colSpan: 1,
        },
        {
          id: 'playground-photo',
          type: 'image',
          imageSrc: '/classoom/1.jpg',
          imageAlt: 'Kids smiling during class activity',
          colSpan: 1,
        },
        {
          id: 'students-photo-1',
          type: 'image',
          imageSrc: '/assets/asset-4.jpg',
          imageAlt: 'Students practicing in class',
          colSpan: 1,
        },
        {
          id: 'students-photo-2',
          type: 'image',
          imageSrc: '/classoom/4.jpg',
          imageAlt: 'Classroom table with learning materials',
          colSpan: 1,
        },
        {
          id: 'sports-photo',
          type: 'image',
          imageSrc: '/classoom/2.jpg',
          imageAlt: 'Children engaging with classroom play materials',
          colSpan: 1,
        },
        {
          id: 'teacher-highlight',
          type: 'color',
          eyebrow: 'Learning Highlight',
          title: 'Project-Based Learning',
          description:
            'Hands-on activities build confidence, pronunciation, and team communication through meaningful practice.',
          backgroundColor: '#e5be45',
          textColor: '#1f2937',
          colSpan: 1,
        },
        {
          id: 'teacher-photo-2',
          type: 'image',
          imageSrc: '/classoom/3.jpg',
          imageAlt: 'Learning tools displayed in the classroom',
          colSpan: 1,
        },
      ],
    },
  },
}
