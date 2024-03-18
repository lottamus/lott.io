import { SocialProfileJsonLd } from "next-seo";

import { Footer } from "components/Footer";
import { Heading } from "components/Heading";
import { Project } from "components/Project";
import { projects } from "utils/projects";

export default function Home() {
  return (
    <>
      <section className="flex h-screen flex-col items-center justify-center text-center">
        <div className="pb-44">
          <Heading className="whitespace-nowrap">
            <span className="animate-pulse-once bg-gradient-to-r from-indigo-800 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              {`Hey, I'm Chris Lott`}
            </span>{" "}
            👋
          </Heading>

          <p className="text-balance text-sm text-muted-foreground sm:text-base">
            Building and shipping SaaS at Sea.
          </p>
        </div>

        <a
          href="#projects"
          className="absolute bottom-0 left-0 right-0 flex h-24 items-center justify-center text-center text-xl sm:text-2xl"
        >
          <h2 className="whitespace-nowrap font-heading font-bold tracking-wide">{`Check out what I'm building`}</h2>
          <div className="ml-2 animate-bounce">⏬</div>
        </a>
      </section>

      <section id="projects" className="flex flex-col overflow-x-hidden">
        <div className="relative pt-10 md:pt-40">
          {projects.map((project, index) => (
            <Project
              key={index}
              project={project}
              reverse={index % 2 ? true : false}
              priority={index === 0}
            />
          ))}
        </div>
      </section>

      <Footer
        title="I love building products"
        description="Have an exciting idea?"
        cta="Let's chat!"
      />

      <script type="application/ld+json"></script>

      <SocialProfileJsonLd
        type="Person"
        name="Chris Lott"
        url="https://lott.io"
        sameAs={[
          "https://x.com/chrisnlott",
          "https://github.com/lottamus",
          "https://linkedin.com/in/chrisnlott",
          "https://instagram.com/chrisnlott",
        ]}
        useAppDir
      />
    </>
  );
}
