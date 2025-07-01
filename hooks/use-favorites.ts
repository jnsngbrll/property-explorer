import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { tProperty } from '@/types/property';

type Props = {
  favorites: tProperty[];
  addFavorite: (property: tProperty) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

export const useFavorites = create<Props>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (property) =>
        set({ favorites: [...get().favorites, property] }),

      removeFavorite: (id) =>
        set({
          favorites: get().favorites.filter((item) => item.id !== id),
        }),

      isFavorite: (id) => get().favorites.some((item) => item.id === id),
    }),
    {
      name: 'favorite-properties',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
