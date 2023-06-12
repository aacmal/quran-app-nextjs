import TafsirModal from '@components/Tafsir/Tafsir';
import TopBar from '@components/TopBar/TopBar';
import React from 'react';

const SurahLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopBar />
      {children}
      <TafsirModal />
    </>
  );
};

export default SurahLayout;
