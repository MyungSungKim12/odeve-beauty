import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main style={{ maxWidth: 480, margin: "0 auto", background: "var(--bg)" }}>
      <Nav />
      <Hero />
      <TrustBar />
      <Portfolio />
      <Services />
      <Booking />
      <Footer />
    </main>
  );
}
