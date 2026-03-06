'use client';

import AnnouncementBar from "../components/AnnouncementBar";
import Container from "../components/Container";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutHero from "../components/about/AboutHero";
import ColorPaletteSection from "../components/about/ColorPaletteSection";
import FAQSection from "../components/about/FAQSection";
import HighlightsSection from "../components/about/HighlightsSection";
import MessageToParentsSection from "../components/about/MessageToParentsSection";
import StorySection from "../components/about/StorySection";
import ValuesSection from "../components/about/ValuesSection";

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex flex-1 flex-col bg-white">
        <AboutHero />
        <Container id="about" className="space-y-16 py-10 md:space-y-20 md:py-16">
          <StorySection />
          <MessageToParentsSection />
          <HighlightsSection />
          <ValuesSection />
          <ColorPaletteSection />
          <FAQSection />
        </Container>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
