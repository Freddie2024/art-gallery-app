import styled from "styled-components";

// const Button = styled.button`
//   background: none;
//   border: none;
//   padding: 5px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: opacity 0.2s ease-in-out;

//   &:hover {
//     opacity: 0.7;
//   }

//   &:focus {
//     outline: none;
//   }
// `;

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
    // <Button
    //   onClick={onToggleFavorite}
    //   aria-label={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    // >
    <StyledImage
      src={isFavorite ? "/assets/heart-red.svg" : "/assets/heart-grey.svg"}
      alt="Heart Icon"
      onClick={onToggleFavorite}
    />
    // </Button>
  );
}
