'use client';

import React from 'react';
import { TafsirIcon } from '../../icons';
import IconWrapper from '../../icons/IconWrapper';
import useQuranReader from '@stores/quranReaderStore';

type HandleTafsirProps = {
  id: number;
};

const HandleTafsir = ({ id }: HandleTafsirProps) => {
  const { setTafsirState } = useQuranReader((state) => ({
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
