import ArtPiecePreview from "../ArtPiecePreview";
import Spotlight from "../Spotlight";

export default function ArtPieces({ pieces }) {
  if (!pieces || pieces.length === 0) {
    return <div>No art pieces available</div>;
  }

  console.log("Total art pieces:", pieces.length);
  
  const randomArtPiece = pieces[Math.floor(Math.random() * pieces.length)];
  console.log("Random Art Piece Slug:", randomArtPiece.slug);

  return (
    <div>
      <h1>Art Pieces</h1>
      <Spotlight 
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
        dimensions={randomArtPiece.dimensions}
      />
      <ul>
        {pieces.map((artPiece, index) => {
          console.log(`Logging slug for artPiece #${index}: ${artPiece.slug}`);
          return (
            <li key={artPiece.slug}>
              <ArtPiecePreview
                image={artPiece.imageSource}
                name={artPiece.name}
                artist={artPiece.artist}
                dimensions={artPiece.dimensions}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}


