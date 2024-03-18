import { Metadata } from "next";
import Link from "next/link";

import { Card } from "components/Card";
import { Footer } from "components/Footer";
import { Heading } from "components/Heading";
import { Section } from "components/Section";
import { cn } from "utils/classNames";

const title = "Tech Stack";
const description =
  "Software tools, applications and products I recommend and use daily.";
const canonical = "/stack";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: canonical,
    type: "website",
    images: [
      {
        url: "/lott.eth.png",
        width: 1380,
        height: 470,
        alt: "lott.eth",
      },
    ],
  },
  alternates: {
    canonical,
  },
};

function ToolsSection({
  children,
  ...props
}: { children: React.ReactNode } & React.ComponentProps<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className={cn("space-y-16")}>
        {children}
      </ul>
    </Section>
  );
}

function Tool({
  children,
  href,
  title,
}: {
  children: React.ReactNode;
  href: string;
  title: string;
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Tools() {
  return (
    <div className="space-y-20">
      <section className="max-w-2xl py-10 text-left sm:pb-32 sm:pt-40">
        <Heading>Tech Stack</Heading>

        <p className="text-sm text-muted-foreground sm:text-base">
          Software tools, applications and products I recommend and use daily.
        </p>
      </section>

      <ToolsSection title="Build">
        <Tool href="https://nextjs.org/" title="Next.js">
          Next.js is a full stack framework built on top of React. I use it in
          almost all of my projects (including this site).
        </Tool>
        <Tool href="https://tailwindcss.com/" title="TailwindCSS">
          TailwindCSS is an open source CSS framework. I use it for styling my
          projects and highly recommend it over using CSS directly.
        </Tool>
        <Tool href="https://ui.shadcn.com/" title="shadcn/ui">
          Shadcn is a highly customizable open source component library
        </Tool>
        <Tool href="https://fontawesome.com/" title="FontAwesome">
          Font Awesome is a font and icon toolkit based on CSS. I have been
          using it since their initial release in 2012.
        </Tool>
        <Tool href="https://www.prisma.io/" title="Prisma">
          Prisma is the best Typescript ORM. I use it to manage PostgreSQL
          database schemas in my projects.
        </Tool>
        <Tool href="https://github.com/egoist/tsup" title="tsup">
          tsup is a TypeScript library bundler with no config, powered by
          esbuild. I use it to bundle all my Typescript projects outside of
          Next.js.
        </Tool>
        <Tool href="https://turbo.build/" title="Turborepo">
          Turborepo is a high-performance build system for JavaScript and
          TypeScript codebases. I use it with all of my monorepo projects.
        </Tool>
        <Tool href="https://yarnpkg.com/" title="Yarn">
          Yarn is a package manager with great built-in caching, plugins, and
          workspaces.
        </Tool>
      </ToolsSection>

      <ToolsSection title="AI">
        <Tool href="https://sdk.vercel.ai/docs" title="Vercel AI SDK">
          The Vercel AI SDK is an open-source library designed to help
          developers build conversational streaming user interfaces
        </Tool>
        <Tool href="https://openai.com/" title="OpenAI">
          OpenAI is one of the leaders in AI research, and their API is
          considered OG. Their SDK is becoming a standard in the AI industry.
        </Tool>
        <Tool href="https://www.langchain.com/" title="LangChain">
          LangChain is a framework for developing applications powered by
          language models. It provides tools and abstractions for working with
          AI models, agents, vector stores, and other data sources for RAG.
        </Tool>
      </ToolsSection>

      <ToolsSection title="Deploy">
        <Tool href="https://vercel.com/" title="Vercel">
          Vercel is a cloud hosting platform designed for Next.js applications.
          Their platform is super easy to use, so I use it for all of my Next.js
          projects.
        </Tool>
        <Tool href="https://www.cloudflare.com/" title="Cloudflare">
          Cloudflare is a webhosting platform. I use it for managing DNS
          records, caching, websocket servers, sending emails, and security for
          all my web projects.
        </Tool>
        <Tool href="https://github.com/" title="Github">
          Github is the go to platform for hosting source code. I use it to host
          the source code for all of my projects.
        </Tool>
        <Tool href="https://neon.tech/" title="Neon">
          Neon is a fully managed Postgres that offers autoscaling, branching,
          and bottomless storage. I use it whenever
          {`I'm`} not using Supabase.
        </Tool>
        <Tool href="https://upstash.com/" title="Upstash">
          Upstash is a hosted platform with databases and messaging services
          that are optimized for serverless integrations.
        </Tool>
      </ToolsSection>

      <ToolsSection title="Quality">
        <Tool href="https://sentry.io/" title="Sentry">
          Sentry is the best tool for error reporting and application
          performance monitoring. I set it up for all my projects, so I can find
          and fix bugs before my users can report them.
        </Tool>
        <Tool href="https://axiom.co/" title="Axiom">
          Axiom is a logging platform that I use to monitor and analyze logs
          from my projects. They have an easy integration with Vercel that comes
          with a great default dashboard.
        </Tool>
        <Tool href="https://www.typescriptlang.org/docs/" title="Typescript">
          TypeScript is a strongly typed programming language that builds on
          JavaScript. I highly recommend it over using JavaScript directly.
        </Tool>
        <Tool href="https://eslint.org/" title="ESLint">
          ESLint is a static code analysis tool for identifying problematic
          patterns found in code. I use it in combination with Prettier to make
          sure my code is consistent.
        </Tool>
        <Tool href="https://prettier.io/" title="Prettier">
          Prettier is an opinionated code formatter that keeps my code looking
          consistent across all projects I work on. Formatted code makes it
          easier to review.
        </Tool>
        <Tool href="https://checklyhq.com" title="Checkly">
          Checkly is a hosted services for running e2e tests, built on
          Playwright. They have a simple integration into Vercel that I use to
          run pre-production smoke tests.
        </Tool>
        <Tool href="https://playwright.dev/" title="Playwright">
          Playwright is the most reliable tool for writing and executing
          end-to-end tests.
        </Tool>
      </ToolsSection>

      <ToolsSection title="Apps">
        <Tool href="https://code.visualstudio.com" title="Visual Studio Code">
          VSCode is an open source code editor, with built in debugging, syntax
          highlighting, code completion, etc. I have it open every day and use
          it to write code for all of my projects and for note taking.
        </Tool>
        <Tool href="https://cal.com/" title="Cal.com">
          Cal.com is a calendar scheduleing application. I use it to allow
          anyone to <Link href="/chat">schedule time on my calendar</Link>.
        </Tool>
        <Tool href="https://www.git-tower.com/mac" title="Tower">
          Tower is a Git client for macOS. I highly recommend using it over
          using Git from the command line directly.
        </Tool>
        <Tool href="https://tableplus.com/" title="TablePlus">
          TablePlus is a database client for macOS. I use to visualize my
          PostgreSQL databases and run one-off SQL queries.
        </Tool>
        <Tool href="https://www.figma.com/" title="Figma">
          Figma is a user interface (UI) design tool. I use it to design
          applications & marketing sites before writing any of the frontend
          code.
        </Tool>
        <Tool href="https://stoplight.io/studio" title="Stoplight Studio">
          Stoplight Studio is an API design tool. I use it to design and mock
          APIs before writing any of the backend code.
        </Tool>
        <Tool href="https://linear.app/" title="Linear">
          Linear is the best tool for project management. I use it to manage
          roadmaps and development tasks for my projects. It keeps me honest and
          on track.
        </Tool>
        <Tool href="https://stripe.com/" title="Stripe">
          Stripe is a suite of APIs for payment processing. I use it in all my
          projects that offer a subscription product.
        </Tool>
        <Tool href="https://slack.com/" title="Slack">
          Slack is an instant messaging application. I use it to collaborate
          with others on projects.
        </Tool>
      </ToolsSection>

      <ToolsSection title="Hardware">
        <Tool
          href="https://www.apple.com/macbook-pro-14-and-16/"
          title="16” MacBook Pro M1 Max"
        >
          I live on this machine day and night. It has 64GB RAM which is more
          performance than I actually need, but I love it.
        </Tool>
        <Tool
          href="https://www.apple.com/shop/product/HMUA2VC/A/lg-ultrafine-4k-display"
          title="LG UltraFine 4K Display"
        >
          I stare at my LG monitor during the day. It has so many pixels, which
          makes it great for frontend development.
        </Tool>
        <Tool
          href="https://www.apple.com/shop/product/MK2D3AM/A/magic-trackpad-white-multi-touch-surface"
          title="Apple Magic Trackpad"
        >
          I use the Apple Magic Trackpad when I am connected to my monitor. It
          is basically an extension of the laptop trackpad.
        </Tool>
        <Tool
          href="https://www.apple.com/airpods-pro/"
          title="Apple AirPods Pro 2"
        >
          These are my main headphones for taking calls and working out. The
          noise cancelling on these are amazing.
        </Tool>
        <Tool
          href="https://www.apple.com/airpods-max/"
          title="Apple AirPods Max"
        >
          I wear these headphones for most hours of the day (8+ hours). They are
          super comfortable and sound great. I now own 2 pairs after my first
          pair wore out.
        </Tool>
        <Tool
          href="https://smrtft.com/products/nuobell-80lb"
          title="NÜOBELL Dumbells"
        >
          NÜOBELL are a pair of adjustable 80lb dumbbells. This is how I really
          make gains 💪
        </Tool>
      </ToolsSection>

      <Footer
        title="I love building products"
        description="Something missing from my stack?"
        cta="Let’s chat!"
      />
    </div>
  );
}
