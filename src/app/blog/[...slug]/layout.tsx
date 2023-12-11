import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { Icon } from "components/Icon";
import { NewsletterSignup } from "components/NewsletterSignup";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mt-20 pb-40 md:mt-40">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/blog"
          aria-label="Go back to articles"
          className="mb-8 flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:text-foreground lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
        >
          <Icon icon={faArrowLeft} className="h-4 w-4" />
        </Link>

        {children}

        <NewsletterSignup className="mt-10" />
      </div>
    </div>
  );
}
