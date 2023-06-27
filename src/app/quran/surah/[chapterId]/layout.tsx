import TafsirModal from '@components/Tafsir/Tafsir';
import TopBar from '@components/TopBar/TopBar';
import Script from 'next/script';
import React from 'react';

const SurahLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopBar />
      {children}
      <TafsirModal />
      <noscript>
        <div className="text-center pb-4">
          <span className="font-semibold text-lg text-emerald-500">
            Nyalakan JavaScript untuk men-load semua ayah
          </span>
        </div>
      </noscript>
    </>
  );
};

export default SurahLayout;
