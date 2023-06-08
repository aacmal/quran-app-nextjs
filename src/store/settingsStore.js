import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useSettings = create(
  persist(
    (set, get) => ({
      fontSize: 32,
      fontFace: 1,
      theme: 'default',
      readMode: 'translated',
      autoScroll: true,

      setTheme: (theme) => set({ theme: theme }),
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)

export default useSettings;