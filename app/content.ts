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
