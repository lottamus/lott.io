import { cn } from "utils/classNames";

export function Section({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <section aria-labelledby={title} className={className}>
      <div
        className={cn(
          "grid items-baseline max-w-3xl grid-cols-1 mx-auto sm:max-w-5xl gap-y-8 md:grid-cols-4",
        )}
      >
        <h2 id={title} className={cn("text-sm font-semibold")}>
          {title}
        </h2>
        <div className={cn("md:col-span-3")}>{children}</div>
      </div>
    </section>
  );
}
