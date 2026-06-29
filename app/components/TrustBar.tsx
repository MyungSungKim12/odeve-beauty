import { siteContent } from "../content";

export default function TrustBar() {
  return (
    <section className="stat-grid" aria-label="스튜디오 신뢰 지표">
      {siteContent.stats.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <span className="font-serif">{stat.value}</span>
          <small>{stat.label}</small>
        </div>
      ))}
    </section>
  );
}
