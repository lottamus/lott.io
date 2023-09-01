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
        "mb-4 text-3xl font-bold tracking-wide sm:text-5xl font-heading",
        className,
      )}
    >
      {children}
    </h1>
  );
}
