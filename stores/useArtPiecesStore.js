import { create } from "zustand";

const useArtPiecesStore = create((set) => ({
  artPieces: [],
  artPiecesInfo: [],
  setArtPieces: (newPieces) => set({ artPieces: newPieces }),
  setArtPiecesInfo: (newInfo) => set({ artPiecesInfo: newInfo }),
  toggleFavorite: (slug) =>
    set((state) => {
      const updatedInfo = state.artPiecesInfo.map((piece) =>
        piece.slug === slug
          ? { ...piece, isFavorite: !piece.isFavorite }
          : piece
      );
      return { artPiecesInfo: updatedInfo };
    }),
}));

export default useArtPiecesStore;
