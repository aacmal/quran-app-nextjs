'use client';

import classNames from 'classnames';
import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { ChevronIcon, ArrowIcon } from '../../icons';
import { LocalChapter } from 'data/chapter/type';
import { useRouter } from 'next/navigation';
import useHadith from '@stores/hadithStore';
import { getHadithBooks } from '@utils/api/hadith';

type DropdownHadithListsProps = {};

const DropdownHadithLists = ({}: DropdownHadithListsProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { hadithData, setHadithData, hadithActive } = useHadith((state) => ({
    hadithData: state.hadithData,
    setHadithData: state.setHadithData,
    hadithActive: state.hadithActive,
  }));

  useEffect(() => {
    if (hadithData.length > 0) return;

    getHadithBooks().then((res) => {
      setHadithData(res);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (hadithData.length < 1) return <></>;
  const index = hadithData.findIndex((e) => e.id == hadithActive);
  return (
    <div>
      <div className="flex items-center gap-3">
        <Link
          aria-label="Kembali ke halaman daftar surah"
          className="h-10 w-10 grid place-items-center rounded bg-emerald-400 text-white p-2"
          href="/hadits"
        >
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
            {hadithData[index].name}
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
          'absolute z-50 transition-all flex bg-white dark:bg-slate-700 dark:text-slate-100 rounded-md shadow-lg shadow-emerald-700/20',
          { 'visible top-[80px] opacity-100': open },
          { 'invisible top-[60px] opacity-0': !open }
        )}
      >
        <ul
          className={classNames(
            'p-2 pl-1 w-44 round h-72 overflow-auto scrollbar-hide'
          )}
        >
          {hadithData.map((e) => (
            <li
              key={e.id}
              onClick={() => router.push(`hadits/${e.id}`)}
              className={classNames(
                'px-2 py-1 cursor-pointer hover:bg-emerald-100/50 dark:hover:bg-emerald-400/30 dark:hover:text-slate-100 hover:text-emerald-500 rounded flex items-center',
                {
                  'dark:bg-emerald-400 bg-emerald-200':
                    hadithData[index].id == e.id,
                }
              )}
            >
              <span className="block">{e.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownHadithLists;
