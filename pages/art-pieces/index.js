import ArtPieces from "@/components/ArtPieces";
import useArtPiecesStore from "@/stores/useArtPiecesStore";

export default function ArtPiecesPage() {
  const { artPiecesInfo } = useArtPiecesStore();

  return (
    <>
      <ArtPieces pieces={artPiecesInfo} title="All Art Pieces" />
    </>
  );
}
