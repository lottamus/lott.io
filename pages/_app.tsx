import "../styles/styles.css";
import withTwindApp from "@twind/next/app";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default withTwindApp(MyApp);
