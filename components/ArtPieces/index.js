import ArtPiecePreview from "../ArtPiecePreview";
import Spotlight from "../Spotlight";
import styled from "styled-components";

const ArtPiecesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArtPieceList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 20px 0 0;
`;

const ArtPieceItem = styled.li`
  margin: 10px;
`;

export default function ArtPieces({ pieces }) {

  const randomArtPiece = pieces[Math.floor(Math.random() * pieces.length)];
  console.log("Random Art Piece:", randomArtPiece);
  if (!randomArtPiece) {
    return <div>No art piece found</div>; 
  }

  return (
    <ArtPiecesContainer>
      <h1>Art Pieces</h1>

      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
      />

      <ArtPieceList>
        {pieces.map((artPiece) => {
          return (
            <ArtPieceItem key={artPiece.slug}>
              <ArtPiecePreview
                image={artPiece.imageSource}
                name={artPiece.name}
                artist={artPiece.artist}
                dimensions={artPiece.dimensions}
              />
            </ArtPieceItem>
          );
        })}
      </ArtPieceList>
    </ArtPiecesContainer>
  );
}
