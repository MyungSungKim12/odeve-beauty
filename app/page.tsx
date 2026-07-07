import Booking from "./components/Booking";
import ChatWidget from "./components/ChatWidget";
import Faq from "./components/Faq";
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
      <Faq />
      <Booking />
      <Footer />
      <ChatWidget />
    </main>
  );
}
