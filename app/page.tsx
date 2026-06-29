import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import TrustBar from "./components/TrustBar";

export default function Home() {
  return (
    <main className="site-shell">
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
