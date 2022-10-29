import Link from 'next/link';
import * as React from 'react';
import { tw } from 'twind';
import { animation } from 'twind/css';

import { Layout } from '../components/Layout';
import { Project, projects } from '../components/Project';

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
      <section className={tw`relative flex flex-col items-center justify-center h-screen -mb-32 text-center sm:-mb-20`}>
        <h1
          className={tw`mb-4 text-3xl font-bold tracking-wide sm:text-5xl whitespace-nowrap bg-gradient-to-r from-purple-800 to-blue-500 bg-clip-text`}
          style={{ WebkitTextFillColor: 'transparent' }}
        >{`Hi, I'm Chris Lott 👋`}</h1>

        <p className={tw`text-sm text-gray-400 sm:text-base`}>Software Engineer · Product Manager · Entrepreneur</p>
      </section>

      <section id="projects" className={tw`flex flex-col space-y-32 sm:space-y-72`}>
        <a href="#projects" className={tw`flex items-center justify-center h-16 text-xl text-center sm:text-2xl`}>
          <h2
            className={tw`font-bold tracking-wide text-gray-900 dark:(text-white) whitespace-nowrap`}
          >{`Check out what I'm building`}</h2>
          <div className={tw`ml-2 ${bounce}`}>⏬</div>
        </a>

        {projects.map((project, index) => (
          <Project key={index} project={project} reverse={index % 2 ? true : false} priority={index === 0} />
        ))}
      </section>

      <section id="chat" className={tw`flex flex-col items-center justify-center h-screen px-8 text-center`}>
        <h3 className={tw`mb-4 text-2xl font-bold tracking-wide sm:text-3xl whitespace-nowrap`}>
          I love building products.
        </h3>

        <p className={tw`text-gray-400 text-opacity-80 whitespace-nowrap`}>
          {'Have an exciting idea? '}
          <Link
            href="/chat"
            className={tw`border-b hover:(text-gray-700 dark:text-gray-300)`}
            data-splitbee-event="chat"
            data-splitbee-event-type="build-products"
          >
            {`Let's chat!`}
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default Home;
