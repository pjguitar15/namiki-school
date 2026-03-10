import type { Metadata } from "next";

import AnnouncementBar from "../components/AnnouncementBar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { createPageMetadata } from "../constants/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Namiki English School",
  description:
    "Book a trial lesson, ask about class availability, and contact Namiki English School in Tsukuba by phone, email, or map location.",
  path: "/contact",
  keywords: [
    "Contact Namiki English School",
    "Book trial lesson Tsukuba",
    "Tsukuba English school contact",
    "English class inquiry Japan",
  ],
  image: "/assets/asset-8.jpg",
});

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
