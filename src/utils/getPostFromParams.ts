import { allBlogs } from "contentlayer/generated";

export function getPostBySlug(slug: string) {
  const post = allBlogs.find((post) => post.slug === slug);

  if (!post) {
    return null;
  }

  return post;
}
