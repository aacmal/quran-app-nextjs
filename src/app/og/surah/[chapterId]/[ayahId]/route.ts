import Image from "../../../../(main)/surah/[chapterId]/[ayahId]/opengraph-image";

export const runtime = "edge";

export function GET(
  _request: Request,
  { params }: { params: { chapterId: string; ayahId: string } }
) {
  return Image({ params });
}
