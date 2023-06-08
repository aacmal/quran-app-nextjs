import { create } from 'zustand';

const useSurah = create((set) => ({
  bookmarked: [],
  setBookmarked: (bookmarked) => set({ bookmarked }),
  deleteBookmarked: (verseKey) => set((state) => ({ bookmarked: state.bookmarked.filter((verse) => verse !== verseKey) })),

  chapterData: [],
  setChapterData: (chapterData) => set({ chapterData }),

  currentChapter: 0,
  setCurrentChapter: (currentChapter) => set({ currentChapter }),

  audioId: 0,
  setAudioId: (audioId) => set({ audioId }),

  highlightedVerse: 0,
  setHighlightedVerse: (highlightedVerse) => set({ highlightedVerse }),
}));

export default useSurah;