import { create } from "zustand";
import { persist } from "zustand/middleware";

const useArtPiecesStore = create(
  persist(
    (set) => ({
      artPiecesInfo: [],
      favorites: [],
      comments: {},
      isFirstVisit: true,

      setArtPiecesInfo: (newInfo) => {
        set({ artPiecesInfo: newInfo });
      },

      addComment: (slug, comment) => {
        set((state) => {
          const existingComments = state.comments[slug] || [];
          const updatedComments = {
            ...state.comments,
            [slug]: [...existingComments, comment],
          };

          return {
            comments: updatedComments,
          };
        });
      },

      toggleFavorite: (slug) =>
        set((state) => {
          const isFavorite = state.favorites.includes(slug);
          const updatedFavorites = isFavorite
            ? state.favorites.filter((s) => s !== slug)
            : [...state.favorites, slug];
          return { favorites: updatedFavorites };
        }),

      setFirstVisit: (value) =>
        set(() => ({
          isFirstVisit: value,
        })),
    }),

    {
      name: "art-pieces-store",
      partialize: (state) => ({
        favorites: state.favorites,
        comments: state.comments,
      }),
    }
  )
);

export default useArtPiecesStore;
