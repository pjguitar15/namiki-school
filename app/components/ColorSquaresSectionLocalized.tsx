"use client";

import ColorSquaresSection from "./ColorSquaresSection";
import { useLanguage } from "../providers/LanguageProvider";

const ColorSquaresSectionLocalized = () => {
  const { content } = useLanguage();

  return <ColorSquaresSection {...content.colorSquaresSection} />;
};

export default ColorSquaresSectionLocalized;
