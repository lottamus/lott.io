"use client";

import React, { useEffect } from "react";

import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faComment,
  faNewspaper,
  faTimeline,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "public/lott.eth.transparent.png";

import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./Sheet";

export const NavigationMobile = () => {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <ul className="relative flex items-center h-full md:hidden">
      <li>
        <Logo />
      </li>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <li className="flex justify-end flex-1">
            <button className="flex items-center justify-center rounded-full">
              <FontAwesomeIcon className="w-10 h-10" icon={faBars} fixedWidth />
            </button>
          </li>
        </SheetTrigger>

        <SheetContent className="flex flex-col" position="top" size="full">
          <SheetHeader>
            <div>
              <Logo />
            </div>
          </SheetHeader>

          <ul className="flex-1 pl-4 space-y-3 overflow-y-auto text-xl font-medium">
            <li>
              <Link className="flex items-center h-10" href="/">
                <FontAwesomeIcon className="mr-6" icon={faTimeline} />
                <div>Projects</div>
              </Link>
            </li>

            <li>
              <Link className="flex items-center h-10" href="/stack">
                <FontAwesomeIcon className="mr-6" icon={faTools} fixedWidth />
                Stack
              </Link>
            </li>

            <li>
              <Link className="flex items-center h-10" href="/blog">
                <FontAwesomeIcon
                  className="mr-6"
                  icon={faNewspaper}
                  fixedWidth
                />
                Blog
              </Link>
            </li>

            <li>
              <Link className="flex items-center h-10" href="/chat">
                <FontAwesomeIcon className="mr-6" icon={faComment} fixedWidth />
                Chat
              </Link>
            </li>

            <hr className="bg-muted !my-8" />

            <li>
              <Link
                className="flex items-center h-10"
                href="https://github.com/lottamus"
                target="_blank"
              >
                <FontAwesomeIcon className="mr-6" icon={faGithub} fixedWidth />
                Github
              </Link>
            </li>

            <li>
              <Link
                className="flex items-center h-10"
                href="https://x.com/chrisnlott"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="mr-6"
                  icon={faXTwitter}
                  fixedWidth
                />
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
    <Link href="/" className="relative flex w-40 h-10" title="lott.eth">
      <Image className="object-contain" src={logo} alt="lott.eth" priority />
    </Link>
  );
}
