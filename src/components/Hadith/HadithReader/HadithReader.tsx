import React from 'react';
import InitialHadithData from './InitialHadithData';
import DynamicHadithsData from './DynamicHadithData';

type Props = {
  id: string;
  available: number;
  hadiths: {
    id: string;
    number: number;
    arab: string;
  }[];
};

const HadithReader = ({ hadiths, available, id }: Props) => {
  return (
    <div className="text-justify">
      <InitialHadithData hadiths={hadiths} />
      <DynamicHadithsData totalData={available} id={id} />
    </div>
  );
};

export default HadithReader;
