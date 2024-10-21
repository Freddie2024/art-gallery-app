import Image from "next/image";
import ArtPiecePreview from "../ArtPiecePreview";


export default function artPieces({ pieces }) {
  console.log(pieces.map((artPiece) => artPiece.slug));

  return (
    <div>
      <h1>Art Pieces</h1>
      <ul>
        {pieces.map((artPiece) => (
          <li key={artPiece.slug}>
            <ArtPiecePreview
              image={artPiece.imageSource}
              name={artPiece.name}
              artist={artPiece.artist}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
