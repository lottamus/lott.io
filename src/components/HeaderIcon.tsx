"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "utils/classNames";

export function HeaderIcon({
  className,
  href,
  icon,
  title,
}: {
  className?: string;
  href: string;
  title: string;
  icon: IconProp;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isExternal = href.startsWith("http");

  return (
    <li className={cn(className, "px-1 sm:mx-0")}>
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        data-splitbee-event="header-icon"
        data-splitbee-event-type={title.toLowerCase()}
        className={cn(
          "flex items-center justify-center w-10 h-10 text-2xl transition-colors duration-150 hover:text-foreground",
          {
            "text-foreground": isActive,
            "text-foreground/80": !isActive,
          },
        )}
        title={title}
      >
        <FontAwesomeIcon icon={icon} fixedWidth />
      </Link>
    </li>
  );
}
