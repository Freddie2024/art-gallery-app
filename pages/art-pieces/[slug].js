import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";
import useArtPiecesStore from "@/stores/useArtPiecesStore";

export default function ArtPieceDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const artPieces = useArtPiecesStore((state) => state.artPieces);

  if (!router.isReady) {
    return <p>Loading...</p>;
  }

  if (!artPieces) {
    return <p>No art pieces available</p>;
  }

  const artPiece = artPieces.find((piece) => piece.slug === slug);

  if (!artPiece) {
    return <p>No art piece found</p>;
  }

  const onBack = () => {
    router.back();
  };

  return (
    <ArtPieceDetails
      slug={slug}
      image={artPiece.imageSource}
      name={artPiece.name}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
      onBack={onBack}
    />
  );
}
