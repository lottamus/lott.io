"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "utils/classNames";

export function HeaderLink({ href, title }: { href: string; title: string }) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <li className={cn("hidden sm:ml-6 sm:block")}>
      <Link
        href={href}
        data-splitbee-event="header-link"
        data-splitbee-event-type={title.toLowerCase()}
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
