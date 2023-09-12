import { ImageResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/require-await
export default async function OpengraphImage({
  contents,
  size = {
    width: 1200,
    height: 630,
  },
}: {
  contents: React.ReactNode;
  size?: { width: number; height: number };
}) {
  const calSans = fetch(
    new URL("../styles/CalSans-SemiBold.otf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          backgroundImage: "linear-gradient(to bottom, #030711, #07122c)",
          fontSize: 100,
          letterSpacing: -2,
          lineHeight: 2,
          fontWeight: 700,
          textAlign: "center",
          overflow: "visible",
        }}
      >
        <>{contents}</>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "CalSans",
          data: await calSans,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
