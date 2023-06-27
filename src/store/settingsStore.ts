import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import setTheme from '../utils/theme';

export type Theme = 'default' | 'light' | 'dark';
export type AutoScroll = 'verse' | 'word' | false;

interface SettingsStore {
  fontSize: number;
  fontFace: number;
  theme: Theme;
  autoScroll: AutoScroll;
  transliteration: boolean;

  setTheme: (theme: Theme) => void;
  setFontFace: (fontFace: number) => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  setAutoScroll: (value: AutoScroll) => void;
  setTransliteration: (value: boolean) => void;
}

const useSettings = create<SettingsStore>()(
  persist(
    (set, get) => ({
      fontSize: 42,
      fontFace: 3,
      theme: 'default',
      autoScroll: 'word',
      transliteration: false,

      setTheme: (theme) => {
        set({ theme: theme });
      },
      setFontFace: (fontFace) => set({ fontFace: fontFace }),
      increaseFontSize: () => {
        if (get().fontSize < 60) {
          set({ fontSize: get().fontSize + 5 });
        }
      },
      decreaseFontSize: () => {
        if (get().fontSize > 28) {
          set({ fontSize: get().fontSize - 5 });
        }
      },
      setAutoScroll: (value) => set({ autoScroll: value }),
      setTransliteration: (value) => set({ transliteration: value }),
    }),
    {
      name: 'settings', // name of the item in the storage (must be unique)
      partialize: (state) => ({
        theme: state.theme,
      }),
      getStorage: () => localStorage,
    }
  )
);

// const useSettings = create(
//   (set, get) => ({
//     fontSize: 42,
//     fontFace: 3,
//     theme: 'default',
//     readMode: 'translated',
//     autoScroll: true,

//     setTheme: (theme) => {
//       setTheme(theme);
//       set({ theme: theme });
//     },
//     setFontFace: (fontFace) => set({ fontFace: fontFace }),
//     increaseFontSize: () => {
//       if (get().fontSize < 60) {
//         set({ fontSize: get().fontSize + 5 });
//       }
//     },
//     decreaseFontSize: () => {
//       if (get().fontSize > 28) {
//         set({ fontSize: get().fontSize - 5 });
//       }
//     },
//     setAutoScroll: (value) => set({ autoScroll: value }),
//   }),
//   {
//     name: 'settings', // name of the item in the storage (must be unique)
//     storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
//   }
// );

export default useSettings;
