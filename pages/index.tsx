import NextHead from "next/head";
import * as React from "react";
import { tw } from "twind";

const Home = () => (
  <>
    <NextHead>
      <meta charSet="UTF-8" />
      <title>Chris Lott</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </NextHead>

    <main className={tw`h-screen bg-white flex items-center justify-center`}>
      <h1 className={tw`font-bold text(center 5xl)`}>Chris Lott</h1>
    </main>
  </>
);

export default Home;
