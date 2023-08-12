'use client';

import React from 'react';
import { PauseIcon, PlayIcon } from '../icons';
import useQuranReader from '@stores/quranReaderStore';

const PlayAudioButton = ({ surahId }: { surahId: string }) => {
  const { setAudioId, audioId } = useQuranReader((state) => ({
    setAudioId: state.setAudioId,
    audioId: state.audioId,
  }));

  return (
    <button
      className="bg-emerald-500 text-slate-50 py-1 px-2 text-sm lg:py-2 lg:px-3 lg:text-base font-bold rounded flex items-center ml-auto"
      onClick={() => setAudioId(parseInt(surahId))}
    >
      <span>Putar Audio</span>{' '}
      {audioId === parseInt(surahId) ? (
        <PauseIcon className="h-5 ml-3" />
      ) : (
        <PlayIcon className="h-5 ml-3" />
      )}
    </button>
  );
};

export default PlayAudioButton;
