import type { Metadata } from "next";
import { createPageMetadata } from "../constants/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Admissions and Enrollment",
  description:
    "Follow Namiki English School's admissions process from trial lesson to enrollment for daycare, Eikaiwa, and after-school classes.",
  path: "/admissions",
  keywords: [
    "Namiki English School admissions",
    "Tsukuba English school enrollment",
    "Trial lesson booking Tsukuba",
    "English class admissions Japan",
  ],
  image: "/assets/asset-7.jpg",
});

export default function AdmissionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
