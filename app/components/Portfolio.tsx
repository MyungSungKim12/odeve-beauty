import { siteContent } from "../content";

export default function Portfolio() {
  const { portfolio } = siteContent;

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="section-heading portfolio-heading">
        <div>
          <p className="eyebrow">({portfolio.eyebrow})</p>
          <h2 className="section-title">{portfolio.title}</h2>
        </div>
        <a href={portfolio.more.href} target="_blank" rel="noopener noreferrer">
          {portfolio.more.label}
        </a>
      </div>
      <div className="portfolio-rail">
        {portfolio.items.map((item) => (
          <article className="portfolio-card" key={item.label}>
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
        ))}
      </div>
    </section>
  );
}
