import { render, screen } from "@testing-library/react";
import ArtPieces from ".";

test('renders a list of art pieces', () => {
    const pieces = [
      { imageSource: 'https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg', name: 'Orange Red and Green Abstract Painting', artist: 'Steve Johnson' },
      { imageSource: 'https://example-apis.vercel.app/assets/art/blue-and-red.jpg', name: 'Blue and Red', artist: 'Jung-Hua Lui' },
    ];
    
    const { getByText } = render(<ArtPieces pieces={pieces} />);
    
    expect(getByText('Orange Red and Green Abstract Painting')).toBeInTheDocument();
    expect(getByText('Steve Johnson')).toBeInTheDocument();
    expect(getByText('Blue and Red')).toBeInTheDocument();
    expect(getByText('Jung-Hua Lui')).toBeInTheDocument();
  });
  