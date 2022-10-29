import '@fortawesome/fontawesome-svg-core/styles.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import withTwindApp from '@twind/next/app';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';

import { ThemeProvider } from '../context/theme';
import SEO from '../next-seo.config';
import twindConfig from '../twind.config';

config.autoAddCss = false;

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

      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default withTwindApp(twindConfig, MyApp);
