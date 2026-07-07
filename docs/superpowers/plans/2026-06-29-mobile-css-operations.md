# Mobile CSS Operations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the odeve beauty page into a mobile-first, operations-friendly one-page booking site with editable content and cleaner CSS.

**Architecture:** Move owner-editable copy and repeated link/service data into a shared content module. Keep components responsible for rendering section structure, and move reusable presentation rules into `app/globals.css`. Use Next 16 App Router conventions, `next/font/google`, Tailwind 4, and production build verification.

**Tech Stack:** Next.js 16.2.9, React 19.2.4, TypeScript, Tailwind CSS 4, CSS in `app/globals.css`, `next/font/google`.

## Global Constraints

- Preserve the current Next.js App Router setup and Tailwind 4 usage.
- Keep the existing one-page flow: navigation, hero, trust bar, portfolio, services, booking, footer links.
- Replace broken Korean text with reasonable temporary Korean copy so the page looks finished now.
- Prefer a shared content file if multiple sections need owner-editable copy, because the owner plans to revise the text later.
- Do not add a CMS, admin page, backend, payment flow, or real booking integration.
- Do not attempt to source final official copy, pricing, addresses, phone numbers, or photos.
- Keep tap targets at least 44px high.
- Ensure text does not overflow on small screens.
- Preserve reduced-motion handling.
- Read relevant Next docs in `node_modules/next/dist/docs/` before implementation. The CSS and fonts docs have already been checked for this plan.

---

## File Structure

- Create `app/content.ts`: one place for editable brand copy, stats, portfolio items, services, booking steps, CTAs, and footer links.
- Modify `app/layout.tsx`: use `next/font/google`, fix Korean metadata, and expose font CSS variables.
- Modify `app/page.tsx`: replace inline page shell styles with class names.
- Modify `app/globals.css`: define tokens, page shell, typography helpers, sections, buttons, cards, service rows, booking panel, quick links, and responsive rules.
- Modify `app/components/Nav.tsx`: render brand and CTA from content with CSS classes.
- Modify `app/components/Hero.tsx`: render hero copy, service chips, and CTAs from content.
- Modify `app/components/TrustBar.tsx`: render stats from content.
- Modify `app/components/Portfolio.tsx`: render editable portfolio categories from content.
- Modify `app/components/Services.tsx`: render editable service price list from content.
- Modify `app/components/Booking.tsx`: render booking steps and CTAs from content.
- Modify `app/components/Footer.tsx`: render quick links and studio summary from content.

---

### Task 1: Editable Content Module

**Files:**
- Create: `app/content.ts`

**Interfaces:**
- Produces: `siteContent` object with stable fields consumed by all components.
- Produces: `ExternalLink` type with `{ label: string; href: string; sub?: string }`.

- [ ] **Step 1: Add the content module**

Create `app/content.ts`:

```ts
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
    description: "반영구 시술과 속눈썹 관리를 차분하게 제안하는 프라이빗 뷰티 스튜디오",
  },
  nav: {
    bookingLabel: "예약하기",
  },
  hero: {
    eyebrow: "semi-permanent beauty",
    title: "뷰티 디자인",
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
      { name: "눈썹문신", sub: "자연눈썹 / 콤보 / 섀도우", price: "170,000원~", extra: "리터치 별도" },
      { name: "아이라인문신", sub: "점막 / 라인 디자인", price: "200,000원~", extra: "꼬리 연장 별도" },
      { name: "입술문신", sub: "틴트 / 그라데이션", price: "200,000원~", extra: "컬러 상담 포함" },
      { name: "헤어라인", sub: "M자 / 이마 라인 보정", price: "400,000원~", extra: "범위별 상이" },
      { name: "속눈썹펌", sub: "기본 / 케라틴", price: "40,000원~", extra: "영양 케어 추가 가능" },
      { name: "언더라인", sub: "하단 라인 디자인", price: "60,000원~", extra: "상담 후 진행" },
    ],
  },
  booking: {
    eyebrow: "booking info",
    title: "예약하는 방법",
    body: "원하시는 시술, 성함, 연락처, 가능한 날짜와 시간을 함께 남겨주세요.",
    steps: [
      { num: "01", strong: "네이버 예약", text: "가능한 시간대를 확인하고 바로 예약합니다." },
      { num: "02", strong: "카카오 채널", text: "시술 종류와 희망 일정을 남겨 1:1 상담을 받습니다." },
      { num: "03", strong: "인스타그램 DM", text: "@odeve_beauty로 사진 상담과 문의를 보낼 수 있습니다." },
    ],
    ctas: [
      { label: "네이버 예약 바로가기", href: "https://naver.com" },
      { label: "카카오 채널 상담", href: "https://pf.kakao.com" },
    ],
  },
  footer: {
    quickLinks: [
      { label: "인스타그램", sub: "@odeve_beauty", href: "https://instagram.com/odeve_beauty" },
      { label: "카카오 채널", sub: "1:1 상담", href: "https://pf.kakao.com" },
      { label: "오시는 길", sub: "위치 안내", href: "#location" },
      { label: "전화 문의", sub: "바로 연결", href: "tel:+8200000000" },
    ],
    summary: "반영구 시술 전문 프라이빗 뷰티 스튜디오",
    socials: [
      { label: "Instagram", href: "https://instagram.com/odeve_beauty" },
      { label: "Naver", href: "https://naver.com" },
      { label: "Kakao", href: "https://pf.kakao.com" },
    ],
  },
} as const;
```

- [ ] **Step 2: Run a build check**

Run: `npm run build`

Expected: build passes or fails only because the new file is unused. If it fails for syntax, fix `app/content.ts` before continuing.

- [ ] **Step 3: Commit**

```bash
git add app/content.ts
git commit -m "feat: add editable site content"
```

---

### Task 2: Fonts, Metadata, And Page Shell

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: `siteContent.brand`
- Produces: global font variables `--font-serif` and `--font-sans`.
- Produces: `.site-shell` class used by `app/page.tsx`.

- [ ] **Step 1: Update layout fonts and metadata**

Replace `app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_KR } from "next/font/google";
import { siteContent } from "./content";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const sans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: `${siteContent.brand.studio} | 반영구 시술 전문 스튜디오`,
  description: siteContent.brand.description,
  keywords: "오드브 뷰티, 반영구, 눈썹문신, 아이라인, 입술문신, 속눈썹펌",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Update page shell**

Replace `app/page.tsx` with:

```tsx
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import TrustBar from "./components/TrustBar";

export default function Home() {
  return (
    <main className="site-shell">
      <Nav />
      <Hero />
      <TrustBar />
      <Portfolio />
      <Services />
      <Booking />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 3: Replace global CSS foundation**

In `app/globals.css`, remove the Google Fonts `@import` line and replace the base section with:

```css
@import "tailwindcss";

:root {
  --bg: #eeeae3;
  --surface: #f8f5ef;
  --surface-strong: #fffaf2;
  --ink: #1d1a17;
  --muted: #70675d;
  --soft: #9b9084;
  --line: #ddd5ca;
  --accent: #b99358;
  --accent-dark: #8a693c;
  --dark: #191714;
  --dark-muted: #aaa199;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --shadow-soft: 0 24px 70px rgba(57, 45, 30, 0.12);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  background: #d8d1c7;
}

body {
  min-width: 320px;
  background: radial-gradient(circle at top, #f7f2eb 0, #d8d1c7 58%);
  color: var(--ink);
  font-family: var(--font-sans), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

a {
  color: inherit;
}

.font-serif {
  font-family: var(--font-serif), Georgia, serif;
}

.site-shell {
  width: min(100%, 480px);
  min-height: 100svh;
  margin: 0 auto;
  overflow: hidden;
  background: var(--bg);
  box-shadow: 0 0 0 1px rgba(29, 26, 23, 0.04), var(--shadow-soft);
}

@media (min-width: 768px) {
  body {
    padding: 24px 0;
  }

  .site-shell {
    border-radius: 28px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 4: Run verification**

Run: `npm run build`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add app/layout.tsx app/page.tsx app/globals.css
git commit -m "style: establish mobile page foundation"
```

---

### Task 3: Reusable Mobile CSS Components

**Files:**
- Modify: `app/globals.css`

**Interfaces:**
- Produces: classes used by all section components: `.btn`, `.section`, `.section-heading`, `.eyebrow`, `.nav`, `.hero`, `.stat-grid`, `.portfolio-*`, `.service-*`, `.booking-*`, `.quick-links`, `.footer`.

- [ ] **Step 1: Add shared UI classes**

Append these classes before the reduced-motion media query in `app/globals.css`:

```css
.btn {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 0 18px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 1;
  text-decoration: none;
  transition: transform 160ms ease, background-color 160ms ease, border-color 160ms ease;
  -webkit-tap-highlight-color: transparent;
}

.btn:active {
  transform: scale(0.98);
}

.btn-primary {
  background: var(--dark);
  color: var(--surface);
}

.btn-accent {
  background: var(--accent);
  color: #fffaf2;
}

.btn-soft {
  border-color: rgba(29, 26, 23, 0.12);
  background: rgba(255, 250, 242, 0.58);
  color: var(--ink);
}

.btn-dark-outline {
  border-color: rgba(255, 250, 242, 0.18);
  color: var(--surface);
}

.section {
  padding: 54px 22px;
}

.section-heading {
  margin-bottom: 26px;
}

.eyebrow {
  margin-bottom: 8px;
  color: var(--accent-dark);
  font-family: var(--font-serif), Georgia, serif;
  font-size: 14px;
  font-style: italic;
  line-height: 1.2;
}

.section-title {
  color: var(--ink);
  font-family: var(--font-serif), Georgia, serif;
  font-size: clamp(30px, 9vw, 40px);
  font-weight: 400;
  line-height: 1.05;
}

.section-note {
  margin-top: 10px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 300;
  line-height: 1.7;
}
```

- [ ] **Step 2: Run build check**

Run: `npm run build`

Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "style: add shared mobile ui classes"
```

---

### Task 4: Navigation, Hero, And Trust Bar

**Files:**
- Modify: `app/components/Nav.tsx`
- Modify: `app/components/Hero.tsx`
- Modify: `app/components/TrustBar.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: `siteContent.brand`, `siteContent.nav`, `siteContent.hero`, `siteContent.stats`.

- [ ] **Step 1: Replace top components**

Replace `app/components/Nav.tsx` with:

```tsx
import { siteContent } from "../content";

export default function Nav() {
  const { brand, nav } = siteContent;

  return (
    <nav className="nav">
      <a className="nav-brand" href="#top" aria-label={`${brand.studio} 홈`}>
        <span className="font-serif nav-logo">{brand.name}</span>
        <span>{brand.suffix}</span>
      </a>
      <a href="#booking" className="btn btn-primary nav-cta">
        {nav.bookingLabel}
      </a>
    </nav>
  );
}
```

Replace `app/components/Hero.tsx` with:

```tsx
import { siteContent } from "../content";

export default function Hero() {
  const { brand, hero } = siteContent;

  return (
    <section id="top" className="hero">
      <div className="hero-mark font-serif" aria-hidden>
        {brand.name}
      </div>
      <div className="hero-visual" aria-hidden>
        <span className="font-serif">photo ready</span>
      </div>
      <div className="hero-content">
        <p className="eyebrow">({hero.eyebrow})</p>
        <h1 className="hero-title">{hero.title}</h1>
        <p className="hero-body">{hero.body}</p>
        <div className="hero-chips" aria-label="주요 시술">
          {hero.chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
        <div className="hero-actions">
          <a href={hero.primaryCta.href} className="btn btn-primary">
            {hero.primaryCta.label}
          </a>
          <a href={hero.secondaryCta.href} className="btn btn-soft">
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
```

Replace `app/components/TrustBar.tsx` with:

```tsx
import { siteContent } from "../content";

export default function TrustBar() {
  return (
    <section className="stat-grid" aria-label="스튜디오 신뢰 지표">
      {siteContent.stats.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <span className="font-serif">{stat.value}</span>
          <small>{stat.label}</small>
        </div>
      ))}
    </section>
  );
}
```

- [ ] **Step 2: Add top-section CSS**

Append to `app/globals.css`:

```css
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  min-height: 62px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(221, 213, 202, 0.82);
  background: rgba(238, 234, 227, 0.92);
  padding: 10px 18px;
  backdrop-filter: blur(18px);
}

.nav-brand {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  color: var(--ink);
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
}

.nav-logo {
  font-size: 25px;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0.01em;
}

.nav-cta {
  min-height: 40px;
  padding-inline: 16px;
  font-size: 11px;
}

.hero {
  position: relative;
  min-height: calc(100svh - 62px);
  overflow: hidden;
  background: linear-gradient(180deg, #ded6cc 0%, #eeeae3 74%);
  padding: 34px 22px 38px;
}

.hero-mark {
  position: absolute;
  top: 16%;
  left: 50%;
  color: rgba(255, 250, 242, 0.48);
  font-size: clamp(92px, 29vw, 180px);
  font-style: italic;
  font-weight: 300;
  line-height: 1;
  pointer-events: none;
  transform: translateX(-50%);
  white-space: nowrap;
}

.hero-visual {
  position: relative;
  z-index: 1;
  display: flex;
  width: min(66vw, 270px);
  aspect-ratio: 0.72;
  align-items: center;
  justify-content: center;
  margin: 18px auto 30px;
  border: 1px solid rgba(255, 250, 242, 0.42);
  border-radius: 999px;
  background: linear-gradient(145deg, #c9bfb3, #e9e0d5);
  color: rgba(255, 250, 242, 0.72);
  font-size: 14px;
  font-style: italic;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  max-width: 10ch;
  color: var(--ink);
  font-family: var(--font-serif), Georgia, serif;
  font-size: clamp(42px, 12vw, 58px);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.02;
}

.hero-body {
  margin-top: 18px;
  color: var(--muted);
  font-size: 14px;
  font-weight: 300;
  line-height: 1.75;
}

.hero-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.hero-chips span {
  border: 1px solid rgba(29, 26, 23, 0.08);
  border-radius: 999px;
  background: rgba(255, 250, 242, 0.52);
  color: var(--muted);
  font-size: 11px;
  padding: 7px 10px;
}

.hero-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 26px;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-block: 1px solid var(--line);
  background: var(--surface);
}

.stat-item {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 18px 8px;
  text-align: center;
}

.stat-item + .stat-item {
  border-left: 1px solid var(--line);
}

.stat-item span {
  color: var(--ink);
  font-size: 27px;
  font-style: italic;
  line-height: 1;
}

.stat-item small {
  color: var(--soft);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.04em;
}
```

- [ ] **Step 3: Run verification**

Run: `npm run build`

Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add app/components/Nav.tsx app/components/Hero.tsx app/components/TrustBar.tsx app/globals.css
git commit -m "style: redesign mobile hero flow"
```

---

### Task 5: Portfolio And Services Sections

**Files:**
- Modify: `app/components/Portfolio.tsx`
- Modify: `app/components/Services.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: `siteContent.portfolio` and `siteContent.services`.

- [ ] **Step 1: Replace portfolio and services components**

Replace `app/components/Portfolio.tsx` with:

```tsx
import { siteContent } from "../content";

export default function Portfolio() {
  const { portfolio } = siteContent;

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="section-heading portfolio-heading">
        <div>
          <p className="eyebrow">({portfolio.eyebrow})</p>
          <h2 className="section-title">{portfolio.title}</h2>
        </div>
        <a href={portfolio.more.href} target="_blank" rel="noopener noreferrer">
          {portfolio.more.label}
        </a>
      </div>
      <div className="portfolio-rail">
        {portfolio.items.map((item) => (
          <article className="portfolio-card" key={item.label}>
            <div className="portfolio-photo">
              <span>After</span>
              <strong className="font-serif">사진 준비중</strong>
            </div>
            <div className="portfolio-copy">
              <p>{item.label}</p>
              <small className="font-serif">{item.en}</small>
              <em>{item.note}</em>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
```

Replace `app/components/Services.tsx` with:

```tsx
import { siteContent } from "../content";

export default function Services() {
  const { services } = siteContent;

  return (
    <section id="services" className="section services-section">
      <div className="section-heading">
        <p className="eyebrow">({services.eyebrow})</p>
        <h2 className="section-title">{services.title}</h2>
        <p className="section-note">{services.note}</p>
      </div>
      <div className="service-list">
        {services.items.map((service) => (
          <article className="service-row" key={service.name}>
            <div>
              <h3>{service.name}</h3>
              <p>{service.sub}</p>
            </div>
            <div className="service-price">
              <strong>{service.price}</strong>
              <span>{service.extra}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add portfolio and services CSS**

Append to `app/globals.css`:

```css
.portfolio-section {
  padding-right: 0;
}

.portfolio-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding-right: 22px;
}

.portfolio-heading a {
  color: var(--accent-dark);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-decoration: none;
}

.portfolio-rail {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 2px 22px 8px 0;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}

.portfolio-rail::-webkit-scrollbar {
  display: none;
}

.portfolio-card {
  min-width: min(72vw, 250px);
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--surface);
}

.portfolio-photo {
  position: relative;
  display: flex;
  height: 260px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #d5cbc0, #bfb3a7);
  color: rgba(255, 250, 242, 0.72);
}

.portfolio-photo span {
  position: absolute;
  top: 12px;
  left: 12px;
  border-radius: 999px;
  background: var(--accent);
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  padding: 5px 10px;
  text-transform: uppercase;
}

.portfolio-photo strong {
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
}

.portfolio-copy {
  padding: 15px;
}

.portfolio-copy p {
  color: var(--ink);
  font-size: 14px;
  font-weight: 600;
}

.portfolio-copy small {
  display: block;
  margin-top: 3px;
  color: var(--soft);
  font-size: 12px;
  font-style: italic;
}

.portfolio-copy em {
  display: block;
  margin-top: 10px;
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;
}

.services-section {
  background: var(--surface);
}

.service-list {
  border-top: 1px solid var(--line);
}

.service-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 14px;
  padding: 18px 0;
  border-bottom: 1px solid var(--line);
}

.service-row h3 {
  color: var(--ink);
  font-size: 15px;
  font-weight: 600;
  line-height: 1.35;
}

.service-row p {
  margin-top: 5px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 300;
  line-height: 1.55;
}

.service-price {
  max-width: 118px;
  text-align: right;
}

.service-price strong {
  display: block;
  color: var(--ink);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.35;
}

.service-price span {
  display: block;
  margin-top: 4px;
  color: var(--soft);
  font-size: 10px;
  font-weight: 300;
  line-height: 1.45;
}
```

- [ ] **Step 3: Run verification**

Run: `npm run build`

Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add app/components/Portfolio.tsx app/components/Services.tsx app/globals.css
git commit -m "style: improve mobile portfolio and services"
```

---

### Task 6: Booking And Footer

**Files:**
- Modify: `app/components/Booking.tsx`
- Modify: `app/components/Footer.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: `siteContent.booking`, `siteContent.footer`, `siteContent.brand`.

- [ ] **Step 1: Replace booking and footer components**

Replace `app/components/Booking.tsx` with:

```tsx
import { siteContent } from "../content";

export default function Booking() {
  const { booking } = siteContent;

  return (
    <section id="booking" className="booking-section">
      <div className="booking-panel">
        <p className="eyebrow">({booking.eyebrow})</p>
        <h2 className="booking-title">{booking.title}</h2>
        <p className="booking-body">{booking.body}</p>
        <div className="booking-steps">
          {booking.steps.map((step) => (
            <article key={step.num}>
              <span className="font-serif">{step.num}</span>
              <p>
                <strong>{step.strong}</strong>
                {step.text}
              </p>
            </article>
          ))}
        </div>
        <div className="booking-actions">
          {booking.ctas.map((cta, index) => (
            <a
              key={cta.label}
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${index === 0 ? "btn-accent" : "btn-dark-outline"}`}
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
```

Replace `app/components/Footer.tsx` with:

```tsx
import { siteContent } from "../content";

function QuickIcon({ label }: { label: string }) {
  const initial = label.slice(0, 1);
  return <span className="quick-icon" aria-hidden>{initial}</span>;
}

export default function Footer() {
  const { brand, footer } = siteContent;

  return (
    <>
      <section className="quick-links" aria-label="빠른 링크">
        {footer.quickLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            <QuickIcon label={link.label} />
            <span>
              <strong>{link.label}</strong>
              <small>{link.sub}</small>
            </span>
          </a>
        ))}
      </section>
      <footer className="footer">
        <p className="font-serif">{brand.name} {brand.suffix}</p>
        <small>
          {footer.summary}
          <br />
          @odeve_beauty
        </small>
        <nav aria-label="소셜 링크">
          {footer.socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
              {social.label}
            </a>
          ))}
        </nav>
      </footer>
    </>
  );
}
```

- [ ] **Step 2: Add booking and footer CSS**

Append to `app/globals.css`:

```css
.booking-section {
  padding: 48px 18px;
}

.booking-panel {
  border-radius: var(--radius-lg);
  background: var(--dark);
  padding: 34px 22px;
  color: var(--surface);
}

.booking-panel .eyebrow {
  color: var(--dark-muted);
}

.booking-title {
  color: var(--surface);
  font-family: var(--font-serif), Georgia, serif;
  font-size: clamp(34px, 10vw, 46px);
  font-weight: 400;
  line-height: 1.05;
}

.booking-body {
  margin-top: 10px;
  color: var(--dark-muted);
  font-size: 13px;
  font-weight: 300;
  line-height: 1.7;
}

.booking-steps {
  display: grid;
  gap: 18px;
  margin-top: 30px;
}

.booking-steps article {
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr);
  gap: 12px;
}

.booking-steps span {
  color: #6e655c;
  font-size: 14px;
  font-style: italic;
  line-height: 1.5;
}

.booking-steps p {
  color: var(--dark-muted);
  font-size: 13px;
  font-weight: 300;
  line-height: 1.65;
}

.booking-steps strong {
  display: block;
  color: var(--surface);
  font-weight: 500;
}

.booking-actions {
  display: grid;
  gap: 10px;
  margin-top: 30px;
}

.quick-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--line);
}

.quick-links a {
  display: flex;
  min-width: 0;
  min-height: 78px;
  align-items: center;
  gap: 12px;
  background: var(--surface);
  padding: 16px;
  text-decoration: none;
}

.quick-icon {
  display: inline-flex;
  width: 34px;
  height: 34px;
  flex: 0 0 34px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(185, 147, 88, 0.12);
  color: var(--accent-dark);
  font-size: 13px;
  font-weight: 600;
}

.quick-links span:last-child {
  min-width: 0;
}

.quick-links strong {
  display: block;
  overflow-wrap: anywhere;
  color: var(--ink);
  font-size: 13px;
  font-weight: 600;
}

.quick-links small {
  display: block;
  margin-top: 3px;
  color: var(--soft);
  font-size: 11px;
  font-weight: 300;
}

.footer {
  border-top: 1px solid var(--line);
  background: var(--bg);
  padding: 28px 22px 40px;
}

.footer p {
  color: var(--soft);
  font-size: 22px;
  font-style: italic;
  line-height: 1;
}

.footer small {
  display: block;
  margin-top: 12px;
  color: var(--muted);
  font-size: 11px;
  font-weight: 300;
  line-height: 1.8;
}

.footer nav {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 20px;
}

.footer a {
  color: var(--soft);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
}
```

- [ ] **Step 3: Run verification**

Run: `npm run build`

Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add app/components/Booking.tsx app/components/Footer.tsx app/globals.css
git commit -m "style: improve mobile booking and footer"
```

---

### Task 7: Final Verification And Polish

**Files:**
- Modify as needed: files touched in Tasks 1-6 only.

**Interfaces:**
- Consumes: all prior tasks.
- Produces: completed mobile-first CSS/content restructure.

- [ ] **Step 1: Run lint**

Run: `npm run lint`

Expected: PASS. If lint reports unused imports or JSX issues, fix only the reported changed-file issues.

- [ ] **Step 2: Run production build**

Run: `npm run build`

Expected: PASS.

- [ ] **Step 3: Inspect changed files**

Run: `git diff -- app`

Expected:
- No broken mojibake text remains in changed app files.
- No Google Fonts CSS `@import url(...)` remains.
- Component files import content from `../content` where they render editable copy.
- `globals.css` still contains the reduced-motion media query.

- [ ] **Step 4: Commit final polish if needed**

If Step 1-3 required fixes:

```bash
git add app
git commit -m "chore: polish mobile css update"
```

If no fixes were needed, do not create an empty commit.
