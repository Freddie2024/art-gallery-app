import useArtPiecesStore from "@/stores/useArtPiecesStore";
import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function FavoritesPage() {
  const { artPiecesInfo } = useArtPiecesStore();
  const favoritePieces = artPiecesInfo.filter((piece) => piece.isFavorite);

  return (
    <div>
      <h1>Your Favorites</h1>
      {favoritePieces.length > 0 ? (
        favoritePieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            image={piece.imageSource}
            name={piece.name}
            artist={piece.artist}
            slug={piece.slug}
          />
        ))
      ) : (
        <p>No favorites yet!</p>
      )}
    </div>
  );
}
