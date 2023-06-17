'use client';

import BookmarkedItem from './BookmarkedItem';
import useSurah from '../../store/surahStore';
import { getLocalChapter } from '../../utils/chapter';
import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import BookmarkWrapper from './BookmarkWrapper';

const BookmarkedVerseLists = () => {
  const { bookmarkData, chapterData, setChapterData, setBookmarked } = useSurah(
    (state) => ({
      bookmarkData: state.bookmarked,
      chapterData: state.chapterData,
      setChapterData: state.setChapterData,
      setBookmarked: state.setBookmarkData,
    }),
    shallow
  );

  useEffect(() => {
    if (chapterData.length > 0) return;

    getLocalChapter().then((res) => {
      setChapterData(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (chapterData.length === 0) return <></>;

  return (
    <BookmarkWrapper
      onClickDelete={() => setBookmarked([])}
      isEmpty={bookmarkData.length < 1}
    >
      {bookmarkData.map((e, index) => {
        const chapterId = e.split(':');
        return (
          <BookmarkedItem
            key={index}
            name_simple={chapterData[parseInt(chapterId[0]) - 1].name_simple}
            verse_key={e}
          />
        );
      })}
    </BookmarkWrapper>
  );
};

export default BookmarkedVerseLists;
