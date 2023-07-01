'use client';

import { GetVerseBy, Verse, VersePagination } from '@utils/types/Verse';
import React, { useEffect, useRef, useState } from 'react';
import { ListItem, ListRange, Virtuoso, VirtuosoHandle } from 'react-virtuoso';
import VerseSkeleton from './VerseSkeleton';
import Verses from './Verses';
import { getVerses } from '@utils/verse';
import useQuranReader from '@stores/quranReaderStore';
import { shallow } from 'zustand/shallow';
import useSettings from '@stores/settingsStore';

type Props = {
  totalData: number;
  id: number;
  getVerseBy: GetVerseBy;
};

const LIMIT = 20;
const FetchInfiniteVerse = ({ totalData, id, getVerseBy }: Props) => {
  const [data, setData] = useState<Verse[]>([]);
  const [paginationData, setPaginationData] = useState<VersePagination>();
  const [itemsRendered, setItemsRendered] = useState<ListItem<any>[]>();

  const ref = useRef<VirtuosoHandle>(null);
  const { highlightedWord, highlightedVerse, currentChapter } = useQuranReader(
    (state) => ({
      highlightedWord: state.highlightedWord,
      highlightedVerse: state.highlightedVerse,
      currentChapter: state.currentChapter,
    }),
    shallow
  );
  const autoScroll = useSettings((state) => state.autoScroll, shallow);

  const loadMoreData = async (index: ListRange) => {
    const page = Math.floor(index.endIndex / LIMIT) + 2; // 2 because page start from 2

    if (!!data[index.endIndex] || page > paginationData?.total_pages) {
      return;
    }

    const res = await getVerses({
      id: id,
      page,
      per_page: LIMIT,
      getBy: getVerseBy,
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
    getVerses({
      id,
      page: 2,
      per_page: LIMIT,
      getBy: getVerseBy,
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
    if (chapterNumber !== currentChapter) return;

    const isVerseRendered = itemsRendered?.find(
      (item) => item.index === verseNumber - LIMIT - 1
    );

    if (verseNumber <= LIMIT || !!isVerseRendered) return;
    ref.current.scrollToIndex(verseNumber - LIMIT - 1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highlightedWord]);

  const renderRow = (index: number) => {
    const dataIndex = index;
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

export default FetchInfiniteVerse;
