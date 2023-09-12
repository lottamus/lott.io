import OpengraphImage from "components/OpengraphImage";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

// eslint-disable-next-line @typescript-eslint/require-await
export default async function Image() {
  return await OpengraphImage({
    contents: (
      <>
        <div tw="text-white mr-5">Schedule a</div>
        <div
          tw="text-transparent"
          style={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            backgroundImage: "linear-gradient(90deg, #6b21a8, #3b82f6)",
          }}
        >
          Meeting
        </div>
      </>
    ),
  });
}
