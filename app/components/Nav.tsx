import { siteContent } from "../content";

export default function Nav() {
  const { brand, nav } = siteContent;

  return (
    <nav className="nav">
      <a className="nav-brand" href="#top" aria-label={`${brand.studio} 홈`}>
        <span className="font-serif nav-logo">{brand.name}</span>
        <span>{brand.suffix}</span>
      </a>
      <a href="#booking" className="btn btn-primary nav-cta">
        {nav.bookingLabel}
      </a>
    </nav>
  );
}
