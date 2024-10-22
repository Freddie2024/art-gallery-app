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

export default function Spotlight({ image, artist }) {
    return (
        <>
        <ImageContainer>
            <StyledImage
                src={image}
                alt={`Spotlight: ${artist}`}
                fill
                style={{ objectFit: 'contain' }} 
            />
        </ImageContainer>
        <Artist>{artist}</Artist>
        </>
    );
}

