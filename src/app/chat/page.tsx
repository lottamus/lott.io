import { Metadata } from "next";
import dynamic from "next/dynamic";

import { cn } from "utils/classNames";

// Skip SSR so the theme is picked up correctly
const CalEmbed = dynamic(() => import("components/CalEmbed"), { ssr: false });

export const metadata: Metadata = {
  title: "Schedule a meeting",
  description: "Schedule a time on my calendar and let's chat!",
};

export default function Chat() {
  return (
    <section className={cn("min-h-screen py-10 sm:py-40")}>
      <CalEmbed />
    </section>
  );
}
