import { siteContent } from "../content";

function QuickIcon({ label }: { label: string }) {
  const initial = label.slice(0, 1);
  return <span className="quick-icon" aria-hidden>{initial}</span>;
}

export default function Footer() {
  const { brand, footer } = siteContent;

  return (
    <>
      <section className="quick-links" aria-label="빠른 링크">
        {footer.quickLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            <QuickIcon label={link.label} />
            <span>
              <strong>{link.label}</strong>
              <small>{link.sub}</small>
            </span>
          </a>
        ))}
      </section>
      <footer className="footer">
        <p className="font-serif">{brand.name} {brand.suffix}</p>
        <small>
          {footer.summary}
          <br />
          @odeve_beauty
        </small>
        <nav aria-label="소셜 링크">
          {footer.socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
              {social.label}
            </a>
          ))}
        </nav>
      </footer>
    </>
  );
}
