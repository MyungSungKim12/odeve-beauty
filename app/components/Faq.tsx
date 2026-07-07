import { siteContent } from "../content";

export default function Faq() {
  const { faq } = siteContent;

  return (
    <section id="faq" className="section faq-section">
      <div className="section-heading">
        <p className="eyebrow">({faq.eyebrow})</p>
        <h2 className="section-title">{faq.title}</h2>
        <p className="section-note">{faq.note}</p>
      </div>
      <div className="faq-list">
        {faq.items.map((item) => (
          <details className="faq-item" key={item.q}>
            <summary>
              <span>{item.q}</span>
              <span className="faq-marker" aria-hidden>
                +
              </span>
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
