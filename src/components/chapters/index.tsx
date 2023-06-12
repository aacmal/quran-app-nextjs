import { Chapter } from '@utils/types/Chapter';
import ChaptersView from './ChaptersView';
import ChapterCard from './Card/ChapterCard';

type ChaptersProps = {
  chapterLists: Chapter[];
};

const Chapters = ({ chapterLists }: ChaptersProps) => {
  return (
    <div className="grid gap-2 lg:gap-3 mt-3 lg:grid-cols-3 md:grid-cols-2">
      {chapterLists.map((e) => (
        <ChapterCard
          key={e.id}
          chapterId={e.id}
          name_simple={e.name_simple}
          translated_name={e.translated_name.name}
          name_arabic={e.name_arabic}
        />
      ))}
    </div>
  );
};

export default Chapters;
