import type { Metadata } from "next";
import { createPageMetadata } from "../constants/seo";

export const metadata: Metadata = createPageMetadata({
  title: "English Programs for Ages 2+",
  description:
    "Explore age-based English programs at Namiki English School, including daycare, Eikaiwa, and after-school pathways in Tsukuba.",
  path: "/programs",
  keywords: [
    "Tsukuba English programs",
    "Kids Eikaiwa programs",
    "After-school English pathway",
    "English curriculum for children Japan",
  ],
  image: "/assets/asset-4.jpg",
});

export default function ProgramsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
