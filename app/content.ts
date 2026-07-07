export type ExternalLink = {
  label: string;
  href: string;
  sub?: string;
};

export const siteContent = {
  brand: {
    name: "odeve",
    suffix: "beauty",
    studio: "오드브 뷰티",
    tagline: "자연스럽게, 오래 아름답게.",
    description:
      "반영구 시술과 속눈썹 관리를 차분하게 제안하는 프라이빗 뷰티 스튜디오",
  },
  nav: {
    bookingLabel: "예약하기",
  },
  hero: {
    eyebrow: "semi-permanent beauty",
    title: "자연스러운 결을 살리는 뷰티 디자인",
    body: "눈썹문신, 아이라인, 입술문신, 속눈썹펌까지 얼굴의 분위기에 맞춰 섬세하게 완성합니다.",
    primaryCta: { label: "예약 상담", href: "#booking" },
    secondaryCta: { label: "시술 보기", href: "#portfolio" },
    chips: ["눈썹문신", "아이라인", "입술문신", "속눈썹펌"],
  },
  stats: [
    { value: "8년+", label: "시술 경력" },
    { value: "3,000+", label: "누적 고객" },
    { value: "4.9", label: "고객 만족도" },
  ],
  portfolio: {
    eyebrow: "before & after",
    title: "포트폴리오",
    more: { label: "인스타그램 보기", href: "https://instagram.com/odeve_beauty" },
    items: [
      { label: "눈썹문신", en: "Eyebrow", note: "결과 음영을 자연스럽게" },
      { label: "아이라인", en: "Eye Line", note: "또렷하지만 부담 없게" },
      { label: "입술문신", en: "Lip Blush", note: "생기 있는 컬러감" },
      { label: "속눈썹펌", en: "Lash Perm", note: "매일 올라간 컬" },
    ],
  },
  services: {
    eyebrow: "service menu",
    title: "시술 메뉴",
    note: "정확한 가격과 소요 시간은 상담 시 안내드려요.",
    items: [
      {
        name: "눈썹문신",
        sub: "자연눈썹 / 콤보 / 섀도우",
        price: "170,000원~",
        extra: "리터치 별도",
      },
      {
        name: "아이라인문신",
        sub: "점막 / 라인 디자인",
        price: "200,000원~",
        extra: "꼬리 연장 별도",
      },
      {
        name: "입술문신",
        sub: "틴트 / 그라데이션",
        price: "200,000원~",
        extra: "컬러 상담 포함",
      },
      {
        name: "헤어라인",
        sub: "M자 / 이마 라인 보정",
        price: "400,000원~",
        extra: "범위별 상이",
      },
      {
        name: "속눈썹펌",
        sub: "기본 / 케라틴",
        price: "40,000원~",
        extra: "영양 케어 추가 가능",
      },
      {
        name: "언더라인",
        sub: "하단 라인 디자인",
        price: "60,000원~",
        extra: "상담 후 진행",
      },
    ],
  },
  faq: {
    eyebrow: "faq",
    title: "자주 묻는 질문",
    note: "더 궁금한 점은 아래 AI 상담이나 카카오 채널로 편하게 물어보세요.",
    items: [
      {
        q: "시술 시간은 얼마나 걸리나요?",
        a: "눈썹문신 기준 상담과 디자인을 포함해 2시간~2시간 30분 정도 소요됩니다. 아이라인·입술은 부위에 따라 조금 더 걸릴 수 있어요.",
      },
      {
        q: "많이 아픈가요?",
        a: "시술 전 마취 크림을 충분히 도포한 뒤 진행해서 대부분 따끔한 정도로 느끼십니다. 통증에 민감하신 경우 중간중간 마취를 추가해 드려요.",
      },
      {
        q: "유지 기간은 어느 정도인가요?",
        a: "피부 타입과 생활 습관에 따라 보통 1년~2년 정도 유지됩니다. 지성 피부이거나 운동량이 많으면 조금 빨리 옅어질 수 있고, 리터치로 관리하시면 오래 유지돼요.",
      },
      {
        q: "리터치는 언제 받아야 하나요?",
        a: "첫 시술 후 4~8주 사이에 1회 리터치를 권장드려요. 발색을 보완하고 결을 정리하는 과정이라 첫 시술만큼 중요합니다.",
      },
      {
        q: "시술 후 주의사항이 있나요?",
        a: "당일에는 시술 부위 세안·사우나·음주를 피해 주세요. 안내드린 재생크림을 얇게 발라주시고, 각질이 생겨도 뜯지 않고 자연스럽게 떨어지게 두시면 됩니다.",
      },
      {
        q: "시술을 받으면 안 되는 경우도 있나요?",
        a: "임신·수유 중이거나 피부 질환, 켈로이드 체질, 당뇨 등이 있으신 경우 시술이 어려울 수 있어요. 해당되시면 예약 전에 꼭 상담으로 알려주세요.",
      },
      {
        q: "예약 변경이나 취소는 어떻게 하나요?",
        a: "예약일 하루 전까지 카카오 채널로 연락 주시면 일정 변경을 도와드려요. 당일 취소는 다음 예약이 어려울 수 있으니 미리 말씀 부탁드립니다.",
      },
    ],
  },
  booking: {
    eyebrow: "booking info",
    title: "예약하는 방법",
    body: "원하시는 시술, 성함, 연락처, 가능한 날짜와 시간을 함께 남겨주세요.",
    steps: [
      {
        num: "01",
        strong: "네이버 예약",
        text: "가능한 시간대를 확인하고 바로 예약합니다.",
      },
      {
        num: "02",
        strong: "카카오 채널",
        text: "시술 종류와 희망 일정을 남겨 1:1 상담을 받습니다.",
      },
      {
        num: "03",
        strong: "인스타그램 DM",
        text: "@odeve_beauty로 사진 상담과 문의를 보낼 수 있습니다.",
      },
    ],
    ctas: [
      { label: "네이버 예약 바로가기", href: "https://naver.com" },
      { label: "카카오 채널 상담", href: "https://pf.kakao.com" },
    ],
  },
  footer: {
    quickLinks: [
      {
        label: "인스타그램",
        sub: "@odeve_beauty",
        href: "https://instagram.com/odeve_beauty",
      },
      { label: "카카오 채널", sub: "1:1 상담", href: "https://pf.kakao.com" },
      { label: "오시는 길", sub: "위치 안내", href: "#location" },
      { label: "전화 문의", sub: "바로 연결", href: "tel:+8200000000" },
    ] satisfies ExternalLink[],
    summary: "반영구 시술 전문 프라이빗 뷰티 스튜디오",
    socials: [
      { label: "Instagram", href: "https://instagram.com/odeve_beauty" },
      { label: "Naver", href: "https://naver.com" },
      { label: "Kakao", href: "https://pf.kakao.com" },
    ] satisfies ExternalLink[],
  },
} as const;
