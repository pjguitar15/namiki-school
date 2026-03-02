import Container from './Container';

type ColorSquareItem = {
  id: string;
  title: string;
  lines: string[];
  color: string;
  textColor?: string;
};

export type ColorSquaresSectionProps = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  items: ColorSquareItem[];
  columns?: 2 | 3 | 4;
};

const columnClassMap: Record<NonNullable<ColorSquaresSectionProps['columns']>, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

const ColorSquaresSection = ({
  eyebrow,
  heading,
  description,
  items,
  columns = 3,
}: ColorSquaresSectionProps) => {
  return (
    <section className='bg-white py-16 md:py-24'>
      <Container className='space-y-10 py-0'>
        {eyebrow || heading || description ? (
          <header className='mx-auto max-w-3xl space-y-4 text-center'>
            {eyebrow ? (
              <p className='text-sm font-semibold uppercase tracking-[0.22em] text-sky-600'>
                {eyebrow}
              </p>
            ) : null}
            {heading ? (
              <h2 className='text-3xl font-semibold text-slate-900 md:text-4xl'>
                {heading}
              </h2>
            ) : null}
            {description ? (
              <p className='text-sm leading-relaxed text-slate-600 md:text-base'>
                {description}
              </p>
            ) : null}
          </header>
        ) : null}

        <div className={`grid grid-cols-1 gap-4 ${columnClassMap[columns]}`}>
          {items.map((item) => (
            <article
              key={item.id}
              style={{
                backgroundColor: item.color,
                color: item.textColor ?? '#ffffff',
              }}
              className='min-h-[240px] rounded-2xl p-6 shadow-sm'
            >
              <h3 className='text-3xl font-semibold'>{item.title}</h3>
              <p className='mt-5 text-lg font-semibold'>Promotes:</p>
              <ul className='mt-3 space-y-2 text-sm leading-relaxed md:text-base'>
                {item.lines.map((line, index) => (
                  <li key={`${item.id}-${index}`} className='flex gap-2'>
                    <span aria-hidden='true'>•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ColorSquaresSection;
