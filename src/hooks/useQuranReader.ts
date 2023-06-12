import { create } from 'zustand';

interface QuranReaderState {
  currentChapter: number;
  currentVerse: number;
  audioId: null | number;
  tafsirState: {
    verseId: number;
  } | null;
  highlightedWord: string | null;
  highlightedVerse: string | null;

  setCurrentChapter: (chapter: number) => void;
  setCurrentVerse: (verse: number) => void;
  setTafsirState: (tafsirState: QuranReaderState['tafsirState']) => void;
  setHighlightedWord: (
    highlightedWord: QuranReaderState['highlightedWord']
  ) => void;
  setHighlightedVerse: (
    highlightedVerse: QuranReaderState['highlightedVerse']
  ) => void;
  setAudioId: (audioId: QuranReaderState['audioId']) => void;
}

const useQuranReader = create<QuranReaderState>()((set) => ({
  currentChapter: 1,
  currentVerse: 1,
  audioId: null,
  tafsirState: null,
  highlightedWord: null,
  highlightedVerse: null,

  setCurrentChapter: (chapter) => set({ currentChapter: chapter }),
  setCurrentVerse: (verse) => set({ currentVerse: verse }),
  setTafsirState: (tafsirState) => set({ tafsirState }),
  setHighlightedWord: (highlightedWord) => set({ highlightedWord }),
  setHighlightedVerse: (highlightedVerse) => set({ highlightedVerse }),
  setAudioId: (audioId) => set({ audioId }),
}));

export default useQuranReader;
