import styled from "styled-components";

const StyledImage = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <StyledImage
      src={isFavorite ? "/assets/heart-red.svg" : "/assets/heart-grey.svg"}
      alt="Heart Icon"
      onClick={onToggleFavorite}
    />
  );
}
