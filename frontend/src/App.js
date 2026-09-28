import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import "@/App.css";
import { setLenisInstance } from "./site/scroll";
import { Header } from "./site/Header";
import { Hero } from "./site/Hero";
import { Marquee } from "./site/Marquee";
import { TrustBar } from "./site/TrustBar";
import { About } from "./site/About";
import { Doctor } from "./site/Doctor";
import { Services } from "./site/Services";
import { Conditions } from "./site/Conditions";
import { ChildrenCare } from "./site/ChildrenCare";
import { Pharmacy } from "./site/Pharmacy";
import { Process } from "./site/Process";
import { Testimonials } from "./site/Testimonials";
import { DoctorQuote } from "./site/DoctorQuote";
import { Booking } from "./site/Booking";
import { Contact } from "./site/Contact";
import { QRSection } from "./site/QRSection";
import { Footer } from "./site/Footer";
import { Floating } from "./site/Floating";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    setLenisInstance(lenis);
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  return (
    <div className="App font-body bg-cream text-ink pb-[64px] md:pb-0">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <TrustBar />
        <About />
        <Doctor />
        <Services />
        <Conditions />
        <ChildrenCare />
        <Pharmacy />
        <Process />
        <Testimonials />
        <DoctorQuote />
        <Booking />
        <Contact />
        <QRSection />
      </main>
      <Footer />
      <Floating />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
