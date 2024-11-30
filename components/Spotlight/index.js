import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 90%;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;

  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

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

export default function Spotlight({ image, artist }) {
  return (
    <Container>
      <ImageContainer>
        <StyledImage
          src={image}
          alt={`Spotlight: ${artist}`}
          fill
          sizes="(max-width: 500px) 100vw, 500px"
        />
      </ImageContainer>
      <Artist>{artist}</Artist>
    </Container>
  );
}
