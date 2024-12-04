import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";
import useArtPiecesStore from "@/stores/useArtPiecesStore";

export default function ArtPieceDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const artPiecesInfo = useArtPiecesStore((state) => state.artPiecesInfo);

  console.log("Slug:", slug);
  console.log("Art Pieces Info:", artPiecesInfo);

  if (!router.isReady) {
    return <p>Loading...</p>;
  }

  if (!artPiecesInfo || artPiecesInfo.length === 0) {
    return <p>No art pieces available</p>;
  }

  const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);

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
