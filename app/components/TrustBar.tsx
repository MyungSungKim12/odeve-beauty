export default function TrustBar() {
  const stats = [
    { num: "8년+", label: "경력" },
    { num: "3,000+", label: "고객" },
    { num: "4.9★", label: "평점" },
  ];

  return (
    <div
      style={{ background: "var(--bg-light)", borderBottom: "1px solid var(--line)" }}
      className="grid grid-cols-3"
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          style={{ borderRight: i < 2 ? "1px solid var(--line)" : "none" }}
          className="flex flex-col items-center py-5 px-2"
        >
          <span
            className="font-serif"
            style={{ fontSize: 26, fontWeight: 300, fontStyle: "italic", color: "var(--text)", lineHeight: 1, marginBottom: 4 }}
          >
            {s.num}
          </span>
          <span
            style={{ fontSize: 10, fontWeight: 300, color: "var(--subtle)", letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
