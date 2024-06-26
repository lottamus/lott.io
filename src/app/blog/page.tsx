import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { allBlogs } from "contentlayer/generated";
import dayjs from "dayjs";
import { Metadata } from "next";

import { Card } from "components/Card";
import { Footer } from "components/Footer";
import { Heading } from "components/Heading";
import { Icon } from "components/Icon";

const title = "Blog";
const description =
  "Sharing my thoughts, ideas and learnings from my experiences designing products, developing software, growing companies, and more";
const canonical = "/blog";

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
    canonical: canonical,
  },
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
      <Card.Title as="h2" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>

      <div className="z-10 mt-4 flex items-center text-sm font-medium text-primary">
        Read article
        <Icon className="ml-2 h-2 w-2" icon={faAngleRight} />
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
      <section className="max-w-2xl py-10 text-left sm:pb-32 sm:pt-40">
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
              <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-6 md:grid-cols-4">
                <time
                  className="text-sm text-muted-foreground"
                  dateTime={post.date}
                  suppressHydrationWarning
                >
                  {dayjs(post.date).add(5, "hours").format("MMMM DD, YYYY")}
                </time>

                <div className="md:col-span-3">
                  <BlogPost title={post.title} href={`/blog/${post.slug}`}>
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
