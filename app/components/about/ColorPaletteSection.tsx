'use client';

import ColorSquaresSection from '../ColorSquaresSection';
import FadeIn from '../FadeIn';
import { useLanguage } from '../../providers/LanguageProvider';

const ColorPaletteSection = () => {
  const { content } = useLanguage();

  return (
    <FadeIn>
      <ColorSquaresSection {...content.aboutPage.colorPaletteSection} />
    </FadeIn>
  );
};

export default ColorPaletteSection;
