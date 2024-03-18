"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "utils/classNames";

export function HeaderLink({
  className,
  href,
  title,
}: {
  href: string;
  title: string;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <li className={cn("hidden sm:block", className)}>
      <Link
        href={href}
        className={cn(
          "font-medium transition-colors duration-150 hover:text-foreground",
          {
            "text-foreground": isActive,
            "text-foreground/60": !isActive,
          },
        )}
        title={title}
      >
        {title}
      </Link>
    </li>
  );
}
