import { Metadata } from 'next';
import React from 'react';

type Props = {};

export const metadata: Metadata = {
  title: '~ Anda sedang offline',
  robots: 'noindex,nofollow',
};

const OfflineFallback = (props: Props) => {
  return (
    <main className="min-h-screen grid place-items-center">
      <div className="bg-emerald-500 px-4 py-6 w-4/5 rounded-lg max-w-screen-md text-center text-emerald-50 font-semibold shadow-xl shadow-emerald-600/30">
        <strong className="text-2xl block mb-2">Anda sedang offline</strong>
        <span>Silakan cek koneksi internet Anda.</span>
      </div>
    </main>
  );
};

export default OfflineFallback;
