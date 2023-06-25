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

// const useSurah = create(
//   persist(
//     (set) => ({
//       bookmarked: [],
//       setBookmarked: (bookmarked) => set({ bookmarked }),
//       addBookmark: (verseKey) =>
//         set((state) => ({ bookmarked: [...state.bookmarked, verseKey] })),
//       deleteBookmarked: (verseKey) =>
//         set((state) => ({
//           bookmarked: state.bookmarked.filter((verse) => verse !== verseKey),
//         })),

//       chapterData: [],
//       setChapterData: (chapterData) => set({ chapterData }),

//       currentChapter: 1,
//       setCurrentChapter: (currentChapter) => set({ currentChapter }),

//       audioId: null,
//       setAudioId: (audioId) =>
//         set({ audioId: isNaN(audioId) ? null : parseInt(audioId) }),

//       highlightedVerse: null,
//       setHighlightedVerse: (highlightedVerse) => set({ highlightedVerse }),

//       highlightedWord: null,
//       setHighlightedWord: (highlightedWord) => set({ highlightedWord }),

//       tafsirState: null,
//       setTafsirState: (tafsirState) => set({ tafsirState }),

//       _hasHydrated: false,
//       setHasHydrated: (_hasHydrated) => set({ _hasHydrated }),
//     }),
//     {
//       name: 'surah',
//       storage: createJSONStorage(() => localStorage),
//       partialize: (state) => ({
//         bookmarked: state.bookmarked,
//       }),
//       onRehydrateStorage: () => (state) => {
//         state.setHasHydrated(true);
//       },
//     }
//   )
// );

export default useSurah;