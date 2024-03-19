'use client';

import useSurah from '@stores/surahStore';
import { getLocalChapter } from '@utils/chapter';
import React, { useEffect } from 'react';

const InitChapterData = () => {
  const setChapterData = useSurah((state) => state.setChapterData);
  useEffect(() => {
    getLocalChapter().then((res) => {
      setChapterData(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default InitChapterData;
