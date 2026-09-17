import { Chapter } from '@utils/types/Chapter';
import ChapterCard from './Card/ChapterCard';

type ChaptersProps = {
  chapterLists: Chapter[];
};

const Chapters = ({ chapterLists }: ChaptersProps) => {
  return (
    <section aria-labelledby="daftar-surat" className="mt-6">
      <div className="mb-4 flex items-center gap-3 border-b border-emerald-500/20 pb-3 dark:border-emerald-400/20">
        <span aria-hidden="true" className="h-7 w-1 rounded-full bg-emerald-500" />
        <h2 id="daftar-surat" className="m-0 text-xl font-bold text-slate-800 dark:text-slate-100">
          Daftar Surat
        </h2>
      </div>
      <ol className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2 lg:grid-cols-3">
        {chapterLists.map((e) => (
          <li key={e.id} className="min-w-0">
            <ChapterCard
              chapterId={e.id}
              name_simple={e.name_simple}
              translated_name={e.translated_name.name}
              name_arabic={e.name_arabic}
              verses_count={e.verses_count}
              homepage
            />
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Chapters;
