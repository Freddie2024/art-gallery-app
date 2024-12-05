import React, { useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton";
import Comments from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";
import useArtPiecesStore from "@/stores/useArtPiecesStore";

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
  width: 100%;
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

const StyledButton = styled.button`
  position: relative;
  padding: 10px 20px;
  font-size: 16px;
  color: #333;
  text-decoration: none;
  border: none;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  &:hover {
    background-color: lightgrey;
  }
`;

export default function ArtPieceDetails({ onBack, slug }) {
  const artPiecesInfo = useArtPiecesStore((state) => state.artPiecesInfo);
  const favorites = useArtPiecesStore((state) => state.favorites);
  const toggleFavorite = useArtPiecesStore((state) => state.toggleFavorite);
  const addComment = useArtPiecesStore((state) => state.addComment);
  const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);

  useEffect(() => {}, [slug]);

  if (!artPiece) {
    console.error("Art piece not found for slug:", slug);
    return <p>No art piece found.</p>;
  }

  const isFavorite = favorites.includes(slug);

  const handleSubmitComment = (newComment) => {
    addComment(slug, newComment);
  };

  return (
    <Container>
      <ImageContainer>
        <StyledImage
          src={artPiece.imageSource}
          alt={artPiece.name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
          style={{ objectFit: "contain" }}
        />
      </ImageContainer>
      <Title>{artPiece.name}</Title>
      <Artist>{artPiece.artist}</Artist>
      <Year>{artPiece.year}</Year>
      <Genre>{artPiece.genre}</Genre>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => {
          toggleFavorite(slug);
        }}
      />
      <StyledButton type="button" onClick={onBack} aria-label="navigate back">
        Back
      </StyledButton>
      <Comments slug={slug} />
      <CommentForm onSubmitComment={handleSubmitComment} />
    </Container>
  );
}
