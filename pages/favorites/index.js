import useArtPiecesStore from "@/stores/useArtPiecesStore";
import ArtPieces from "@/components/ArtPieces";

export default function FavoritesPage() {
  const artPiecesInfo = useArtPiecesStore((state) => state.artPiecesInfo);
  const favorites = useArtPiecesStore((state) => state.favorites);

  if (!Array.isArray(artPiecesInfo) || !Array.isArray(favorites)) {
    console.error("Invalid data in store:", { artPiecesInfo, favorites });
    return <p>Error: Unable to load your favorite art pieces.</p>;
  }

  const favoritePieces = artPiecesInfo.filter((piece) =>
    favorites.includes(piece.slug)
  );

  if (!favoritePieces.length) {
    return <p>No favorite art pieces found. Add some to your favorites!</p>;
  }

  return (
    <div>
      <ArtPieces pieces={favoritePieces} title="Your Favorites" />
    </div>
  );
}
