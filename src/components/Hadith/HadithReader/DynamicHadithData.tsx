'use client';

import { HadithContent, HaditsDetail } from '@utils/types/Hadith';
import React, { useEffect, useState } from 'react';
import HadithVerse from '../HadithVerse';
import { getHadithDetail } from '@utils/api/hadith';
import { Virtuoso } from 'react-virtuoso';
import VerseSkeleton from '@components/quranReader/VerseSkeleton';

type Props = {
  totalData: number;
  id: string;
};

const START_RANGE = 31;
const LIMIT = 30;

const DynamicHadithsData = ({ totalData, id }: Props) => {
  const [data, setData] = useState<HadithContent[]>([]);

  const loadMoreData = async (index: number) => {
    const res = await getHadithDetail({
      id,
      range: `${index + 1 + LIMIT + 1}-${index + 1 + LIMIT * 2}`, // 61-90
    });
    setData((prev) => {
      // remove duplicate data
      const newData = res.hadiths.filter(
        (item) => !prev.find((prevItem) => prevItem.id === item.id)
      );
      return [...prev, ...newData].sort((a, b) => a.number - b.number);
    });
  };

  useEffect(() => {
    function initData() {
      getHadithDetail({
        id,
        range: `${START_RANGE}-${START_RANGE + LIMIT - 1}`, // 31-60
      }).then((res) => {
        setData(res.hadiths);
      });
    }

    initData();
  }, []);

  const renderVerse = (index: number) => {
    if (!data[index]) {
      return <VerseSkeleton />;
    }

    return (
      <HadithVerse
        translation={data[index].id}
        key={data[index].number}
        number={data[index].number}
        arab={data[index].arab}
      />
    );
  };

  return (
    <Virtuoso
      useWindowScroll
      style={{ height: '100px' }}
      data={data}
      totalCount={totalData}
      overscan={100}
      endReached={loadMoreData}
      // rangeChanged={loadMoreData}
      itemContent={(index) => renderVerse(index)}
    ></Virtuoso>
  );
};

export default DynamicHadithsData;
