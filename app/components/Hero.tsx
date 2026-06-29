import { siteContent } from "../content";

export default function Hero() {
  const { brand, hero } = siteContent;

  return (
    <section id="top" className="hero">
      <div className="hero-mark font-serif" aria-hidden>
        {brand.name}
      </div>
      <div className="hero-visual" aria-hidden>
        <span className="font-serif">photo ready</span>
      </div>
      <div className="hero-content">
        <p className="eyebrow">({hero.eyebrow})</p>
        <h1 className="hero-title">{hero.title}</h1>
        <p className="hero-body">{hero.body}</p>
        <div className="hero-chips" aria-label="주요 시술">
          {hero.chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
        <div className="hero-actions">
          <a href={hero.primaryCta.href} className="btn btn-primary">
            {hero.primaryCta.label}
          </a>
          <a href={hero.secondaryCta.href} className="btn btn-soft">
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
