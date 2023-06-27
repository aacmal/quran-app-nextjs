import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllChaptersData, getChapter, getChapterInfo } from '@utils/chapter';
import { ArrowIcon } from '@components/icons';

export async function generateStaticParams() {
  const res = await getAllChaptersData();
  const paths = res.chapters.map((item) => ({
    chapterId: item.id.toString(),
  }));

  return paths;
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const chapterData = await getChapter(params.chapterId);
  const chapterInfo = await getChapterInfo(params.chapterId);

  if (!chapterData) {
    return;
  }

  return {
    title: `${chapterData.name_simple} ~ `,
    description: `Surah ${chapterData.name_simple} diturunkan di ${chapterData.revelation_place} dengan jumlah ayat ${chapterData.verses_count}. ${chapterInfo.chapter_info.short_text}`,
  };
}

const getChapterInfoData = async (chapterId) => {
  const res = await getChapterInfo(chapterId);
  return res.chapter_info;
};

const SurahInfoPage = async ({ params }) => {
  const { chapterId: id } = params;
  const chapterInfo = await getChapterInfoData(id);
  const chapterData = await getChapter(id);

  if (!chapterData) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-emerald-300 dark:from-slate-600 mt-12 lg:mt-16 pt-6 to-emerald-700 dark:to-slate-800 pb-32 px-5">
      <div className="max-w-screen-2xl mx-auto selection:bg-slate-100 selection:text-slate-700">
        <Link
          href={`/quran/surah/${id}`}
          className="bg-emerald-100 w-fit font-semibold text-emerald-500 dark:bg-slate-500 px-3 py-2 rounded-md mb-8 flex items-center"
        >
          <ArrowIcon className="h-5 mr-3" />
          <span>Kembali ke surah</span>
        </Link>
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold">{chapterData.name_complex}</h1>
          <span>{chapterData.verses_count} Ayah</span>
          <br />
          <span>
            Diturunkan di{' '}
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
