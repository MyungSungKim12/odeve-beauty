"use client";

export default function Nav() {
  return (
    <nav
      style={{ background: "var(--bg)", borderBottom: "1px solid var(--line)" }}
      className="sticky top-0 z-50 flex items-center justify-between px-6"
    >
      <div style={{ minHeight: 56, display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        {/* 로고 */}
        <div
          className="font-serif"
          style={{ fontSize: 22, fontStyle: "italic", fontWeight: 400, letterSpacing: "0.02em" }}
        >
          odéve{" "}
          <span style={{ fontStyle: "normal", fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 12, color: "var(--muted)" }}>
            beauty
          </span>
        </div>

        {/* 예약 버튼 */}
        <a href="#booking" className="btn btn-dark" style={{ minHeight: 40, fontSize: 11, padding: "0 16px", borderRadius: 100 }}>
          예약하기
        </a>
      </div>
    </nav>
  );
}
