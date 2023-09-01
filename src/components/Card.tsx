import Link from "next/link";

import { cn } from "utils/classNames";

export function Card({
  as: Component = "div",
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  as: React.ElementType;
}) {
  return (
    <Component
      className={cn(className, "relative flex flex-col items-start group")}
    >
      {children}
    </Component>
  );
}

Card.Link = function CardLink({
  children,
  ...props
}: { children: React.ReactNode } & React.ComponentProps<typeof Link>) {
  return (
    <>
      <div
        className={cn(
          "absolute z-0 transition scale-95 opacity-0 cursor-pointer -inset-y-6 -inset-x-4 bg-secondary group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl",
        )}
      />
      <Link {...props}>
        <span
          className={cn(
            "absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl",
          )}
        />
        <span className={cn("relative z-10")}>{children}</span>
      </Link>
    </>
  );
};

Card.Title = function CardTitle({
  as: Component = "h2",
  children,
  href,
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  as: React.ElementType;
}) {
  return (
    <Component className={cn("text-base font-semibold tracking-tight")}>
      {href ? (
        <Card.Link
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          {...props}
        >
          {children}
        </Card.Link>
      ) : (
        children
      )}
    </Component>
  );
};

Card.Description = function CardDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className={cn("relative z-10 mt-2 text-sm text-muted-foreground")}>
      {children}
    </p>
  );
};
