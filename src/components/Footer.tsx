import Link from "next/link";

export function Footer({
  cta,
  description,
  title,
}: {
  title: string;
  description: string;
  cta: string;
}) {
  const titleSplit = title.split(" ");
  const keyword = titleSplit.pop();

  return (
    <section
      id="chat"
      className="flex h-screen flex-col items-center justify-center px-8 text-center"
    >
      <h3 className="mb-4 whitespace-nowrap text-2xl font-bold tracking-wide sm:text-3xl">
        {titleSplit.join(" ")}{" "}
        <span className="animate-pulse-once bg-gradient-to-r from-indigo-800 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          {keyword}
        </span>
      </h3>

      <p className="whitespace-nowrap text-muted-foreground">
        {description}{" "}
        <Link href="/chat" className="border-b hover:text-primary">
          {cta}
        </Link>
      </p>
    </section>
  );
}
