import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";
import useArtPiecesStore from "@/stores/useArtPiecesStore";
  
export default function ArtPieceDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const artPieces = useArtPiecesStore((state) => state.ArtPieces);

  if (!router.isReady) {
    return <p>Loading...</p>;
  }
  
  const artPiece = artPieces.find(piece => piece.slug === slug);

  if (!artPiece) {
    return <p>No art piece found</p>;
  }

  return (
   
        <ArtPieceDetails 
            image={artPiece.imageSource} 
            name={artPiece.name} 
            artist={artPiece.artist} 
            year={artPiece.year} 
            genre={artPiece.genre} 
            onBack={() => router.back()}
        />    
    );
}