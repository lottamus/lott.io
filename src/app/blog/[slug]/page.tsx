import { allBlogs } from "contentlayer/generated";
import dayjs from "dayjs";
import { Metadata } from "next";
import { ArticleJsonLd } from "next-seo";
import { notFound } from "next/navigation";

import { Heading } from "components/Heading";
import { MDX } from "components/MDX";
import { getPostBySlug } from "utils/getPostFromParams";

interface PostProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: PostProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: post.slug,
    },
    openGraph: {
      title: post.title,
      url: post.slug,
      description: post.description,
    },
  };
}

export function generateStaticParams(): PostProps["params"][] {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: PostProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <ArticleJsonLd
        type="BlogPosting"
        url={`https://lott.io/blog/${post.slug}`}
        title={post.title}
        description={post.description}
        images={[`https://lott.io/blog/${post.slug}/opengraph-image.png`]}
        authorName={{
          type: "Person",
          name: "Chris Lott",
          url: "https://lott.io",
        }}
        dateModified={post.date}
        datePublished={post.date}
        isAccessibleForFree
        useAppDir
      />

      <article>
        <header className="flex flex-col">
          <Heading>{post.title}</Heading>
          <time
            dateTime={post.date}
            className="order-first mb-4 flex items-center text-sm text-muted-foreground"
          >
            <span className="h-4 w-0.5 rounded-full bg-muted-foreground" />
            <span className="ml-3">
              {dayjs(post.date).add(5, "hours").format("MMMM DD, YYYY")}
            </span>
          </time>
        </header>

        <section className="prose py-6 dark:prose-invert">
          <MDX code={post.body.code} />
        </section>
      </article>
    </>
  );
}
