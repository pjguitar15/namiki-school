'use client';

import AnnouncementBar from "../components/AnnouncementBar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex flex-1 flex-col bg-white">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
