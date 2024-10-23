import { render } from "@testing-library/react";
import ArtPieceDetails from ".";

test('renders ArtPieceDetails with image, title, artist, year, genre and back-button', () => {

const onBack = jest.fn();

const { getByAltText, getByText, getByRole } = render(
    <ArtPieceDetails
      image="https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg" 
      name="Clay Bust Sculptures" 
      artist="dilara irem"
      year="2022"
      genre="Classics"
      onBack={onBack} 
    />
  );

  const image = getByAltText('Clay Bust Sculptures');
  expect(image).toBeInTheDocument(); 

  expect(getByText('Clay Bust Sculptures')).toBeInTheDocument();
  expect(getByText('dilara irem')).toBeInTheDocument();
  expect(getByText('2022')).toBeInTheDocument();
  expect(getByText('Classics')).toBeInTheDocument();

  const button = getByRole('button', {name: /back/i});
  expect(button).toBeInTheDocument();
});
