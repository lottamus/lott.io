import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { allBlogs } from "contentlayer/generated";
import dayjs from "dayjs";

import { Card } from "components/Card";
import { Footer } from "components/Footer";
import { Heading } from "components/Heading";

export const metadata = {
  title: "Blog",
  description:
    "Sharing my thoughts, ideas and learnings from my experiences designing products, developing software, growing companies, and more.",
};

function BlogPost({
  children,
  href,
  title,
}: {
  children: React.ReactNode;
  href: string;
  title: string;
}) {
  return (
    <Card as="article">
      <Card.Title
        as="h2"
        href={href}
        data-splitbee-event="tool"
        data-splitbee-href={href}
      >
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>

      <div className="z-10 flex items-center mt-4 text-sm font-medium text-primary">
        Read article
        <FontAwesomeIcon className="w-2 h-2 ml-2" icon={faAngleRight} />
      </div>
    </Card>
  );
}

export default function BlogPage() {
  const posts = allBlogs
    .filter((post) => post.date)
    .sort((a, b) => {
      return dayjs(a.date).isBefore(b.date) ? 1 : -1;
    });

  return (
    <div className="mx-auto space-y-20">
      <section className="max-w-2xl py-10 text-left sm:pt-40 sm:pb-32">
        <Heading>Sharing my thoughts, ideas and learnings</Heading>

        <p className="text-sm text-muted-foreground sm:text-base">
          Writing about my experiences designing products, developing software,
          growing companies, and more.
        </p>
      </section>

      {posts?.length ? (
        posts.map((post) => {
          return (
            <section key={post._id} aria-labelledby={post.title}>
              <div className="grid items-baseline max-w-3xl grid-cols-1 gap-y-6 md:grid-cols-4">
                <time
                  className="text-sm text-muted-foreground"
                  dateTime={post.date}
                >
                  {dayjs(post.date).add(5, "hours").format("MMMM DD, YYYY")}
                </time>

                <div className="md:col-span-3">
                  <BlogPost title={post.title} href={post.slug}>
                    {post.description}
                  </BlogPost>
                </div>
              </div>
            </section>
          );
        })
      ) : (
        <p>No posts published.</p>
      )}

      <Footer
        title="I love building products"
        description="Have an idea for my blog?"
        cta="Let’s chat!"
      />
    </div>
  );
}
