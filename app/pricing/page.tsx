import type { Metadata } from "next";

import AnnouncementBar from "../components/AnnouncementBar";
import AfterSchoolRatesSection from "../components/AfterSchoolRatesSection";
import ContactSection from "../components/ContactSection";
import DaycareRatesSection from "../components/DaycareRatesSection";
import DaycareRatesShortDaySection from "../components/DaycareRatesShortDaySection";
import EikaiwaRatesSection from "../components/EikaiwaRatesSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PricingSection from "../components/PricingSection";
import { createPageMetadata } from "../constants/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Pricing for Daycare, Eikaiwa, and After-School",
  description:
    "View tuition and fees for daycare, short-day daycare, Eikaiwa, and after-school English programs at Namiki English School.",
  path: "/pricing",
  keywords: [
    "Namiki English School pricing",
    "Tsukuba English school tuition",
    "Daycare English fees Tsukuba",
    "Eikaiwa rates Tsukuba",
  ],
  image: "/assets/asset-5.jpg",
});

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
