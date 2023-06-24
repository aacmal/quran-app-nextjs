'use client';

import { StarIcon } from '@components/icons';
import ArabicText from '@components/quranReader/ArabicText';
import CopyToClipboard from '@components/quranReader/action/CopyToClipboard';
import HandleBookmark from '@components/quranReader/action/HandleBookmark';
import React, { ForwardedRef, forwardRef, useEffect } from 'react';

type Props = {
  number: number;
  arab: string;
  translation: string;
  style?: any;
  measure?: any;
};

const HadithVerse = forwardRef(function Verse(
  { number, arab, translation, style, measure }: Props,
  ref: ForwardedRef<HTMLDivElement>
) {
  useEffect(() => {
    if (measure) {
      measure();
    }
  }, []);

  if (!number || !arab || !translation) return <div>Loading</div>;
  return (
    <div ref={ref} style={style}>
      <div className="flex justify-between py-3 md:flex-row flex-col">
        <div className="flex md:flex-col flex-row items-center mb-4">
          <div className="relative grid place-items-center h-9 w-9 md:h-12 md:w-12">
            <span className="text-xs font-semibold md:text-lg text-gray-900 dark:text-slate-100">
              {number}
            </span>
            <StarIcon className="absolute h-8 w-8 md:h-12 md:w-12 left-0" />
          </div>
          <div className="md:mt-3 md:ml-0 ml-2  flex md:flex-col flex-row items-center justify-between md:h-28 w-full md:w-fit">
            <div className="flex md:flex-col">
              <HandleBookmark verseKey={number.toString()} />
              <CopyToClipboard text_uthmani={arab} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[92%] flex flex-col dark:text-slate-100">
          <ArabicText
            textUthmani={arab}
            verseNumber={number}
            verseKey={number.toString()}
            leading="normal"
          />
          <span className="text-base md:text-xl mt-5 inline-block leading-loose">
            {translation}
          </span>
        </div>
      </div>
      <hr className="border-none my-3 lg:my-5 h-[1px] bg-emerald-500" />
    </div>
  );
});

export default HadithVerse;
