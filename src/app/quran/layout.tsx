'use client';

import BookmarkedVerseLists from '@components/Bookmark/BookmarkedVerseLists';
import Header from '@components/Header';
import ReadQuranHeader from '@components/Header/ReadQuranHeader';
import QuranSwitch from '@components/Switch';
import Wrapper from '@components/Wrapper';
import classNames from 'classnames';
import { useSelectedLayoutSegments } from 'next/navigation';

export default function HomePage({ children }) {
  const layoutSegments = useSelectedLayoutSegments();

  // remove Header and orther components if the path is in surah/[id]
  if (layoutSegments.length >= 2) {
    return children;
  }

  return (
    <Wrapper>
      <ReadQuranHeader />
      <BookmarkedVerseLists />
      <div
        className={classNames(
          'px-5 py-5 lg:p-12 lg:pb-32 pb-32 bg-gray-100 dark:bg-slate-700 min-h-screen rounded-t-2xl '
        )}
      >
        <QuranSwitch active={layoutSegments[0]} />
        {children}
      </div>
    </Wrapper>
  );
}
