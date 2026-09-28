import { useEffect } from "react";
import Lenis from "lenis";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import "@/App.css";
import { setLenisInstance, scrollToTop } from "./site/scroll";
import { Header } from "./site/Header";
import { Footer } from "./site/Footer";
import { Floating } from "./site/Floating";
import {
  HomePage,
  DoctorPage,
  ServicesPage,
  ConditionsPage,
  ChildrenPage,
  PharmacyPage,
  ReviewsPage,
  ContactPage,
} from "./site/pages";

const ScrollRestoration = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [pathname]);
  return null;
};

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
    <BrowserRouter>
      <div className="App font-body bg-cream text-ink pb-[64px] md:pb-0">
        <ScrollRestoration />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-doctor" element={<DoctorPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/conditions" element={<ConditionsPage />} />
          <Route path="/children" element={<ChildrenPage />} />
          <Route path="/pharmacy" element={<PharmacyPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
        <Floating />
        <Toaster position="top-center" richColors />
      </div>
    </BrowserRouter>
  );
}

export default App;
