import { Hero } from "./Hero";
import { Marquee } from "./Marquee";
import { TrustBar } from "./TrustBar";
import { About } from "./About";
import { Doctor } from "./Doctor";
import { Services } from "./Services";
import { Conditions } from "./Conditions";
import { ChildrenCare } from "./ChildrenCare";
import { Pharmacy } from "./Pharmacy";
import { Process } from "./Process";
import { Testimonials } from "./Testimonials";
import { DoctorQuote } from "./DoctorQuote";
import { Booking } from "./Booking";
import { Contact } from "./Contact";
import { QRSection } from "./QRSection";

const SubPage = ({ children }) => <main className="pt-14">{children}</main>;

export const HomePage = () => (
  <main>
    <Hero />
    <Marquee />
    <TrustBar />
    <About />
    <Process />
    <DoctorQuote />
  </main>
);

export const DoctorPage = () => (
  <SubPage>
    <Doctor />
  </SubPage>
);

export const ServicesPage = () => (
  <SubPage>
    <Services />
  </SubPage>
);

export const ConditionsPage = () => (
  <SubPage>
    <Conditions />
  </SubPage>
);

export const ChildrenPage = () => (
  <SubPage>
    <ChildrenCare />
  </SubPage>
);

export const PharmacyPage = () => (
  <SubPage>
    <Pharmacy />
  </SubPage>
);

export const ReviewsPage = () => (
  <SubPage>
    <Testimonials />
    <DoctorQuote />
  </SubPage>
);

export const ContactPage = () => (
  <SubPage>
    <Booking />
    <Contact />
    <QRSection />
  </SubPage>
);
