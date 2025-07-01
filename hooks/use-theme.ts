import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Props = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export const useTheme = create<Props>()(
  persist(
    (set, get) => ({
      theme: 'light',

      toggleTheme: () => {
        const { theme } = get();
        set({ theme: theme === 'light' ? 'dark' : 'light' });
      },
    }),
    {
      name: 'app-theme',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
