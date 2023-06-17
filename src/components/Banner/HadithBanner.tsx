import React from 'react';
import BannerWrapper from './BannerWrapper';

type Props = {
  name: string;
  available: number;
};

const HadithBanner = ({ name, available }: Props) => {
  return (
    <BannerWrapper className="text-center py-5">
      <h1 className="text-2xl lg:text-3xl font-bold mb-2 text-gray-50">
        {name}
      </h1>
      <span className="text-sm block lg:text-xl text-gray-50">
        Total {available}
      </span>
    </BannerWrapper>
  );
};

export default HadithBanner;
