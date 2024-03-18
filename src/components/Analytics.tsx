"use client";

import { useEffect } from "react";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

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
    </>
  );
}
