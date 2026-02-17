'use client';

import Image from "next/image";
import { Program } from "../constants/content";

type Props = {
  program: Program;
};

const ProgramCard = ({ program }: Props) => {
  const { title, duration, bulletPoints, ctaLabel, accentColor, image, category } =
    program;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg shadow-slate-100">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={640}
          height={420}
          className="h-64 w-full object-cover"
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow">
          {duration}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
          <span className={`h-2 w-2 rounded-full ${accentColor}`} />
          {category}
        </div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <ul className="flex flex-1 flex-col gap-2 text-sm text-slate-700">
          {bulletPoints.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className={`mt-1 inline-block h-2 w-2 rounded-full ${accentColor}`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={`mt-auto w-full rounded-full px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:translate-y-[-1px] hover:shadow-lg ${accentColor}`}
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
