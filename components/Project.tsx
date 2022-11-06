import { faCodeMerge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import { tw } from 'twind';

import AuthmojiImg from '../public/authmoji.png';
import ForecastrImg from '../public/forecastr.png';
import GiftEquationImg from '../public/giftequation.png';
import ShipWorthyImg from '../public/shipworthy.png';
import StoplightImg from '../public/stoplight.png';
import SwingImg from '../public/swing.webp';
import TextRebatesImg from '../public/textrebates.png';

const SlideIn = ({ children, className }: { className: string; children: React.ReactNode }) => {
  const { inView, ref } = useInView({
    threshold: 0.5,
    delay: 200,
    triggerOnce: true,
    fallbackInView: true,
  });

  return (
    <div
      ref={ref}
      className={tw('opacity-0 transition-all', className, {
        'opacity-0 -translate-x-8': !inView,
        'opacity-100 translate-0': inView,
      })}
    >
      {children}
    </div>
  );
};

const SlideUp = ({ children, className }: { className?: string; children: React.ReactNode }) => {
  const { inView, ref } = useInView({
    threshold: 0,
    delay: 100,
    triggerOnce: true,
    fallbackInView: true,
  });

  return (
    <div
      ref={ref}
      className={tw('opacity-0 transition-opacity delay-100', className, {
        '-translate-y-8': !inView,
        'opacity-100 translate-0': inView,
      })}
    >
      {children}
    </div>
  );
};

export const Project = React.memo(function Project({
  priority,
  project,
  reverse,
}: {
  project: typeof projects[0];
  reverse?: boolean;
  priority?: boolean;
}) {
  const { inView, ref } = useInView({
    threshold: 0,
    triggerOnce: true,
    fallbackInView: true,
  });

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={tw`text-gray-900 dark:(text-gray-300) flex items-center min-h-screen relative py-72`}
      data-splitbee-event="External Link"
      data-splitbee-event-type={project.title}
      ref={ref}
    >
      <div className={tw('absolute top-0 bottom-0 left-1/2 h-full flex flex-col items-center w-10 -ml-5')}>
        <div
          className={tw(
            'w-1 bg-gradient-to-t from-indigo-800 to-blue-500 transition-transform origin-top duration-500 flex-1 h-full scale-y-0 opacity-0 rounded-b',
            {
              'scale-y-100 opacity-100': inView,
            },
          )}
        />

        <div
          className={tw(
            'ml-5 my-10 rounded-full h-10 w-10 relative flex items-center justify-center transition-opacity duration-300 delay-1000 opacity-0',
            {
              'opacity-100': inView,
            },
          )}
        >
          <FontAwesomeIcon
            className={tw('h-full w-full text-2xl text-indigo-600', {
              'rotate-180 -ml-10': reverse,
            })}
            icon={faCodeMerge}
            fixedWidth
          />

          <div
            className={tw('absolute inset-0 bg-indigo-600', { '-left-5': reverse })}
            style={{ filter: `blur(25px)` }}
          />
        </div>

        <div
          className={tw(
            'w-1 bg-gradient-to-b from-indigo-800 to-blue-500 transition-transform origin-top delay-[1500ms] duration-300 flex-1 h-full scale-y-0 rounded-t',
            {
              'scale-y-100': inView,
            },
          )}
        />
      </div>

      <div
        className={tw('flex flex-wrap justify-between md:flex-nowrap md:space-x-32', {
          'flex-row-reverse md:space-x-reverse': reverse,
        })}
      >
        <div className={tw(`w(full md:1/2) rounded overflow-hidden block relative`)}>
          <SlideUp>
            <Image
              className={tw('w-full object-contain h-auto')}
              src={project.image}
              alt={project.title}
              width={50}
              height={50}
              priority={priority}
              sizes="100vw"
              placeholder="blur"
            />
          </SlideUp>
        </div>

        <div className={tw`flex flex-col justify-around py(8 md:0) md:w-1/2`}>
          <div>
            <SlideIn className="delay-300">
              <h3 className={tw('text-2xl font-bold tracking-wide sm:text-3xl')}>{project.title}</h3>

              <p className={tw('text-sm text-gray-900 dark:(text-gray-400) text-opacity-80 mt-1')}>{project.href}</p>
            </SlideIn>

            <SlideIn className="delay-500">
              <p className={tw`mt-8`}>{project.description}</p>

              <p className={tw`mt-2 text-sm text-gray-900 dark:(text-gray-400) text-opacity-80`}>{project.roles}</p>
            </SlideIn>
          </div>
        </div>
      </div>
    </a>
  );
});

export const projects = [
  {
    title: 'Stoplight',
    description:
      'Built with the modern API workflow in mind, Stoplight brings an intuitive interface and thoughtful features to power your complete API design lifecycle.',
    image: StoplightImg,
    href: 'https://stoplight.io',
    roles: 'Product Manager · Engineer',
  },
  {
    title: 'Swing',
    description:
      'Swing is a decentralized multi-chain liquidity protocol aggregating trade volume across decentralized exchanges on multiple blockchains. It eliminates trusted intermediaries allowing for fast, efficient trading.',
    image: SwingImg,
    href: 'https://swing.xyz',
    roles: 'Advisor · Engineer',
  },
  {
    title: 'Forecastr',
    description:
      'Forecastr is a tool that helps founders forecast revenue, predict runway, understand their numbers & get funded.',
    image: ForecastrImg,
    href: 'https://www.forecastr.co',
    roles: 'Advisor · Engineer',
  },
  {
    title: 'TextRebates',
    description:
      'TextRebates makes it easy to capture customer attention and drives sales in liquor and grocery stores through text-based rebates',
    image: TextRebatesImg,
    href: 'https://textrebates.com',
    roles: 'Advisor · Engineer',
  },
  {
    title: 'Authmoji',
    description:
      'Authmoji delivers a robust API and app that helps you verify users and future proof your business with two-factor security (2FA).',
    image: AuthmojiImg,
    href: 'https://authmoji.com',
    roles: 'Co-founder · Engineer',
  },
  {
    title: 'GiftEquation',
    description:
      'GiftEquation makes gift giving easy by curating lists of the best viral products from across the web.',
    image: GiftEquationImg,
    href: 'https://giftequation.com',
    roles: 'Co-founder  · Engineer',
  },
  {
    title: 'ShipWorthy',
    description:
      'ShipWorthy designs and develops elegant software applications, APIs, and services. Our mission is to build SaaS at Sea™.',
    image: ShipWorthyImg,
    href: 'https://shipworthy.io',
    roles: 'Co-founder · Engineer',
  },
];
