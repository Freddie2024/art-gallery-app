import ArtPiecePreview from "../ArtPiecePreview";
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
  if (!pieces) {
    return <div>Loading...</div>;
  }

  return (
    <ArtPiecesContainer>
      <h1>All Art Pieces</h1>
      <ArtPieceList>
        {pieces.map((artPiece) => {
          return (
            <ArtPieceItem key={artPiece.slug}>
              <ArtPiecePreview
                image={artPiece.imageSource}
                name={artPiece.name}
                artist={artPiece.artist}
                dimensions={artPiece.dimensions}
                slug={artPiece.slug}
              />
            </ArtPieceItem>
          );
        })}
      </ArtPieceList>
    </ArtPiecesContainer>
  );
}
