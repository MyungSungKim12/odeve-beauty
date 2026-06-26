const quickLinks = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
    label: "인스타그램",
    sub: "@odeve_beauty",
    href: "https://instagram.com/odeve_beauty",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    label: "카카오 채널",
    sub: "1:1 상담",
    href: "https://pf.kakao.com",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "오시는 길",
    sub: "위치 안내",
    href: "#location",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: "전화 문의",
    sub: "바로 연결",
    href: "tel:+8200000000",
  },
];

export default function Footer() {
  return (
    <>
      {/* 퀵 링크 2×2 그리드 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--line)" }}>
        {quickLinks.map((q) => (
          <a
            key={q.label}
            href={q.href}
            target={q.href.startsWith("http") ? "_blank" : undefined}
            rel={q.href.startsWith("http") ? "noopener noreferrer" : undefined}
            style={{
              background: "var(--bg-light)",
              padding: "20px 18px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              minHeight: 72,
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <span style={{ color: "var(--gold)", flexShrink: 0 }} aria-hidden>
              {q.icon}
            </span>
            <div>
              <p style={{ fontSize: 13, fontWeight: 400, color: "var(--text)", marginBottom: 2 }}>{q.label}</p>
              <p style={{ fontSize: 11, fontWeight: 300, color: "var(--subtle)" }}>{q.sub}</p>
            </div>
          </a>
        ))}
      </div>

      {/* 푸터 */}
      <footer style={{ background: "var(--bg)", padding: "28px 24px 40px", borderTop: "1px solid var(--line)" }}>
        <p className="font-serif" style={{ fontSize: 20, fontWeight: 300, fontStyle: "italic", color: "var(--subtle)", marginBottom: 10 }}>
          odéve beauty
        </p>
        <p style={{ fontSize: 11, fontWeight: 300, color: "var(--subtle)", lineHeight: 1.9 }}>
          반영구 시술 전문 스튜디오
          <br />
          @odeve_beauty
        </p>
        <div style={{ display: "flex", gap: 16, marginTop: 20 }}>
          {[
            { label: "Instagram", href: "https://instagram.com/odeve_beauty" },
            { label: "Naver", href: "https://naver.com" },
            { label: "Kakao", href: "https://pf.kakao.com" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 10, fontWeight: 400, color: "#bbb", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
