import Image from "next/image";
import ArtPiecesPreview from "../ArtPiecesPreview";

export default function artPieces({ pieces }) {
  return (
    <div>
      <h1>Art Pieces</h1>
      <ul>
        {pieces.map((artPiece) => (
          <li key={artPiece.slug}>
            <ArtPiecesPreview
              image={artPiece.imageSource}
              title={artPiece.name}
              artist={artPiece.artist}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
