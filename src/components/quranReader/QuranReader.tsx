import Bismillah from './Bismillah';
import { Verse } from '@utils/types/Verse';
import InitialSurahVerse from './InitialSurahVerse';
import dynamic from 'next/dynamic';

const DynamicSurahVerse = dynamic(() => import('./DynamicSurahVerse'), {
  ssr: false,
});

type QuranReaderProps = {
  versesData: Verse[];
  bismillahPre?: boolean;
  versesCount: number;
  chapterId: number;
};

const QuranReader = ({
  versesData,
  bismillahPre,
  versesCount,
  chapterId,
}: QuranReaderProps) => {
  return (
    <div className="mt-3">
      <>
        <Bismillah className={!bismillahPre && 'hidden'} />
        <div className="text-justify mt-12">
          <InitialSurahVerse versesData={versesData} />
          <DynamicSurahVerse totalData={versesCount} chapterId={chapterId} />
        </div>
      </>
    </div>
  );
};

export default QuranReader;
