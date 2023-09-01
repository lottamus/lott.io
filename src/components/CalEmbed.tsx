"use client";

import { useEffect } from "react";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useTheme } from "next-themes";

export default function CalEmbed() {
  const { theme } = useTheme();

  useEffect(() => {
    getCalApi()
      .then((calApi) => {
        calApi("ui", {
          theme: (theme ?? "dark") as "light" | "dark",

          styles: {
            body: {
              background: theme === "light" ? "#ffffff" : "#040710",
            },
          },

          cssVarsPerTheme: {
            light: {
              "cal-bg": "rgb(210, 40%, 96.1%)",
              "cal-bg-muted": "hsl(210, 40%, 96.1%)",

              "cal-bg-emphasis": "hsl(210, 40%, 96.1%)",
              "cal-brand": "hsl(248, 83%, 57%)",
              "cal-brand-text": "hsl(210, 40%, 98%)",
            },
            dark: {
              "cal-bg": "hsl(224, 71%, 4%)",
              "cal-bg-muted": "hsl(223, 47%, 11%)",
              "cal-bg-emphasis": "hsl(224, 71%, 4%)",
              "cal-brand": "hsl(210, 40%, 98%)",
              "cal-brand-text": "hsl(223, 47%, 11%)",
            },
          },
        });
      })
      .catch(console.error);
  }, [theme]);

  return (
    <Cal
      embedJsUrl="/cal/embed.js"
      calLink="chrislott/chat"
      config={{
        theme: (theme ?? "dark") as "light" | "dark",
      }}
    />
  );
}
