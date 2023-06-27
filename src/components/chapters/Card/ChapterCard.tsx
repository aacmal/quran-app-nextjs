import Link from 'next/link';
import React from 'react';
import { StarIcon } from '../../icons';
import ChapterWrapper from './ChapterWrapper';
import classNames from 'classnames';
import { nastaleeqClassName } from '@utils/fonts';

type ChapterCardProps = {
  chapterId: number;
  translated_name: string;
  name_arabic: string;
  name_simple: string;
  verse_mapping?: string;
};

const ChapterCard = ({
  chapterId,
  translated_name,
  name_arabic,
  name_simple,
  verse_mapping,
}: ChapterCardProps) => {
  return (
    <Link scroll={false} href={`quran/surah/${chapterId}`}>
      <ChapterWrapper>
        <div className="flex items-center">
          <div className="relative grid place-items-center h-11 w-11 mr-3">
            <span className="text-sm font-semibold">{chapterId}</span>
            <StarIcon className="absolute" />
          </div>
          <div>
            <span className="font-bold text-xl block mb-1">{name_simple}</span>
            <span className="font-normal dark:text-slate-300 text-slate-500 text-sm block lg:text-base">
              {translated_name}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span
            className={classNames(
              'text-3xl group-hover:text-emerald-500 block mb-1',
              nastaleeqClassName
            )}
          >
            {name_arabic}
          </span>
          {verse_mapping && <span className="font-bold">{verse_mapping}</span>}
        </div>
      </ChapterWrapper>
    </Link>
  );
};

export default ChapterCard;
