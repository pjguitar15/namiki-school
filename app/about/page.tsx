'use client';

import AnnouncementBar from "../components/AnnouncementBar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutHero from "../components/about/AboutHero";
import StorySection from "../components/about/StorySection";
import ValuesSection from "../components/about/ValuesSection";
import HighlightsSection from "../components/about/HighlightsSection";
import FAQSection from "../components/about/FAQSection";

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex flex-1 flex-col gap-10 bg-slate-50">
        <AboutHero />
        <Container id="about" className="space-y-16 pb-16 md:pb-24">
          <StorySection />
          <ValuesSection />
          <HighlightsSection />
          <FAQSection />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
