'use client';

import React from 'react';
import IconWrapper from '../../icons/IconWrapper';
import BookmarkIcon from '../../icons/BookmarkIcon';
import useSurah from '../../../store/surahStore';
import { toast } from 'react-hot-toast';

type HandleBookmarkProps = {
  verseKey: string;
};

const HandleBookmark = ({ verseKey }: HandleBookmarkProps) => {
  const { bookmarked, addBookmark, deleteBookmarked } = useSurah((state) => ({
    bookmarked: state.bookmarked,
    addBookmark: state.addBookmarkData,
    deleteBookmarked: state.deleteBookmarkData,
  }));

  const isBookmarked = bookmarked.includes(verseKey);

  function handleBookmarkClick(verseKey) {
    if (isBookmarked) {
      deleteBookmarked(verseKey);
    } else {
      addBookmark(verseKey);
      toast.success('Ayat berhasil ditandai');
    }
  }

  return (
    <IconWrapper
      aria-label="Bookmark ayat ini"
      onClick={() => handleBookmarkClick(verseKey)}
      className="text-gray-500 dark:hover:text-gray-50 group cursor-pointer"
    >
      <BookmarkIcon
        fill={isBookmarked}
        className={`md:h-6 h-5 ${isBookmarked && '!text-emerald-500'}`}
      />
    </IconWrapper>
  );
};

export default HandleBookmark;
