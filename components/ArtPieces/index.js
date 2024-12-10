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

const Title = styled.h1`
  text-align: center;
`;

export default function ArtPieces({ pieces, title }) {
  console.log("ArtPieces props:", pieces);

  if (!Array.isArray(pieces)) {
    console.error("pieces is not an array:", pieces);
    return <p>No art pieces available</p>;
  }
  return (
    <ArtPiecesContainer>
      <Title>{title}</Title>
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
