import Verses from './Verses';
import Bismillah from './Bismillah';
import { Verse } from '@utils/types/Verse';

type QuranReaderProps = {
  versesData: Verse[] | Verse;
  bismillahPre?: boolean;
};

const QuranReader = ({ versesData, bismillahPre }: QuranReaderProps) => {
  // return versesData.map((e) => (
  //   <Verses
  //     key={e.id}
  //     id={e.id}
  //     verse_number={e.verse_number}
  //     translations={e.translations}
  //     text_uthmani={e.text_uthmani}
  //     verse_key={e.verse_key}
  //     // setTafsirData={setTafsirData}
  //   />
  // ));

  return (
    <div className="mt-3">
      {/* <TafsirModal
        isOpen={tafsirData.isOpen}
        verseKey={tafsirData.verseKey}
        verseId={tafsirData.verseId}
        closeModal={() => setTafsirData({ ...tafsirData, isOpen: false })}
      /> */}
      <>
        <Bismillah className={!bismillahPre && 'hidden'} />
        <div className="text-justify mt-12">
          {Array.isArray(versesData) ? (
            versesData.map((e) => (
              <Verses
                key={e.id}
                id={e.id}
                verse_number={e.verse_number}
                translations={e.translations}
                text_uthmani={e.text_uthmani}
                verse_key={e.verse_key}
                words={e.words}
              />
            ))
          ) : (
            <Verses
              key={versesData.id}
              id={versesData.id}
              verse_number={versesData.verse_number}
              translations={versesData.translations}
              text_uthmani={versesData.text_uthmani}
              verse_key={versesData.verse_key}
            />
          )}
        </div>
      </>
    </div>
  );
};

export default QuranReader;
