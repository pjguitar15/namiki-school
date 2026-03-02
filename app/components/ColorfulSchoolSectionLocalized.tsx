"use client";

import ColorfulSchoolSection from "./ColorfulSchoolSection";
import { useLanguage } from "../providers/LanguageProvider";

const ColorfulSchoolSectionLocalized = () => {
  const { content } = useLanguage();

  return <ColorfulSchoolSection {...content.schoolShowcaseSection} />;
};

export default ColorfulSchoolSectionLocalized;
