"use client";

export default function Hero() {
  return (
    <section
      style={{ background: "#d8d4ce", minHeight: "90svh" }}
      className="relative flex flex-col justify-end overflow-hidden"
    >
      {/* 배경 대형 텍스트 */}
      <div
        className="font-serif pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        style={{
          fontSize: "clamp(80px, 28vw, 200px)",
          fontStyle: "italic",
          fontWeight: 300,
          color: "rgba(255,255,255,0.15)",
          letterSpacing: "-0.02em",
          whiteSpace: "nowrap",
        }}
        aria-hidden
      >
        odéve
      </div>

      {/* 사진 영역 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          style={{
            width: "min(240px, 60vw)",
            height: "min(360px, 75vw)",
            borderRadius: 999,
            background: "#c4beb7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <span
            className="font-serif"
            style={{ fontSize: 13, fontStyle: "italic", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textAlign: "center", lineHeight: 1.8 }}
          >
            시술 사진
            <br />
            업로드 예정
          </span>
        </div>
      </div>

      {/* 하단 콘텐츠 */}
      <div className="relative z-10 px-6 pb-10 pt-16">
        <p
          className="font-serif"
          style={{ fontSize: 13, fontStyle: "italic", color: "rgba(26,26,26,0.45)", marginBottom: 12, letterSpacing: "0.04em" }}
        >
          (semi-permanent beauty)
        </p>
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(36px, 11vw, 52px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#1a1a1a",
            lineHeight: 1.1,
            marginBottom: 20,
            letterSpacing: "-0.01em",
          }}
        >
          자연스럽게,
          <br />
          <span style={{ fontStyle: "normal" }}>더 아름답게.</span>
        </h1>

        <p style={{ fontSize: 12, fontWeight: 300, color: "rgba(26,26,26,0.45)", letterSpacing: "0.08em", marginBottom: 28 }}>
          눈썹문신 · 아이라인 · 입술문신 · 속눈썹 펌
        </p>

        {/* 버튼 2개 — 같은 높이, 같은 radius */}
        <div style={{ display: "flex", gap: 10 }}>
          <a href="#booking" className="btn btn-dark" style={{ flex: 1 }}>
            예약하기
          </a>
          <a href="#portfolio" className="btn btn-ghost">
            포트폴리오
          </a>
        </div>
      </div>
    </section>
  );
}
