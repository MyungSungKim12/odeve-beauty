"use client";

const steps = [
  {
    num: "01",
    strong: "네이버 예약",
    text: "— 오더브뷰티 검색 후 채널에서 예약",
    href: "https://naver.com",
  },
  {
    num: "02",
    strong: "카카오 채널",
    text: "— 채널로 예약 시 성함, 연락처,\n시술 부위와 종류, 날짜와 시간 남겨주세요",
    href: "https://pf.kakao.com",
  },
  {
    num: "03",
    strong: "인스타 DM",
    text: "— @odeve_beauty 로 문의",
    href: "https://instagram.com/odeve_beauty",
  },
];

export default function Booking() {
  return (
    <section
      id="booking"
      style={{ background: "var(--bg)", padding: "52px 20px" }}
    >
      <div
        style={{
          background: "var(--bg-dark)",
          borderRadius: 16,
          padding: "36px 24px",
        }}
      >
        <p
          className="font-serif"
          style={{ fontSize: 13, fontStyle: "italic", color: "#666", marginBottom: 12 }}
        >
          (booking info)
        </p>
        <h2
          className="font-serif"
          style={{
            fontSize: 36,
            fontWeight: 300,
            fontStyle: "italic",
            color: "#f5f3f0",
            lineHeight: 1.15,
            marginBottom: 6,
          }}
        >
          예약하는
          <br />
          방법
        </h2>
        <p style={{ fontSize: 12, fontWeight: 300, color: "#555", marginBottom: 28, letterSpacing: "0.04em" }}>
          성함 · 연락처 · 시술 부위 · 날짜와 시간
        </p>

        {/* 스텝 */}
        <div style={{ marginBottom: 28 }}>
          {steps.map((s) => (
            <div
              key={s.num}
              style={{ display: "flex", gap: 14, marginBottom: 18, alignItems: "flex-start" }}
            >
              <span
                className="font-serif"
                style={{ fontSize: 13, fontStyle: "italic", color: "#444", minWidth: 20, marginTop: 1 }}
              >
                {s.num}
              </span>
              <p style={{ fontSize: 13, fontWeight: 300, color: "#777", lineHeight: 1.7, whiteSpace: "pre-line" }}>
                <strong style={{ color: "#c8c2bb", fontWeight: 400 }}>{s.strong}</strong>
                {s.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA 버튼 */}
        <a
          href="https://naver.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            width: "100%",
            padding: "16px 0",
            borderRadius: 4,
            background: "var(--gold)",
            color: "#1a1a1a",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            textDecoration: "none",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          네이버 예약 바로가기
        </a>
        <a
          href="https://pf.kakao.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            width: "100%",
            padding: "14px 0",
            borderRadius: 4,
            background: "transparent",
            border: "1px solid #2e2e2e",
            color: "#666",
            fontSize: 12,
            fontWeight: 300,
            letterSpacing: "0.1em",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          카카오 채널 상담
        </a>
      </div>
    </section>
  );
}
