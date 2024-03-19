import dynamic from 'next/dynamic';
import React from 'react';

const SurahLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
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
