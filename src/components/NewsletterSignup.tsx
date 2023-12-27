import { track } from "@vercel/analytics/server";

import { cn } from "utils/classNames";

import { NewsletterSignupButton } from "./NewsletterSignupButton";

export const NewsletterSignup = ({ className }: { className?: string }) => {
  const trackNewsletterSignup = async (form: FormData) => {
    "use server";

    const email = form.get("email");
    if (typeof email !== "string") return;

    await track("newsletter-signup", {
      email,
    });
  };

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-3xl bg-gray-900 px-6 py-12 shadow-2xl sm:px-12 xl:py-20",
        className,
      )}
    >
      <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Get notified when I launch something new.
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-muted-foreground">
        Sign up to receive emails from me (once a month).
      </p>
      <form
        className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        action={trackNewsletterSignup}
        data-splitbee-event="newsletter-signup"
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
          placeholder="Enter your email"
          minLength={4}
          required
        />
        <NewsletterSignupButton />
      </form>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient
            id="759c1415-0410-454c-8f7c-9a820de03641"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(512 512) rotate(90) scale(512)"
          >
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};
