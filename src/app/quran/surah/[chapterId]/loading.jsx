import React from 'react'
import Wrapper from '../../../../components/Wrapper';
import VerseSkeleton from '../../../../components/quranReader/VerseSkeleton';

const Loading = () => {
  return (
    <Wrapper className="mt-20 px-5 2xl:px-0 pb-20">
      {
        Array(4).fill().map((_, i) => (
          <VerseSkeleton className="animate-pulse" animateDelay={i*0.1} key={i} />
        ))
      }
    </Wrapper>
  )
}

export default Loading