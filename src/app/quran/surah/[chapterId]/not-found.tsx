import React from 'react';
import Link from 'next/link';
import { ArrowIcon } from '@components/icons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data tidak ditemukan',
  description: 'Data tidak ditemukan',
  robots: 'noindex, nofollow',
};

const NotFound = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <h1 className="font-bold text-3xl dark:text-slate-100">
        Data tidak ditemukan
      </h1>
      <Link href={'/quran/surah'}>
        <div className="flex gap-2 p-2 bg-emerald-500 rounded items-center text-white mt-3">
          <ArrowIcon className="h-5" />
          <span>Kembali ke Home</span>
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
