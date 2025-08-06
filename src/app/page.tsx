import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Services from "./components/Services";
import Founder from "./components/Founder";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth">
      <Navbar />
      <Hero />
      <Services />
      <Founder />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}