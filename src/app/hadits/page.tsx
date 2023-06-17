import BookmarkHadithLists from '@components/Bookmark/BookmarkHadithLists';
import BookmarkedVerseLists from '@components/Bookmark/BookmarkedVerseLists';
import HadithCard from '@components/Hadith/HadithCard';
import ReadHadithHeader from '@components/Header/ReadHadithHeader';
import Wrapper from '@components/Wrapper';
import { getHadithBooks } from '@utils/api/hadith';
import classNames from 'classnames';
import React from 'react';

type Props = {};

const HadithPage = async (props: Props) => {
  const data = await getHadithBooks();
  console.log(data);

  return (
    <Wrapper>
      <ReadHadithHeader />
      <BookmarkHadithLists />
      <div
        className={classNames(
          'px-5 py-5 lg:p-12 bg-gray-100 dark:bg-slate-700 rounded-2xl '
        )}
      >
        <div className="grid gap-2 lg:gap-3 mt-3 lg:grid-cols-3 md:grid-cols-2">
          {data.map((item) => (
            <HadithCard
              key={item.id}
              name={item.name}
              id={item.id}
              available={item.available}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default HadithPage;
