'use client';

import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { getTafsirByVerseId } from '../../utils/tafsir';
import IconWrapper from '../icons/IconWrapper';
import { XIcon } from '../icons';
import TafsirSkeleton from './TafsirSkeleton';
import tafsirStyle from './tafsirText.module.css';
import ArabicText from '../quranReader/ArabicText';
import useSurah from '../../store/surahStore';
import { shallow } from 'zustand/shallow';

const TafsirModal = () => {
  const { chapterData, currentChapter, tafsirState, setTafsirState } = useSurah(
    (state) => ({
      chapterData: state.chapterData,
      currentChapter: state.currentChapter,
      tafsirState: state.tafsirState,
      setTafsirState: state.setTafsirState,
    }),
    shallow
  );
  const [tafsirData, setTafsirData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function getData(verseId) {
      getTafsirByVerseId(verseId).then((res) => {
        setTafsirData(res);
        setLoading(false);
      });
    }

    if (!!tafsirState) {
      getData(tafsirState.verseId);
    } else {
      setLoading(true);
    }

    document.body.style.overflow = !!tafsirState ? 'hidden' : 'auto';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tafsirState]);

  if (chapterData.length === 0) {
    return <></>;
  }

  return (
    <div>
      <div
        className={classNames(
          'h-screen w-screen fixed bg-black/60 dark:bg-black/50 top-0 left-0 z-[60] transition-all',
          { 'visible opacity-100': tafsirState },
          { 'invisible opacity-0': !tafsirState }
        )}
      ></div>

      <div
        className={classNames(
          'z-[70] h-screen pb-20 fixed w-screen top-0 left-0 overflow-y-scroll flex justify-center pt-28',
          { visivle: tafsirState },
          { invisible: !tafsirState }
        )}
      >
        <div
          className={classNames(
            'left-0 top-0 h-screen w-screen',
            { fixed: tafsirState },
            { hidden: !tafsirState }
          )}
          onClick={() => setTafsirState(null)}
        ></div>
        <div
          className={classNames(
            'z-[70] h-min min-h-[80%] w-[94%] max-w-7xl bg-gray-100 dark:bg-slate-600 dark:text-slate-100  p-6 xl:p-12 lg:pt-16 relative rounded-md transform transition-all',
            { 'translate-y-0 opacity-100': tafsirState },
            { 'translate-y-52 opacity-0': !tafsirState }
          )}
        >
          <IconWrapper
            className="absolute group top-3 right-3 border-2 border-transparent"
            onHover="hover:border-emerald-500"
            onClick={() => setTafsirState(null)}
          >
            <XIcon className="h-7 group-hover:text-emerald-500" />
          </IconWrapper>
          {!isLoading && !!tafsirState ? (
            <>
              <div className="bg-emerald-500 w-fit py-2 px-3 font-bold text-white rounded-md">
                {chapterData[currentChapter - 1].name_simple} :{' '}
                {tafsirData.ayah}
              </div>
              <div className="w-full flex flex-col dark:text-slate-100">
                <ArabicText
                  textUthmani={tafsirData.arabic}
                  verseNumber={tafsirData.ayah}
                  verseKey={false}
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: tafsirData.translation,
                  }}
                  className="text-base md:text-xl transition-all mt-5 inline-block"
                ></span>
              </div>
              <div className="h-px w-full bg-emerald-500  my-6"></div>
              <section className='mb-4'>
                <h1 className='text-lg font-semibold text-emerald-500'>Tafsir Wajiz</h1>
                <p>{tafsirData.tafsir.wajiz}</p>
              </section>
              <section className='mb-4'>
                <h1 className='text-lg font-semibold text-emerald-500'>Tafsir Tahlili</h1>
                <p>{tafsirData.tafsir.tahlili}</p>
              </section>
              <span className="mt-3 block">
                Source : https://quran.kemenag.go.id
              </span>
            </>
          ) : (
            <TafsirSkeleton />
          )}
        </div>
      </div>
    </div>
  );
};

export default TafsirModal;
