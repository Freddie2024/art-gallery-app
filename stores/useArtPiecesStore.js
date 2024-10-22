import ArtPieces from "@/components/ArtPieces";
import { create } from "zustand";

const useArtPiecesStore = create((set) => ({
  ArtPieces: [],
  setArtPieces: (newPieces) => set({ ArtPieces: newPieces }),
}));

export default useArtPiecesStore;
