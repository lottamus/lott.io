import Link from 'next/link';
import { tw } from 'twind';

export function Card({
  as: Component = 'div',
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  as: React.ElementType;
}) {
  return <Component className={tw(className, 'group relative flex flex-col items-start')}>{children}</Component>;
}

Card.Link = function CardLink({
  children,
  ...props
}: { children: React.ReactNode } & React.ComponentProps<typeof Link>) {
  return (
    <>
      <div
        className={tw(
          'absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-gray-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-gray-900 sm:-inset-x-6 sm:rounded-2xl cursor-pointer',
        )}
      />
      <Link {...props}>
        <span className={tw('absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl')} />
        <span className={tw('relative z-10')}>{children}</span>
      </Link>
    </>
  );
};

Card.Title = function CardTitle({
  as: Component = 'h2',
  children,
  href,
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  as: React.ElementType;
}) {
  return (
    <Component className={tw('text-base font-semibold tracking-tight text-gray-800 dark:text-gray-100')}>
      {href ? (
        <Card.Link href={href} target={href.startsWith('http') ? '_blank' : undefined} {...props}>
          {children}
        </Card.Link>
      ) : (
        children
      )}
    </Component>
  );
};

Card.Description = function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className={tw('relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400')}>{children}</p>;
};
