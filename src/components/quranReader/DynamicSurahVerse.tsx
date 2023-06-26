'use client';

import { Verse, VersePagination } from '@utils/types/Verse';
import React, { useEffect, useRef, useState } from 'react';
import { ListItem, ListRange, Virtuoso, VirtuosoHandle } from 'react-virtuoso';
import VerseSkeleton from './VerseSkeleton';
import Verses from './Verses';
import { getVersesByChapter } from '@utils/verse';
import useQuranReader from '@stores/quranReaderStore';
import { shallow } from 'zustand/shallow';
import useSettings from '@stores/settingsStore';

type Props = {
  totalData: number;
  chapterId: number;
};

const START_AYAH = 21;
const LIMIT = 20;
const DynamicSurahVerse = ({ totalData, chapterId }: Props) => {
  const [data, setData] = useState<Verse[]>([]);
  const [paginationData, setPaginationData] = useState<VersePagination>();
  const [itemsRendered, setItemsRendered] = useState<ListItem<any>[]>();

  const ref = useRef<VirtuosoHandle>(null);
  const { highlightedWord, highlightedVerse } = useQuranReader(
    (state) => ({
      highlightedWord: state.highlightedWord,
      highlightedVerse: state.highlightedVerse,
    }),
    shallow
  );
  const autoScroll = useSettings((state) => state.autoScroll, shallow);

  const loadMoreData = async (index: ListRange) => {
    const page = Math.floor(index.endIndex / LIMIT) + 2; // 2 because page start from 2

    if (!!data[index.endIndex] || page > paginationData?.total_pages) {
      return;
    }

    const res = await getVersesByChapter({
      chapterId,
      page,
      per_page: LIMIT,
    });

    setPaginationData(res.pagination);
    setData((prev) => {
      // remove duplicate data and sort by verse_number
      const newData = res.verses.filter(
        (item) => !prev.find((prevItem) => prevItem.id === item.id)
      );
      return [...prev, ...newData].sort(
        (a, b) => a.verse_number - b.verse_number
      );
    });
  };

  const initData = () => {
    getVersesByChapter({
      chapterId,
      page: 2,
      per_page: LIMIT,
    }).then((res) => {
      setPaginationData(res.pagination);
      setData(res.verses);
    });
  };

  useEffect(() => {
    if (!highlightedVerse || !ref.current || !autoScroll) return;
    const idAndVerse = highlightedVerse.split(':');
    const verseNumber = parseInt(idAndVerse[1]);
    const chapterNumber = parseInt(idAndVerse[0]);
    if (chapterNumber !== chapterId) return;

    const isVerseRendered = itemsRendered?.find(
      (item) => item.index === verseNumber - LIMIT - 1
    );

    if (verseNumber <= LIMIT || !!isVerseRendered) return;
    ref.current.scrollToIndex(verseNumber - LIMIT - 1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highlightedWord]);

  const renderRow = (index: number) => {
    const dataIndex = data.findIndex(
      (item) => item.verse_number - LIMIT - 1 === index
    );

    if (!data[dataIndex]) {
      return <VerseSkeleton />;
    }

    return (
      <Verses
        id={data[dataIndex].id}
        verse_number={data[dataIndex].verse_number}
        translations={data[dataIndex].translations}
        text_uthmani={data[dataIndex].text_uthmani}
        verse_key={data[dataIndex].verse_key}
        words={data[dataIndex].words}
      />
    );
  };

  return (
    <Virtuoso
      totalCount={totalData > 20 ? totalData - LIMIT : 0}
      useWindowScroll
      itemContent={renderRow}
      rangeChanged={loadMoreData}
      itemsRendered={(items) => setItemsRendered(items)}
      ref={ref}
      startReached={initData}
    />
  );
};

export default DynamicSurahVerse;
