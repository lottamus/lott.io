import Cal from '@calcom/embed-react';
import { NextSeo } from 'next-seo';
import * as React from 'react';
import { tw as className } from 'twind';

import { Layout } from '../components/Layout';
import { useTheme } from '../context/theme';

const Chat = () => {
  const [theme] = useTheme();

  return (
    <Layout>
      <NextSeo title="Schedule a meeting" description="Schedule a time on my calendar and let's chat!" />

      <section className={className('min-h-screen py-10 sm:py-40')}>
        <div className={className('flex-1 pt-20')}>
          <Cal calLink="chrislott/30min" config={{ theme }} />
        </div>
      </section>
    </Layout>
  );
};

export default Chat;
