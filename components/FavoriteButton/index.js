import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: none;
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7; 
  }

  &:focus {
    outline: none;
  }
`;

const StyledImage = styled.img`
  width: 30px;
  height: 30px;
  fill: currentColor; 
  transition: filter 0.3s ease, color 0.3s ease;

  color: ${(props) => (props.isFavorite ? '#e74c3c' : '#888')}; 

  &:hover {
    color: ${(props) => (props.isFavorite ? '#888' : '#e74c3c')}; 
  }
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
    return (
        <Button 
            onClick={onToggleFavorite} 
            aria-label={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        >
            <StyledImage
                src="/assets/heart.svg" 
                alt="Heart Icon"
                isFavorite={isFavorite}
            />
        </Button>
    );
}
