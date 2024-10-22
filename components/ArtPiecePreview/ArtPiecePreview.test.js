import { render } from "@testing-library/react";
import ArtPiecePreview from ".";

test('renders ArtPiecePreview with image, title, and artist', () => {

  const { getByAltText, getByText } = render(
    <ArtPiecePreview 
      image="https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg" 
      name="Clay Bust Sculptures" 
      artist="dilara irem"
    />
  );

  const image = getByAltText('Clay Bust Sculptures');
  expect(image).toBeInTheDocument(); 

  expect(getByText('Clay Bust Sculptures')).toBeInTheDocument();
  expect(getByText('dilara irem')).toBeInTheDocument();
});
