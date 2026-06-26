"use client";

export default function Nav() {
  return (
    <nav
      style={{ background: "var(--bg)", borderBottom: "1px solid var(--line)" }}
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4"
    >
      {/* 로고 */}
      <div
        className="font-serif"
        style={{ fontSize: 22, fontStyle: "italic", fontWeight: 400, letterSpacing: "0.02em" }}
      >
        odéve{" "}
        <span
          style={{
            fontStyle: "normal",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: 12,
            color: "var(--muted)",
          }}
        >
          beauty
        </span>
      </div>

      {/* 우측 */}
      <div className="flex items-center gap-4">
        <a
          href="https://instagram.com/odeve_beauty"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 11, fontWeight: 300, color: "var(--muted)", letterSpacing: "0.06em" }}
          className="hidden sm:block"
        >
          @odeve_beauty
        </a>
        <a
          href="#booking"
          style={{
            background: "var(--bg-dark)",
            color: "var(--bg)",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.1em",
            padding: "9px 18px",
            borderRadius: 100,
            textDecoration: "none",
          }}
        >
          예약하기
        </a>
      </div>
    </nav>
  );
}
