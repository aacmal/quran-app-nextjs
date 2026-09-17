import Chapters from "@components/chapters";
import { getAllChaptersData } from "@utils/chapter";
import { createPageMetadata, staticDescription, staticTitle } from "@utils/seo";
import { Metadata } from "next";

async function getChapterData() {
  const res = await getAllChaptersData();
  return res.chapters;
}

export const metadata: Metadata = createPageMetadata({
  title: staticTitle["/"],
  description: staticDescription["/"],
  path: "/",
  absoluteTitle: `${staticTitle["/"]} | Laman Ayat`,
});

export default async function HomePage() {
  const allChapters = await getChapterData();
  return <Chapters chapterLists={allChapters} />;
}
