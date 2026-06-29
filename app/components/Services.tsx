import { siteContent } from "../content";

export default function Services() {
  const { services } = siteContent;

  return (
    <section id="services" className="section services-section">
      <div className="section-heading">
        <p className="eyebrow">({services.eyebrow})</p>
        <h2 className="section-title">{services.title}</h2>
        <p className="section-note">{services.note}</p>
      </div>
      <div className="service-list">
        {services.items.map((service) => (
          <article className="service-row" key={service.name}>
            <div>
              <h3>{service.name}</h3>
              <p>{service.sub}</p>
            </div>
            <div className="service-price">
              <strong>{service.price}</strong>
              <span>{service.extra}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
