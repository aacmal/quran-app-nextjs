import React from 'react';
import HadithVerse from '../HadithVerse';

type Props = {
  hadiths: {
    id: string;
    number: number;
    arab: string;
  }[];
};

const InitialHadithData = ({ hadiths }: Props) => {
  return (
    <>
      {hadiths.map((item) => (
        <HadithVerse
          translation={item.id}
          key={item.number}
          number={item.number}
          arab={item.arab}
        />
      ))}
    </>
  );
};

export default InitialHadithData;
