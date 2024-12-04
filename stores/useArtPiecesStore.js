import { create } from "zustand";
import { useEffect } from "react";

const useArtPiecesStore = create((set) => {
  return {
    artPiecesInfo: [],
    favorites: [],

    setArtPiecesInfo: (newInfo) => set({ artPiecesInfo: newInfo }),
    setFavorites: (newFavorites) => set({ favorites: newFavorites }),

    toggleFavorite: (slug) =>
      set((state) => {
        const updatedInfo = state.artPiecesInfo.map((piece) =>
          piece.slug === slug
            ? { ...piece, isFavorite: !piece.isFavorite }
            : piece
        );

        const isFavorite = state.favorites.includes(slug);
        const updatedFavorites = isFavorite
          ? state.favorites.filter((s) => s !== slug)
          : [...state.favorites, slug];

        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

        return { artPiecesInfo: updatedInfo, favorites: updatedFavorites };
      }),
  };
});

export const useLoadFavorites = () => {
  const setFavorites = useArtPiecesStore((state) => state.setFavorites);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    }
  }, [setFavorites]);
};

export default useArtPiecesStore;
