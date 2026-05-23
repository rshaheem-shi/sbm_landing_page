import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Location from "@/components/sections/Location";
import UseCases from "@/components/sections/UseCases";
import Investment from "@/components/sections/Investment";
import Investors from "@/components/sections/Investors";
import WhySBM from "@/components/sections/WhySBM";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <Location />
        <UseCases />
        <WhySBM />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
