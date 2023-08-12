'use client';

import ArabicText from './ArabicText';
import { StarIcon } from '../icons';
import HandleBookmark from './action/HandleBookmark';
import CopyToClipboard from './action/CopyToClipboard';
import HandleTafsir from './action/HandleTafsir';
import { VerseWord } from '@utils/types/Verse';
import useSettings from '@stores/settingsStore';
import { shallow } from 'zustand/shallow';
import HandlePlay from './action/HandlePlay';

type VersesProps = {
  id: number;
  verse_number: number;
  translations: any;
  text_uthmani: string;
  verse_key: string;
  words?: VerseWord[];
};

const Verses = ({
  id,
  verse_number,
  translations,
  text_uthmani,
  verse_key,
  words,
}: VersesProps) => {
  const { translationMode } = useSettings(
    (state) => ({
      translationMode: state.translationMode,
    }),
    shallow
  );

  if (true) {
    return (
      <>
        <div
          id={id.toString()}
          className="flex justify-between md:flex-row flex-col"
        >
          <div className="flex md:flex-col flex-row items-center mb-4">
            <div className="relative grid place-items-center h-9 w-9 md:h-12 md:w-12">
              <span className="text-xs font-semibold md:text-lg text-gray-900 dark:text-slate-100">
                {verse_number}
              </span>
              <StarIcon className="absolute h-8 w-8 md:h-12 md:w-12 left-0" />
            </div>
            <div className="md:mt-3 md:ml-0 ml-2  flex md:flex-col flex-row items-center justify-between md:h-fit w-full md:w-fit">
              <div className="flex md:flex-col">
                <HandleBookmark verseKey={verse_key} />
                <CopyToClipboard text_uthmani={text_uthmani} />
                <HandlePlay verseKey={verse_key} />
                <HandleTafsir id={id} />
              </div>
            </div>
          </div>
          <div className="w-full md:w-[92%] flex flex-col dark:text-slate-100">
            <ArabicText
              words={words}
              textUthmani={text_uthmani}
              verseNumber={verse_number}
              verseKey={verse_key}
            />
            {translationMode === 'verse' && (
              <span
                dangerouslySetInnerHTML={{ __html: translations[0].text }}
                className="text-base md:text-xl mt-5 inline-block"
              ></span>
            )}
          </div>
        </div>
        <hr className="border-none my-3 lg:my-5 h-[1px] bg-emerald-500" />
      </>
    );
  } else {
    return (
      <ArabicText
        textUthmani={text_uthmani}
        verseNumber={verse_number}
        verseKey={verse_key}
      />
    );
  }
};

export default Verses;
