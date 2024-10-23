import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 500px; 
  margin: 20px auto; 
  border-radius: 10px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  background-color: #ffffff;
`;

const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
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
  margin: 20px 0 0;
  text-align: center; 
`;

const Artist = styled.p`
  margin: 10px;
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

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #5a6268; 
  color: white; 
  border: none; 
  border-radius: 5px; 
  font-size: 1em; 
  cursor: pointer; 
  transition: background-color 0.3s; 

  &:hover {
    background-color: #0056b3; 
  }

  &:focus {
    outline: none; 
  }
`;

const onBack = () => {
    router.back(); 
  };

export default function ArtPieceDetails({ image, name, artist, year, genre, slug, isFavorite, onToggleFavorite }) {
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
        <FavoriteButton
            id={slug}
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
        <Button type="button" onClick={onBack} aria-label="navigate back">Back</Button>
    </Container>
    );
  }



