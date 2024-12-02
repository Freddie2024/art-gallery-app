import Spotlight from "@/components/Spotlight";
import styled from "styled-components";

const ArtPieceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function SpotlightPage({ pieces }) {
  const randomArtPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <ArtPieceContainer>
        <h1>Spotlight</h1>
        <Spotlight
          image={randomArtPiece.imageSource}
          artist={randomArtPiece.artist}
          slug={randomArtPiece.slug}
        />
      </ArtPieceContainer>
    </>
  );
}
