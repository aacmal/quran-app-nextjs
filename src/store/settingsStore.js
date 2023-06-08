import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import setTheme from '../utils/theme';

const useSettings = create(
  persist(
    (set, get) => ({
      fontSize: 32,
      fontFace: 2,
      theme: 'default',
      readMode: 'translated',
      autoScroll: true,

      setTheme: (theme) => {
        setTheme(theme)
        set({ theme: theme })
      },
      setFontFace: (fontFace) => set({ fontFace: fontFace }),
      increaseFontSize: () => {
        if (get().fontSize < 60) {
          set({ fontSize: get().fontSize + 5 })
        }
      },
      decreaseFontSize: () => {
        if (get().fontSize > 28) {
          set({ fontSize: get().fontSize - 5 })
        }
      },
      setAutoScroll: (value) => set({ autoScroll: value }),
    }),
    {
      name: 'settings', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
)

export default useSettings;