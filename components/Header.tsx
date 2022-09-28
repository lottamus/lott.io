import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faComment, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useDarkMode } from 'next-dark-mode';
import React from 'react';
import { tw as className } from 'twind';

import logo from '../public/lott.eth.transparent.png';

export const Header = () => {
  const { autoModeActive, darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode();
  const darkMode = darkModeActive || autoModeActive;

  return (
    <header className={className('inset-x-0 top-0 z-10 bg-gray-100 dark:(bg-black) fixed')}>
      <nav className={className(`container px-4 py-2 mx-auto sm:px-8 md:px-0`)}>
        <ul className={className(`flex items-center w-full h-16`)}>
          <li className={className(`text-center`)}>
            <Link href="/" passHref>
              <a className={className(`relative block w-40 h-16`)} title="lott.eth">
                <Image src={logo} alt="lott.eth" layout="fill" objectFit="contain" priority />
              </a>
            </Link>
          </li>

          <li className={className(`flex-grow`)} />

          <li>
            <a
              className={className(
                'flex items-center justify-center text-2xl text-gray-700 transition-colors duration-150 h-12 w-12 hover:text-gray-900 dark:text-gray-400 dark:(hover:text-gray-100)',
              )}
              href="https://twitter.com/chrisnlott"
              target="_blank"
              rel="noopener noreferrer"
              data-splitbee-event="External Link"
              data-splitbee-event-type="twitter"
              title="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} fixedWidth />
            </a>
          </li>

          <li>
            <a
              className={className(
                'flex items-center justify-center text-2xl text-gray-700 transition-colors duration-150 h-12 w-12 hover:text-gray-900 dark:text-gray-400 dark:(hover:text-gray-100)',
              )}
              href="https://github.com/lottamus"
              target="_blank"
              rel="noopener noreferrer"
              data-splitbee-event="External Link"
              data-splitbee-event-type="github"
              title="Github"
            >
              <FontAwesomeIcon icon={faGithub} fixedWidth />
            </a>
          </li>

          <li>
            <Link href="/chat" data-splitbee-event="Header Link" data-splitbee-event-type="chat" passHref>
              <a
                className={className(
                  'flex items-center justify-center text-2xl text-gray-700 transition-colors duration-150 h-12 w-12 hover:text-gray-900 dark:text-gray-400 dark:(hover:text-gray-100)',
                )}
                title="Chat"
              >
                <FontAwesomeIcon icon={faComment} fixedWidth />
              </a>
            </Link>
          </li>

          <li
            className={className(
              `items-center justify-center hidden w-12 h-12 text-2xl text-yellow-400 cursor-pointer select-none sm:w-12 hover:text-yellow-500 sm:flex`,
            )}
            onClick={darkMode ? switchToLightMode : switchToDarkMode}
            data-splitbee-event="Toggle Mode"
            data-splitbee-event-type={darkMode ? 'light' : 'dark'}
            title="Theme"
          >
            <FontAwesomeIcon icon={darkMode ? faMoon : faSun} fixedWidth />
          </li>
        </ul>
      </nav>
    </header>
  );
};
