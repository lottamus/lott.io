import "styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import { Metadata } from "next/types";
import { fontHeading, fontSans } from "styles/fonts";

import { Analytics } from "components/Analytics";
import { Header } from "components/Header";
import { ThemeProvider } from "components/ThemeProvider";

config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL("https://lott.io"),
  title: { default: "Chris Lott", template: "%s | Chris Lott" },
  description:
    "Designing and developing software in Austin, Texas. Have an app idea? Let's build it!",
  creator: "Chris Lott",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    url: "/",
    images: [
      {
        url: "/lott.eth.png",
        width: 1380,
        height: 470,
        alt: "Lott.eth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Lott",
    description:
      "Designing and developing software in Austin, Texas. Have an app idea? Let's build it!",
    creator: "@chrisnlott",
    site: "@chrisnlott",
  },
  robots: {
    index: process.env.VERCEL_ENV === "production",
    follow: process.env.VERCEL_ENV === "production",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body
        className={`antialiased min-h-screen font-sans ${fontHeading.variable} ${fontSans.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Header />

          <main className="container max-w-6xl px-8 mx-auto mt-16 sm:px-16">
            {children}
          </main>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
