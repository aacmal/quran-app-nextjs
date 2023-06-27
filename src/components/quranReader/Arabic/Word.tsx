'use client';

import classNames from 'classnames/bind';
import React from 'react';
import { shallow } from 'zustand/shallow';
import styles from './Word.module.css';
import useQuranReader from '@stores/quranReaderStore';
import useSettings from '@stores/settingsStore';

const cx = classNames.bind(styles);

type WordProps = {
  position?: number;
  verseKey?: string;
  transalation: string;
  transliteration: string;
  location: string;
  children: React.ReactNode;
  isHighlighted: boolean;
  isAyahNumber: boolean;
};

const Word = ({
  position,
  verseKey,
  transalation,
  transliteration,
  location,
  children,
  isHighlighted,
  isAyahNumber,
}: WordProps) => {
  const { highlightedWord } = useQuranReader(
    (state) => ({
      highlightedWord: state.highlightedWord,
    }),
    shallow
  );

  const { transliteration: shouldShowTransliteration, translationMode } =
    useSettings(
      (state) => ({
        transliteration: state.transliteration,
        translationMode: state.translationMode,
      }),
      shallow
    );

  return (
    <div className="inline-block align-middle text-center">
      <div
        className={cx(
          {
            '!text-emerald-500 !dark:text-emerald-500':
              highlightedWord === location || isHighlighted,
          },
          {
            highlighted: highlightedWord === location || isHighlighted,
          },
          {
            'mx-1 lg:mx:2': shouldShowTransliteration,
          },
          {
            'p-2 border border-slate-400 dark:border-slate-500 rounded-lg mx-1 lg:mx-2':
              translationMode === 'word' && !isAyahNumber,
          },
          'ml-2'
        )}
      >
        <span data-word={location}>{children}</span>
        {shouldShowTransliteration && (
          <span className="text-sm lg:text-base italic block ">
            {transliteration}
          </span>
        )}
      </div>
      {/* dont show Ayah number */}
      {translationMode === 'word' && !isAyahNumber && (
        <span className="text-base md:text-xl mx-2 mt-1 mb-3 block">
          {transalation}
        </span>
      )}
    </div>
  );
};

export default Word;
