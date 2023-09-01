import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { NewsletterSignup } from "components/NewsletterSignup";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative pb-40 mt-20 md:mt-40">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/blog"
          aria-label="Go back to articles"
          className="mb-8 flex h-10 w-10 items-center justify-center rounded-full lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 text-muted-foreground hover:text-foreground"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
        </Link>

        {children}

        <NewsletterSignup className="mt-10" />
      </div>
    </div>
  );
}
