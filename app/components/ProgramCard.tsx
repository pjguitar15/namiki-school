'use client';

import Image from "next/image";
import Link from "next/link";
import { Program } from "../constants/content";

type Props = {
  program: Program;
};

const ProgramCard = ({ program }: Props) => {
  const { title, duration, bulletPoints, ctaLabel, accentColor, image, category } =
    program;
  const toneMap: Record<string, { surface: string; chip: string; dot: string }> = {
    "bg-blue-500": {
      surface: "from-sky-50 to-cyan-100/80",
      chip: "bg-sky-600 text-white",
      dot: "bg-sky-500",
    },
    "bg-green-500": {
      surface: "from-emerald-50 to-lime-100/80",
      chip: "bg-emerald-600 text-white",
      dot: "bg-emerald-500",
    },
    "bg-orange-500": {
      surface: "from-orange-50 to-amber-100/80",
      chip: "bg-orange-600 text-white",
      dot: "bg-orange-500",
    },
  };
  const tones = toneMap[accentColor] ?? {
    surface: "from-slate-50 to-slate-100",
    chip: "bg-slate-700 text-white",
    dot: "bg-slate-500",
  };

  return (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-br ${tones.surface} shadow-lg shadow-slate-200`}
    >
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={640}
          height={420}
          className="h-64 w-full object-cover"
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-700 shadow">
          {duration}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <span className={`h-2.5 w-2.5 rounded-full ${tones.dot}`} />
          {category}
        </div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <ul className="flex flex-1 flex-col gap-2 text-sm text-slate-700">
          {bulletPoints.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className={`mt-1 inline-block h-2 w-2 rounded-full ${tones.dot}`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className={`mt-auto inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold shadow-md transition hover:translate-y-[-1px] hover:shadow-lg ${tones.chip}`}
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
