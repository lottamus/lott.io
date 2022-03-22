import withTwindApp from '@twind/next/app';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import withDarkMode, { MODE } from 'next-dark-mode';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';

import SEO from '../next-seo.config';
import twindConfig from '../twind.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        <link rel="shortcut icon" href="/favicon.ico" />

        {process.env.NODE_ENV === 'production' && <script async data-api="/_hive" src="/bee.js"></script>}
      </Head>

      <DefaultSeo {...SEO} />

      <SocialProfileJsonLd
        type="Person"
        name="Chris Lott"
        url="https://lott.io"
        sameAs={[
          'https://twitter/chrisnlott',
          'https://github.com/lottamus',
          'https://linkedin.com/in/chrisnlott',
          'https://instagram.com/chrisnlott',
        ]}
      />

      <Component {...pageProps} />
    </>
  );
}

export default withDarkMode(withTwindApp(twindConfig, MyApp), { defaultMode: MODE.DARK });
