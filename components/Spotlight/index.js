import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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

const ColorBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
  max-width: 300px;
`;

const ColorSquare = styled.div`
  width: 20%;
  height: 30px;
  background-color: ${(props) => props.color};
  border: 1px solid #ccc;
`;

export default function SpotlightPage({ slug }) {
  const router = useRouter();
  const isFirstVisit = useArtPiecesStore((state) => state.isFirstVisit);
  const setFirstVisit = useArtPiecesStore((state) => state.setFirstVisit);
  const artPiecesInfo = useArtPiecesStore((state) => state.artPiecesInfo);
  const favorites = useArtPiecesStore((state) => state.favorites);
  const toggleFavorite = useArtPiecesStore((state) => state.toggleFavorite);
  const addComment = useArtPiecesStore((state) => state.addComment);
  const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);

  useEffect(() => {}, [slug]);

  useEffect(() => {
    if (isFirstVisit) {
      setFirstVisit(false);
    }
  }, [isFirstVisit, setFirstVisit]);

  if (!artPiece) {
    console.error("Art piece not found for slug:", slug);
    return <p>No art piece found.</p>;
  }

  const isFavorite = favorites.includes(slug);

  const handleBackClick = () => {
    if (isFirstVisit) {
      router.push("/art-pieces");
    } else {
      router.back();
    }
  };

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
      <p>Color Palette: </p>
      <ColorBar>
        {artPiece.colors &&
          artPiece.colors.map((color, index) => (
            <ColorSquare key={index} color={color} />
          ))}
      </ColorBar>

      <StyledButton
        type="button"
        onClick={handleBackClick}
        aria-label={
          isFirstVisit ? "Show all art pieces" : "Go back to previous page"
        }
      >
        {isFirstVisit ? "Show All" : "Back"}
      </StyledButton>
      <Comments slug={slug} />
      <CommentForm onSubmitComment={handleSubmitComment} />
    </Container>
  );
}
