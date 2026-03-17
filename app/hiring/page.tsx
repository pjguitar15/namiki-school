import type { Metadata } from "next";

import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import HiringPageContent from "../components/HiringPageContent";
import Navbar from "../components/Navbar";
import { createPageMetadata } from "../constants/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Hiring | Namiki English School",
  description:
    "Explore generic teaching and support staff opportunities, role expectations, and the hiring process at Namiki English School in Tsukuba.",
  path: "/hiring",
  keywords: [
    "Namiki English School hiring",
    "English teacher jobs Tsukuba",
    "School support staff jobs Japan",
    "No experience required teaching job",
  ],
  image: "/classoom/2.jpg",
});

const HiringPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex flex-1 flex-col bg-white">
        <HiringPageContent />
      </main>
      <Footer />
    </div>
  );
};

export default HiringPage;
