'use client';

import React from 'react';
import { PlayIcon } from '../icons';
import useQuranReader from '@stores/quranReaderStore';

const PlayAudioButton = ({ surahId }: { surahId: string }) => {
  const { setAudioId } = useQuranReader((state) => ({
    setAudioId: state.setAudioId,
  }));

  return (
    <button
      className="bg-emerald-500 text-slate-50 py-1 px-2 text-sm lg:py-2 lg:px-3 lg:text-base font-bold rounded flex items-center ml-auto"
      onClick={() => setAudioId(parseInt(surahId))}
    >
      Putar Audio <PlayIcon className="h-5 ml-3" />
    </button>
  );
};

export default PlayAudioButton;
