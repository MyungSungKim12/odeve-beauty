import Image from "next/image";
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
                  <Image
                    src={item.image.src}
                    alt={duplicate ? "" : item.image.alt}
                    fill
                    sizes="(max-width: 480px) 72vw, 250px"
                  />
                  <span>Dummy</span>
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
