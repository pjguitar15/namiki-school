import AboutSection from "./components/AboutSection";
import AnnouncementBar from "./components/AnnouncementBar";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PartnersSection from "./components/PartnersSection";
import ProgramsSection from "./components/ProgramsSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex flex-1 flex-col gap-2">
        <Hero />
        <AboutSection />
        <PartnersSection />
        <ProgramsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
