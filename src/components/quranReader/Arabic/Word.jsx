"use client";

import classNames from 'classnames';
import React from 'react';
import useSurah from '../../../store/surahStore';
import { shallow } from 'zustand/shallow';

const Word = ({
  position,
  verseKey,
  transalation,
  transliteration,
  location,
  children,
  isHighlighted,
}) => {
  const { highlightedWord } = useSurah((state) => ({
    highlightedWord: state.highlightedWord,
  }), shallow);

  return (
      <span
        className={classNames({
          '!text-emerald-500 !dark:text-emerald-500':
            (highlightedWord === location) || isHighlighted,
        })}
        data-word={location}
      >
        {children}{' '}
      </span>
  );
};

export default Word;
