'use client';

import React, { useEffect, useState } from 'react';
import Wrapper from '../../../../../components/Wrapper';
import QuranReader from '../../../../../components/quranReader/QuranReader';
import { getSpecificVerse } from '../../../../../utils/verse';
import { ArrowIcon } from '../../../../../components/icons';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import useSurah from '../../../../../store/surahStore';
import { shallow } from 'zustand/shallow';
import VerseSkeleton from '../../../../../components/quranReader/VerseSkeleton';

const SingleAyahPage = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { setCurrentChapter } = useSurah((state) => ({
    setCurrentChapter: state.setCurrentChapter,
  }), shallow);

  useEffect(() => {
    setLoading(true);
    function getData(verseKey) {
      getSpecificVerse(verseKey).then((res) => {
        setData(res);
        setCurrentChapter(params.chapterId);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
    }
    getData(`${params.chapterId}:${params.ayahId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper className="px-5 lg:mt-24 mt-16 pb-20">
      <div className="flex justify-between">
        <Link href={`/quran/surah/${params.chapterId}`} className="bg-emerald-400 w-fit text-emerald-50 px-3 py-2 rounded-md mb-8 flex items-center">
          <ArrowIcon className="h-5 mr-3" />
          <span>Kembali ke surah</span>
        </Link>
      </div>
      {!isLoading ? <QuranReader versesData={data.verse} /> : <VerseSkeleton/>}
    </Wrapper>
  );
};

export default SingleAyahPage;
