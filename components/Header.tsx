import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faComment, faMoon, faSun, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { tw } from 'twind';

import { useTheme } from '../context/theme';
import logo from '../public/lott.eth.transparent.png';

function HeaderLink({ href, title }: { href: string; title: string }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <li className={tw('hidden sm:block sm:ml-6')}>
      <Link
        href={href}
        data-splitbee-event="Header Link"
        data-splitbee-event-type={title.toLowerCase()}
        className={tw('transition-colors duration-150 hover:text-gray-900 dark:(hover:text-gray-100)', {
          'text-gray-900 dark:text-gray-100': isActive,
          'text-gray-700 dark:text-gray-400': !isActive,
        })}
        title={title}
      >
        {title}
      </Link>
    </li>
  );
}

function HeaderIcon({
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
  const router = useRouter();
  const isActive = router.pathname === href;
  const isExternal = href.startsWith('http');

  return (
    <li className={tw(className, 'px-1 sm:mx-0')}>
      <Link
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        data-splitbee-event={isExternal ? 'External Link' : 'Header Link'}
        data-splitbee-event-type={title.toLowerCase()}
        className={tw(
          'flex items-center justify-center text-2xl transition-colors duration-150 h-8 w-8 sm:h-12 sm:w-12 hover:text-gray-900 dark:(hover:text-gray-100)',
          {
            'text-gray-900 dark:text-gray-100': isActive,
            'text-gray-700 dark:text-gray-400': !isActive,
          },
        )}
        title={title}
      >
        <FontAwesomeIcon icon={icon} fixedWidth />
      </Link>
    </li>
  );
}

export const Header = () => {
  const [theme, switchTheme] = useTheme();

  return (
    <header className={tw('inset-x-0 top-0 z-50 bg-gray-100 dark:(bg-black) fixed')}>
      <nav className={tw(`container px-4 py-2 mx-auto sm:px-8 md:px-0`)}>
        <ul className={tw(`flex items-center w-full h-16`)}>
          <li className={tw(`text-center flex-grow sm:flex-none sm:mr-10`)}>
            <Link href="/" className={tw(`relative block w-40 h-16 flex items-center justify-center`)} title="lott.eth">
              <Image className={tw('object-contain h-full')} src={logo} alt="lott.eth" priority />
            </Link>
          </li>

          <HeaderLink title="Projects" href="/" />

          <HeaderLink title="Tools" href="/tools" />

          <HeaderLink title="Chat" href="/chat" />

          <li className={tw(`flex-grow`)} />

          <HeaderIcon className="sm:hidden" title="Tools" href="/tools" icon={faTools} />

          <HeaderIcon className="sm:hidden" title="Chat" href="/chat" icon={faComment} />

          <HeaderIcon title="Twitter" href="https://twitter.com/chrisnlott" icon={faTwitter} />

          <HeaderIcon title="GitHub" href="https://github.com/lottamus" icon={faGithub} />

          <li
            className={tw(
              `items-center justify-center hidden w-12 h-12 text-2xl text-yellow-400 cursor-pointer select-none sm:w-12 hover:text-yellow-500 sm:flex`,
            )}
            onClick={switchTheme}
            data-splitbee-event="Toggle Mode"
            data-splitbee-event-type={theme === 'dark' ? 'light' : 'dark'}
            title="Theme"
          >
            <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} fixedWidth />
          </li>
        </ul>
      </nav>
    </header>
  );
};
