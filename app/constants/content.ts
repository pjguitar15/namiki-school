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
  "https://placehold.co/180x70/png?text=School+Partner",
  "https://placehold.co/180x70/png?text=Community",
  "https://placehold.co/180x70/png?text=Education",
  "https://placehold.co/180x70/png?text=Local+Gov",
];

export const LANGUAGE_CONTENT: Record<LanguageCode, LanguageContent> = {
  ja: {
    navItems: [
      { label: 'ホーム', href: '/' },
      { label: '学校について', href: '/about' },
      { label: '入学・お申込み', href: '/admissions' },
      { label: 'プログラム', href: '/programs' },
    ],
    hero: {
      badge: '明るく、のびのび学ぶ英語教室',
      headline: '英語をもっとやさしくしよう',
      subheadline:
        '3歳から大人まで、自信を持って英語を話せるように。少人数クラスと楽しいアクティビティで、学ぶ喜びを育てます。',
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
      image:
        'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=80',
    },
    about: {
      missionLabel: 'Our Mission',
      headline: 'つくれる力を育てる英語スクール',
      lead: 'ナミキイングリッシュスクールでは、「英語で考え、英語で伝える力」を大切にしています。3歳から大人まで、経験豊富な講師と温かいコミュニティで、自分らしく学び、挑戦し、成長できる環境を整えています。',
      body: [
        '日本語のサポートを入れつつ、英語に触れる時間をたっぷり確保。ご家庭とも連携しながら、一人ひとりに合ったゴールを設定します。',
        '歌やゲームだけでなく、リーディング・ライティング・スピーキング・フォニックスをバランスよく学び、ミニプロジェクトや発表でアウトプットを増やします。',
      ],
    },
    features: [
      {
        title: '英語への好奇心を引き出す',
        body: '歌やゲーム、ショートプロジェクトを通して、楽しみながら自然な英語力を身につけます。',
      },
      {
        title: '少人数でしっかりサポート',
        body: '講師が一人ひとりの理解度を確認しながら進行。安心して質問できる空気づくりを大切にしています。',
      },
      {
        title: 'ご家庭との連携',
        body: 'レッスンの振り返りや小テストで成長を共有。目標設定も一緒に行い、モチベーションを保ちます。',
      },
    ],
    programs: [
      {
        title: 'ブートキャンプ',
        duration: '週3回 / 13週間',
        category: '小学生・中学生向け',
        bulletPoints: [
          '英語で考えるグループワーク',
          'プロジェクト型の発表課題',
          '発音とスピーキングを重点強化',
          '国際的なトピックで視野を広げる',
        ],
        ctaLabel: '詳細を見る',
        accentColor: 'bg-blue-500',
        image:
          'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: '基礎コース',
        duration: '週2回 / 4週間',
        category: '初心者・低学年向け',
        bulletPoints: [
          'フォニックスで音と文字を学ぶ',
          '短い会話でリズムに慣れる',
          'カードや絵本で語彙を増やす',
          '保護者向けフィードバック付き',
        ],
        ctaLabel: '詳細を見る',
        accentColor: 'bg-green-500',
        image:
          'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'ワークショップ',
        duration: '月1回 / 90分',
        category: 'ご家族・親子参加歓迎',
        bulletPoints: [
          '季節イベントに合わせたテーマ',
          'チームで取り組む問題解決ゲーム',
          '発表とフィードバックで自信アップ',
          '教室の雰囲気を気軽に体験',
        ],
        ctaLabel: '参加する',
        accentColor: 'bg-orange-500',
        image:
          'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    projects: [
      {
        title: 'プレゼンテーションデー',
        summary:
          '学んだ表現を使い、チームで短いプレゼンを作成。保護者の前で発表し、達成感を共有します。',
        tag: '発表会',
        image: 'https://placehold.co/640x400/png?text=Showcase',
      },
      {
        title: 'ストーリーテリング',
        summary:
          '好きな物語を英語で朗読し、絵や小物を使ってシーンを再現。表現の幅を広げる人気の時間です。',
        tag: '表現力',
        image: 'https://placehold.co/640x400/png?text=Story+Time',
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
      emailLabel: 'Tsukubanamikienglishschool@gmail.com',
      email: 'Tsukubanamikienglishschool@gmail.com',
      phoneLabel: '080-2015-6832（8:00-18:00）',
      phone: '+818020156832',
      note: 'ご返信は通常1営業日以内に差し上げます。',
      hours: 'クラス時間: 8:00-18:00',
    },
    announcement: '新年度クラスの体験レッスン予約を受付中です。',
    footerCredit:
      '© 2026 Namiki English School | Developed by Philcob Suzuki Josol',
    aboutPage: {
      hero: {
        eyebrow: 'About the School',
        title: '英語で伝える力を、3歳から大人まで',
        description:
          'ナミキイングリッシュスクールは、学ぶ楽しさと自信を育むために、少人数と実践的なアクティビティを大切にしています。',
        stats: [
          { label: '開校', value: '2014年' },
          { label: '年齢層', value: '3歳〜大人' },
          { label: '講師', value: '経験10年以上' },
        ],
      },
      story: {
        title: '私たちのストーリー',
        paragraphs: [
          '地域の子どもたちが、英語で自分の気持ちを伝えられるように。そんな思いからスタートしました。',
          '歌やゲームだけで終わらず、リーディング・ライティング・スピーキング・フォニックスをバランスよく学び、アウトプットを重ねることで自信を育てています。',
          '3歳から大人まで、一人ひとりに合わせたサポートで「できた！」を積み重ねます。',
        ],
        image:
          'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80',
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
        imageSrc: '/student-class/student-class-1.jpg',
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
        imageSrc: '/student-class/young-learner.jpg',
        imageAlt: '教室で制作活動をする児童',
        statValue: '+76',
        statLabel: '受講コース',
        principalName: 'Emma Jhonson',
        principalRole: 'スクール代表',
      },
      mosaicTiles: [
        {
          id: 'principal-card',
          type: 'color',
          eyebrow: 'スクール代表',
          title: 'Hanna Williams',
          description:
            '英語を毎日自然に使える、安心感のあるクラス文化づくりを大切にしています。',
          backgroundColor: '#5dc4de',
          colSpan: 1,
        },
        {
          id: 'teacher-photo-1',
          type: 'image',
          imageSrc: '/student-class/workshops.jpg',
          imageAlt: '教室で指導する先生と生徒',
          colSpan: 1,
        },
        {
          id: 'playground-photo',
          type: 'image',
          imageSrc: '/student-class/student-class-1.jpg',
          imageAlt: '活動中に笑顔を見せる子どもたち',
          colSpan: 1,
        },
        {
          id: 'students-photo-1',
          type: 'image',
          imageSrc: '/student-class/young-learner.jpg',
          imageAlt: '授業で取り組む生徒たち',
          colSpan: 1,
        },
        {
          id: 'students-photo-2',
          type: 'image',
          imageSrc: '/student-class/student-class-1.jpg',
          imageAlt: '教材を持って並ぶ生徒たち',
          colSpan: 1,
        },
        {
          id: 'sports-photo',
          type: 'image',
          imageSrc: '/student-class/workshops.jpg',
          imageAlt: 'ボールを持って活動する生徒',
          colSpan: 1,
        },
        {
          id: 'teacher-highlight',
          type: 'color',
          eyebrow: '担当講師',
          title: 'Andrew Taylor',
          description:
            'プロジェクト型レッスンで、発音・伝達力・協働スキルをバランスよく育てます。',
          backgroundColor: '#e5be45',
          textColor: '#1f2937',
          colSpan: 1,
        },
        {
          id: 'teacher-photo-2',
          type: 'image',
          imageSrc: '/student-class/young-learner.jpg',
          imageAlt: '生徒をサポートする先生',
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
      { label: 'Programs', href: '/programs' },
    ],
    hero: {
      badge: 'A bright, interactive English classroom',
      headline: 'Let’s Make English Feel Easy',
      subheadline:
        'For learners ages 3 and up. Small classes, friendly teachers, and activity-based lessons that build confidence.',
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
      image:
        'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=80',
    },
    about: {
      missionLabel: 'Our Mission',
      headline: 'Grow the confidence to create and communicate',
      lead: 'We help learners think and express ideas in English. From age 3 through adults, our experienced teachers and warm community give everyone space to learn, try, and grow.',
      body: [
        'We keep plenty of English immersion while giving supportive explanations when needed. We set goals together with each family.',
        'Beyond songs and games, we cover reading, writing, speaking, and phonics with projects and presentations to grow confidence.',
      ],
    },
    features: [
      {
        title: 'Spark curiosity',
        body: 'Songs, games, and short projects make English fun and memorable.',
      },
      {
        title: 'Small, supported groups',
        body: 'Teachers track each child’s pace so they feel safe asking questions.',
      },
      {
        title: 'Partner with families',
        body: 'Quick feedback after lessons and simple reviews keep motivation high.',
      },
    ],
    programs: [
      {
        title: 'Bootcamp',
        duration: '3x weekly / 13 weeks',
        category: 'Upper elementary & junior high',
        bulletPoints: [
          'Group work fully in English',
          'Project-style presentations',
          'Pronunciation and speaking focus',
          'Global topics to broaden views',
        ],
        ctaLabel: 'View details',
        accentColor: 'bg-blue-500',
        image: '/student-class/student-class-1.jpg',
      },
      {
        title: 'Foundations',
        duration: '2x weekly / 4 weeks',
        category: 'Beginners & younger learners',
        bulletPoints: [
          'Phonics for sounds and letters',
          'Short dialogues to build rhythm',
          'Cards and storybooks for vocab',
          'Parent feedback every session',
        ],
        ctaLabel: 'View details',
        accentColor: 'bg-green-500',
        image: '/student-class/young-learner.jpg',
      },
      {
        title: 'Workshops',
        duration: 'Monthly / 90 minutes',
        category: 'Open to families',
        bulletPoints: [
          'Seasonal themes and crafts',
          'Team problem-solving games',
          'Presentations with feedback',
          'Easy way to try our classes',
        ],
        ctaLabel: 'Join now',
        accentColor: 'bg-orange-500',
        image: '/student-class/workshops.jpg',
      },
    ],
    projects: [
      {
        title: 'Presentation Day',
        summary:
          'Students build a short team presentation and share it with families, celebrating growth together.',
        tag: 'Showcase',
        image: 'https://placehold.co/640x400/png?text=Showcase',
      },
      {
        title: 'Storytelling',
        summary:
          'Kids read favorite tales in English, using drawings and props to bring each scene to life.',
        tag: 'Expression',
        image: 'https://placehold.co/640x400/png?text=Story+Time',
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
      emailLabel: 'Tsukubanamikienglishschool@gmail.com',
      email: 'Tsukubanamikienglishschool@gmail.com',
      phoneLabel: '+81-80-2015-6832 (8:00-18:00)',
      phone: '+818020156832',
      note: 'We usually reply within one business day.',
      hours: 'Class hours: 8:00-18:00',
    },
    announcement: 'Now accepting trial bookings for the new school year.',
    footerCredit:
      '© 2026 Namiki English School | Developed by Philcob Suzuki Josol',
    aboutPage: {
      hero: {
        eyebrow: 'About the School',
        title: 'English confidence for ages 3 and up',
        description:
          'We keep classes small and hands-on so learners of any age can enjoy English and speak with confidence.',
        stats: [
          { label: 'Founded', value: '2014' },
          { label: 'Ages', value: '3+ years' },
          { label: 'Teachers', value: '10+ yrs experience' },
        ],
      },
      story: {
        title: 'Our Story',
        paragraphs: [
          'We began with a simple goal: help local learners share their own feelings in English.',
          'We balance reading, writing, speaking, listening, and phonics—plus projects and presentations to lock in confidence.',
          'From preschoolers to adults, we tailor support so everyone can stack up “I did it!” moments.',
        ],
        image:
          'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80',
      },
      values: [
        {
          title: 'Curiosity',
          body: 'We keep English fun and approachable so learners stay curious.',
        },
        {
          title: 'Confidence',
          body: 'Frequent, small wins build the courage to speak in their own words.',
        },
        {
          title: 'Community',
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
            lines: ['Blue-led corners', 'Quiet reading periods', 'Supports organized thinking'],
          },
          {
            id: 'calm',
            title: 'Calm',
            color: '#58b25a',
            lines: ['Green visual cues', 'Reduces tension', 'Helps steady pacing'],
          },
          {
            id: 'energy',
            title: 'Energy',
            color: '#f07f2f',
            lines: ['Orange accents', 'Encourages speaking', 'Raises participation'],
          },
          {
            id: 'clarity',
            title: 'Clarity',
            color: '#f3f0e7',
            textColor: '#374151',
            lines: ['Off-white base', 'Improves visibility', 'Keeps materials easy to read'],
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
        imageSrc: '/student-class/student-class-1.jpg',
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
        imageSrc: '/student-class/young-learner.jpg',
        imageAlt: 'Young learner drawing in class',
        statValue: '+76',
        statLabel: 'Courses Available',
        principalName: 'Emma Jhonson',
        principalRole: 'School Principal',
      },
      mosaicTiles: [
        {
          id: 'principal-card',
          type: 'color',
          eyebrow: 'School Principal',
          title: 'Hanna Williams',
          description:
            'Builds a positive classroom culture where learners practice English naturally every day.',
          backgroundColor: '#5dc4de',
          colSpan: 1,
        },
        {
          id: 'teacher-photo-1',
          type: 'image',
          imageSrc: '/student-class/workshops.jpg',
          imageAlt: 'Teacher with students in workshop class',
          colSpan: 1,
        },
        {
          id: 'playground-photo',
          type: 'image',
          imageSrc: '/student-class/student-class-1.jpg',
          imageAlt: 'Kids smiling during class activity',
          colSpan: 1,
        },
        {
          id: 'students-photo-1',
          type: 'image',
          imageSrc: '/student-class/young-learner.jpg',
          imageAlt: 'Students practicing in class',
          colSpan: 1,
        },
        {
          id: 'students-photo-2',
          type: 'image',
          imageSrc: '/student-class/student-class-1.jpg',
          imageAlt: 'Group of students with school materials',
          colSpan: 1,
        },
        {
          id: 'sports-photo',
          type: 'image',
          imageSrc: '/student-class/workshops.jpg',
          imageAlt: 'Students holding sports balls',
          colSpan: 1,
        },
        {
          id: 'teacher-highlight',
          type: 'color',
          eyebrow: 'Reference Teacher',
          title: 'Andrew Taylor',
          description:
            'Supports project-based lessons that improve confidence, pronunciation, and team communication.',
          backgroundColor: '#e5be45',
          textColor: '#1f2937',
          colSpan: 1,
        },
        {
          id: 'teacher-photo-2',
          type: 'image',
          imageSrc: '/student-class/young-learner.jpg',
          imageAlt: 'Teacher helping students in classroom',
          colSpan: 1,
        },
      ],
    },
  },
}
