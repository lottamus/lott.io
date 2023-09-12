import "styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import { Metadata } from "next/types";
import { fontHeading, fontSans } from "styles/fonts";

import { Analytics } from "components/Analytics";
import { Header } from "components/Header";
import { ThemeProvider } from "components/ThemeProvider";

config.autoAddCss = false;

const title = "Chris Lott";
const description =
  "Designing and developing software in Austin, Texas. Have an app idea? Let's build it!";
const canonical = "/";

export const metadata: Metadata = {
  metadataBase: new URL("https://lott.io"),
  title: { default: title, template: "%s | Chris Lott" },
  description,
  creator: "Chris Lott",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#030711" },
  ],
  openGraph: {
    title,
    description,
    type: "website",
    url: canonical,
    images: [
      {
        url: "/lott.eth.png",
        width: 1380,
        height: 470,
        alt: "lott.eth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@chrisnlott",
    site: "@chrisnlott",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical,
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
