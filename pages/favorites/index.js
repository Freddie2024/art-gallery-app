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
      {/* Pass the favorite pieces as a prop */}
      {/* {favoritePieces.length > 0 ? (
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
      )} */}
    </div>
  );
}
