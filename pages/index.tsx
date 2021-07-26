import Image from 'next/image';
import * as React from 'react';
import { tw } from 'twind';

import { Layout } from '../components/Layout';

const Home = () => (
  <Layout>
    <section className={tw`px-8 py-40 text-center`}>
      <h1 className={tw`mb-4 text-5xl font-bold tracking-wide`}>{`Hi, I'm Chris 👋`}</h1>

      <p className={tw`text-gray-500`}>Software Engineer · Product Manager · Entrepreneur</p>
    </section>

    <section className={tw`py-20`}>
      <div className={tw`flex flex-col space-y-32`}>
        {projects.map((project, index) => (
          <Project key={index} project={project} reverse={index % 2 ? true : false} />
        ))}
      </div>
    </section>
  </Layout>
);

const Project = ({ project, reverse }: { project: typeof projects[0]; reverse?: boolean }) => {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      data-splitbee-event="External Link"
      data-splitbee-event-type={project.title}
    >
      <div
        className={tw('flex justify-between flex-wrap md:flex-nowrap md:space-x-32', {
          'flex-row-reverse md:space-x-reverse': reverse,
        })}
      >
        <div className={tw(`w(full md:1/2) rounded overflow-hidden`)}>
          <Image src={project.image} alt={project.title} layout="responsive" width="500" height="400" />
        </div>

        <div className={tw`flex flex-col justify-around px(8 md:0) py(16 md:0) md:w-1/2`}>
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
};

const projects = [
  {
    title: 'Authmoji',
    description:
      'Authmoji delivers a robust API and app that helps you verify and secure users and future proof your business with two-factor security (2FA).',
    image: '/authmoji.png',
    href: 'https://authmoji.com',
    roles: 'Co-founder · Engineer',
  },
  {
    title: 'Stoplight',
    description:
      'Built with the modern API workflow in mind, Stoplight brings an intuitive interface and thoughtful features to power your complete API design lifecycle.',
    image: '/stoplight.png',
    href: 'https://stoplight.io',
    roles: 'Product Manager  · Engineer',
  },
  {
    title: 'GiftEquation',
    description: 'Curated lists of the best viral products from across the web, GiftEquation makes gift giving easy.',
    image: '/giftequation.png',
    href: 'https://giftequation.com',
    roles: 'Co-founder  · Engineer',
  },
];

export default Home;
