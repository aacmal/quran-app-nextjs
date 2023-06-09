import React from 'react';
import { ArrowIcon } from '../../../../../components/icons';
import {
  getAllChaptersData,
  getChapter,
  getChapterInfo,
} from '../../../../../utils/chapter';
import Link from 'next/link';

// export async function generateStaticParams() {
//   const res = await getAllChaptersData();
//   const paths = res.chapters.map((item) => ({
//     id: item.id.toString(),
//   }));

//   return paths;
// }

export const getChapterInfoData = async (chapterId) => {
  const res = await getChapterInfo(chapterId);
  return res.chapter_info;
};

const SurahInfoPage = async ({ params }) => {
  const { id } = params;
  console.log(id);
  const chapterInfo = await getChapterInfoData(id);
  const chapterData = await getChapter(id);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-emerald-300 dark:from-slate-600 mt-10 lg:mt-16 pt-6 to-emerald-700 dark:to-slate-800 pb-32 px-5">
      <div className='max-w-screen-2xl mx-auto'>
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
