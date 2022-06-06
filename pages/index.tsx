import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { tw } from 'twind';
import { animation } from 'twind/css';

import { Layout } from '../components/Layout';

const bounce = animation('1s ease infinite', {
  'from, 20%, 53%, 80%, to': {
    transform: 'translate3d(0,0,0)',
  },
  '40%, 43%': {
    transform: 'translate3d(0, -30px, 0)',
  },
  '70%': {
    transform: 'translate3d(0, -15px, 0)',
  },
  '90%': {
    transform: 'translate3d(0, -4px, 0)',
  },
});

const Home = () => {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`I love building products. Have an interesting idea? https://lott.io/chat`);
  }, []);

  return (
    <Layout>
      <section
        className={tw`flex flex-col justify-center items-center text-center relative`}
        style={{ height: 'calc(100vh - 80px)' }}
      >
        <h1 className={tw`mb-4 text-5xl font-bold tracking-wide`}>{`Hi, I'm Chris Lott 👋`}</h1>

        <p className={tw`text-gray-500`}>Software Engineer · Product Manager · Entrepreneur</p>
      </section>

      <section id="projects" className={tw`flex flex-col space-y-32`}>
        <a href="#projects" className={tw`text-center flex items-center justify-center`}>
          <h2
            className={tw`text-3xl font-bold tracking-wide text-gray-900 dark:(text-white)`}
          >{`Check out what I'm building`}</h2>
          <div className={tw`text-3xl ${bounce} ml-2`}>⏬</div>
        </a>

        {projects.map((project, index) => (
          <Project key={index} project={project} reverse={index % 2 ? true : false} priority={index === 0} />
        ))}
      </section>

      <section id="chat" className={tw`px-8 flex flex-col items-center justify-center text-center h-[100vh]`}>
        <h3 className={tw`mb-4 text-3xl font-bold tracking-wide`}>I love building products.</h3>

        <p className={tw`text-gray-500 whitespace-nowrap`}>
          {'Have an exciting idea? '}
          <Link href="/chat" passHref>
            <a
              className={tw`border-b hover:(text-gray-700 dark:text-gray-300)`}
              data-splitbee-event="chat"
              data-splitbee-event-type="build-products"
            >{`Let's build it!`}</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
};

const Project = React.memo(function Project({
  priority,
  project,
  reverse,
}: {
  project: typeof projects[0];
  reverse?: boolean;
  priority?: boolean;
}) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={tw`text-gray-900 dark:(text-white)`}
      data-splitbee-event="External Link"
      data-splitbee-event-type={project.title}
    >
      <div
        className={tw('flex justify-between flex-wrap md:flex-nowrap md:space-x-32', {
          'flex-row-reverse md:space-x-reverse': reverse,
        })}
      >
        <div className={tw(`w(full md:1/2) rounded overflow-hidden block relative`)}>
          <Image
            src={project.image}
            alt={project.title}
            layout="responsive"
            objectFit="contain"
            width={50}
            height={50}
            priority={priority}
          />
        </div>

        <div className={tw`flex flex-col justify-around py(8 md:0) md:w-1/2`}>
          <div>
            <h3 className={tw`text-3xl font-bold tracking-wide`}>{project.title}</h3>

            <p className={tw`text-sm text-gray-500`}>{project.href}</p>

            <p className={tw`mt-8`}>{project.description}</p>

            <p className={tw`mt-2 text-sm text-gray-500`}>{project.roles}</p>
          </div>
        </div>
      </div>
    </a>
  );
});

const projects = [
  {
    title: 'Stoplight',
    description:
      'Built with the modern API workflow in mind, Stoplight brings an intuitive interface and thoughtful features to power your complete API design lifecycle.',
    image: '/stoplight.png',
    href: 'https://stoplight.io',
    roles: 'Product Manager · Engineer',
  },
  {
    title: 'Swing',
    description:
      'Swing is a decentralized multi-chain liquidity protocol aggregating trade volume across decentralized exchanges on multiple blockchains. It eliminates trusted intermediaries allowing for fast, efficient trading.',
    image: '/swing.webp',
    href: 'https://swing.xyz',
    roles: 'Advisor · Engineer',
  },
  {
    title: 'Forecastr',
    description:
      'Forecastr is a tool that helps founders forecast revenue, predict runway, understand their numbers & get funded.',
    image: '/forecastr.png',
    href: 'https://www.forecastr.co',
    roles: 'Advisor · Engineer',
  },
  {
    title: 'TextRebates',
    description:
      'TextRebates makes it easy to capture customer attention and drives sales in liquor and grocery stores through text-based rebates',
    image: '/textrebates.png',
    href: 'https://textrebates.com',
    roles: 'Advisor · Engineer',
  },
  {
    title: 'Authmoji',
    description:
      'Authmoji delivers a robust API and app that helps you verify users and future proof your business with two-factor security (2FA).',
    image: '/authmoji.png',
    href: 'https://authmoji.com',
    roles: 'Co-founder · Engineer',
  },
  {
    title: 'GiftEquation',
    description:
      'GiftEquation makes gift giving easy by curating lists of the best viral products from across the web.',
    image: '/giftequation.png',
    href: 'https://giftequation.com',
    roles: 'Co-founder  · Engineer',
  },
  {
    title: 'ShipWorthy',
    description:
      'ShipWorthy designs and develops elegant software applications, APIs, and services. Our mission is to build SaaS at Sea™.',
    image: '/shipworthy.png',
    href: 'https://shipworthy.io',
    roles: 'Co-founder · Engineer',
  },
];

export default Home;
