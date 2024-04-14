import React from "react";

import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "next-view-transitions";
import Image from "next/image";
import logo from "public/lott.png";

import { HeaderIcon } from "./HeaderIcon";
import { HeaderLink } from "./HeaderLink";
import { ModeToggle } from "./ModeToggle";

export const NavigationDesktop = () => {
  return (
    <div className="hidden h-full w-full items-center py-3 md:flex md:justify-between">
      <div className="relative h-full flex-1 text-center">
        <Link href="/" title="lott.io">
          <Image
            className="object-contain"
            src={logo}
            alt="lott.io"
            priority
            height={40}
          />
        </Link>
      </div>

      <ul className="flex">
        <HeaderLink title="Projects" href="/" />

        <HeaderLink className="ml-6" title="Stack" href="/stack" />

        <HeaderLink className="ml-6" title="Blog" href="/blog" />

        <HeaderLink className="ml-6" title="Chat" href="/chat" />
      </ul>

      <ul className="flex flex-1 justify-end">
        <HeaderIcon
          className="flex h-10 w-10 items-center justify-center"
          title="X"
          href="https://x.com/chrisnlott"
          icon={faXTwitter}
        />

        <HeaderIcon
          className="flex h-10 w-10 items-center justify-center"
          title="GitHub"
          href="https://github.com/lottamus"
          icon={faGithub}
        />

        <li className="flex h-10 w-10 items-center justify-center">
          <ModeToggle />
        </li>
      </ul>
    </div>
  );
};
