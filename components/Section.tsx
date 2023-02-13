import { tw } from 'twind';

export function Section({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <section aria-labelledby={title}>
      <div className={tw('grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4 mx-auto')}>
        <h2 id={title} className={tw('text-sm font-semibold text-gray-800 dark:text-gray-100')}>
          {title}
        </h2>
        <div className={tw('md:col-span-3')}>{children}</div>
      </div>
    </section>
  );
}
