import { allBlogs } from "contentlayer/generated";
import { MetadataRoute } from "next";

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: "https://lott.io",
    lastModified: new Date(),
  },
  {
    url: "https://lott.io/stack",
    lastModified: new Date(),
  },
  {
    url: "https://lott.io/chat",
    lastModified: new Date(),
  },
  {
    url: "https://lott.io/blog",
    lastModified: new Date(),
  },
];

export default function sitemap() {
  const routes: MetadataRoute.Sitemap = [...staticRoutes];

  routes.push(
    ...allBlogs.map((blog) => ({
      url: `https://lott.io/blog/${blog.slug}`,
      lastModified: new Date(blog.date),
    })),
  );

  return routes;
}
