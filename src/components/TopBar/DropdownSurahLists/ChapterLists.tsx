import classNames from 'classnames';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Chapter } from '@utils/types/Chapter';

type ChapterListsProps = {
  chapterLists: Chapter[];
  chapterActive: number;
};

const ChapterLists = ({ chapterLists, chapterActive }: ChapterListsProps) => {
  const router = useRouter();

  return (
    <ul
      className={classNames(
        'p-2 pl-1 w-44 round h-72 overflow-auto scrollbar-hide'
      )}
    >
      {chapterLists?.map((e) => (
        <li
          key={e.id}
          onClick={() => router.push(`/quran/surah/${e.id}`)}
          className={classNames(
            'px-2 py-1 cursor-pointer hover:bg-emerald-100/50 dark:hover:bg-emerald-400/30 dark:hover:text-slate-100 hover:text-emerald-500 rounded flex items-center',
            { 'dark:bg-emerald-400 bg-emerald-200': chapterActive == e.id }
          )}
        >
          <span className="w-6 text-right block text-xs text-emerald-500 dark:text-emerald-600 font-bold mr-2">
            {e.id}
          </span>
          <span className="block">{e.name_simple}</span>
        </li>
      ))}
    </ul>
  );
};

export default ChapterLists;
