"use client";

import { useEffect } from "react";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Script from "next/script";

export function Analytics() {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(
      `I love building products. Have an interesting idea? https://lott.io/chat`,
    );
  }, []);

  return (
    <>
      <VercelAnalytics />

      {process.env.NODE_ENV === "production" && (
        <Script strategy="lazyOnload" data-api="/_hive" src="/bee.js"></Script>
      )}
    </>
  );
}
