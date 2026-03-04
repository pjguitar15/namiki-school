'use client';

import AnnouncementBar from "../components/AnnouncementBar";
import AfterSchoolRatesSection from "../components/AfterSchoolRatesSection";
import ContactSection from "../components/ContactSection";
import DaycareRatesSection from "../components/DaycareRatesSection";
import DaycareRatesShortDaySection from "../components/DaycareRatesShortDaySection";
import EikaiwaRatesSection from "../components/EikaiwaRatesSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PricingSection from "../components/PricingSection";

const PricingPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex flex-1 flex-col gap-10 bg-white">
        <PricingSection />
        <DaycareRatesSection />
        <DaycareRatesShortDaySection />
        <AfterSchoolRatesSection />
        <EikaiwaRatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
