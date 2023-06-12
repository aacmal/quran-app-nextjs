import Link from 'next/link';
import React from 'react';

type QuranSwitchProps = {
  active: string;
};

const QuranSwitch = ({ active }: QuranSwitchProps) => {
  return (
    <div className="flex relative w-40 cursor-pointer py-1 items-center">
      <Link
        className={
          'px-2 py-1 w-20 text-center dark:text-gray-50 text-sm rounded-md mr-2 z-10'
        }
        href="/quran/surah"
        replace
      >
        Chapters
      </Link>
      <Link
        className={
          'px-2 py-1 w-20 text-center dark:text-gray-50 text-sm rounded-md z-10'
        }
        href="/quran/juz"
        replace
      >
        Juzs
      </Link>
      <div
        className={`h-full w-20 bg-white dark:bg-slate-600 absolute rounded-md z-0 transition-all ${
          active === 'surah' ? 'left-0' : 'left-1/2'
        }`}
      ></div>
    </div>
  );
};

export default QuranSwitch;
