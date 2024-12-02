import { create } from "zustand";

const useArtPiecesStore = create((set) => ({
  artPieces: [],
  favorites: [],
  setArtPieces: (newPieces) => set({ artPieces: newPieces }),
  toggleFavorite: (slug) =>
    set((state) => {
      const isFavorite = state.favorites.includes(slug);
      return {
        favorites: isFavorite
          ? state.favorites.filter((s) => s !== slug)
          : [...state.favorites, slug],
      };
    }),
}));

export default useArtPiecesStore;
