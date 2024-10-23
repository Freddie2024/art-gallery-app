import Spotlight from "@/components/Spotlight";


export default function SpotlightPage({ artPieces }) {
  const randomArtPiece = artPieces[Math.floor(Math.random() * artPieces.length)];
  
  return (
    <>
      <h1>Spotlight</h1>
      <Spotlight 
        image={randomArtPiece.imageSource} 
        artist={randomArtPiece.artist} 
      />
    </>
  );
}






