import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  background-color: #ffffff; 
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  border: 1px solid #ccc;
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const Title = styled.h3`
  margin: 10px 0 0;
  text-align: center; 
`;

const Artist = styled.p`
  margin: 0;
  color: #666; 
  text-align: center; 
`;

const Year = styled.p`
  margin: 0;
  color: #666; 
  text-align: center; 
`;

const Genre = styled.p`
  margin: 0;
  color: #666; 
  text-align: center; 
`;

export default function ArtPieceDetails({ image, name, artist, year, genre }) {
    return (
      <Container>
        <ImageContainer>
            <StyledImage
            src={image} 
            alt={name} 
            layout="fill" 
            objectFit="contain" 
            />     
        </ImageContainer>
        <Title>{name}</Title>
        <Artist>{artist}</Artist>
        <Year>{year}</Year>
        <Genre>{genre}</Genre>
       </Container>
    );
  }



