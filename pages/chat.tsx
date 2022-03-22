import { NextSeo } from 'next-seo';
import * as React from 'react';
import { tw } from 'twind';

import { Layout } from '../components/Layout';

const Chat = () => (
  <Layout>
    <NextSeo title="Schedule a meeting" description="Schedule a time on my calendar and let's chat!" />

    <section className={tw`h-[100vh] pt-40 flex flex-col`}>
      <h1 className={tw`text-center text-3xl font-bold tracking-wide`}>{`Let's chat! 🗓️`}</h1>

      <div className={tw`pt-20 flex-1`}>
        <iframe
          src="https://app.cal.com/chrislott/30min"
          frameBorder="0"
          allowFullScreen
          height="100%"
          width="100%"
        ></iframe>
      </div>
    </section>
  </Layout>
);

export default Chat;
