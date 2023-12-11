"use client";

import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

export function NewsletterSignupButton() {
  const { pending } = useFormStatus();
  const [isAdded, setIsAdded] = useState(false);
  const isDisabled = pending || isAdded;

  useEffect(() => {
    // This is a hack, because I'm too lazy to setup useFormState
    // https://react.dev/reference/react-dom/hooks/useFormState
    if (pending) {
      setIsAdded(true);
    }
  }, [pending]);

  return (
    <button
      type="submit"
      className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      disabled={isDisabled}
      aria-disabled={isDisabled}
    >
      {isAdded ? "Added!" : "Notify me"}
    </button>
  );
}
