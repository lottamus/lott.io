import withTwindApp from "@twind/next/app";
import type { AppProps } from "next/app";
import Head from "next/head";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";

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
      </Head>

      <DefaultSeo {...SEO} />

      <Component {...pageProps} />
    </>
  );
}
export default withTwindApp(MyApp);
