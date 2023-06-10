'use client';

import classNames from 'classnames';
import React from 'react';
import useSettings from '../../store/settingsStore';
import useSurah from '../../store/surahStore';
import { shallow } from 'zustand/shallow';
import arabicFontStyle from '../../utils/fonts';
import Word from './Arabic/Word';

const ArabicText = ({ ayahId, textUthmani, verseNumber, verseKey, words }) => {
  const { fontFace, currentFontSize } = useSettings((state) => ({
    fontFace: state.fontFace,
    currentFontSize: state.fontSize,
  }));

  const { highlightedVerse } = useSurah(
    (state) => ({
      highlightedVerse: state.highlightedVerse,
    }),
    shallow
  );

  const arabicNumber = (value) => {
    const arabicNumbers =
      '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
    return String(value).replace(/[0123456789]/g, (d) => {
      return arabicNumbers[d];
    });
  };

  return (
    <div
      data-verse={verseKey}
      dir="rtl"
      className={classNames(
        'text-right dark:text-slate-100 transition-all lg:leading-[120px] md:leading-[80px] leading-[80px] inline'
        // {
        //   '!text-emerald-500 !dark:text-emerald-500':
        //     verseKey === highlightedVerse,
        // }
      )}
    >
      <span
        style={{ fontSize: currentFontSize }}
        className={arabicFontStyle(
          { alQalam: fontFace === 0 },
          { meQuran: fontFace === 1 },
          { nastaleeq: fontFace === 2 },
          { uthmanic: fontFace === 3 }
        )}
      >
        {words
          ? words.map((word) => (
              <Word
                position={word.position}
                location={word.location}
                key={word.id}
                isHighlighted={(word.position == words.length) && (verseKey === highlightedVerse)}
              >
                {word.text}
              </Word>
            ))
          : textUthmani}
      </span>
      {
        !(fontFace === 3) &&
        <div
          className={classNames(
            'h-8 w-8 mx-3 inline-block text-xl font-bold text-center rounded-full border',
            {
              'border-emerald-500 !text-emerald-500':
                verseKey === highlightedVerse,
            },
            { 'border-gray-900 dark:border-white': verseKey !== highlightedVerse }
          )}
        >
          {arabicNumber(verseNumber)}
        </div>
      }
    </div>
  );
};

export default ArabicText;
