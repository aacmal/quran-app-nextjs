'use client';

import React, { useEffect } from 'react';
import { useState } from 'react';
import IconWrapper from '../icons/IconWrapper';
import BannerWrapper from './BannerWrapper';
import SurahInfo from './SurahInfo';
import { InfoIcon } from '../icons';
import useSurah from '../../store/surahStore';
import { shallow } from 'zustand/shallow';

const ChapterBanner = ({ chapterData, chapterInfo }) => {
  const { setCurrentChapter } = useSurah((state) => ({
    setCurrentChapter: state.setCurrentChapter,
  }), shallow)
  const [isInfoOpen, setInfoOpen] = useState(false);

  console.log("re-render")
  useEffect(() => {
    setCurrentChapter(chapterData.id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BannerWrapper imageOpacity={0.2} imageScale={1.2}>
      <div
        className={`text-center z-20 relative text-gray-50 duration-150 ${
          isInfoOpen ? 'max-h-96' : 'max-h-32'
        }`}
      >
        <IconWrapper
          className="cursor-pointer absolute left-0 top-0 text-gray-50"
          onClick={() => setInfoOpen(!isInfoOpen)}
          onHover="none"
        >
          <InfoIcon className="h-5 lg:h-8 " />
        </IconWrapper>
        <h1 className="text-2xl lg:text-3xl font-bold mb-0 text-gray-50">
          {chapterData.name_simple}
        </h1>
        <span className="text-sm block lg:text-xl text-gray-50">
          {chapterData.translated_name.name}
        </span>
        <hr
          className={`my-3 mx-auto lg:my-5 md:transition-all ${
            isInfoOpen ? 'max-w-full' : 'max-w-md'
          }`}
        />
        <SurahInfo
          verses_count={chapterData.verses_count}
          revelation_place={chapterData.revelation_place}
          short_text={chapterInfo.short_text}
          className={`${
            isInfoOpen
              ? 'max-h-96 visible opacity-100'
              : 'max-h-0 invisible opacity-0'
          }`}
          chapterId={chapterData.id}
        />
        <span
          className={`text-sm transition-all lg:text-lg text-gray-50 ${
            isInfoOpen ? 'invisible opacity-0' : 'visible opacity-100'
          }`}
        >
          <span className="capitalize">{chapterData.revelation_place}</span> -{' '}
          {chapterData.verses_count} Ayah
        </span>
      </div>
    </BannerWrapper>
  );
};

export default ChapterBanner;
