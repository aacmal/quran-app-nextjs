import Image from "../../../(main)/surah/[chapterId]/opengraph-image";

export const runtime = "edge";

// A stable URL for explicit metadata; preserve Next.js's generated image URL too.
export function GET(
  _request: Request,
  { params }: { params: { chapterId: string } }
) {
  return Image({ params });
}
