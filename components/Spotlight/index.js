import Image from "next/image";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  border: 1px solid #ccc;
  background-color: white;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const Artist = styled.p`
  margin: 0;
  color: #666;
  text-align: center;
`;

export default function Spotlight({ pieces }) {
  console.log(pieces); // Überprüfe die Werte von 'image' und 'artist'

  if (!pieces || pieces.length === 0) {
    return <div>No pieces found</div>;
  }

  const randomArtPiece = pieces[Math.floor(Math.random() * pieces.length)];
  const { imageSource: image, artist } = randomArtPiece; // Extrahiere das Bild und den Künstler

  return (
    <>
      <ImageContainer>
        <StyledImage
          src={image}
          alt={artist}
          fill
          sizes="(max-width: 500px) 100vw, 500px"
        />
      </ImageContainer>
      <Artist>{artist}</Artist>
    </>
  );
}
