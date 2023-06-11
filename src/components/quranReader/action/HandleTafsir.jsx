"use client";

import React from 'react';
import { TafsirIcon } from '../../icons';
import IconWrapper from '../../icons/IconWrapper';
import useSurah from '../../../store/surahStore';

const HandleTafsir = ({ id }) => {
  const { setTafsirState } = useSurah((state) => ({
    setTafsirState: state.setTafsirState,
  }));

  return (
    <IconWrapper
      aria-label="Lihat tafsir"
      onClick={() =>
        setTafsirState({
          verseId: id,
        })
      }
      className="text-gray-500 dark:hover:text-gray-50"
    >
      <TafsirIcon className="md:h-6 h-5" />
    </IconWrapper>
  );
};

export default HandleTafsir;
