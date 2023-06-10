// "use client";

import React from 'react'
import Wrapper from '../../../components/Wrapper';
import VerseSkeleton from '../../../components/quranReader/VerseSkeleton';

const ChapterLoadingPage = () => {
  return (
    <Wrapper className="mt-20 px-5 2xl:px-0 pb-20">
      {
        Array(3).fill().map((_, i) => (
          <VerseSkeleton key={i} />
        ))
      }
    </Wrapper>
  )
}

export default ChapterLoadingPage