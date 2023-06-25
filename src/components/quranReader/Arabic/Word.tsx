'use client';

import classNames from 'classnames/bind';
import React from 'react';
import { shallow } from 'zustand/shallow';
import styles from './Word.module.css';
import useQuranReader from '@stores/quranReaderStore';

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

  return (
    <span
      className={cx(
        {
          '!text-emerald-500 !dark:text-emerald-500':
            highlightedWord === location || isHighlighted,
        },
        {
          highlighted: highlightedWord === location || isHighlighted,
        }
      )}
      data-word={location}
    >
      {children}{' '}
    </span>
  );
};

export default Word;
