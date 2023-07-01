import { LocalChapter } from 'data/chapter/type';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface SurahStore {
  bookmarked: string[];
  chapterData: LocalChapter[];

  setBookmarkData: (bookmarked: string[]) => void;
  addBookmarkData: (verseKey: string) => void;
  deleteBookmarkData: (verseKey: string) => void;
  setChapterData: (chapterData: LocalChapter[]) => void;
}

const useSurah = create<SurahStore>()(
  persist(
    (set) => ({
      bookmarked: [],
      chapterData: [],

      setBookmarkData: (bookmarked) => set({ bookmarked }),
      addBookmarkData: (verseKey) =>
        set((state) => ({ bookmarked: [...state.bookmarked, verseKey] })),
      deleteBookmarkData: (verseKey) =>
        set((state) => ({
          bookmarked: state.bookmarked.filter((verse) => verse !== verseKey),
        })),
      setChapterData: (chapterData) => set({ chapterData }),
    }),
    {
      name: 'surah',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        bookmarked: state.bookmarked,
      }),
    }
  )
);

export default useSurah;
