'use client';

import BookmarkedItem from './BookmarkedItem';
import useSurah from '../../store/surahStore';
import { getLocalChapter } from '../../utils/chapter';
import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import BookmarkWrapper from './BookmarkWrapper';

const BookmarkedVerseLists = () => {
  const { bookmarkData, chapterData, setBookmarked } = useSurah(
    (state) => ({
      bookmarkData: state.bookmarked,
      chapterData: state.chapterData,
      setBookmarked: state.setBookmarkData,
    }),
    shallow
  );

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
