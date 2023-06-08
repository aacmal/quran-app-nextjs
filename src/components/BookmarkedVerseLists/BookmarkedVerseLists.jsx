'use client';

import BookmarkedItem from './BookmarkedItem';
import { BookmarkIcon } from '../icons';
import IconWrapper from '../icons/IconWrapper';
import TrashIcon from '../icons/TrashIcon';
import useStore from '../../store/surahStore';

const BookmarkedVerseLists = ({ chapterLists }) => {
  const { bookmarkData, deleteBookmark } = useStore((state) => ({
    bookmarkData: state.bookmarked,
    deleteBookmark: state.deleteBookmark,
  }));

  return (
    <div className="px-5 xl:px-0 mb-5">
      <div className="h-fit w-full bg-gradient-to-br from-emerald-300 to-emerald-600 rounded-lg lg:p-4 p-3">
        <div className="lg:mb-4 mb-2 flex justify-between items-center text-white">
          <div className="flex">
            <BookmarkIcon fill={true} className="h-6 mr-2" />
            <span className="font-bold">Bookmark</span>
          </div>
          <IconWrapper
            className={bookmarkData.length < 1 && 'invisible'}
            onHover="none"
            onClick={() => deleteBookmark(false)}
          >
            <TrashIcon className="h-6 text-white" />
          </IconWrapper>
        </div>
        <div className="flex gap-2 flex-wrap">
          {bookmarkData.length < 1 ? (
            <div className="flex justify-center w-full items-center text-white">
              <span className="font-bold">Klik</span>
              <BookmarkIcon fill={true} className="h-5 mx-4" />
              <span className="font-bold">untuk menambahkan</span>
            </div>
          ) : (
            bookmarkData.map((e, index) => {
              const chapterId = e.split(':');
              return (
                <BookmarkedItem
                  key={index}
                  name_simple={chapterLists[chapterId[0] - 1].name_simple}
                  verse_key={e}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default BookmarkedVerseLists;
