import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";
import useArtPiecesStore from "@/stores/useArtPiecesStore";

export default function ArtPieceDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const artPiecesInfo = useArtPiecesStore((state) => state.artPiecesInfo);

  if (!router.isReady) {
    return <p>Loading...</p>;
  }

  if (!slug) {
    console.error("Slug is undefined");
    return <p>Error: No slug provided.</p>;
  }

  if (!Array.isArray(artPiecesInfo) || artPiecesInfo.length === 0) {
    console.error("artPiecesInfo is not an array or is empty:", artPiecesInfo);
    return <p>No art pieces available</p>;
  }

  const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);

  if (!artPiece) {
    console.error("Art piece not found for slug:", slug);
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
