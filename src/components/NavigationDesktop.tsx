import React from "react";

import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import logo from "public/lott.eth.transparent.png";

import { HeaderIcon } from "./HeaderIcon";
import { HeaderLink } from "./HeaderLink";
import { ModeToggle } from "./ModeToggle";

export const NavigationDesktop = () => {
  return (
    <ul className="items-center hidden w-full h-full py-3 md:flex">
      <li className="relative flex-grow w-40 h-full text-center sm:flex-none sm:mr-10">
        <Link href="/" className="relative block h-full" title="lott.eth">
          <Image
            className="object-contain"
            src={logo}
            alt="lott.eth"
            priority
            height={40}
          />
        </Link>
      </li>

      <HeaderLink title="Projects" href="/" />

      <HeaderLink title="Stack" href="/stack" />

      <HeaderLink title="Blog" href="/blog" />

      <HeaderLink title="Chat" href="/chat" />

      <li className="flex-grow" />

      <HeaderIcon title="X" href="https://x.com/chrisnlott" icon={faXTwitter} />

      <HeaderIcon
        title="GitHub"
        href="https://github.com/lottamus"
        icon={faGithub}
      />

      <li>
        <ModeToggle />
      </li>
    </ul>
  );
};
