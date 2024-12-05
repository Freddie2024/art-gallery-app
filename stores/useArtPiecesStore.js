import { create } from "zustand";
import { persist } from "zustand/middleware";

const useArtPiecesStore = create(
  persist(
    (set) => ({
      artPiecesInfo: [],
      favorites: [],
      comments: {},

      setArtPiecesInfo: (newInfo) => {
        set({ artPiecesInfo: newInfo });
      },
      // setFavorites: (newFavorites) => set({ favorites: newFavorites }),

      addComment: (slug, comment) => {
        console.log("Adding comment for slug:", slug);
        console.log("Comment to add:", comment);
        set((state) => {
          const existingComments = state.comments[slug] || [];

          console.log("Existing comments for slug:", slug, existingComments); // Log existing comments

          const updatedComments = {
            ...state.comments,
            [slug]: [...existingComments, comment],
          };

          console.log(
            "Updated comments for slug:",
            slug,
            updatedComments[slug]
          );

          return {
            comments: updatedComments,
          };
        });
      },

      toggleFavorite: (slug) =>
        set((state) => {
          console.log("Toggling favorite for:", slug);
          const isFavorite = state.favorites.includes(slug);
          const updatedFavorites = isFavorite
            ? state.favorites.filter((s) => s !== slug)
            : [...state.favorites, slug];
          console.log("Updated favorites:", updatedFavorites);
          return { favorites: updatedFavorites };
        }),
    }),
    {
      name: "art-pieces-store",
      partialize: (state) => ({ favorites: state.favorites }),
    }
  )
);

// export const useLoadFavorites = () => {
//   const setFavorites = useArtPiecesStore((state) => state.setFavorites);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const storedFavorites =
//         JSON.parse(localStorage.getItem("favorites")) || [];
//       setFavorites(storedFavorites);
//     }
//   }, [setFavorites]);
// };

export default useArtPiecesStore;
