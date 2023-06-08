'use client';

import classNames from 'classnames';
import React from 'react';
import useSettings from "../../store/settingsStore"

const ArabicText = ({ ayahId, textUthmani, verseNumber, verseKey, highlightedVerse=true }) => {
  const { fontFace, currentFontSize } = useSettings((state) => ({
    fontFace: state.fontFace,
    currentFontSize: state.fontSize,
  }));

  const arabicNumber = (value) => {
    const arabicNumbers =
      '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
    return String(value).replace(/[0123456789]/g, (d) => {
      return arabicNumbers[d];
    });
  };

  return (
    <span
      data-verse={verseKey}
      dir="rtl"
      className={classNames(
        'text-right dark:text-slate-100 transition-all lg:leading-[120px] md:leading-[80px] leading-[80px]',
        {
          '!text-emerald-500 !dark:text-emerald-500':
            verseKey === highlightedVerse,
        }
      )}
    >
      <span
        style={{ fontSize: currentFontSize }}
        id="arab"
        className={classNames(
          { 'alqalam-font': fontFace === 0 },
          { 'mequran-font': fontFace === 1 },
          { 'nastaleeq-font': fontFace === 2 },
          { 'uthmanic-font': fontFace === 3 }
        )}
      >
        {textUthmani}
      </span>
      <div
        className={classNames(
          'h-8 w-8 mx-3 inline-block text-xl font-bold text-center rounded-full border',
          { 'border-emerald-500': verseKey === highlightedVerse },
          { 'border-gray-900 dark:border-white': verseKey !== highlightedVerse }
        )}
      >
        {arabicNumber(verseNumber)}
      </div>
    </span>
  );
};

export default ArabicText;
