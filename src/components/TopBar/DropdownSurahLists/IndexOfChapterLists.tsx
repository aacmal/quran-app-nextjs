import classNames from 'classnames';
import { LocalChapter } from 'data/chapter/type';
import { useCallback } from 'react';

type IndexOfChapterListsProps = {
  chapterLists: LocalChapter[];
  chapterId: number;
};

const IndexOfChapterLists = ({
  chapterLists,
  chapterId,
}: IndexOfChapterListsProps) => {
  const scrollToSpecificVerse = useCallback((verseKey: string) => {
    const verseElement = document.querySelector(
      `[data-verse="${verseKey}"]`
    ) as HTMLElement;

    if (!verseElement) return;
    const verseYLocation = verseElement.offsetTop;
    window.scrollTo(0, verseYLocation - 120);
  }, []);

  return (
    <ul
      className={classNames(
        'p-2 border-l border-emerald-300 w-16 h-72 overflow-auto scrollbar-hide'
      )}
    >
      {new Array(chapterLists[chapterId].verses_count)
        .fill(0)
        .map((key, index) => (
          <li
            key={index}
            onClick={() =>
              scrollToSpecificVerse(`${chapterId + 1}:${index + 1}`)
            }
            className="p-1 cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-400 dark:hover:text-slate-100 hover:text-emerald-500 rounded flex items-center"
          >
            {index + 1}
          </li>
        ))}
    </ul>
  );
};

export default IndexOfChapterLists;
