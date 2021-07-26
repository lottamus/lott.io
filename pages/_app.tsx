import withTwindApp from '@twind/next/app';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import withDarkMode from 'next-dark-mode';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';
import { setup } from 'twind';

import SEO from '../next-seo.config';

setup({
  darkMode: 'class',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"
        />

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
          'https://www.linkedin.com/in/chrisnlott',
          'https://instagram.com/chrisnlott',
        ]}
      />

      <Component {...pageProps} />
    </>
  );
}
export default withDarkMode(withTwindApp(MyApp));
