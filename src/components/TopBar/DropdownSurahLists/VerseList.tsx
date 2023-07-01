import classNames from 'classnames';
import { LocalChapter } from 'data/chapter/type';
import { useRouter } from 'next/navigation';

type VerseListProps = {
  chapterLists: LocalChapter[];
  chapterId: number;
};

const VerseList = ({ chapterLists, chapterId }: VerseListProps) => {
  const router = useRouter();

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
            onClick={() =>
              router.push(`/quran/surah/${chapterId + 1}?ayah=${index + 1}`)
            }
            key={index}
            className="p-1 cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-400 dark:hover:text-slate-100 hover:text-emerald-500 rounded flex items-center"
          >
            {index + 1}
          </li>
        ))}
    </ul>
  );
};

export default VerseList;
