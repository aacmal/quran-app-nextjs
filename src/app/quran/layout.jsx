"use client";

import classNames from 'classnames';
import Header from '../../components/Header';
import { getAllChaptersData } from '../../utils/chapter';
import BookmarkedVerseLists from '../../components/BookmarkedVerseLists/BookmarkedVerseLists';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';


export default function HomePage({ children }) {
  const layoutSegments = useSelectedLayoutSegments();

  // remove Header and orther components if the path is in surah/[id]
  if (layoutSegments.length === 2) {
    return children;
  }

  return (
    <>
      <Header>Quran App</Header>
      {/* <BookmarkedVerseLists chapterLists={allChapters} /> */}
      <div
        className={classNames(
          ' px-5 py-5 lg:p-12 lg:pb-32 pb-32 bg-gray-100 dark:bg-slate-700 min-h-screen rounded-t-2xl '
        )}
      >
        {children}
      </div>
    </>
  );
}
