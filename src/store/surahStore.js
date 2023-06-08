import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useSurah = create(persist((set) => ({
  bookmarked: [],
  setBookmarked: (bookmarked) => set({ bookmarked }),
  deleteBookmarked: (verseKey) => set((state) => ({ bookmarked: state.bookmarked.filter((verse) => verse !== verseKey) })),

  chapterData: [],
  setChapterData: (chapterData) => set({ chapterData }),

  currentChapter: 0,
  setCurrentChapter: (currentChapter) => set({ currentChapter }),

  audioId: null,
  setAudioId: (audioId) => set({ audioId: parseInt(audioId) }),

  highlightedVerse: 0,
  setHighlightedVerse: (highlightedVerse) => set({ highlightedVerse }),

  _hasHydrated: false,
  setHasHydrated: (_hasHydrated) => set({ _hasHydrated }),
}), {
  name: 'surah',
  storage: createJSONStorage(() => localStorage),
  partialize: (state) => ({
    bookmarked: state.bookmarked,
  }),
  onRehydrateStorage: () => (state) => {
    state.setHasHydrated(true);
  }
}));

export default useSurah;