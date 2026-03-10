'use client';

import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";
import { useLanguage } from "../providers/LanguageProvider";

const AnnouncementBar = () => {
  const { language } = useLanguage();
  const mapUrl = "https://maps.app.goo.gl/YMADehE4bSCPtSHL9";

  const copy = {
    en: {
      phone: "+029-828-5990",
      address: "331-1 Shimohiratsuka Tsukuba, Ibaraki 305-0813, Japan",
      hours: "Monday - Friday : 8:00 - 18:00",
    },
    ja: {
      phone: "+029-828-5990",
      address: "〒305-0813 茨城県つくば市下平塚331-1",
      hours: "月曜日 - 金曜日 : 8:00 - 18:00",
    },
  } as const;

  const text = copy[language];

  return (
    <div className="bg-[#c7add1] px-4 py-2 text-[#1f2557]">
      <div className="mx-auto flex max-w-[100rem] flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs font-semibold md:text-sm">
        <a
          href="tel:+0298285990"
          className="inline-flex items-center gap-2 transition hover:opacity-80"
        >
          <FiPhone aria-hidden="true" />
          <span>{text.phone}</span>
        </a>

        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 transition hover:opacity-80"
        >
          <FiMapPin aria-hidden="true" />
          <span>{text.address}</span>
        </a>

        <p className="inline-flex items-center gap-2">
          <FiClock aria-hidden="true" />
          <span>{text.hours}</span>
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
