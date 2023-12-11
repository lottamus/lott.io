import { Tweet } from "react-tweet";

import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";

import { cn } from "utils/classNames";

const CustomLink = ({
  href,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href?: string;
}) => {
  if (href?.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href?.startsWith("#")) {
    return <a href={href} {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...props} />;
};

const CustomImage = ({
  alt,
  className,
  src,
  ...props
}: React.ComponentPropsWithoutRef<typeof Image>) => {
  return (
    <div
      className={cn(
        "relative mb-6 h-[400px] overflow-hidden rounded-lg",
        className,
      )}
    >
      <Image
        className="rounded-lg object-cover"
        {...props}
        src={src}
        alt={alt}
        fill
      />
    </div>
  );
};

const CustomTweet = (props: React.ComponentPropsWithoutRef<typeof Tweet>) => {
  return <Tweet {...props} />;
};

const components: MDXComponents = {
  a: CustomLink,
  Image: CustomImage,
  Tweet: CustomTweet,
};

interface MdxProps {
  code: string;
}

export function MDX({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
