"use client";

const steps = [
  {
    num: "01",
    strong: "네이버 예약",
    text: "오더브뷰티 검색 후 채널에서 예약",
  },
  {
    num: "02",
    strong: "카카오 채널",
    text: "성함, 연락처, 시술 부위와 종류, 날짜와 시간 남겨주세요",
  },
  {
    num: "03",
    strong: "인스타 DM",
    text: "@odeve_beauty 로 문의",
  },
];

export default function Booking() {
  return (
    <section id="booking" style={{ background: "var(--bg)", padding: "48px 20px" }}>
      <div style={{ background: "var(--bg-dark)", borderRadius: 16, padding: "36px 24px" }}>

        <p className="font-serif" style={{ fontSize: 13, fontStyle: "italic", color: "#555", marginBottom: 10 }}>
          (booking info)
        </p>
        <h2
          className="font-serif"
          style={{ fontSize: 34, fontWeight: 300, fontStyle: "italic", color: "#f5f3f0", lineHeight: 1.15, marginBottom: 6 }}
        >
          예약하는 방법
        </h2>
        <p style={{ fontSize: 12, fontWeight: 300, color: "#444", marginBottom: 32, letterSpacing: "0.04em" }}>
          성함 · 연락처 · 시술 부위 · 날짜와 시간
        </p>

        {/* 스텝 */}
        <div style={{ marginBottom: 32, display: "flex", flexDirection: "column", gap: 18 }}>
          {steps.map((s) => (
            <div key={s.num} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <span
                className="font-serif"
                style={{ fontSize: 12, fontStyle: "italic", color: "#444", minWidth: 20, paddingTop: 2 }}
              >
                {s.num}
              </span>
              <p style={{ fontSize: 13, fontWeight: 300, color: "#666", lineHeight: 1.6 }}>
                <strong style={{ color: "#c8c2bb", fontWeight: 400, display: "block", marginBottom: 2 }}>
                  {s.strong}
                </strong>
                {s.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA 버튼 — 높이/스타일 통일 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <a
            href="https://naver.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            style={{ width: "100%" }}
          >
            네이버 예약 바로가기
          </a>
          <a
            href="https://pf.kakao.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
            style={{ width: "100%" }}
          >
            카카오 채널 상담
          </a>
        </div>
      </div>
    </section>
  );
}
