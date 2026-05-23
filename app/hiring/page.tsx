import { redirect } from "next/navigation";

import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import HiringPageContent from "../components/HiringPageContent";
import Navbar from "../components/Navbar";

export function HiringPageView() {
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
}

export default function Page() {
  redirect("/ja/hiring");
}
