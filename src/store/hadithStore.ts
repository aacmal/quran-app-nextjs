import { HadithBook } from '@utils/types/Hadith';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface HaditsStore {
  bookmarked: string[];
  hadithData: HadithBook[];
  hadithActive: string;

  setHadithActive: (hadithActive: string) => void;
  setHadithData: (hadithData: HadithBook[]) => void;
  setBookmarkData: (bookmarked: string[]) => void;
  addBookmarkData: (verseKey: string) => void;
  deleteBookmarkData: (verseKey: string) => void;
}

const useHadith = create<HaditsStore>()(
  persist(
    (set) => ({
      bookmarked: [],
      hadithData: [],
      hadithActive: 'muslim',
      setHadithActive: (hadithActive) => set({ hadithActive }),
      setHadithData: (hadithData) => set({ hadithData }),
      setBookmarkData: (bookmarked) => set({ bookmarked }),
      addBookmarkData: (verseKey) =>
        set((state) => ({ bookmarked: [...state.bookmarked, verseKey] })),
      deleteBookmarkData: (verseKey) =>
        set((state) => ({
          bookmarked: state.bookmarked.filter((verse) => verse !== verseKey),
        })),
    }),
    {
      name: 'hadith',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        bookmarked: state.bookmarked,
      }),
    }
  )
);

export default useHadith;
