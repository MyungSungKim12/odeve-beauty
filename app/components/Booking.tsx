import { siteContent } from "../content";

export default function Booking() {
  const { booking } = siteContent;

  return (
    <section id="booking" className="booking-section">
      <div className="booking-panel">
        <p className="eyebrow">({booking.eyebrow})</p>
        <h2 className="booking-title">{booking.title}</h2>
        <p className="booking-body">{booking.body}</p>
        <div className="booking-steps">
          {booking.steps.map((step) => (
            <article key={step.num}>
              <span className="font-serif">{step.num}</span>
              <p>
                <strong>{step.strong}</strong>
                {step.text}
              </p>
            </article>
          ))}
        </div>
        <div className="booking-actions">
          {booking.ctas.map((cta, index) => (
            <a
              key={cta.label}
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${index === 0 ? "btn-accent" : "btn-dark-outline"}`}
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
