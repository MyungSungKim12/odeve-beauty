const WORDS = [
  "semi-permanent beauty",
  "eyebrow",
  "eye line",
  "lip blush",
  "lash perm",
];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {[0, 1].map((row) => (
          <div className="marquee-row font-serif" key={row}>
            {WORDS.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
