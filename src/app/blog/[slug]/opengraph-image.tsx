import { notFound } from "next/navigation";

import OpengraphImage from "components/OpengraphImage";
import { getPostBySlug } from "utils/getPostFromParams";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export default async function Image({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return await OpengraphImage({
    contents: (
      <>
        <div
          tw="text-transparent text-[69px] mx-auto w-[80%]"
          style={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            backgroundImage: "linear-gradient(to bottom, #EFEFEF, #D3D3D3)",
          }}
        >
          {post.title}
        </div>
      </>
    ),
  });
}
