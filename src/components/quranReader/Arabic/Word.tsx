'use client';

import classNames from 'classnames/bind';
import React from 'react';
import { shallow } from 'zustand/shallow';
import styles from './Word.module.css';
import useQuranReader from '@stores/quranReaderStore';
import useSettings from '@stores/settingsStore';

const cx = classNames.bind(styles);

type WordProps = {
  position?: string;
  verseKey?: string;
  transalation?: string;
  transliteration?: string;
  location: string;
  children: React.ReactNode;
  isHighlighted: boolean;
};

const Word = ({
  position,
  verseKey,
  transalation,
  transliteration,
  location,
  children,
  isHighlighted,
}: WordProps) => {
  const { highlightedWord } = useQuranReader(
    (state) => ({
      highlightedWord: state.highlightedWord,
    }),
    shallow
  );

  const { transliteration: shouldShowTransliteration } = useSettings(
    (state) => ({
      transliteration: state.transliteration,
    })
  );

  return (
    <div
      className={cx(
        'text-center inline',
        {
          '!text-emerald-500 !dark:text-emerald-500':
            highlightedWord === location || isHighlighted,
        },
        {
          highlighted: highlightedWord === location || isHighlighted,
        },
        {
          'mx-2': shouldShowTransliteration,
        }
      )}
    >
      <span data-word={location}>{children} </span>
      {shouldShowTransliteration && (
        <span className="text-sm lg:text-base italic block">
          {transliteration}
        </span>
      )}
    </div>
  );
};

export default Word;
