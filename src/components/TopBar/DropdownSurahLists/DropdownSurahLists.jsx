'use client';

import classNames from 'classnames';
import React, { useState, useCallback } from 'react';
import ChapterLists from './ChapterLists';
import IconWrapper from '../../icons/IconWrapper';
import IndexOfChapterLists from './IndexOfChapterLists';
import Link from 'next/link';
import { ChevronIcon, ArrowIcon } from '../../icons';

const DropdownSurahLists = ({ chapterLists, chapterActive }) => {
  const [open, setOpen] = useState(false);
  const [filteredChapterLists, setFilteredChapterLists] = useState(null);

  const handleChange = useCallback((e) => {
    const keyword = e.target.value;

    const result = chapterLists.filter((chapters) => {
      return chapters.name_simple.toLowerCase().includes(keyword.toLowerCase());
    });
    setFilteredChapterLists(() => {
      if (result.length > 0) {
        return result;
      } else {
        return [{ name_simple: 'Tidak ditemukan' }];
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (chapterLists) {
    return (
      <div>
        <div className="flex items-center gap-3">
          <Link aria-label='Kembali ke halaman daftar surah' className='h-10 w-10 grid place-items-center rounded bg-emerald-400 text-white p-2' href="/quran/surah">
            <ArrowIcon className="h-5 w-5" />
          </Link>
          {/* Dropdown Toggle */}
          <div
            onClick={() => setOpen(!open)}
            className={classNames(
              'p-2 cursor-pointer border border-transparent bg-white dark:bg-slate-600 w-fit rounded-md  flex items-center relative',
              {
                'border-emerald-500 shadow-lg shadow-emerald-500/10': open,
              }
            )}
          >
            <button className="font-bold text-sm text-emerald-500">
              {chapterLists[chapterActive-1].name_simple}
            </button>
            <ChevronIcon
              className={classNames(
                'h-5 ml-2 transition-all text-emerald-500 transform',
                { 'rotate-180': open }
              )}
            />
          </div>
        </div>
        {/* Dropdown Menu */}
        <div
          className={classNames(
            'absolute z-50 transition-all flex bg-white dark:bg-slate-700 dark:text-slate-100 rounded-md shadow-lg shadow-emerald-700/20 pt-8',
            { 'visible top-[80px] opacity-100': open },
            { 'invisible top-[60px] opacity-0': !open }
          )}
        >
          <div className="w-full left-0 top-0 px-3 absolute">
            <input
              onChange={(value) => handleChange(value)}
              placeholder="Cari surah"
              className="w-full my-1 py-1 placeholder:text-sm bg-white dark:bg-slate-600 z-50 outline-none border border-emerald-500 rounded-md px-3"
              type="text"
            />
          </div>
          <ChapterLists
            chapterLists={
              filteredChapterLists ? filteredChapterLists : chapterLists
            }
            chapterActive={chapterActive}
          />
          <IndexOfChapterLists
            chapterLists={chapterLists}
            chapterId={chapterActive-1}
          />
        </div>
      </div>
    );
  }
};

export default DropdownSurahLists;
