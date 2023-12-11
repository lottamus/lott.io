import { cn } from "utils/classNames";

export function Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "mb-4 font-heading text-3xl font-bold tracking-wide sm:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
