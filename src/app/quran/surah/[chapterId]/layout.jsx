import React from 'react';
import TopBar from '../../../../components/TopBar/TopBar';
import TafsirModal from '../../../../components/Tafsir/Tafsir';

const SurahLayout = ({ children }) => {
  return (
    <>
      <TopBar />
      {children}
      <TafsirModal />
    </>
  );
};

export default SurahLayout;
