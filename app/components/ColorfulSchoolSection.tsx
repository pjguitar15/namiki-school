import Image from 'next/image';
import Container from './Container';

type HeroContent = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  indexLabel: string;
  description: string;
};

type IntroContent = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  statValue: string;
  statLabel: string;
  principalName: string;
  principalRole: string;
};

type ImageTile = {
  id: string;
  type: 'image';
  imageSrc: string;
  imageAlt: string;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
};

type ColorTile = {
  id: string;
  type: 'color';
  title: string;
  description: string;
  eyebrow?: string;
  backgroundColor: string;
  textColor?: string;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
};

type MosaicTile = ImageTile | ColorTile;

export type ColorfulSchoolSectionProps = {
  hero: HeroContent;
  intro: IntroContent;
  mosaicTiles: MosaicTile[];
};

const spanClass = (span: 1 | 2 | undefined, axis: 'col' | 'row') => {
  if (axis === 'col') {
    return span === 2 ? 'sm:col-span-2' : '';
  }

  return span === 2 ? 'sm:row-span-2' : '';
};

const ColorfulSchoolSection = ({
  hero,
  intro,
  mosaicTiles,
}: ColorfulSchoolSectionProps) => {
  return (
    <section className='bg-slate-50 py-16 md:py-24'>
      <Container className='space-y-14 py-0 md:space-y-20'>
        <article className='relative min-h-[22rem] overflow-hidden rounded-[2rem] md:min-h-[31rem]'>
          <Image
            src={hero.imageSrc}
            alt={hero.imageAlt}
            fill
            className='object-cover object-center'
            sizes='(min-width: 1024px) 1280px, 100vw'
          />
          <div className='absolute inset-0 bg-slate-900/35' />
          <div className='absolute inset-0 bg-gradient-to-r from-cyan-600/70 via-cyan-500/25 to-transparent' />

          <div className='relative z-10 flex h-full flex-col justify-end gap-6 p-8 text-white md:flex-row md:items-end md:justify-between md:p-14'>
            <h2 className='max-w-lg text-4xl font-bold uppercase leading-[0.9] md:text-6xl'>
              {hero.title}
            </h2>
            <div className='max-w-sm space-y-3'>
              <p className='text-4xl font-semibold leading-none md:text-5xl'>
                {hero.indexLabel}
              </p>
              <p className='text-sm leading-relaxed text-white/90 md:text-base'>
                {hero.description}
              </p>
            </div>
          </div>
        </article>

        <article className='grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center'>
          <div className='relative mx-auto w-full max-w-md overflow-visible'>
            <div className='relative aspect-[4/5] overflow-hidden rounded-3xl'>
              <Image
                src={intro.imageSrc}
                alt={intro.imageAlt}
                fill
                className='object-cover object-center'
                sizes='(min-width: 1024px) 420px, 100vw'
              />
            </div>

            <div className='absolute -bottom-6 -right-6 w-44 rounded-2xl bg-cyan-400 p-6 text-white shadow-xl md:w-48'>
              <p className='text-4xl font-bold leading-none'>{intro.statValue}</p>
              <p className='mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85'>
                {intro.statLabel}
              </p>
            </div>
          </div>

          <div className='space-y-6'>
            <p className='text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700'>
              {intro.eyebrow}
            </p>
            <h3 className='text-3xl font-semibold leading-tight text-slate-900 md:text-5xl'>
              {intro.title}
            </h3>

            <div className='grid gap-4 text-slate-600 sm:grid-cols-2'>
              {intro.paragraphs.map((paragraph, index) => (
                <p key={`${intro.title}-${index}`} className='text-sm leading-relaxed md:text-base'>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className='rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200/70'>
              <p className='text-base font-semibold text-slate-900'>{intro.principalName}</p>
              <p className='text-sm text-slate-600'>{intro.principalRole}</p>
            </div>
          </div>
        </article>

        <section className='grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {mosaicTiles.map((tile) => {
            const colSpanClass = spanClass(tile.colSpan, 'col');
            const rowSpanClass = spanClass(tile.rowSpan, 'row');

            if (tile.type === 'image') {
              return (
                <article
                  key={tile.id}
                  className={`group relative overflow-hidden rounded-2xl ${colSpanClass} ${rowSpanClass}`}
                >
                  <Image
                    src={tile.imageSrc}
                    alt={tile.imageAlt}
                    fill
                    className='object-cover object-center transition duration-500 group-hover:scale-105'
                    sizes='(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw'
                  />
                </article>
              );
            }

            return (
              <article
                key={tile.id}
                style={{
                  backgroundColor: tile.backgroundColor,
                  color: tile.textColor ?? '#ffffff',
                }}
                className={`rounded-2xl p-6 md:p-8 ${colSpanClass} ${rowSpanClass}`}
              >
                {tile.eyebrow ? (
                  <p className='text-xs font-semibold uppercase tracking-[0.18em] opacity-85'>
                    {tile.eyebrow}
                  </p>
                ) : null}
                <h4 className='mt-3 text-3xl font-bold leading-tight'>{tile.title}</h4>
                <p className='mt-4 max-w-xs text-sm leading-relaxed opacity-90'>
                  {tile.description}
                </p>
              </article>
            );
          })}
        </section>
      </Container>
    </section>
  );
};

export default ColorfulSchoolSection;
