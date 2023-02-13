import Link from 'next/link';
import { NextSeo } from 'next-seo';
import * as React from 'react';
import { tw } from 'twind';

import { Card } from '../components/Card';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';

function ToolsSection({ children, ...props }: { children: React.ReactNode } & React.ComponentProps<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className={tw('space-y-16')}>
        {children}
      </ul>
    </Section>
  );
}

function Tool({ children, href, title }: { children: React.ReactNode; href: string; title: string }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

const Tools = () => {
  return (
    <Layout>
      <NextSeo
        title="Software tools & produts I use"
        description="Check out a list of tools and products I use daily."
      />

      <div className={tw('space-y-20')}>
        <section className={tw('py-10 pt-32 sm:pt-64 sm:pb-32 text-center')}>
          <h1 className={tw('mb-4 text-3xl text-gray-900 dark:(text-gray-100) font-bold tracking-wide')}>
            Tools, applications & products
          </h1>

          <p className={tw`text-sm text-gray-900 dark:(text-gray-400) sm:text-base`}>
            Below is a list of some software tools, applications and products I recommend and use daily.
          </p>
        </section>

        <ToolsSection title="Tech Stack">
          <Tool href="https://www.typescriptlang.org/docs/" title="Typescript">
            TypeScript is a strongly typed programming language that builds on JavaScript. I highly recommend it over
            using JavaScript directly.
          </Tool>
          <Tool href="https://nextjs.org/" title="Next.js">
            Next.js is a full stack framework built on top of React. I use it in all of my React projects.
          </Tool>
          <Tool href="https://tailwindcss.com/" title="Tailwind">
            Tailwind is an open source CSS framework. I use it for styling my projects and highly recommend it over
            using CSS directly.
          </Tool>
          <Tool href="https://fontawesome.com/" title="Font Awesome">
            Font Awesome is a font and icon toolkit based on CSS. I have been using it since their initial release in
            2012.
          </Tool>
          <Tool href="https://jotai.org/" title="Jotai">
            Jotai is a primitive and flexible state management for React. It is the state management library I wish
            React had baked into it.
          </Tool>
          <Tool href="https://www.prisma.io/" title="Prisma">
            Prisma is the best Typescript ORM. I use it to manage PostgreSQL databases in my projects.
          </Tool>
          <Tool href="https://sentry.io/" title="Sentry">
            Sentry is the best tool for error reporting and application performance monitoring. I set it up for all my
            projects, so I can find and fix bugs before my users can report them.
          </Tool>
          <Tool href="https://turbo.build/" title="Turborepo">
            Turborepo is a high-performance build system for JavaScript and TypeScript codebases. I use it with all of
            my monorepo projects.
          </Tool>
          <Tool href="https://eslint.org/" title="ESLint">
            ESLint is a static code analysis tool for identifying problematic patterns found in code. I use it in
            combination with Prettier to make sure my code is consistent.
          </Tool>
          <Tool href="https://playwright.dev/" title="Playwright">
            Playwright is the most reliable tool for writing and executing end-to-end tests.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Hosting">
          <Tool href="https://github.com/" title="Github">
            Github is the go to platform for hosting source code. I use it to host the source code for all of my
            projects.
          </Tool>
          <Tool href="https://vercel.com/" title="Vercel">
            Vercel is a cloud hosting platform designed for Next.js applications. Their platform is super easy to use,
            so I use it for all of my Next.js projects.
          </Tool>
          <Tool href="https://supabase.com/" title="Supabase">
            Supabase is an open source platform for managing PostgreSQL databases, auth, and storage.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Development">
          <Tool href="https://code.visualstudio.com" title="Visual Studio Code">
            VSCode is an open source code editor, with built in debugging, syntax highlighting, code completion, etc. I
            have it open every day and use it to write code for all of my projects.
          </Tool>
          <Tool href="https://www.git-tower.com/mac" title="Tower">
            Tower is a Git client for macOS. I highly recommend using it over using Git from the command line directly.
          </Tool>
          <Tool href="https://tableplus.com/" title="TablePlus">
            TablePlus is a database client for macOS. I use to visualize my PostgreSQL databases and run one-off SQL
            queries.
          </Tool>
          <Tool href="https://www.figma.com/" title="Figma">
            Figma is a user interface (UI) design tool. I use it to design applications & marketing sites before writing
            any of the frontend code.
          </Tool>
          <Tool href="https://stoplight.io/studio" title="Stoplight Studio">
            Stoplight Studio is an API design tool. I use it to design and mock APIs before writing any of the backend
            code.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Collaboration">
          <Tool href="https://linear.app/" title="Linear">
            Linear is the best tool for project management. I use it to manage roadmaps and development tasks for all of
            my projects.
          </Tool>
          <Tool href="https://cal.com/" title="Cal.com">
            Cal.com is a calendar scheduleing application. I use it to allow anyone to schedule time on my calendar.
          </Tool>
          <Tool href="https://slack.com/" title="Slack">
            Slack is an instant messaging application. I use it to collaborate with others on projects.
          </Tool>
          <Tool href="https://zoom.us/" title="Zoom">
            Zoom is a video conferencing tool. I use it for all of my remote meetings. If you schedule a meeting with
            me, we will use this to chat.
          </Tool>
          <Tool href="https://chat.openai.com/" title="ChatGPT">
            ChatGPT is an AI chatbot trained by OpenAI. I use it to help me with marketing copy and to learn new things.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Workstation">
          <Tool href="https://www.apple.com/macbook-pro-14-and-16/" title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
            I use a MacBook M1 Pro - 16 for my daily work. It is more performance than I actually need, but I love it.
          </Tool>
          <Tool
            href="https://www.apple.com/shop/product/HMUA2VC/A/lg-ultrafine-4k-display"
            title="LG UltraFine 4K Display"
          >
            I stare at my LG monitor during the day. It has so many pixels, which makes it great for frontend
            development.
          </Tool>
          <Tool
            href="https://www.apple.com/shop/product/MK2D3AM/A/magic-trackpad-white-multi-touch-surface"
            title="Apple Magic Trackpad"
          >
            I use the Apple Magic Trackpad when I am connected to my monitor. It is basically an extension of the laptop
            trackpad.
          </Tool>
          <Tool href="https://www.apple.com/airpods-max/" title="Apple AirPods Max">
            I wear these headphones for most hours of the day (8+ hours). They are super comfortable and sound great. I
            acutally own 2 pairs after my first pair wore out.
          </Tool>
        </ToolsSection>

        <section id="chat" className={tw`flex flex-col items-center justify-center h-screen px-8 text-center`}>
          <h3 className={tw`mb-4 text-xl font-bold tracking-wide whitespace-nowrap`}>
            Something missing from my stack?
          </h3>

          <p className={tw`text-gray-400 text-opacity-80 whitespace-nowrap`}>
            <Link
              href="/chat"
              className={tw`border-b hover:(text-gray-700 dark:text-gray-300)`}
              data-splitbee-event="chat"
              data-splitbee-event-type="build-products"
            >
              {`Let's chat about it!`}
            </Link>
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Tools;
