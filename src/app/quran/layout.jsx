import classNames from 'classnames';
import Header from '../../components/Header';
import { getAllChaptersData } from '../../utils/chapter';
import BookmarkedVerseLists from '../../components/BookmarkedVerseLists/BookmarkedVerseLists';

async function getChapterData() {
  const res = await getAllChaptersData();
  return res.chapters;
}

export default async function HomePage({ children }) {
  const allChapters = await getChapterData();
  console.log(allChapters[0]);
  return (
    <>
      <Header>Quran App</Header>
      <BookmarkedVerseLists chapterLists={allChapters} />
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
