const quickLinks = [
  { icon: "📷", label: "인스타그램", sub: "@odeve_beauty", href: "https://instagram.com/odeve_beauty" },
  { icon: "💬", label: "카카오 채널", sub: "오더브뷰티", href: "https://pf.kakao.com" },
  { icon: "📍", label: "오시는 길", sub: "위치 안내", href: "#location" },
  { icon: "📞", label: "전화 문의", sub: "바로 연결", href: "tel:+8200000000" },
];

export default function Footer() {
  return (
    <>
      {/* 퀵 링크 그리드 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 1,
          background: "var(--line)",
        }}
      >
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
            }}
          >
            <span style={{ fontSize: 18 }} aria-hidden>{q.icon}</span>
            <div>
              <p style={{ fontSize: 12, fontWeight: 400, color: "var(--text)" }}>{q.label}</p>
              <p style={{ fontSize: 10, fontWeight: 300, color: "var(--subtle)", marginTop: 2 }}>{q.sub}</p>
            </div>
          </a>
        ))}
      </div>

      {/* 푸터 */}
      <footer
        style={{
          background: "var(--bg)",
          padding: "28px 24px 36px",
          borderTop: "1px solid var(--line)",
        }}
      >
        <p
          className="font-serif"
          style={{ fontSize: 20, fontWeight: 300, fontStyle: "italic", color: "var(--subtle)", marginBottom: 12 }}
        >
          odéve beauty
        </p>
        <p style={{ fontSize: 11, fontWeight: 300, color: "var(--subtle)", lineHeight: 1.8, letterSpacing: "0.02em" }}>
          반영구 시술 전문 스튜디오
          <br />
          @odeve_beauty · @essential_insta
        </p>
        <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
          {["Instagram", "Naver", "Kakao"].map((s) => (
            <span
              key={s}
              style={{ fontSize: 10, fontWeight: 400, color: "#ccc", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              {s}
            </span>
          ))}
        </div>
      </footer>
    </>
  );
}
