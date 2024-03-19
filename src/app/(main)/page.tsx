import Chapters from "@components/chapters";
import { getAllChaptersData } from "@utils/chapter";
import {
  defaultOpenGraph,
  defaultTwitter,
  staticDescription,
  staticTitle,
} from "@utils/seo";
import { Metadata } from "next";

const IS_PRODUCTION = process.env.NODE_ENV === "production";

async function getChapterData() {
  const res = await getAllChaptersData();
  return res.chapters;
}

export const metadata: Metadata = {
  title: "Baca Quran",
  description: staticDescription["/"],
  robots: IS_PRODUCTION ? "index, follow" : "noindex, nofollow",
  openGraph: {
    ...defaultOpenGraph,
    title: staticTitle["/"],
    description: staticDescription["/"],
    images: "/quranapp.jpg",
  },
  twitter: {
    ...defaultTwitter,
    title: staticTitle["/"],
    description: staticDescription["/"],
    images: "/quranapp.jpg",
  },
};

export default async function HomePage() {
  const allChapters = await getChapterData();
  return <Chapters chapterLists={allChapters} />;
}
