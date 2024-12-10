import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton";
import useArtPiecesStore from "@/stores/useArtPiecesStore";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: inline-block;
`;

export default React.memo(function ArtPiecePreview({
  image,
  name,
  artist,
  slug,
}) {
  const toggleFavorite = useArtPiecesStore((state) => state.toggleFavorite);

  return (
    <Wrapper>
      <StyledLink href={`/art-pieces/${slug}`} passHref>
        <ImageContainer>
          <StyledImage
            src={image}
            alt={name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            style={{ objectFit: "contain" }}
          />
        </ImageContainer>
        <Title>{name}</Title>
        <Artist>{artist}</Artist>
      </StyledLink>
      <FavoriteButton
        id={slug}
        isFavorite={useArtPiecesStore((state) =>
          state.favorites.includes(slug)
        )}
        onToggleFavorite={() => {
          toggleFavorite(slug);
        }}
      />
    </Wrapper>
  );
});
