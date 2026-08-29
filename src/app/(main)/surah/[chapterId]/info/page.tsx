import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getChapter, getChapterInfo, getLocalChapter } from "@utils/chapter";
import { ArrowIcon } from "@components/icons";
import {
  createMetaDescription,
  createPageMetadata,
  formatRevelationType,
  noIndexRobots,
} from "@utils/seo";

type Props = {
  params: {
    chapterId: string;
  };
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const chapters = await getLocalChapter();
  const paths = chapters.map((item) => ({
    chapterId: item.id.toString(),
  }));

  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const chapterId = Number(params.chapterId);
  if (!Number.isInteger(chapterId) || chapterId < 1) {
    return {
      title: "Informasi surah tidak ditemukan",
      robots: noIndexRobots,
    };
  }

  const [chapterData, chapterInfoResponse] = await Promise.all([
    getChapter(chapterId),
    getChapterInfo(chapterId),
  ]);

  if (!chapterData || !chapterInfoResponse?.chapter_info) {
    return {
      title: "Informasi surah tidak ditemukan",
      robots: noIndexRobots,
    };
  }

  const revelationType = formatRevelationType(chapterData.revelation_place);
  const description = createMetaDescription(
    `Pelajari Surat ${chapterData.name_simple} (${chapterData.translated_name.name}), surat ke-${chapterData.id} yang terdiri dari ${chapterData.verses_count} ayat ${revelationType}. ${chapterInfoResponse.chapter_info.short_text}`
  );

  return createPageMetadata({
    title: `Tentang Surat ${chapterData.name_simple}: Arti, ${chapterData.verses_count} Ayat & ${revelationType}`,
    description,
    path: `/surah/${chapterData.id}/info`,
    type: "article",
  });
}

const SurahInfoPage = async ({ params }: Props) => {
  const id = Number(params.chapterId);
  if (!Number.isInteger(id) || id < 1) {
    notFound();
  }

  const [chapterInfoResponse, chapterData] = await Promise.all([
    getChapterInfo(id),
    getChapter(id),
  ]);
  const chapterInfo = chapterInfoResponse?.chapter_info;

  if (!chapterData || !chapterInfo) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-emerald-300 dark:from-slate-600 mt-12 lg:mt-16 pt-6 to-emerald-700 dark:to-slate-800 pb-32 px-5">
      <div className="max-w-screen-2xl mx-auto selection:bg-slate-100 selection:text-slate-700">
        <Link
          href={`/surah/${id}`}
          className="bg-emerald-100 w-fit font-semibold text-emerald-500 dark:bg-slate-500 px-3 py-2 rounded-md mb-8 flex items-center"
        >
          <ArrowIcon className="h-5 mr-3" />
          <span>Kembali ke surah</span>
        </Link>
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold">
            Tentang Surat {chapterData.name_complex}
          </h1>
          <span>{chapterData.verses_count} Ayah</span>
          <br />
          <span>
            Diturunkan di{" "}
            <span className="capitalize">{chapterData.revelation_place}</span>
          </span>
        </div>
        <hr className="my-5" />
        <section
          className="text-white surah-info"
          dangerouslySetInnerHTML={{ __html: chapterInfo.text }}
        ></section>
      </div>
    </div>
  );
};

export default SurahInfoPage;
