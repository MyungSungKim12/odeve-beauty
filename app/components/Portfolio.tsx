import { siteContent } from "../content";
import AutoRail from "./motion/AutoRail";
import Reveal from "./motion/Reveal";

export default function Portfolio() {
  const { portfolio } = siteContent;

  return (
    <section id="portfolio" className="section portfolio-section">
      <Reveal className="section-heading portfolio-heading">
        <div>
          <p className="eyebrow">({portfolio.eyebrow})</p>
          <h2 className="section-title">{portfolio.title}</h2>
        </div>
        <a href={portfolio.more.href} target="_blank" rel="noopener noreferrer">
          {portfolio.more.label}
        </a>
      </Reveal>
      <Reveal delay={0.08} y={20}>
        <AutoRail className="portfolio-rail">
          {[false, true].map((duplicate) =>
            portfolio.items.map((item) => (
              <article
                className="portfolio-card"
                key={`${item.label}${duplicate ? "-dup" : ""}`}
                aria-hidden={duplicate || undefined}
              >
                <div className="portfolio-photo">
                  <span>After</span>
                  <strong className="font-serif">사진 준비중</strong>
                </div>
                <div className="portfolio-copy">
                  <p>{item.label}</p>
                  <small className="font-serif">{item.en}</small>
                  <em>{item.note}</em>
                </div>
              </article>
            )),
          )}
        </AutoRail>
      </Reveal>
    </section>
  );
}
