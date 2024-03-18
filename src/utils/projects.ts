import { StaticImageData } from "next/image";
import AuthmojiImg from "public/images/projects/authmoji.png";
import FoodParksImg from "public/images/projects/foodparks.png";
import ForecastrImg from "public/images/projects/forecastr.png";
import GiftEquationImg from "public/images/projects/giftequation.png";
import OzempicImg from "public/images/projects/ozempic.png";
import ScheduleSyncImg from "public/images/projects/schedulesync.png";
import ShipWorthyImg from "public/images/projects/shipworthy.png";
import StoplightImg from "public/images/projects/stoplight.png";
import SwingImg from "public/images/projects/swing.webp";
import TextRebatesImg from "public/images/projects/textrebates.png";

export interface Project {
  title: string;
  description: string;
  image?: StaticImageData;
  href: string;
  roles: string;
}

export const projects: Project[] = [
  {
    title: "ShipWorthy",
    description:
      "ShipWorthy designs and develops elegant software applications, APIs, and services. Our mission is to build SaaS at Sea™.",
    image: ShipWorthyImg,
    href: "https://shipworthy.io",
    roles: "Founder · Engineer",
  },
  {
    title: "Vetline",
    description:
      "Vetline is a AI-powered veterinary assistant that helps veterinarian clinics manage digitals tasks like appointment scheduling, lab results explanations, and more.",
    href: "https://vetline.ai",
    roles: "Founder · Engineer",
  },
  {
    title: "BetterTalent",
    description:
      "BetterTalent helps recruiters and organizations 10x their productivity. Using AI, rapidly scale your inbound/outbound talent process and goals.",
    href: "https://bettertalent.ai",
    roles: "Founder · Engineer",
  },
  {
    title: "FoodParks.io",
    description:
      "FoodParks.io is the go-to place for everything food truck-related. It helps food truck owners find events to book, locations to rent, and food trucks for sale. Landowners and event organizers can list their locations for rent to food trucks.",
    image: FoodParksImg,
    href: "https://www.foodparks.io",
    roles: "Founder · Engineer",
  },
  {
    title: "Ozempic",
    description: `Ozempic is the "weight-loss" solution for oversized images. With a user-friendly interface available to both individuals and professionals, Ozempic offers an efficient solution to reduce image file sizes without compromising on quality.`,
    image: OzempicImg,
    href: "https://www.ozempic.dev",
    roles: "Founder · Engineer",
  },
  {
    title: "ScheduleSync",
    description:
      "Connect your work schedule with your personal & shared calendars. ScheduleSync automatically blocks off time across all of your calendars without sharing event details.",
    image: ScheduleSyncImg,
    href: "https://schedulesync.app",
    roles: "Founder · Engineer",
  },
  {
    title: "Authmoji",
    description:
      "Authmoji delivers a robust API and app that helps you verify users and future proof your business with two-factor security (2FA).",
    image: AuthmojiImg,
    href: "https://authmoji.com",
    roles: "Founder · Engineer",
  },
  {
    title: "GiftEquation",
    description:
      "GiftEquation makes gift giving easy by curating lists of the best viral products from across the web.",
    image: GiftEquationImg,
    href: "https://giftequation.com",
    roles: "Founder · Engineer",
  },
  {
    title: "Swing",
    description:
      "Swing is a decentralized multi-chain liquidity protocol aggregating trade volume across decentralized exchanges on multiple blockchains. It eliminates trusted intermediaries allowing for fast, efficient trading.",
    image: SwingImg,
    href: "https://swing.xyz",
    roles: "Advisor · Architect",
  },
  {
    title: "Forecastr",
    description:
      "Forecastr is a software tool that helps founders forecast revenue, predict runway, understand their numbers & get funded. It is a simple, easy-to-use, expense budgeting tool that allows founders to focus more on building and selling their businesses.",
    image: ForecastrImg,
    href: "https://www.forecastr.co",
    roles: "Advisor · Architect",
  },
  {
    title: "TextRebates",
    description:
      "TextRebates makes it easy to capture customer attention and drives sales in liquor and grocery stores through text-based rebates",
    image: TextRebatesImg,
    href: "https://textrebates.com",
    roles: "Advisor · Engineer",
  },
  {
    title: "Stoplight",
    description:
      "Built with the modern API workflow in mind, Stoplight brings an intuitive interface and thoughtful features to power your complete API design lifecycle.",
    image: StoplightImg,
    href: "https://stoplight.io",
    roles: "Product · Engineer",
  },
];
