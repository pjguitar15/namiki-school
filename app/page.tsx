import AboutSection from "./components/AboutSection";
import AnnouncementBar from "./components/AnnouncementBar";
import ColorfulSchoolSectionLocalized from "./components/ColorfulSchoolSectionLocalized";
import ColorSquaresSectionLocalized from "./components/ColorSquaresSectionLocalized";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MontessoriFeatureSection from "./components/MontessoriFeatureSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import ProgramsSection from "./components/ProgramsSection";
import ProjectsSection from "./components/ProjectsSection";
import SchoolInfoCardsSection from "./components/SchoolInfoCardsSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex flex-1 flex-col gap-2">
        <Hero />
        <AboutSection />
        <MontessoriFeatureSection />
        <ColorSquaresSectionLocalized />
        <ColorfulSchoolSectionLocalized />
        <SchoolInfoCardsSection />
        <PricingSection />
        <ProgramsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
