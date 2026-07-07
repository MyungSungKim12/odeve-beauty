import { siteContent } from "../content";
import CountUp from "./motion/CountUp";

export default function TrustBar() {
  return (
    <section className="stat-grid" aria-label="스튜디오 신뢰 지표">
      {siteContent.stats.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <CountUp className="font-serif" value={stat.value} />
          <small>{stat.label}</small>
        </div>
      ))}
    </section>
  );
}
