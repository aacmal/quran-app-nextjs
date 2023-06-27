'use client';

import classNames from 'classnames';
import React from 'react';
import useSettings from '../../store/settingsStore';
import useSurah from '../../store/surahStore';
import { shallow } from 'zustand/shallow';
import arabicFontStyle from '../../utils/fonts';
import Word from './Arabic/Word';
import { VerseWord } from '@utils/types/Verse';
import useQuranReader from '@stores/quranReaderStore';

type ArabicTextProps = {
  textUthmani: string;
  verseNumber: number;
  verseKey?: string;
  words?: VerseWord[];
  leading?: 'normal' | 'medium' | 'tight';
};

const ArabicText = ({
  textUthmani,
  verseNumber,
  verseKey,
  words,
  leading = 'medium',
}: ArabicTextProps) => {
  const { fontFace, currentFontSize, autoScroll } = useSettings(
    (state) => ({
      fontFace: state.fontFace,
      currentFontSize: state.fontSize,
      autoScroll: state.autoScroll,
    }),
    shallow
  );

  const { highlightedVerse } = useQuranReader(
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
        'text-right dark:text-slate-100 transition-all inline',
        {
          'lg:leading-[120px] leading-[80px]': leading === 'medium',
        },
        {
          'leading-[70px]': leading === 'normal',
        },
        {
          '!text-emerald-500 !dark:text-emerald-500':
            verseKey === highlightedVerse && autoScroll === 'verse',
        }
      )}
    >
      <div
        style={{ fontSize: currentFontSize }}
        className={arabicFontStyle(
          { alQalam: fontFace === 0 },
          { meQuran: fontFace === 1 },
          { nastaleeq: fontFace === 2 },
          { uthmanic: fontFace === 3 },
          'flex flex-wrap'
        )}
      >
        {words
          ? words.map((word) => (
              <Word
                position={word.position}
                location={word.location}
                key={word.id}
                isHighlighted={
                  word.position === words.length.toString() &&
                  verseKey === highlightedVerse
                }
                transliteration={word.transliteration.text}
              >
                {word.text}
              </Word>
            ))
          : textUthmani}
      </div>
      {!(fontFace === 3) && (
        <div
          className={classNames(
            'h-8 w-8 mx-3 inline-block text-xl font-bold text-center rounded-full border',
            {
              'border-emerald-500 !text-emerald-500':
                verseKey === highlightedVerse,
            },
            {
              'border-gray-900 dark:border-white':
                verseKey !== highlightedVerse,
            }
          )}
        >
          {arabicNumber(verseNumber)}
        </div>
      )}
    </div>
  );
};

export default ArabicText;
