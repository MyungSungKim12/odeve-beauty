import { siteContent } from "../content";
import Reveal from "./motion/Reveal";

export default function Services() {
  const { services } = siteContent;

  return (
    <section id="services" className="section services-section">
      <Reveal className="section-heading">
        <p className="eyebrow">({services.eyebrow})</p>
        <h2 className="section-title">{services.title}</h2>
        <p className="section-note">{services.note}</p>
      </Reveal>
      <div className="service-list">
        {services.items.map((service, index) => (
          <Reveal
            as="article"
            className="service-row"
            key={service.name}
            delay={Math.min(index * 0.06, 0.24)}
            y={16}
          >
            <div>
              <h3>{service.name}</h3>
              <p>{service.sub}</p>
            </div>
            <div className="service-price">
              <strong>{service.price}</strong>
              <span>{service.extra}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
