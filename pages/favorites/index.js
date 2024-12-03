import useArtPiecesStore from "@/stores/useArtPiecesStore";
import ArtPieces from "@/components/ArtPieces";

export default function FavoritesPage() {
  const { artPiecesInfo, favorites } = useArtPiecesStore();
  const favoritePieces = artPiecesInfo.filter((piece) =>
    favorites.includes(piece.slug)
  );

  return (
    <div>
      <ArtPieces pieces={favoritePieces} title="Your Favorites" />
    </div>
  );
}
