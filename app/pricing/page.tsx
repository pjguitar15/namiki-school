import { redirect } from "next/navigation";

import AnnouncementBar from "../components/AnnouncementBar";
import AfterSchoolRatesSection from "../components/AfterSchoolRatesSection";
import ContactSection from "../components/ContactSection";
import DaycareRatesSection from "../components/DaycareRatesSection";
import EikaiwaRatesSection from "../components/EikaiwaRatesSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PricingSection from "../components/PricingSection";

export function PricingPageView() {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex flex-1 flex-col gap-10 bg-white">
        <h1 className="sr-only">
          Pricing for Daycare, Eikaiwa, and After-School in Tsukuba
        </h1>
        <PricingSection />
        <DaycareRatesSection />
        <AfterSchoolRatesSection />
        <EikaiwaRatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default function Page() {
  redirect("/ja/pricing");
}
