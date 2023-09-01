import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const fontHeading = localFont({
  src: "./CalSans-SemiBold.otf",
  display: "swap",
  variable: "--font-heading",
});

export const fontSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
