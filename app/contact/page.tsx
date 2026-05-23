import { redirect } from "next/navigation";

import AnnouncementBar from "../components/AnnouncementBar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export function ContactPageView() {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex flex-1 flex-col bg-white">
        <ContactSection variant="page" />
      </main>
      <Footer />
    </div>
  );
}

export default function Page() {
  redirect("/ja/contact");
}
