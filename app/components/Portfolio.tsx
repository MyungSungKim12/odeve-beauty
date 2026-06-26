const items = [
  { label: "눈썹문신", en: "Eyebrow" },
  { label: "아이라인", en: "Eye Line" },
  { label: "입술문신", en: "Lip Blush" },
  { label: "속눈썹 펌", en: "Lash Perm" },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{ background: "var(--bg)", padding: "52px 0" }}
    >
      {/* 헤더 */}
      <div style={{ padding: "0 24px", marginBottom: 24 }}>
        <p
          className="font-serif"
          style={{ fontSize: 13, fontStyle: "italic", color: "var(--muted)", marginBottom: 8 }}
        >
          (before &amp; after)
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <h2
            className="font-serif"
            style={{ fontSize: 30, fontWeight: 300, color: "var(--text)", lineHeight: 1.2 }}
          >
            포트폴리오
          </h2>
          <a
            href="https://instagram.com/odeve_beauty"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 11, fontWeight: 400, color: "var(--gold)", letterSpacing: "0.08em", textDecoration: "none" }}
          >
            전체보기 →
          </a>
        </div>
      </div>

      {/* 가로 스크롤 카드 */}
      <div
        style={{
          display: "flex",
          gap: 12,
          padding: "0 24px",
          overflowX: "auto",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {items.map((item) => (
          <div
            key={item.label}
            style={{
              minWidth: 200,
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid var(--line)",
              flexShrink: 0,
              background: "var(--bg-light)",
            }}
          >
            {/* 이미지 플레이스홀더 — 실제 사진으로 교체 */}
            <div
              style={{
                height: 240,
                background: "#d4cec8",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  padding: "4px 10px",
                  borderRadius: 100,
                  background: "var(--gold)",
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                After
              </span>
              <span
                className="font-serif"
                style={{ fontSize: 13, fontStyle: "italic", color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em" }}
              >
                사진 예정
              </span>
            </div>
            <div style={{ padding: "14px 14px 16px" }}>
              <p style={{ fontSize: 13, fontWeight: 500, color: "var(--text)", marginBottom: 3 }}>
                {item.label}
              </p>
              <p
                className="font-serif"
                style={{ fontSize: 11, fontStyle: "italic", color: "var(--subtle)" }}
              >
                {item.en}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
