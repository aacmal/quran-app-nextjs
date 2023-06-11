'use client';

import classNames from 'classnames/bind';
import React from 'react';
import useSurah from '../../../store/surahStore';
import { shallow } from 'zustand/shallow';
import styles from './Word.module.css';

const cx = classNames.bind(styles);

const Word = ({
  position,
  verseKey,
  transalation,
  transliteration,
  location,
  children,
  isHighlighted,
}) => {
  const { highlightedWord } = useSurah(
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
