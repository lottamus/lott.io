"use client";

import { useEffect, useState } from "react";

import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faComment,
  faNewspaper,
  faTimeline,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "public/lott.eth.transparent.png";

import { Icon } from "./Icon";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./Sheet";

export const NavigationMobile = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <ul className="relative flex h-full items-center md:hidden">
      <li>
        <Logo />
      </li>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <li className="flex flex-1 justify-end">
            <button className="flex items-center justify-center rounded-full">
              <Icon className="h-10 w-10" icon={faBars} fixedWidth />
            </button>
          </li>
        </SheetTrigger>

        <SheetContent className="flex flex-col" position="top" size="full">
          <SheetHeader>
            <div>
              <Logo />
            </div>
          </SheetHeader>

          <ul className="flex-1 space-y-3 overflow-y-auto pl-4 text-xl font-medium">
            <li>
              <Link className="flex h-10 items-center" href="/">
                <Icon className="mr-6" icon={faTimeline} />
                <div>Projects</div>
              </Link>
            </li>

            <li>
              <Link className="flex h-10 items-center" href="/stack">
                <Icon className="mr-6" icon={faTools} fixedWidth />
                Stack
              </Link>
            </li>

            <li>
              <Link className="flex h-10 items-center" href="/blog">
                <Icon className="mr-6" icon={faNewspaper} fixedWidth />
                Blog
              </Link>
            </li>

            <li>
              <Link className="flex h-10 items-center" href="/chat">
                <Icon className="mr-6" icon={faComment} fixedWidth />
                Chat
              </Link>
            </li>

            <hr className="!my-8 bg-muted" />

            <li>
              <Link
                className="flex h-10 items-center"
                href="https://github.com/lottamus"
                target="_blank"
              >
                <Icon className="mr-6" icon={faGithub} fixedWidth />
                Github
              </Link>
            </li>

            <li>
              <Link
                className="flex h-10 items-center"
                href="https://x.com/chrisnlott"
                target="_blank"
              >
                <Icon className="mr-6" icon={faXTwitter} fixedWidth />
                Twitter
              </Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </ul>
  );
};

function Logo() {
  return (
    <Link href="/" className="relative flex h-10 w-40" title="lott.eth">
      <Image className="object-contain" src={logo} alt="lott.eth" priority />
    </Link>
  );
}
