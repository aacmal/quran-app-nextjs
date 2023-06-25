'use client';

import { HadithContent, HaditsDetail } from '@utils/types/Hadith';
import React, { useEffect, useState } from 'react';
import HadithVerse from '../HadithVerse';
import { getHadithDetail } from '@utils/api/hadith';
import { ListRange, Virtuoso } from 'react-virtuoso';
import VerseSkeleton from '@components/quranReader/VerseSkeleton';

type Props = {
  totalData: number;
  id: string;
};

const START_RANGE = 31;
const LIMIT = 30;

const DynamicHadithsData = ({ totalData, id }: Props) => {
  const [data, setData] = useState<HadithContent[]>([]);

  const loadMoreData = async (index: ListRange) => {
    /*
      round startRange to nearest LIMIT
      example: if index.startRange 22 and LIMIT 30, then startRange will be 1 and endRange will be 30
      startRange will start fetch data from number 31 because 1-30 already fetched in server
    */
    const startRange = Math.floor(index.startIndex / LIMIT) * LIMIT + LIMIT + 1;
    const endRange =
      startRange + LIMIT >= totalData ? totalData : startRange + LIMIT - 1;

    if (!!data[startRange - LIMIT]) {
      return;
    }

    const res = await getHadithDetail({
      id,
      range: `${startRange}-${endRange}`, // 31-60 to get 30 data
    });
    setData((prev) => {
      // remove duplicate data
      const newData = res.hadiths.filter(
        (item) => !prev.find((prevItem) => prevItem.id === item.id)
      );
      return [...prev, ...newData].sort((a, b) => a.number - b.number);
    });
  };

  const renderVerse = (index: number) => {
    const dataIndex = data.findIndex(
      (item) => item.number - LIMIT - 1 === index + 1
    );

    if (!data[dataIndex]) {
      return <VerseSkeleton />;
    }

    return (
      <HadithVerse
        translation={data[dataIndex].id}
        key={data[dataIndex].number}
        number={data[dataIndex].number}
        arab={data[dataIndex].arab}
      />
    );
  };

  return (
    <Virtuoso
      useWindowScroll
      totalCount={totalData - LIMIT - 1}
      initialItemCount={30}
      // endReached={loadMoreData}
      rangeChanged={loadMoreData}
      itemContent={renderVerse}
    ></Virtuoso>
  );
};

export default DynamicHadithsData;
