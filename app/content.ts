export type ExternalLink = {
  label: string;
  href: string;
  sub?: string;
};

const naverBookingUrl =
  "https://m.place.naver.com/place/1338113995/ticket?entry=pll&abtExp=NEW-PLACE-SEARCH%253A4&bk_query=%EC%98%A4%EB%8D%94%EB%B8%8C%EB%B7%B0%ED%8B%B0&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAS5k9xleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafUe6egDD0PC0SzfyTQMCdsxkvO98s_LyOns1NoYMt-4ZdQSvV87J9o2OY3_A_aem_StE2ThYyGr_8nHNRCUCPXQ";

const kakaoChatUrl =
  "https://pf.kakao.com/_gBxiMn/chat?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAS5k_5leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAae4XowaoYRlu8l4t8wL-sdxrIfCWihBJC_yB5KQ4GMfLPX2YmBLoJD8j3LdlQ_aem_y07Lq11dXm9M2-sx2gP3mQ";

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
    image: {
      src: "/images/hero-placeholder.jpg",
      alt: "오드브 뷰티 시술 무드 더미 이미지",
    },
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
      {
        label: "눈썹문신",
        en: "Eyebrow",
        note: "결과 음영을 자연스럽게",
        image: { src: "/images/portfolio-eyebrow.jpg", alt: "눈썹 시술 더미 사진" },
      },
      {
        label: "아이라인",
        en: "Eye Line",
        note: "또렷하지만 부담 없게",
        image: { src: "/images/portfolio-eyeline.jpg", alt: "아이라인 시술 더미 사진" },
      },
      {
        label: "입술문신",
        en: "Lip Blush",
        note: "생기 있는 컬러감",
        image: { src: "/images/portfolio-lip.jpg", alt: "입술 시술 더미 사진" },
      },
      {
        label: "속눈썹펌",
        en: "Lash Perm",
        note: "매일 올라간 컬",
        image: { src: "/images/portfolio-lash.jpg", alt: "속눈썹펌 더미 사진" },
      },
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
        a: "눈썹문신 기준 상담과 디자인을 포함해 보통 2시간에서 2시간 30분 정도 소요됩니다. 부위와 디자인에 따라 달라질 수 있어요.",
      },
      {
        q: "많이 아픈가요?",
        a: "시술 전 마취 크림을 충분히 도포하고 진행해 대부분 따끔한 정도로 느끼십니다. 통증에 민감하신 경우 중간중간 상태를 확인하며 진행합니다.",
      },
      {
        q: "유지 기간은 어느 정도인가요?",
        a: "피부 타입과 생활 습관에 따라 다르지만 보통 1년에서 2년 정도 유지됩니다. 리터치로 관리하면 더 오래 선명하게 유지할 수 있어요.",
      },
      {
        q: "리터치는 언제 받으면 좋나요?",
        a: "첫 시술 후 4~8주 사이 1회 리터치를 권장합니다. 발색을 보완하고 결을 정리하는 과정이라 첫 시술만큼 중요합니다.",
      },
      {
        q: "시술 후 주의사항이 있나요?",
        a: "당일에는 시술 부위 세안, 사우나, 음주를 피해 주세요. 안내드린 재생 크림을 얇게 바르고 각질은 자연스럽게 탈락되도록 두시면 됩니다.",
      },
      {
        q: "시술을 받으면 안 되는 경우가 있나요?",
        a: "임신, 수유 중이거나 특정 질환, 켈로이드 체질, 복용 약물이 있는 경우 시술이 어려울 수 있습니다. 예약 전 꼭 상담으로 알려주세요.",
      },
      {
        q: "예약 변경이나 취소는 어떻게 하나요?",
        a: "예약일 하루 전까지 카카오 채널로 연락 주시면 일정 변경을 도와드립니다. 당일 취소는 다음 예약이 어려울 수 있어 미리 말씀 부탁드려요.",
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
      { label: "네이버 예약 바로가기", href: naverBookingUrl },
      { label: "카카오 채널 상담", href: kakaoChatUrl },
    ],
  },
  footer: {
    quickLinks: [
      {
        label: "인스타그램",
        sub: "@odeve_beauty",
        href: "https://instagram.com/odeve_beauty",
      },
      { label: "카카오 채널", sub: "1:1 상담", href: kakaoChatUrl },
      { label: "오시는 길", sub: "위치 안내", href: "#location" },
      { label: "전화 문의", sub: "바로 연결", href: "tel:+8200000000" },
    ] satisfies ExternalLink[],
    summary: "반영구 시술 전문 프라이빗 뷰티 스튜디오",
    socials: [
      { label: "Instagram", href: "https://instagram.com/odeve_beauty" },
      { label: "Naver", href: naverBookingUrl },
      { label: "Kakao", href: kakaoChatUrl },
    ] satisfies ExternalLink[],
  },
} as const;
