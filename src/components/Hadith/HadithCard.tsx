import ChapterWrapper from '@components/chapters/Card/ChapterWrapper';
import { StarIcon } from '@components/icons';
import Link from 'next/link';
import React from 'react';

type Props = {
  name: string;
  available: number;
  id: string;
};

const HadithCard = ({ name, id, available }: Props) => {
  return (
    <Link href={`hadits/${id}`}>
      <ChapterWrapper>
        <div className="relative grid place-items-center h-11 w-11 mr-3">
          <span className="text-xs font-semibold">{available}</span>
          <StarIcon className="absolute" />
        </div>
        <div>
          <span className="font-bold text-xl block text-slate-800 dark:text-slate-100">
            {name}
          </span>
        </div>
      </ChapterWrapper>
    </Link>
  );
};

export default HadithCard;
