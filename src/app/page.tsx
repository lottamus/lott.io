import { SocialProfileJsonLd } from "next-seo";

import { Footer } from "components/Footer";
import { Heading } from "components/Heading";
import { Project } from "components/Project";
import { projects } from "utils/projects";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <div className="pb-44">
          <Heading className="whitespace-nowrap">
            <span
              className="bg-gradient-to-r from-purple-800 to-blue-500 bg-clip-text animate-pulse-once"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              {`Hi, I'm Chris Lott`}
            </span>{" "}
            👋
          </Heading>

          <p className="text-sm sm:text-base">
            Software Architect · Product Manager · Entrepreneur
          </p>
        </div>

        <a
          href="#projects"
          className="absolute bottom-0 left-0 right-0 flex items-center justify-center h-24 text-xl text-center sm:text-2xl"
        >
          <h2 className="font-bold tracking-wide whitespace-nowrap font-heading">{`Check out what I'm building`}</h2>
          <div className="ml-2 animate-bounce">⏬</div>
        </a>
      </section>

      <section id="projects" className="flex flex-col">
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
