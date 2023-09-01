import Link from "next/link";

import { cn } from "utils/classNames";

export default function NotFound() {
  return (
    <div className={cn("flex flex-col min-h-screen pt-16 pb-12")}>
      <main
        className={cn(
          "flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
        )}
      >
        <div className={cn("flex justify-center flex-shrink-0 text-6xl")}>
          <Link href="/">🥺</Link>
        </div>
        <div className={cn("py-16")}>
          <div className={cn("text-center")}>
            <p
              className={cn(
                "text-sm font-semibold tracking-wide text-indigo-600 uppercase",
              )}
            >
              404
            </p>
            <h1
              className={cn(
                "mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl",
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
