import { Metadata } from "next";
// import dynamic from "next/dynamic";

import CalEmbed from "components/CalEmbed";
import { cn } from "utils/classNames";

// Skip SSR so the theme is picked up correctly
// const CalEmbed = dynamic(() => import("components/CalEmbed"), { ssr: false });

const title = "Schedule a meeting";
const description = "Book a time on my calendar and let's chat!";
const canonical = "/chat";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: canonical,
    type: "website",
  },
  alternates: {
    canonical,
  },
};

export default function Chat() {
  return (
    <section className={cn("min-h-screen py-10 sm:py-40")}>
      <CalEmbed />
    </section>
  );
}
