import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: inline-block;
  width: 100%;
`;

export default function ArtPiecePreview({
  image,
  name,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <Link href={`/art-pieces/${slug}`}>
      <StyledLink>
        <Wrapper>
          <ImageContainer>
            <StyledImage
              src={image}
              alt={name}
              fill
              style={{ objectFit: "contain" }}
            />
          </ImageContainer>
          <Title>{name}</Title>
          <Artist>{artist}</Artist>
          <FavoriteButton
            id={slug}
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
        </Wrapper>
      </StyledLink>
    </Link>
  );
}
