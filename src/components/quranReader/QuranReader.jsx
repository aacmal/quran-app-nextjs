import Verses from './Verses';
import Bismillah from '../Bismillah';
import VerseSkeleton from './VerseSkeleton';

const QuranReader = ({
  versesData,
  isLoading,
  bismillahPre,
  skeletonLoadingCount,
}) => {
  return versesData.map((e) => (
    <Verses
      key={e.id}
      id={e.id}
      verse_number={e.verse_number}
      translations={e.translations}
      text_uthmani={e.text_uthmani}
      verse_key={e.verse_key}
      // setTafsirData={setTafsirData}
    />
  ));

  return (
    <div className="mt-3">
      <TafsirModal
        isOpen={tafsirData.isOpen}
        verseKey={tafsirData.verseKey}
        verseId={tafsirData.verseId}
        closeModal={() => setTafsirData({ ...tafsirData, isOpen: false })}
      />
      {isLoading ? (
        new Array(skeletonLoadingCount)
          .fill()
          .map((e, index) => <VerseSkeleton key={index} />)
      ) : (
        <>
          <Bismillah className={!bismillahPre && 'hidden'} />
          <div
            dir={readMode === 'translated' ? 'ltr' : 'rtl'}
            className="text-justify mt-12"
          >
            {Array.isArray(versesData) ? (
              versesData.map((e) => (
                <Verses
                  key={e.id}
                  id={e.id}
                  verse_number={e.verse_number}
                  translations={e.translations}
                  text_uthmani={e.text_uthmani}
                  verse_key={e.verse_key}
                  setTafsirData={setTafsirData}
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
                setTafsirData={setTafsirData}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default QuranReader;
