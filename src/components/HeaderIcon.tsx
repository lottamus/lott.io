"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "utils/classNames";

import { Icon, IconProps } from "./Icon";

export function HeaderIcon({
  className,
  href,
  icon,
  title,
}: {
  className?: string;
  href: string;
  title: string;
  icon: IconProps["icon"];
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isExternal = href.startsWith("http");

  return (
    <li className={cn(className)}>
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={cn(
          "flex items-center justify-center text-2xl transition-colors duration-150 hover:text-foreground",
          {
            "text-foreground": isActive,
            "text-foreground/80": !isActive,
          },
        )}
        title={title}
      >
        <Icon className="h-5 w-5" icon={icon} fixedWidth />
      </Link>
    </li>
  );
}
