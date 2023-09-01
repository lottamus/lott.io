import { Tweet } from "react-tweet";

import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";

const components: MDXComponents = {
  a: ({ children, href }) => <Link href={href!}>{children}</Link>,
  Tweet,
};

interface MdxProps {
  code: string;
}

export function MDX({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
