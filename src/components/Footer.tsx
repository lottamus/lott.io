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
      className="flex flex-col items-center justify-center h-screen px-8 text-center"
    >
      <h3 className="mb-4 text-2xl font-bold tracking-wide sm:text-3xl whitespace-nowrap">
        {titleSplit.join(" ")}{" "}
        <span
          className="bg-gradient-to-r from-purple-800 to-blue-500 bg-clip-text animate-pulse-once"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          {keyword}
        </span>
      </h3>

      <p className="text-muted-foreground whitespace-nowrap">
        {description}{" "}
        <Link
          href="/chat"
          className="border-b hover:text-primary"
          data-splitbee-event="chat"
          data-splitbee-event-type="build-products"
        >
          {cta}
        </Link>
      </p>
    </section>
  );
}
