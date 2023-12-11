import { Metadata } from "next";
import Link from "next/link";

import { cn } from "utils/classNames";

export const metadata: Metadata = {
  title: "Not Found",
  description: "You've encountered a glitch in the matrix.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className={cn("flex min-h-screen flex-col pb-12 pt-16")}>
      <main
        className={cn(
          "mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8",
        )}
      >
        <div className={cn("flex flex-shrink-0 justify-center text-6xl")}>
          <Link href="/">🥺</Link>
        </div>
        <div className={cn("py-16")}>
          <div className={cn("text-center")}>
            <p
              className={cn(
                "text-sm font-semibold uppercase tracking-wide text-indigo-600",
              )}
            >
              404
            </p>
            <h1
              className={cn(
                "mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl",
              )}
            >
              Nothing to see here
            </h1>
            <p className="mt-2 text-base text-muted-foreground/80">
              {"You've encountered a glitch in the matrix."}
            </p>
            <div className={cn("mt-6")}>
              <Link
                href="/"
                className={cn(
                  "text-base font-medium text-indigo-600 hover:text-indigo-500",
                )}
              >
                Go back home<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
